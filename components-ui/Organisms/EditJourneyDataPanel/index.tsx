import Card from 'components-ui/Atoms/Card';
import Label from 'components-ui/Atoms/Label';
import InputField from 'components-ui/Molecules/InputField';
import React from 'react';
import styled from 'styled-components';

type Props = { errors: any };

const EditJourneyDataPanel: React.FC<Props> = ({ errors }) => {
    return (
        <StyledCard>
            <StyledLabel isAccent>Journey data</StyledLabel>
            <InputField
                error={errors.name}
                label={'Journey Name'}
                name={'name'}
            />
            <DatePickerContainer>
                <div>
                    <InputField
                        label={'Day of departure'}
                        name={'startDate'}
                        error={errors.startDate}
                        isDate
                    />
                </div>
                <div>
                    <InputField
                        label={'Day of return'}
                        name={'endDate'}
                        error={errors.endDate}
                        isDate
                    />
                </div>
            </DatePickerContainer>
            <div>
                <InputField
                    error={errors.cost?.currency ?? ''}
                    label={'Currency'}
                    name={'cost.currency'}
                />
            </div>
        </StyledCard>
    );
};

const StyledLabel = styled(Label)`
    margin-bottom: 1rem;
`;

const DatePickerContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

const StyledCard = styled(Card)`
    max-width: 20rem;
    height: min-content;
`;

export default EditJourneyDataPanel;
