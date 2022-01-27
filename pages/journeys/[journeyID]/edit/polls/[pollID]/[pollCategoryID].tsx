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
    const pollID = router.query.pollID as string;
    const pollCategoryID = router.query.pollCategoryID as string;
    const [expenseValues, setExpenseValues] = React.useState<
        Expense | undefined
    >(undefined);

    const journey = getCurrentJourney();

    const submitExpenseChanges = async (values: Expense) => {
        if (journey?.data) {
            const currentCategories = journey.data.polls.find(
                (poll) => poll.id === pollID
            )?.content;
            const newCategories = currentCategories?.map((category) =>
                category.id === pollCategoryID ? values : category
            );

            if (newCategories) {
                const newJourney: Journey = {
                    ...journey.data,
                    polls: journey.data.polls.map((poll) =>
                        poll.id === pollID
                            ? { ...poll, content: newCategories }
                            : poll
                    ),
                };
                if (newJourney) {
                    await updateJourney(journeyID, newJourney);
                    router.push(`/journeys/${journeyID}/edit/polls/${pollID}`);
                }
            }
        }
    };

    const removeCategory = async () => {
        if (journey?.data) {
            const newJourney: Journey = {
                ...journey.data,
                polls: journey.data.polls.map((poll) =>
                    poll.id === pollID
                        ? {
                              ...poll,
                              content: poll.content.filter(
                                  (category) => category.id !== pollCategoryID
                              ),
                          }
                        : poll
                ),
            };
            if (newJourney) {
                await updateJourney(journeyID, newJourney);
                router.push(`/journeys/${journeyID}/edit/polls/${pollID}`);
            }
        }
    };

    React.useEffect(() => {
        if (journey) {
            if (journey.data.polls.find((e) => e.id === pollID)) {
                setExpenseValues(
                    journey.data.polls
                        .find((poll) => poll.id === pollID)
                        ?.content?.find(
                            (category) => category.id === pollCategoryID
                        )
                );
            } else {
                setExpenseValues(undefined);
            }
        }
    }, [pollCategoryID, journey?.id]);

    if (!expenseValues) return null;

    return (
        <PageTransitionAnimation>
            <EditJourneyExpeneses
                removeCategory={removeCategory}
                expenseValues={expenseValues}
                submitChanges={submitExpenseChanges}
            />
        </PageTransitionAnimation>
    );
};

export default EditCategory;
