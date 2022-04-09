import React from "react";
import styled from "styled-components";
import { Card, Label } from "@adpero/ui";
import { useAuth, useJourneys } from "@adpero/contexts";
import { dashboardTheme } from "@adpero/themes";
import {
    getUserRole,
    kickParticipant,
    getMemberButtonColor,
} from "@adpero/functions";

export const ParticipantsPanel: React.FC = () => {
    const { getCurrentJourney, updateJourney } = useJourneys();
    const { user } = useAuth();
    const journey = getCurrentJourney();
    const isUserTheAuthor = user?.email === journey?.data.author;

    if (!journey) return null;

    const kickParticipantHandler = async (participant: string) => {
        await kickParticipant({
            participant,
            journey,
            updateJourney,
            isUserTheAuthor,
        });
    };

    return (
        <StyledCard>
            <StyledLabel>Participants</StyledLabel>
            {journey.data.users.map((participant: string) => (
                <ParticipantContainer key={participant}>
                    {participant}
                    <ButtonContainer>
                        <SmallButton
                            color={getMemberButtonColor(
                                getUserRole(journey, participant)
                            )}
                            disabled={
                                getUserRole(journey, participant) === "Author"
                            }
                        >
                            {getUserRole(journey, participant)}
                        </SmallButton>
                        {isUserTheAuthor ? (
                            <SmallButton
                                color={dashboardTheme.colors.red.regular}
                                disabled={
                                    getUserRole(journey, participant) ===
                                    "Author"
                                }
                                onClick={() =>
                                    kickParticipantHandler(participant)
                                }
                            >
                                Kick
                            </SmallButton>
                        ) : null}
                    </ButtonContainer>
                </ParticipantContainer>
            ))}
        </StyledCard>
    );
};

const StyledCard = styled(Card)`
    max-width: 35rem;
`;

const StyledLabel = styled(Label)`
    margin-bottom: 1rem;
`;

const ParticipantContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray.dark};
    margin-top: 1rem;
    word-break: break-word;
`;

type ButtonType = {
    color?: string;
    disabled?: boolean;
};

const ButtonContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const SmallButton = styled.button<ButtonType>`
    border: none;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    padding: 0.25rem 1rem;
    min-width: 5.5rem;
    font-weight: 900;
    color: white;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    background-color: ${({ color }) => color};
`;
