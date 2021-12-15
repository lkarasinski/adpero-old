import React from "react";
import styled from "styled-components";
import { Detail, Expense } from "utils/interfaces";
import RadioGroup from "components-ui/Molecules/RadioGroup";
import InputField from "components-ui/Molecules/InputField";
import Text from "components-ui/Atoms/Text";
import DatePickerField from "components-ui/Atoms/Datepicker";
import CrossIcon from "components-ui/Atoms/CrossIcon";
interface EditDetailsCardProps {
    detail: Detail;
    values: Expense[];
    x: [number, number];
    setValues: any;
}

const EditDetailsCard: React.FC<EditDetailsCardProps> = ({
    detail,
    values,
    x,
    setValues,
}) => {
    const name = `[${x[0]}].details[${x[1]}]`;
    const removeDetail = (detailId: number) => {
        const newValues = values.filter(
            (item: Expense) => item !== values[detailId]
        );
        console.log(newValues);
        setValues(newValues);
    };

    return (
        <Wrapper>
            <CrossContainer>
                <CrossIcon callback={() => removeDetail(x[0])}>x</CrossIcon>
            </CrossContainer>
            <div>
                <Text isSmall>Type</Text>
                <RadioGroup currentType={detail.type} name={name} />
            </div>
            <div>
                <Text isSmall>Label</Text>
                <InputField
                    type={"input"}
                    name={`${name}.label`}
                    placeholder="Label"
                />
            </div>
            <div>
                <Text isSmall>Value</Text>
                {detail.type === "Date" ? (
                    <DatePickerField name={`${name}.value`} />
                ) : (
                    <InputField
                        type={"input"}
                        name={`${name}.value`}
                        placeholder="Value"
                    />
                )}
            </div>
            {detail.type === "Price" && (
                <div>
                    <Text isSmall>Currency</Text>
                    <InputField
                        type={"input"}
                        name={`${name}.currency`}
                        placeholder="Currency"
                    />
                </div>
            )}
        </Wrapper>
    );
};

const CrossContainer = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 420px;
    gap: 1.5rem;
    padding: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};
`;

export default EditDetailsCard;
