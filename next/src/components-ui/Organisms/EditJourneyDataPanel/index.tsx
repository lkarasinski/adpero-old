import InputField from "components-ui/Molecules/InputField";
import React from "react";
import styled from "styled-components";

type Props = { errors: any };

const EditJourneyDataPanel: React.FC<Props> = ({ errors }) => {
    return (
        <Wrapper>
            <InputField
                error={errors.name}
                label={"JourneyName"}
                name={"name"}
            />
            <DatePickerContainer>
                <div>
                    <InputField
                        label={"Day of departure"}
                        name={"startDate"}
                        error={errors.startDate}
                        isDate
                    />
                </div>
                <div>
                    <InputField
                        label={"Day of return"}
                        name={"endDate"}
                        error={errors.endDate}
                        isDate
                    />
                </div>
            </DatePickerContainer>
            <div>
                <InputField
                    error={errors.cost?.currency ?? ""}
                    label={"Currency"}
                    name={"cost.currency"}
                />
            </div>
        </Wrapper>
    );
};

const DatePickerContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

const Wrapper = styled.div`
    max-width: 20rem;
`;

export default EditJourneyDataPanel;
