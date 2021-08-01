import React from 'react';
import Label from 'components/Atoms/Label';
import Text from 'components/Atoms/Text';
import styled from 'styled-components';

export interface IPollCard {
    detail: string;
    journeyName: string;
}

const Wrapper = styled.div`
    max-width: 14rem;
    min-height: 6rem;
    padding: 1.25rem;
    border-radius: 1rem;
    box-shadow: 0 0 4px rgba(0, 0, 0, 25%);
`;

const PollCard: React.FC<IPollCard> = ({ detail, journeyName }) => {
    return (
        <Wrapper>
            <Label isAccent>{detail}</Label>
            <Text>{journeyName}</Text>
        </Wrapper>
    );
};

export default PollCard;
