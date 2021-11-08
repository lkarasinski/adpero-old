import React from "react";
import styled from "styled-components";
import { Field } from "formik";
import { Detail } from "utils/interfaces";
import RadioGroup from "components-ui/Molecules/RadioGroup";
interface EditDetailsCardProps {
    name: string;
    detail: Detail;
}

const EditDetailsCard: React.FC<EditDetailsCardProps> = ({ name, detail }) => {
    return (
        <Wrapper>
            <StyledField
                type={"input"}
                name={`${name}.label`}
                placeholder="Label"
            />
            <StyledField
                type={"input"}
                name={`${name}.value`}
                placeholder="Value"
            />
            <RadioGroup currentType={detail.type} name={name} />
            {detail.type === "Price" && (
                <StyledField
                    type={"input"}
                    name={`${name}.currency`}
                    placeholder="Currency"
                />
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 420px;
    gap: 2rem;
    padding: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};
`;

const StyledField = styled(Field)`
    height: 45px;
    font-size: 1rem;
`;

export default EditDetailsCard;
