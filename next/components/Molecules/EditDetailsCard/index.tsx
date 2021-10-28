import React from "react";
import { Field } from "formik";

import styled from "styled-components";
import { Detail } from "utils/interfaces";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 420px;
    gap: 3rem;
    padding: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};
`;

interface EditDetailsCardProps {
    name: string;
    detail: Detail;
}

const StyledField = styled(Field)`
    height: 45px;
    font-size: 1rem;
`;

const Box = styled.div`
    display: flex;
`;

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
            <Box>
                <div>
                    <Field
                        type={"radio"}
                        name={`${name}.type`}
                        value={"Price"}
                    />
                    Price
                </div>
                <div>
                    <Field
                        type={"radio"}
                        name={`${name}.type`}
                        value={"Text"}
                    />
                    Text
                </div>
                <div>
                    <Field
                        type={"radio"}
                        name={`${name}.type`}
                        value={"Date"}
                    />
                    Date
                </div>
                <div>
                    <Field
                        type={"radio"}
                        name={`${name}.type`}
                        value={"Address"}
                    />
                    Address
                </div>
            </Box>
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

export default EditDetailsCard;
