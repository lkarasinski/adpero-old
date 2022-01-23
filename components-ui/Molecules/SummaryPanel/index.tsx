import React from 'react';
import Label from 'components-ui/Atoms/Label';
import styled from 'styled-components';
import Text from 'components-ui/Atoms/Text';
import Card from 'components-ui/Atoms/Card';

type Props = {
    numberOfUsers: number;
    startDate: string;
    endDate: string;
    totalCost: {
        value: number;
        currency: string;
    };
};

const SummaryPanel: React.FC<Props> = ({
    numberOfUsers,
    totalCost,
    startDate,
    endDate,
}) => {
    const details = [
        { label: 'Cost:', value: `${totalCost.value} ${totalCost.currency}` },
        { label: 'Number of users:', value: `${numberOfUsers}` },
        { label: 'Departure date:', value: `${startDate}` },
        { label: 'Day of return:', value: `${endDate}` },
    ];
    return (
        <Wrapper>
            <Label isAccent>Summary</Label>
            <Grid>
                {details.map(({ label, value }) => {
                    return (
                        <DetailContainer key={label}>
                            <Text isSmall>{label}</Text>
                            <Text color="dark">{value}</Text>
                        </DetailContainer>
                    );
                })}
            </Grid>
        </Wrapper>
    );
};

const Wrapper = styled(Card)`
    max-width: 19rem;
    background-color: '#ffffff';
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 110px);
    gap: 20px;
    margin-top: 0.5rem;
`;

const DetailContainer = styled.div`
    display: grid;
    gap: 3px;
`;

export default SummaryPanel;
