import RadioButton from "components/Atoms/RadioButton";
import React from "react";
import styled from "styled-components";

type Props = {
    currentType: "Price" | "Text" | "Date" | "Address" | "";
    name: string;
};

const RadioGroup: React.FC<Props> = ({ currentType, name }) => {
    return (
        <Wrapper>
            <RadioButton
                checked={currentType === "Price"}
                name={`${name}.type`}
                value={"Price"}
                border="left"
            />
            <RadioButton
                checked={currentType === "Text"}
                name={`${name}.type`}
                value={"Text"}
            />
            <RadioButton
                checked={currentType === "Date"}
                name={`${name}.type`}
                value={"Date"}
            />
            <RadioButton
                checked={currentType === "Address"}
                name={`${name}.type`}
                value={"Address"}
                border="right"
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
`;

export default RadioGroup;
