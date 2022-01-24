import * as React from 'react';
import type { NextPage } from 'next';
import useJourneys from 'context/JourneysContext';
import { useRouter } from 'next/router';
import { Expense, Poll } from 'utils/interfaces';
import PageTransitionAnimation from 'components-ui/Atoms/PageTransitionAnimation';
import PollCard from 'components-ui/Molecules/PollCard';
import EditJourneyExpeneses from 'components/EditJourneyExpeneses';

const EditJourneyData: NextPage = () => {
    const { journeys, updateJourney } = useJourneys();
    const router = useRouter();
    const journeyID = router.query.journeyID as string;
    const editID = router.query.editID as string;
    const [expenseValues, setExpenseValues] = React.useState<
        Expense | Poll | undefined
    >(undefined);

    const submitExpenseChanges = React.useCallback(
        async (values: Expense | Poll) => {
            const journeyData = journeys.find((j) => j.id === journeyID)?.data;
            const journey = journeyData?.expenses.find((e) => e.id === editID);
            if (journey && journeyData) {
                const newValues = values as Expense;
                journeyData.expenses[journeyData?.expenses.indexOf(journey)] =
                    newValues;
                await updateJourney(journeyID, journeyData);
            }
        },
        [journeys, updateJourney, journeyID, editID]
    );

    React.useEffect(() => {
        if (journeys) {
            const journey = journeys.find((j) => j.id === journeyID)?.data;
            if (journey) {
                if (journey.expenses.find((e) => e.id === editID)) {
                    setExpenseValues(
                        journey.expenses.find((e) => e.id === editID)
                    );
                } else if (journey.polls.find((e) => e.id === editID)) {
                    setExpenseValues(
                        journey.polls.find((e) => e.id === editID)
                    );
                } else {
                    setExpenseValues(undefined);
                }
            }
        }
    }, [journeys, editID]);

    if (!expenseValues) return <div>loading</div>;

    if ('votes' in expenseValues) {
        return (
            <PageTransitionAnimation>
                <PollCard
                    detail={expenseValues.title}
                    label={expenseValues.title}
                />
            </PageTransitionAnimation>
        );
    } else {
        return (
            <PageTransitionAnimation>
                <EditJourneyExpeneses
                    expenseValues={expenseValues}
                    submitChanges={submitExpenseChanges}
                />
            </PageTransitionAnimation>
        );
    }
};

export default EditJourneyData;
