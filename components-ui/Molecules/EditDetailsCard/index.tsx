import React from 'react';
import styled from 'styled-components';
import { Detail, Journey } from 'utils/interfaces';
import RadioGroup from 'components-ui/Molecules/RadioGroup';
import InputField from 'components-ui/Molecules/InputField';
import CrossIcon from 'components-ui/Atoms/CrossIcon';
import { setValues } from 'utils/types';
import Card from 'components-ui/Atoms/Card';
import { removeDetail } from 'components/EditJourney/functions';
interface EditDetailsCardProps {
    values: Journey;
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
    const detail: Detail = values.expenses[expenseID].details[detailID];
    const name = `[${expenseID}].details[${detailID}]`;

    const currentErrors = {
        label: '',
        type: '',
        value: '',
        currency: '',
    };

    if (errors.expenses) {
        if (expenseID in errors.expenses) {
            const newErrors = errors.expenses[expenseID].details ?? {};
            if (detailID in newErrors) {
                currentErrors.type = newErrors[detailID].type;
                currentErrors.label = newErrors[detailID].label;
                currentErrors.value = newErrors[detailID].value;
                currentErrors.currency = newErrors[detailID].currency;
            }
        }
    }

    return (
        <Wrapper>
            <CrossContainer>
                <CrossIcon
                    callback={() =>
                        removeDetail(values, expenseID, detailID, setValues)
                    }
                >
                    x
                </CrossIcon>
            </CrossContainer>
            <RadioGroup
                currentType={detail.type}
                name={`expenses.${name}`}
                label={'Type'}
            />
            <InputField
                label={'Label'}
                name={`expenses.${name}.label`}
                error={currentErrors.label ?? ''}
            />
            <InputField
                label={'Value'}
                name={`expenses.${name}.value`}
                error={currentErrors.value ?? ''}
                isDate={detail.type === 'Date'}
            />
            {detail.type === 'Price' && (
                <InputField
                    label={'Currency'}
                    name={`expenses.${name}.currency`}
                    error={currentErrors.currency ?? ''}
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

const Wrapper = styled(Card)`
    position: relative;
    display: flex;
    flex-direction: column;
    width: min-content;
    gap: 1.5rem;
`;

export default EditDetailsCard;
