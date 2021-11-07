import React from "react";
import Label from "components/Atoms/Label";
import PollCard from "components/Molecules/PollCard";
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

const ActivePollsPanel: React.FC<Props> = ({ polls }) => {
    if (!polls || polls.length === 0) return null;
    return (
        <Wrapper>
            <HeadingContainer>
                <Label isAccent>Active Polls</Label>
            </HeadingContainer>
            <Grid>
                {polls.map((poll, i) => (
                    <PollCard
                        key={poll.title + i}
                        label={poll.title}
                        // TODO: Add notification logic
                        dot={false}
                    />
                ))}
            </Grid>
        </Wrapper>
    );
};

export default ActivePollsPanel;
