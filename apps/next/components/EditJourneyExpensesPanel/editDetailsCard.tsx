import { mobileScreenSize } from "@adpero/constants";
import { Detail, Expense } from "@adpero/interfaces";
import { Card, InputField, RadioGroup } from "@adpero/ui";
import * as React from "react";
import styled from "styled-components";
import { RemoveDetailButton } from "./removeDetailButton";

type DetailErrors = {
    type: string;
    label: string;
    value: string;
    currency: string;
};

type Props = {
    index: number;
    detail: Detail;
    currentType: "Price" | "Text" | "Date" | "Address" | "";
    currentErrors: DetailErrors;
    removeDetail: () => void;
    values: Expense;
};

export const EditDetailsCard = ({
    index,
    detail,
    currentType,
    currentErrors,
    removeDetail,
    values,
}: Props) => {
    return (
        <>
            <StyledCard key={detail.id}>
                <RadioGroup
                    currentType={currentType}
                    name={`details[${index}]`}
                    label="Type"
                    error={currentErrors?.type ?? ""}
                />
                <div>
                    <InputField
                        label="Label"
                        name={`details[${index}].label`}
                        error={currentErrors?.label ?? ""}
                        type="text"
                    />
                </div>
                {values.details[index]?.type === "Date" ? (
                    <div>
                        <InputField
                            name={`details[${index}].value`}
                            label={"Value"}
                            error={currentErrors?.value ?? ""}
                            type="datetime-local"
                        />
                    </div>
                ) : (
                    <div>
                        <InputField
                            label="Value"
                            name={`details[${index}].value`}
                            error={currentErrors?.value ?? ""}
                            type="text"
                        />
                    </div>
                )}
                {currentType === "Price" && (
                    <div>
                        <InputField
                            label="Currency"
                            name={`details[${index}].currency`}
                            error={currentErrors?.currency ?? ""}
                            type="text"
                        />
                    </div>
                )}
                <RemoveDetailButton removeDetail={removeDetail} />
            </StyledCard>
        </>
    );
};

export default EditDetailsCard;

const StyledCard = styled(Card)`
    gap: 1rem;
    display: flex;
    flex-direction: column;

    @media (min-width: ${mobileScreenSize}) {
        width: 316px;
    }
`;
