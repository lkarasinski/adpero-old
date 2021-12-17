import { Field } from "formik";
import Text from "components-ui/Atoms/Text";
import styled from "styled-components";
import DatePickerField from "components-ui/Molecules/Datepicker";

const InputField: React.FC<InputFieldProps> = ({
    label,
    error,
    name,
    isDate,
}) => (
    <div>
        <Text isSmall>{label}</Text>
        {isDate ? (
            <DatePickerField name={name} />
        ) : (
            <StyledField type="input" name={name} />
        )}
        {error && (
            <Text color="red" isSmall>
                {error}
            </Text>
        )}
    </div>
);

export const StyledField = styled(Field)`
    height: 45px;
    font-size: 1rem;
    font-family: Nunito;
    font-weight: 700;
    border: 1px solid ${({ theme }) => theme.colors.gray.light};
    border-radius: 4px;
    width: 100%;
`;

type InputFieldProps = {
    label: string;
    error: string | undefined;
    name: string;
    isDate?: boolean;
};

export default InputField;
