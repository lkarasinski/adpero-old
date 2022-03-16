import { currencies } from "@adpero/constants";
import * as yup from "yup";

export const validationSchema = yup.object({
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
            )
            .test("is-valid", "Invalid currency code", (val) => {
                return currencies.includes(val?.toUpperCase() ?? "");
            }),
    }),
});
