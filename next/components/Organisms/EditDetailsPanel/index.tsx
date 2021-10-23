import Heading from "components/Atoms/Heading";
import Label from "components/Atoms/Label";
import EditDetailsCard from "components/Molecules/EditDetailsCard";
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
            {expenses &&
                expenses.map((expense, i: number) => (
                    <>
                        <Heading>{expense.title}</Heading>
                        <Grid>
                            {expense.details.map((detail, j: number) => (
                                <EditDetailsCard
                                    key={`${i}-${j}`}
                                    {...detail}
                                />
                            ))}
                        </Grid>
                    </>
                ))}
        </Wrapper>
    );
};

export default DetailsPanel;
