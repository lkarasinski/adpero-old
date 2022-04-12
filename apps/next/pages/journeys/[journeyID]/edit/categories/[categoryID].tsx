import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useJourneys } from "@adpero/contexts";
import { Category, Journey } from "@adpero/interfaces";
import EditJourneyCategoriesPanel from "../../../../../components/EditJourneyCategoriesPanel";

const EditCategory: NextPage = () => {
    const { updateJourney, getCurrentJourney } = useJourneys();
    const router = useRouter();
    const journeyID = router.query.journeyID as string;
    const categoryID = router.query.categoryID as string;
    const [expenseValues, setExpenseValues] = React.useState<
        Category | undefined
    >(undefined);

    const journey = getCurrentJourney();

    const submitExpenseChanges = async (values: Category) => {
        const category = journey?.data?.categories.find(
            (e) => e.id === categoryID
        );
        if (category && journey?.data) {
            const newValues = values as Category;
            journey.data.categories[journey.data.categories.indexOf(category)] =
                newValues;
            await updateJourney(journey?.data, journeyID);
        }
    };

    const removeCategory = async () => {
        if (journey?.data) {
            const newJourney: Journey = {
                ...journey.data,
                categories: journey.data.categories.filter(
                    (e) => e.id !== categoryID
                ),
            };
            if (newJourney) {
                await updateJourney(newJourney, journeyID);
                router.push(
                    "/journeys/[journeyID]/edit/categories",
                    `/journeys/${journeyID}/edit/categories`
                );
            }
        }
    };

    React.useEffect(() => {
        if (journey) {
            if (journey.data.categories.find((e) => e.id === categoryID)) {
                setExpenseValues(
                    journey.data.categories.find((e) => e.id === categoryID)
                );
            } else {
                setExpenseValues(undefined);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryID, journey?.id]);

    if (!expenseValues) return null;

    return (
        <EditJourneyCategoriesPanel
            expenseValues={expenseValues}
            submitChanges={submitExpenseChanges}
            removeCategory={removeCategory}
        />
    );
};

export default EditCategory;
