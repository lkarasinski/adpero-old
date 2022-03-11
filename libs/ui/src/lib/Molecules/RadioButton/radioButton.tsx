import { Field, FieldAttributes, useField } from "formik";
import React from "react";
import styled from "styled-components";

export type RadioButtonProps = {
    checked?: boolean;
    position: "left" | "center" | "right";
    value: string;
    error: boolean;
};

export const RadioButton: React.FC<
    RadioButtonProps & FieldAttributes<Record<string, unknown>>
> = ({ checked, position, label, value, error, ...props }) => {
    const [field] = useField(props);
    return (
        <Label position={position} checked={checked} error={error}>
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

type StyledLabelProps = Omit<RadioButtonProps, "value">;

const Label = styled.label<StyledLabelProps>`
    box-sizing: border-box;
    height: 45px;
    display: grid;
    place-items: center;

    font-size: 0.875rem;
    font-family: ${({ theme }) => theme.font.family};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    background-color: ${({ checked, theme }) =>
        checked ? theme.colors.selection : theme.colors.background};
    cursor: ${({ checked }) => (checked ? "auto" : "pointer")};
    user-select: none;

    border: 1px solid;

    border-left: ${({ position }) => (position === "left" ? "1px " : "0px")}
        solid #c4c4c4;
    border-color: ${({ error, theme }) =>
        error ? theme.colors.red.regular : "#c4c4c4"};
    border-radius: ${({ position }) => {
        switch (position) {
            case "left":
                return "4px 0 0 4px";
            case "center":
                return "0px";
            case "right":
                return "0 4px 4px 0";
        }
    }};
    &:hover {
        background-color: ${({ checked, theme }) =>
            !checked ? "#C2E2FF7F" : theme.colors.selection};
    }

    transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
`;

const Input = styled.input`
    display: none;
`;

export default RadioButton;
