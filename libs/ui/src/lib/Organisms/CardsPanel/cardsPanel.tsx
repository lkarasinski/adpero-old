import React from "react";
import PollCard from "../../Molecules/PollCard/pollCard";
import JourneyCard from "../../Molecules/JourneyCard/journeyCard";
import { Journey, Poll } from "@adpero/interfaces";
import Link from "next/link";
import Grid from "../../Atoms/Grid/grid";
import Label from "../../Atoms/Label/label";
import { dashboardTheme } from "@adpero/themes";

export type CardsPanelProps = {
    cards: Poll[] | Journey[];
    label?: string;
};

export const CardsPanel: React.FC<CardsPanelProps> = ({ cards, label }) => {
    if (!cards || !cards.length) return null;
    if ("categories" in cards[0]) {
        const array = cards as Journey[];
        return (
            <div>
                {label ? (
                    <Label color={dashboardTheme.colors.primary.regular}>
                        {label}
                    </Label>
                ) : null}
                <Grid margin={"1rem 0 2rem 0rem"}>
                    {array.map((journey) => (
                        <JourneyCard key={journey.id} journey={journey} />
                    ))}
                </Grid>
            </div>
        );
    } else {
        const array = cards as Poll[];

        return (
            <div>
                <Label color={dashboardTheme.colors.primary.regular}>
                    {label}
                </Label>
                <Grid margin={"1rem 0 2rem 0rem"}>
                    {array.map((poll) => {
                        const id = poll.id;
                        return (
                            <Link passHref key={id} href={`polls/${id}`}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a>
                                    <PollCard key={id} poll={poll} />
                                </a>
                            </Link>
                        );
                    })}
                </Grid>
            </div>
        );
    }
};

export default CardsPanel;
