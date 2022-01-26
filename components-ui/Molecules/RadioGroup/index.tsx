import RadioButton from "components-ui/Atoms/RadioButton";
import React from "react";
import styled from "styled-components";
import Text from "components-ui/Atoms/Text";

type Props = {
    currentType: "Price" | "Text" | "Date" | "Address" | "";
    name: string;
    label: string;
};

const RadioGroup: React.FC<Props> = ({ currentType, name, label }) => {
    return (
        <div>
            <StyledText>{label}</StyledText>
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
        </div>
    );
};

const Wrapper = styled.div`
    display: flex;
`;

const StyledText = styled(Text)`
    font-size: 0.75rem;
    font-weight: 700;
    transform: translate(13px, 0px);
    width: max-content;
`;

export default RadioGroup;
