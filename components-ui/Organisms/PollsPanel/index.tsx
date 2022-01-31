import React from "react";
import Label from "components-ui/Atoms/Label";
import PollCard from "components-ui/Molecules/PollCard";
import styled from "styled-components";
import { Poll } from "utils/interfaces";
import Link from "next/link";
import useMobile from "hooks/useMobile";
import Grid from "components-ui/Atoms/Grid";

type Props = { polls: Poll[] };

const PollsPanel: React.FC<Props> = ({ polls }) => {
    const isMobile = useMobile();
    if (!polls || polls.length === 0) return null;
    return (
        <Wrapper>
            <HeadingContainer>
                <Label isAccent>Active Polls</Label>
            </HeadingContainer>
            <Grid isMobile={isMobile}>
                {polls.map((poll) => (
                    <Link href={`/polls/${poll.id}`} key={poll.id} passHref>
                        <PollCardContainer>
                            <PollCard poll={poll} isMobile={isMobile} />
                        </PollCardContainer>
                    </Link>
                ))}
            </Grid>
        </Wrapper>
    );
};

const Wrapper = styled.div``;
const HeadingContainer = styled.div`
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

const PollCardContainer = styled.a`
    height: 100%;
    width: 100%;
`;

export default PollsPanel;
