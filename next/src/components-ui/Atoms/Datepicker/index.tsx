import React from "react";
import { useField, useFormikContext } from "formik";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled, { createGlobalStyle } from "styled-components";
import getDateFromTimestamp from "functions/convertToDate";

const StyledDatePicker = styled.input`
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray.light};
    padding: 1rem 0;
    font-family: ${({ theme }) => theme.font};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const DatePickerWrapperStyles = createGlobalStyle`
.date_picker.full-width {
    width: 12rem;
    
}`;

function isValidDate(dateObject: Date) {
    return new Date(dateObject).toString() !== "Invalid Date";
}

const DatePicker: React.FC<any> = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    const value = getDateFromTimestamp(field.value);

    // return <div>{JSON.stringify(field.value)}</div>;

    return (
        <>
            <DatePickerWrapperStyles />
            <ReactDatePicker
                {...props}
                value={value}
                selected={(value && new Date(value)) || null}
                onChange={(val) => {
                    setFieldValue(field.name, val);
                }}
                customInput={<StyledDatePicker />}
                wrapperClassName="date_picker"
            />
        </>
    );
};

export default DatePicker;
