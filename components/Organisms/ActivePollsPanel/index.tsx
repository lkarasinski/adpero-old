import Heading from "components/Atoms/Heading";
import PollCard from "components/Molecules/PollCard";
import React from "react";
import styled from "styled-components";

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 18rem);
    gap: 2rem;
`;

const Wrapper = styled.div``;
const HeadingContainer = styled.div`
    margin-left: 2rem;
`;

const ActivePollsPanel: React.FC = () => {
    return (
        <Wrapper>
            <HeadingContainer>
                <Heading>Active Polls</Heading>
            </HeadingContainer>
            <Grid>
                <PollCard label="Apartament" dot />
                <PollCard label="Transport" />
                <PollCard label="Samolot" />
            </Grid>
        </Wrapper>
    );
};

export default ActivePollsPanel;
