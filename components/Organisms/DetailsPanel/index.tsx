import Label from "components/Atoms/Label";
import DetailsCard from "components/Molecules/DetailsCard";
import React from "react";
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
    return (
        <Wrapper>
            <HeadingContainer>
                <Label isAccent>More Details</Label>
            </HeadingContainer>
            <Grid>
                {expenses &&
                    expenses.map((expense, i: number) => (
                        <DetailsCard key={i} expense={expense} />
                    ))}
            </Grid>
        </Wrapper>
    );
};

export default DetailsPanel;
