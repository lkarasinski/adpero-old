import * as React from "react";
import type { NextPage } from "next";
import PageTransitionAnimation from "components-ui/Atoms/PageTransitionAnimation";
import EditJourneyExpeneses from "components/EditJourneyExpeneses";
import useJourneys from "context/JourneysContext";
import { useRouter } from "next/router";
import { Expense, Journey } from "utils/interfaces";

const EditCategory: NextPage = () => {
    const { updateJourney, getCurrentJourney } = useJourneys();
    const router = useRouter();
    const journeyID = router.query.journeyID as string;
    const categoryID = router.query.categoryID as string;
    const [expenseValues, setExpenseValues] = React.useState<
        Expense | undefined
    >(undefined);

    const journey = getCurrentJourney();

    const submitExpenseChanges = async (values: Expense) => {
        const category = journey?.data?.expenses.find(
            (e) => e.id === categoryID
        );
        if (category && journey?.data) {
            const newValues = values as Expense;
            journey.data.expenses[journey.data.expenses.indexOf(category)] =
                newValues;
            await updateJourney(journeyID, journey?.data);
        }
    };

    const removeCategory = async () => {
        if (journey?.data) {
            const newJourney: Journey = {
                ...journey.data,
                expenses: journey.data.expenses.filter(
                    (e) => e.id !== categoryID
                ),
            };
            if (newJourney) {
                await updateJourney(journeyID, newJourney);
                router.push(
                    "/journeys/[journeyID]/edit/categories",
                    `/journeys/${journeyID}/edit/categories`
                );
            }
        }
    };

    React.useEffect(() => {
        if (journey) {
            if (journey.data.expenses.find((e) => e.id === categoryID)) {
                setExpenseValues(
                    journey.data.expenses.find((e) => e.id === categoryID)
                );
            } else {
                setExpenseValues(undefined);
            }
        }
    }, [categoryID, journey?.id]);

    if (!expenseValues) return null;

    return (
        <PageTransitionAnimation>
            <EditJourneyExpeneses
                expenseValues={expenseValues}
                submitChanges={submitExpenseChanges}
                removeCategory={removeCategory}
            />
        </PageTransitionAnimation>
    );
};

export default EditCategory;
