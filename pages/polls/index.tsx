import Heading from "components-ui/Atoms/Heading";
import PageTransitionAnimation from "components-ui/Atoms/PageTransitionAnimation";
import PollCard from "components-ui/Molecules/PollCard";
import CardGrid from "components-ui/Templates/CardGrid";
import useJourneys from "context/JourneysContext";
import useMobile from "hooks/useMobile";
import type { NextPage } from "next";
import Link from "next/link";

const Polls: NextPage = () => {
    const isMobile = useMobile();
    const { journeys } = useJourneys();
    const pollsExist = journeys.some((journey) => journey.data.polls.length);

    return (
        <PageTransitionAnimation>
            <Heading>Your Polls</Heading>
            <CardGrid>
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
            </CardGrid>
        </PageTransitionAnimation>
    );
};

export default Polls;
