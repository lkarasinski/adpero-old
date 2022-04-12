import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useJourneys } from "@adpero/contexts";
import { Category, Journey } from "@adpero/interfaces";
import EditJourneyCategoriesPanel from "../../../../../../components/EditJourneyCategoriesPanel";

const EditCategory: NextPage = () => {
    const { updateJourney, getCurrentJourney } = useJourneys();
    const router = useRouter();
    const journeyID = router.query.journeyID as string;
    const pollID = router.query.pollID as string;
    const pollCategoryID = router.query.pollCategoryID as string;
    const [expenseValues, setCategoryValues] = React.useState<
        Category | undefined
    >(undefined);

    const journey = getCurrentJourney();

    const submitCategoryChanges = async (values: Category) => {
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
                    await updateJourney(newJourney, journeyID);
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
                await updateJourney(newJourney, journeyID);
                router.push(`/journeys/${journeyID}/edit/polls/${pollID}`);
            }
        }
    };

    React.useEffect(() => {
        if (journey) {
            if (journey.data.polls.find((e) => e.id === pollID)) {
                setCategoryValues(
                    journey.data.polls
                        .find((poll) => poll.id === pollID)
                        ?.content?.find(
                            (category) => category.id === pollCategoryID
                        )
                );
            } else {
                setCategoryValues(undefined);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pollCategoryID, journey?.id]);

    if (!expenseValues) return null;

    return (
        <>
            <EditJourneyCategoriesPanel
                removeCategory={removeCategory}
                expenseValues={expenseValues}
                submitChanges={submitCategoryChanges}
            />
        </>
    );
};

export default EditCategory;
