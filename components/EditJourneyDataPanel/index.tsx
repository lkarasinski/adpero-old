import * as React from "react";
import * as yup from "yup";
import EditJourneyDataForm, {
    Errors,
} from "components-ui/Organisms/EditJourneyDataForm";
import useJourneys from "context/JourneysContext";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { useAuth } from "context/AuthContext";
import { Journey } from "utils/interfaces";
import styled from "styled-components";
import useMobile from "hooks/useMobile";

type Props = {
    buttonText: string;
};

const EditJourneyDataPanel: React.FC<Props> = ({ buttonText }) => {
    const { createJourney, updateJourney, getCurrentJourney } = useJourneys();
    const isMobile = useMobile();
    const { user } = useAuth();
    const router = useRouter();
    const journeyID = router.query.journeyID as string;
    const journey = getCurrentJourney()?.data;
    const [initialValues, setInitialValues] = React.useState({
        author: user?.email ?? "local",
        createdAt: new Date(),
        editors: [],
        expenses: [],
        name: "",
        polls: [],
        users: [user?.email ?? "local"],
        startDate: new Date(),
        endDate: new Date(),
        id: "",
        lastEdited: new Date(),
        cost: { value: 0, currency: "EUR" },
    } as Journey);

    React.useEffect(() => {
        if (journey?.id) {
            setInitialValues(journey);
        }
    }, [!!journey?.id === true]);

    return (
        <Wrapper isMobile={isMobile}>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    if (journeyID) {
                        await updateJourney(journeyID, values);
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

const Wrapper = styled.div<{ isMobile: boolean }>`
    max-width: ${({ isMobile }) => (isMobile ? "100%" : "30rem")};
`;

const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    startDate: yup.date().required("Departure date is required"),
    endDate: yup.date().required("Return date is required"),
    cost: yup.object({
        value: yup.number(),
        currency: yup
            .string()
            .test(
                "len",
                "Enter currency code. For example: USD, GBP",
                (val) => val?.length === 3
            ),
    }),
});

export default EditJourneyDataPanel;
