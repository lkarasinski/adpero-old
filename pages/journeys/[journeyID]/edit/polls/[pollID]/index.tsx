import * as React from "react";
import type { NextPage } from "next";
import PageTransitionAnimation from "components-ui/Atoms/PageTransitionAnimation";
import useJourneys from "context/JourneysContext";
import { useRouter } from "next/router";
import { Journey, Poll } from "utils/interfaces";
import DetailsCard from "components-ui/Molecules/DetailsCard";
import Link from "next/link";
import styled from "styled-components";
import Heading from "components-ui/Atoms/Heading";
import Grid from "components-ui/Atoms/Grid";
import Button from "components-ui/Atoms/Button";
import { Form, Formik } from "formik";
import TextField from "components-ui/Molecules/TextField";
import { getEmptyCategory } from "utils/constants";
import useMobile from "hooks/useMobile";

const EditCategory: NextPage = () => {
    const { getCurrentJourney, updateJourney } = useJourneys();
    const isMobile = useMobile();
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
            <TopContainer isMobile={isMobile}>
                <Heading>{currentPoll.title}</Heading>
                {isMobile ? null : (
                    <Button
                        color="red"
                        onClick={removePoll}
                        type="button"
                        style={{ marginRight: "4rem" }}
                    >
                        Remove Poll
                    </Button>
                )}
            </TopContainer>
            {isMobile ? (
                <StyledButton
                    isMobile={isMobile}
                    color="red"
                    onClick={removePoll}
                    type="button"
                >
                    Remove Poll
                </StyledButton>
            ) : null}
            <Formik initialValues={currentPoll} onSubmit={(v) => editPoll(v)}>
                {() => (
                    <StyledForm isMobile={isMobile}>
                        <TextField name={"title"} label={"Poll label"} />
                        <StyledButton
                            isMobile={isMobile}
                            color="green"
                            type="submit"
                        >
                            Change poll label
                        </StyledButton>
                    </StyledForm>
                )}
            </Formik>
            <Grid>
                {currentPoll?.content.map((category) => (
                    <Link
                        href={`/journeys/${journeyID}/edit/polls/${pollID}/${category.id}`}
                        key={category.id}
                        passHref
                    >
                        <DetailsCardContainer>
                            <DetailsCard
                                isMobile={isMobile}
                                key={category.id}
                                expense={category}
                            />
                        </DetailsCardContainer>
                    </Link>
                ))}
                <AddNewCategoryContainer isMobile={isMobile}>
                    <StyledButton
                        isMobile={isMobile}
                        color="primary"
                        type="button"
                        onClick={addNewCategory}
                    >
                        Add New Option
                    </StyledButton>
                </AddNewCategoryContainer>
            </Grid>
        </PageTransitionAnimation>
    );
};

const AddNewCategoryContainer = styled.div<{ isMobile: boolean }>`
    ${({ isMobile }) =>
        isMobile ? null : "display: grid; place-items: center;"}
`;

const StyledButton = styled(Button)<{ isMobile: boolean }>`
    width: ${({ isMobile }) => (isMobile ? "100%" : "19rem")};
    margin-bottom: 2rem;
`;

const StyledForm = styled(Form)<{ isMobile: boolean }>`
    display: grid;
    grid-template-columns: ${({ isMobile }) => (isMobile ? "1fr" : "19rem")};
    gap: 1rem;
`;

const TopContainer = styled.div<{ isMobile: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: ${({ isMobile }) => (isMobile ? "0" : "2rem")};
`;

const DetailsCardContainer = styled.a`
    height: 100%;
    width: 100%;
    cursor: pointer;
`;

export default EditCategory;
