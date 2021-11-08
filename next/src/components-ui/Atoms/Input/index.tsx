import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    height: 45px;
    font-size: 1rem;
`;

interface InputProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({ value, setValue }) => {
    return (
        <StyledInput
            value={value}
            onChange={(event) => {
                setValue(event.target.value);
            }}
        ></StyledInput>
    );
};

export default Input;
