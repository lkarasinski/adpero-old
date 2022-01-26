import { Field, FieldAttributes, useField } from "formik";
import React from "react";
import styled from "styled-components";

type Props = {
    border?: "left" | "right";
    checked?: boolean;
};

const RadioButton: React.FC<
    Props & FieldAttributes<Record<string, unknown>>
> = ({ checked, border, label, value, ...props }) => {
    const [field] = useField(props);
    return (
        <Label border={border} checked={checked}>
            <Field
                {...field}
                as={Input}
                value={value}
                label={label}
                type="radio"
            />
            {value}
        </Label>
    );
};

const Label = styled.label<Props>`
    user-select: none;
    display: grid;
    place-items: center;
    font-size: 0.875rem;
    font-family: Nunito;
    font-weight: 700;
    width: 60px;
    height: 56px;
    background-color: ${({ checked, theme }) =>
        checked ? theme.colors.selection : "white"};
    cursor: ${({ checked }) => (checked ? "auto" : "pointer")};
    border: 1px solid #c4c4c4;
    border-left: ${({ border }) => (border === "left" ? "1px " : "0px")} solid
        #c4c4c4;
    border-radius: ${({ border }) =>
        border == "left"
            ? `4px 0 0 4px`
            : border === "right"
            ? `0 4px 4px 0`
            : "0"};
    &:hover {
        background-color: ${({ checked, theme }) =>
            !checked ? "#C2E2FF7F" : theme.colors.selection};
    }

    transition: background-color 100ms ease-in-out;
    body {
    }
`;

const Input = styled.input`
    display: none;
`;

export default RadioButton;
