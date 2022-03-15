import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Poll } from "@adpero/interfaces";
import { dashboardTheme } from "@adpero/themes";
import Label from "../../Atoms/Label/label";
import PollCard from "../../Molecules/PollCard/pollCard";
import Grid from "../../Atoms/Grid/grid";

export type PollsPanelProps = { polls: Poll[]; isMobile: boolean };

export const PollsPanel: React.FC<PollsPanelProps> = ({ polls, isMobile }) => {
    if (!polls || polls.length === 0) return null;
    return (
        <div>
            <HeadingContainer>
                <Label color={dashboardTheme.colors.primary.regular}>
                    Active Polls
                </Label>
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
        </div>
    );
};

const HeadingContainer = styled.div`
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

const PollCardContainer = styled.a`
    height: 100%;
    width: 100%;
    text-decoration: none;
`;

export default PollsPanel;
