import React from "react";
import useCreateInvite from "hooks/useCreateInvite";
import Card from "components-ui/Atoms/Card";
import Label from "components-ui/Atoms/Label";
import Button from "components-ui/Atoms/Button";
import styled from "styled-components";
import useJourneys from "context/JourneysContext";

type Props = {
    userEmail: string;
};

const InvitePanel: React.FC<Props> = ({ userEmail }) => {
    const { getCurrentJourney } = useJourneys();
    const journey = getCurrentJourney();
    const [linkID, createInvite, loading] = useCreateInvite(
        journey?.data,
        userEmail
    );
    const copyToClipboard = React.useCallback(
        () =>
            navigator.clipboard.writeText(
                `${location.origin}/join/${linkID}` ?? ""
            ),
        [linkID]
    );

    if (journey == undefined) {
        return null;
    }

    return (
        <Card>
            <Label isAccent>Invite Link</Label>
            <ButtonContainer>
                <Button
                    color={loading ? "gray" : linkID ? "primary" : "gray"}
                    disabled={!linkID}
                    type="button"
                    onClick={copyToClipboard}
                >
                    Copy invite Link
                </Button>
                <Button
                    color={loading ? "gray" : linkID ? "red" : "primary"}
                    onClick={createInvite}
                >
                    Create new Link
                </Button>
            </ButtonContainer>
        </Card>
    );
};

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    gap: 2rem;
`;

export default InvitePanel;
