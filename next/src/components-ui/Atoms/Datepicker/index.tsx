import React from "react";
import { useField, useFormikContext } from "formik";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import convertToDate from "functions/convertToDate";
import InputField from "components-ui/Molecules/InputField";

const DatePicker: React.FC<any> = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    const value = convertToDate(field.value);

    return (
        <ReactDatePicker
            {...props}
            value={value}
            selected={(value && new Date(value)) || null}
            onChange={(val) => {
                setFieldValue(field.name, val);
            }}
            timeFormat="p"
            showTimeSelect
            customInput={<InputField />}
        />
    );
};

export default DatePicker;
