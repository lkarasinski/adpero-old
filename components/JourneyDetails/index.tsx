import React, { useContext } from 'react';
import styled from 'styled-components';
import Label from 'components-ui/Atoms/Label';
import DetailsCard from 'components-ui/Molecules/DetailsCard';
import EditButton from 'components-ui/Molecules/EditButton';
import { FormContext } from 'pages/journeys/[journeyID]';
import { Expense } from 'utils/interfaces';

type Props = {
    expenses: Expense[];
};

const JourneyDetails: React.FC<Props> = ({ expenses }) => {
    const { isEditModeEnabled, setIsEditModeEnabled } = useContext(FormContext);
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
            <EditButton
                onClick={() => setIsEditModeEnabled(true)}
                isInEditMode={isEditModeEnabled}
                isGrayedOut={false}
            />
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
