import React from "react";
import styled from "styled-components";
import { Card, Label } from "@adpero/ui";
import { useJourneys } from "@adpero/contexts";

type GetButtonColor = (
    participant: string
) => "primary" | "yellow" | "green" | "gray";

const getButtonColor: GetButtonColor = (participant) => {
    switch (participant) {
        case "Member":
            return "primary";
        case "Author":
            return "yellow";
        case "Editor":
            return "green";
    }
    return "gray";
};

export const ParticipantsPanel: React.FC = () => {
    const { getCurrentJourney, updateJourney } = useJourneys();
    const journey = getCurrentJourney();

    const kickParticipant = async (participant: string) => {
        if (journey) {
            await updateJourney(
                {
                    ...journey.data,
                    users: journey.data.users.filter((user) => {
                        if (user === journey.data.author) {
                            return true;
                        }
                        return user !== participant;
                    }),
                },
                journey.id
            );
        }
    };

    const getUserRole = (userEmail: string) => {
        if (journey?.data?.author === userEmail) {
            return "Author";
        }
        if (journey?.data?.editors.includes(userEmail)) {
            return "Editor";
        }
        if (journey?.data?.users.includes(userEmail)) {
            return "Member";
        }
        return "";
    };

    if (!journey) return null;

    return (
        <StyledCard>
            <StyledLabel>Participants</StyledLabel>

            {journey.data.users.map((participant: string) => (
                <ParticipantContainer key={participant}>
                    {participant}
                    <ButtonContainer>
                        <SmallButton
                            color={getButtonColor(getUserRole(participant))}
                            disabled={getUserRole(participant) === "Author"}
                        >
                            {getUserRole(participant)}
                        </SmallButton>
                        <SmallButton
                            color={
                                getUserRole(participant) === "Author"
                                    ? "gray"
                                    : "red"
                            }
                            disabled={getUserRole(participant) === "Author"}
                            onClick={() => kickParticipant(participant)}
                        >
                            Kick
                        </SmallButton>
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
    color?: "red" | "primary" | "gray" | "green" | "yellow";
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
    background-color: ${({ theme, color }) => {
        switch (color) {
            case "red":
                return theme.colors.red;
            case "primary":
                return theme.colors.primary;
            case "gray":
                return theme.colors.gray.dark;
            case "green":
                return theme.colors.green;
            case "yellow":
                return theme.colors.yellow;
        }
    }};
`;
