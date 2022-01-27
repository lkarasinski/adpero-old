import React from "react";
import Label from "components-ui/Atoms/Label";
import PollCard from "components-ui/Molecules/PollCard";
import styled from "styled-components";
import { Poll } from "utils/interfaces";

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 19rem);
    gap: 2rem;
`;

const Wrapper = styled.div``;
const HeadingContainer = styled.div`
    margin: 2rem;
`;

type Props = { polls: Poll[] };

const PollsPanel: React.FC<Props> = ({ polls }) => {
    if (!polls || polls.length === 0) return null;
    return (
        <Wrapper>
            <HeadingContainer>
                <Label isAccent>Active Polls</Label>
            </HeadingContainer>
            <Grid>
                {polls.map((poll) => (
                    <PollCard key={poll.id} poll={poll} />
                ))}
            </Grid>
        </Wrapper>
    );
};

export default PollsPanel;
