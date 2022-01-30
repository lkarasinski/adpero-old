import React from "react";
import useCreateInvite from "hooks/useCreateInvite";
import Card from "components-ui/Atoms/Card";
import Label from "components-ui/Atoms/Label";
import Button from "components-ui/Atoms/Button";
import Text from "components-ui/Atoms/Text";
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
    const copyToClipboard = React.useCallback(() => {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(
                `${location.origin}/join/${linkID}`
            );
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = `${location.origin}/join/${linkID}`;
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            return new Promise((res, rej) => {
                document.execCommand("copy") ? res("") : rej("");
                textArea.remove();
            });
        }
    }, [linkID]);

    if (journey == undefined) {
        return null;
    }

    return (
        <Card>
            <Label isAccent>Invite Link</Label>
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
            <div onClick={copyToClipboard} tabIndex={-1}>
                <StyledText>{`${location.origin}/join/${linkID}`}</StyledText>
            </div>
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
    gap: 2rem;
`;

const StyledText = styled(Text)`
    margin: 1rem 0;
    overflow-wrap: break-word;
`;

export default InvitePanel;
