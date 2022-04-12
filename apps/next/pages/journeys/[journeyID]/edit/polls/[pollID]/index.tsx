import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { Form, Formik } from "formik";
import { mobileScreenSize } from "@adpero/constants";
import { Button, DetailsCard, Grid, Heading, InputField } from "@adpero/ui";
import { getEmptyCategory } from "@adpero/functions";
import { useMobile } from "@adpero/hooks";
import { Journey, Poll } from "@adpero/interfaces";
import { useJourneys } from "@adpero/contexts";
import { dashboardTheme } from "@adpero/themes";

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
        await updateJourney(journey.data, journey.id);
    };
    const addNewCategory = async () => {
        const emptyCategory = getEmptyCategory();
        journey.data.polls
            .find((p) => p.id === pollID)
            ?.content.push(emptyCategory);
        await updateJourney(journey.data, journey.id);
        router.push(
            `/journeys/${router.query.journeyID}/edit/polls/${pollID}/${emptyCategory.id}`
        );
    };

    const removePoll = async () => {
        if (journey?.data) {
            const newJourney: Journey = {
                ...journey.data,
                polls: journey.data.polls.filter((e) => e.id !== pollID),
            };
            if (newJourney) {
                await updateJourney(newJourney, journeyID);
                router.push(
                    "/journeys/[journeyID]/edit/polls",
                    `/journeys/${journeyID}/edit/polls`
                );
            }
        }
    };

    return (
        <>
            <TopContainer>
                <Heading>{currentPoll.title}</Heading>
                {isMobile ? null : (
                    <Button
                        color={dashboardTheme.colors.red.extraLight}
                        hoverColor={dashboardTheme.colors.red.regular}
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
                    color={dashboardTheme.colors.red.extraLight}
                    hoverColor={dashboardTheme.colors.red.regular}
                    onClick={removePoll}
                    type="button"
                >
                    Remove Poll
                </StyledButton>
            ) : null}
            <Formik initialValues={currentPoll} onSubmit={(v) => editPoll(v)}>
                {() => (
                    <StyledForm>
                        <InputField name={"title"} label={"Poll label"} />
                        <StyledButton
                            color={dashboardTheme.colors.green.regular}
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
                            <DetailsCard key={category.id} expense={category} />
                        </DetailsCardContainer>
                    </Link>
                ))}
                <AddNewCategoryContainer>
                    <StyledButton
                        color={dashboardTheme.colors.primary.regular}
                        type="button"
                        onClick={addNewCategory}
                    >
                        Add New Option
                    </StyledButton>
                </AddNewCategoryContainer>
            </Grid>
        </>
    );
};

const AddNewCategoryContainer = styled.div`
    @media (min-width: ${mobileScreenSize}px) {
        display: grid;
        place-items: center;
    }
`;

const StyledButton = styled(Button)`
    width: 100%;
    @media (min-width: ${mobileScreenSize}px) {
        width: 19rem;
    }

    margin-bottom: 2rem;
`;

const StyledForm = styled(Form)`
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: ${mobileScreenSize}px) {
        grid-template-columns: 19rem;
    }
    gap: 1rem;
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: ${mobileScreenSize}px) {
        margin-right: 2rem;
    }
`;

const DetailsCardContainer = styled.a`
    height: 100%;
    width: 100%;
    cursor: pointer;
`;

export default EditCategory;
