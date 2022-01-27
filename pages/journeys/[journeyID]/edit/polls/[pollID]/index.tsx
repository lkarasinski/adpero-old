import * as React from "react";
import type { NextPage } from "next";
import PageTransitionAnimation from "components-ui/Atoms/PageTransitionAnimation";
import useJourneys from "context/JourneysContext";
import { useRouter } from "next/router";
import { Journey, Poll } from "utils/interfaces";
import CardGrid from "components-ui/Templates/CardGrid";
import DetailsCard from "components-ui/Molecules/DetailsCard";
import Link from "next/link";
import styled from "styled-components";
import Heading from "components-ui/Atoms/Heading";
import Button from "components-ui/Atoms/Button";
import { Form, Formik } from "formik";
import TextField from "components-ui/Molecules/TextField";
import { getEmptyCategory } from "utils/constants";

const EditCategory: NextPage = () => {
    const { getCurrentJourney, updateJourney } = useJourneys();
    const journey = getCurrentJourney();
    const router = useRouter();
    const journeyID = router.query.journeyID as string;
    const pollID = router.query.pollID as string;

    const currentPoll = journey?.data?.polls.find((p) => p.id === pollID);

    if (!journey || !currentPoll) return null;

    const editPoll = async (values: Poll) => {
        const newPolls = journey.data.polls.map((poll) =>
            poll.id === pollID ? values : poll
        );
        journey.data.polls = newPolls;
        await updateJourney(journey.id, journey.data);
    };
    const addNewCategory = async () => {
        journey.data.polls
            .find((p) => p.id === pollID)
            ?.content.push(getEmptyCategory());
        await updateJourney(journey.id, journey.data);
    };

    const removePoll = async () => {
        if (journey?.data) {
            const newJourney: Journey = {
                ...journey.data,
                polls: journey.data.polls.filter((e) => e.id !== pollID),
            };
            if (newJourney) {
                await updateJourney(journeyID, newJourney);
                router.push(
                    "/journeys/[journeyID]/edit/polls",
                    `/journeys/${journeyID}/edit/polls`
                );
            }
        }
    };

    return (
        <PageTransitionAnimation>
            <div style={{ margin: "3rem 0" }}>
                <Heading>{currentPoll.title}</Heading>
                <Button color="red" onClick={removePoll} type="button">
                    Remove Poll
                </Button>
                <Button color="primary" onClick={addNewCategory}>
                    Add New Option
                </Button>
            </div>
            <Formik initialValues={currentPoll} onSubmit={(v) => editPoll(v)}>
                {() => (
                    <Form>
                        <TextField name={"title"} label={"Poll label"} />
                        <Button color="green" type="submit">
                            Save
                        </Button>
                    </Form>
                )}
            </Formik>
            <CardGrid label="Poll options">
                {currentPoll?.content.map((category) => (
                    <Link
                        href={`/journeys/${journeyID}/edit/polls/${pollID}/${category.id}`}
                        key={category.id}
                        passHref
                    >
                        <DetailsCardContainer>
                            <DetailsCard key={category.id} expense={category} />
                        </DetailsCardContainer>
                    </Link>
                ))}
            </CardGrid>
        </PageTransitionAnimation>
    );
};

const DetailsCardContainer = styled.a`
    height: 100%;
    cursor: pointer;
`;

export default EditCategory;
