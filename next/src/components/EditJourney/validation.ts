import * as yup from "yup";

const detailsSchema = {
    label: yup.string().required("Label is required").max(24),
    type: yup.string().required("Type is required"),
    value: yup
        .mixed()
        .required("Value is required")
        .when("type", {
            is: "Price",
            then: yup
                .number()
                .typeError("Enter a number. For decimals use a dot "),
            otherwise: yup.string(),
        }),
    currency: yup.string().when("type", {
        is: "Price",
        then: yup
            .string()
            .required("Currency is required")
            .test(
                "len",
                "Enter currency code. For example: USD, GBP",
                (val) => val?.length === 3
            ),
    }),
};

export const validationSchema = yup.array().of(
    yup.object({
        title: yup.string().required("Title is required").max(24),
        details: yup.array().of(yup.object().shape(detailsSchema)),
    })
);

export const journeyValidationSchema = yup.object().shape({
    author: yup.string().required("Author is required"),
    name: yup.string().required("Name is required"),
    startDate: yup.string().required("Start date is required"),
    endDate: yup.string().required("End date is required"),
    expenses: validationSchema,
});
