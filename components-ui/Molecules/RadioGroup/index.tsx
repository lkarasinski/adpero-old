import RadioButton from 'components-ui/Atoms/RadioButton';
import React from 'react';
import styled from 'styled-components';
import Text from 'components-ui/Atoms/Text';

type Props = {
    currentType: 'Price' | 'Text' | 'Date' | 'Address' | '';
    name: string;
    label: string;
};

const RadioGroup: React.FC<Props> = ({ currentType, name, label }) => {
    return (
        <div>
            <Text>{label}</Text>
            <Wrapper>
                <RadioButton
                    checked={currentType === 'Price'}
                    name={`${name}.type`}
                    value={'Price'}
                    border="left"
                />
                <RadioButton
                    checked={currentType === 'Text'}
                    name={`${name}.type`}
                    value={'Text'}
                />
                <RadioButton
                    checked={currentType === 'Date'}
                    name={`${name}.type`}
                    value={'Date'}
                />
                <RadioButton
                    checked={currentType === 'Address'}
                    name={`${name}.type`}
                    value={'Address'}
                    border="right"
                />
            </Wrapper>
        </div>
    );
};

const Wrapper = styled.div`
    display: flex;
`;

export default RadioGroup;
