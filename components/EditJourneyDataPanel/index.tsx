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

type Props = {
    buttonText: string;
};

const EditJourneyDataPanel: React.FC<Props> = ({ buttonText }) => {
    const { journeys, createJourney, updateJourney } = useJourneys();
    const { user } = useAuth();
    const router = useRouter();
    const journeyID = router.query.journeyID as string;
    const journey = journeys.find((journey) => journey.id === journeyID)?.data;
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
    );
};

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
