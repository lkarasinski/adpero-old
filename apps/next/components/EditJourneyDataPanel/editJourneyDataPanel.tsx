import * as React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Formik } from "formik";
import { EditJourneyDataForm } from "@adpero/ui";
import { useJourneys } from "@adpero/contexts";
import { useAuth } from "@adpero/contexts";
import { validationSchema } from "./validation";
import { getEmptyJourney } from "@adpero/functions";
import { mobileScreenSize } from "@adpero/constants";

type EditJourneyDataPanelProps = {
    buttonText: string;
};

type Errors = {
    name: string;
    startDate: string;
    endDate: string;
    cost: { value: string; currency: string };
};

export const EditJourneyDataPanel = ({
    buttonText,
}: EditJourneyDataPanelProps) => {
    const { createJourney, updateJourney, getCurrentJourney } = useJourneys();
    const { user } = useAuth();
    const router = useRouter();
    const journeyID = router.query.journeyID as string;
    const journey = getCurrentJourney()?.data;
    const [initialValues, setInitialValues] = React.useState(() => {
        const emptyJourney = getEmptyJourney(user?.email ?? "local");
        emptyJourney.startDate = null;
        emptyJourney.endDate = null;
        return emptyJourney;
    });

    React.useEffect(() => {
        if (journey?.id) {
            setInitialValues(journey);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [!!journey?.id === true]);

    return (
        <Wrapper>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    if (journeyID) {
                        await updateJourney(values, journeyID);
                    } else {
                        const journeyID = await createJourney(values);
                        router.push(`/journeys/${journeyID}`);
                    }
                }}
            >
                {({ errors, isSubmitting }) => {
                    return (
                        <EditJourneyDataForm
                            buttonText={buttonText}
                            errors={errors as Errors}
                            isSubmitting={isSubmitting}
                        />
                    );
                }}
            </Formik>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    max-width: 30rem;
    @media (max-width: ${mobileScreenSize}) {
        max-width: 100%;
    }
`;

export default EditJourneyDataPanel;
