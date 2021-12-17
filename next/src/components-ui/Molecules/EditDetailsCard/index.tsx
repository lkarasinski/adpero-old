import React from "react";
import styled from "styled-components";
import { Detail, Expense } from "utils/interfaces";
import RadioGroup from "components-ui/Molecules/RadioGroup";
import InputField from "components-ui/Molecules/InputField";
import Text from "components-ui/Atoms/Text";
import CrossIcon from "components-ui/Atoms/CrossIcon";
import { setValues } from "utils/types";
interface EditDetailsCardProps {
    values: Expense[];
    IDs: [number, number];
    setValues: setValues;
    errors: any | undefined;
}

const EditDetailsCard: React.FC<EditDetailsCardProps> = ({
    values,
    IDs,
    setValues,
    errors,
}) => {
    const [expenseID, detailID] = IDs;
    const detail: Detail = values[expenseID].details[detailID];
    const name = `[${expenseID}].details[${detailID}]`;
    const removeDetail = () => {
        const newDetails = values[expenseID].details.filter(
            (item: Detail) => item !== values[expenseID].details[detailID]
        );
        const newValues = [...values];
        newValues[expenseID].details = newDetails;
        setValues(newValues);
    };

    return (
        <Wrapper>
            <CrossContainer>
                <CrossIcon callback={removeDetail}>x</CrossIcon>
            </CrossContainer>
            <RadioGroup currentType={detail.type} name={name} label={"Type"} />
            <InputField
                label={"Label"}
                name={`${name}.label`}
                error={errors ? errors.label : ""}
            />
            <InputField
                label={"Value"}
                name={`${name}.value`}
                error={errors ? errors.value : ""}
                isDate={detail.type === "Date"}
            />
            {detail.type === "Price" && (
                <InputField
                    label={"Currency"}
                    name={`${name}.currency`}
                    error={errors ? errors.currency : ""}
                />
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
