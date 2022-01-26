import Card from "components-ui/Atoms/Card";
import Label from "components-ui/Atoms/Label";
import React from "react";
import styled from "styled-components";

type Props = {
    participants: string[] | undefined;
};

const ParticipantsPanel: React.FC<Props> = ({ participants }) => {
    if (!participants) return null;

    return (
        <StyledCard>
            <StyledLabel isAccent>Participants</StyledLabel>
            {participants.map((participant: string) => (
                <ParticipantContainer key={participant}>
                    {participant}
                    <ButtonContainer>
                        <SmallButton color="primary">Member</SmallButton>
                        <SmallButton color="red">Kick</SmallButton>
                    </ButtonContainer>
                </ParticipantContainer>
            ))}
        </StyledCard>
    );
};

const StyledCard = styled(Card)`
    width: max-content;
`;

const StyledLabel = styled(Label)`
    margin-bottom: 1rem;
`;

const ParticipantContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray.dark};
`;

type ButtonType = {
    color?: "red" | "primary" | "gray" | "green";
};

const ButtonContainer = styled.div`
    margin-left: auto;
`;

const SmallButton = styled.button<ButtonType>`
    border: none;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    padding: 0.25rem 1rem;
    margin: 0.5rem;
    min-width: 5.5rem;
    font-weight: 900;
    color: white;
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
        }
    }};
`;

export default ParticipantsPanel;
