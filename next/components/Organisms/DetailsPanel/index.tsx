import Label from "components/Atoms/Label";
import DetailsCard from "components/Molecules/DetailsCard";
import EditButton from "components/Molecules/EditButton";
import { FormContext } from "components/Templates/Journey";
import React, { useContext } from "react";
import styled from "styled-components";
import { Expense } from "utils/interfaces";

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 19rem);
    gap: 2rem;
`;

const Wrapper = styled.div``;
const HeadingContainer = styled.div`
    margin: 2rem;
`;

interface Props {
    expenses: Expense[];
}

const DetailsPanel: React.FC<Props> = ({ expenses }) => {
    const { isEditModeEnabled, setIsEditModeEnabled } = useContext(FormContext);
    if (expenses.length === 0) return null;
    return (
        <Wrapper>
            <HeadingContainer>
                <Label isAccent>More Details</Label>
            </HeadingContainer>
            <Grid>
                {expenses?.map((expense, i: number) => (
                    <DetailsCard key={i} expense={expense} />
                ))}
            </Grid>
            <EditButton
                onClick={() => setIsEditModeEnabled(true)}
                isInEditMode={isEditModeEnabled}
                isGrayedOut={false}
            />
        </Wrapper>
    );
};

export default DetailsPanel;
