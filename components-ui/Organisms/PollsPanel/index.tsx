import React from "react";
import Label from "components-ui/Atoms/Label";
import PollCard from "components-ui/Molecules/PollCard";
import styled from "styled-components";
import { Poll } from "utils/interfaces";
import Link from "next/link";

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
                    <Link href={`/polls/${poll.id}`} key={poll.id} passHref>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <PollCardContainer>
                            <PollCard poll={poll} />
                        </PollCardContainer>
                    </Link>
                ))}
            </Grid>
        </Wrapper>
    );
};

const PollCardContainer = styled.a`
    height: 100%;
`;

export default PollsPanel;
