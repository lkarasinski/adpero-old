import { Field } from "formik";
import styled from "styled-components";

// TODO: Change StyledField to InputField in code
const InputField = styled(Field)`
    height: 45px;
    font-size: 1rem;
    font-family: Nunito;
    font-weight: 700;
    border: 1px solid ${({ theme }) => theme.colors.gray.light};
    border-radius: 4px;
    width: 100%;
`;

export default InputField;
