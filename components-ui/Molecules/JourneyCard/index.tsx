import React from 'react';
import styled from 'styled-components';
import Label from 'components-ui/Atoms/Label';
import Text from 'components-ui/Atoms/Text';
import Link from 'next/link';
import Card from 'components-ui/Atoms/Card';

interface Props {
    label: string;
    expenses: string[];
    id?: string;
}

const JourneyCard: React.FC<Props> = ({ label, id, expenses, ...props }) => (
    <Link href={`/journeys/${id}`} passHref>
        <Wrapper {...props} as={'a'}>
            <Label>{label}</Label>
            <div>
                {expenses?.map((e, i) => (
                    <Text key={e + i}>{e}</Text>
                ))}
            </div>
        </Wrapper>
    </Link>
);

const Wrapper = styled(Card)`
    max-width: 19rem;
    min-height: 20rem;
    cursor: pointer;
`;

export default JourneyCard;
