import * as React from "react";
import type { NextPage } from "next";
import { Grid, Heading, PollCard } from "@adpero/ui";
import Link from "next/link";
import { useMobile } from "@adpero/hooks";
import { useJourneys } from "@adpero/contexts";

const PollsPage: NextPage = () => {
    const isMobile = useMobile();
    const { journeys } = useJourneys();
    const pollsExist = journeys.some((journey) => journey.data.polls.length);

    return (
        <div>
            <Heading>Your Polls</Heading>
            <Grid>
                {pollsExist &&
                    journeys.map(({ data }) =>
                        data.polls.map((poll) => (
                            <Link
                                key={poll.id}
                                href={`polls/${poll.id}`}
                                passHref
                            >
                                {/* This component will alway have href because of the Link tag */}
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a>
                                    <PollCard
                                        isMobile={isMobile}
                                        poll={poll}
                                        journeyName={data.name}
                                    />
                                </a>
                            </Link>
                        ))
                    )}
            </Grid>
        </div>
    );
};

export default PollsPage;
