import React, { forwardRef, useRef } from "react";
import { useField, useFormikContext } from "formik";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import convertToDate from "functions/convertToDate";
import { StyledField } from "components-ui/Molecules/InputField";

const CustomDatepicker = forwardRef((props, _) => <StyledField {...props} />);
CustomDatepicker.displayName = "CustomDatepicker";

const DatePicker: React.FC<any> = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    const value = convertToDate(field.value);
    const ref = useRef();

    return (
        <ReactDatePicker
            {...props}
            value={value}
            selected={(value && new Date(value)) || null}
            onChange={(val) => {
                setFieldValue(field.name, val);
            }}
            customInput={<CustomDatepicker ref={ref} />}
        />
    );
};

export default DatePicker;
