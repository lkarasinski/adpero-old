import { dashboardTheme } from "@adpero/themes";
import { Field } from "formik";
import styled from "styled-components";
import Text from "../../Atoms/Text/text";

export type InputFieldProps = {
    name: string;
    label?: string;
    error?: string;
    type?: "text" | "number" | "date" | "datetime-local";
    placeholder?: string;
};

export const InputField: React.FC<InputFieldProps> = ({
    name,
    type,
    error,
    label,
    placeholder,
}) => {
    return (
        <>
            <StyledText
                color={
                    error
                        ? dashboardTheme.colors.red.regular
                        : dashboardTheme.colors.gray.light
                }
                as="label"
                htmlFor={name}
            >
                {label}
            </StyledText>
            <StyledField
                name={name}
                type={type}
                error={!!error}
                placeholder={placeholder}
            />
            <StyledText color={dashboardTheme.colors.red.regular}>
                {error}
            </StyledText>
        </>
    );
};

const StyledText = styled(Text)`
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    margin-left: 8px;
    transition: color 0.2s ease-in-out;
`;

const StyledField = styled(Field)<{ error?: boolean }>`
    box-sizing: border-box;
    height: 45px;
    width: 100%;
    padding: 0 8px;

    outline: none;
    border: 1px solid
        ${({ error, theme }) =>
            error ? theme.colors.red.regular : theme.colors.gray.dark};
    border-radius: 4px;

    :focus {
        border-width: 2px;
        border-color: ${({ error, theme }) =>
            error ? theme.colors.red.regular : theme.colors.primary.regular};
    }
    transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;

    color: ${({ theme }) => theme.colors.gray.dark};
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size.small};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    ::placeholder {
        color: ${({ theme }) => theme.colors.gray.light};
    }

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    -moz-appearance: textfield;
`;

export default InputField;
