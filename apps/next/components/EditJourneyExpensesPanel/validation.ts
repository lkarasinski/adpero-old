import { currencies } from "@adpero/constants";
import * as yup from "yup";

const detailsSchema = {
    label: yup
        .string()
        .required("Label is required")
        .max(24, "Label must be at most 24 characters long"),
    type: yup.string().required("Type is required"),
    value: yup
        .mixed()
        .required("Value is required")
        .when("type", {
            is: "Price",
            then: yup
                .number()
                .typeError("Enter a number. For decimals use a dot "),
        })
        .when("type", {
            is: "Date",
            then: yup
                .date()
                .required("Date is required")
                .typeError("Enter a valid date"),
        }),
    currency: yup.string().when("type", {
        is: "Price",
        then: yup
            .string()
            .required("Currency is required")
            .test("len", "Enter currency code", (val) => val?.length === 3)
            .test("is-valid", "Invalid currency code", (val) => {
                return currencies.includes(val ?? "");
            }),
    }),
};

const validationSchema = yup.object({
    title: yup.string().required("Title is required"),
    id: yup.string().required("Id is required"),
    details: yup.array().of(yup.object().shape(detailsSchema)),
});

export default validationSchema;
