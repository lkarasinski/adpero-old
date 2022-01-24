import React from 'react';
import styled from 'styled-components';
import Label from 'components-ui/Atoms/Label';
import DetailsCard from 'components-ui/Molecules/DetailsCard';
import EditButton from 'components-ui/Molecules/EditButton';
import { Expense } from 'utils/interfaces';
import { useRouter } from 'next/router';

type Props = {
    expenses: Expense[];
};

const JourneyDetails: React.FC<Props> = ({ expenses }) => {
    const router = useRouter();

    return (
        <Wrapper>
            <HeadingContainer>
                <Label isAccent>More Details</Label>
            </HeadingContainer>
            {expenses.length === 0 ? null : (
                <Grid>
                    {expenses?.map((expense) => (
                        <DetailsCard key={expense.id} expense={expense} />
                    ))}
                </Grid>
            )}
            <EditButton path={router.asPath} />
        </Wrapper>
    );
};

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 19rem);
    gap: 2rem;
`;

const Wrapper = styled.div``;

const HeadingContainer = styled.div`
    margin: 2rem;
`;

export default JourneyDetails;
