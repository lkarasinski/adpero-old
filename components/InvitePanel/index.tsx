import React from 'react';
import useCreateInvite from 'hooks/useCreateInvite';
import Card from 'components-ui/Atoms/Card';
import Label from 'components-ui/Atoms/Label';
import Button from 'components-ui/Atoms/Button';
import styled from 'styled-components';
import useJourneys from 'context/JourneysContext';

type Props = {
    userEmail: string;
    journeyID: string;
};

const InvitePanel: React.FC<Props> = ({ userEmail, journeyID }) => {
    const journeyContext = useJourneys();
    if (!journeyContext) {
        console.error('useJourneys must be used within a JourneysProvider');
    }

    const { journeys } = useJourneys();
    const journey = journeys.find((j) => j.id === journeyID)?.data;
    const [linkID, createInvite, loading] = useCreateInvite(journey, userEmail);
    const copyToClipboard = React.useCallback(
        () =>
            navigator.clipboard.writeText(
                `${location.origin}/invite/${linkID}` ?? ''
            ),
        [linkID]
    );

    if (journey == undefined) {
        return <div>Journey not found</div>;
    }

    return (
        <StyledCard
        // initial={"loading"}
        // animate={loading ? "loading" : "loaded"}
        // variants={invitePanelVariants}
        >
            <StyledLabel isAccent>Invite Link</StyledLabel>
            <ButtonContainer>
                <Button
                    color={loading ? 'gray' : linkID ? 'primary' : 'gray'}
                    disabled={!linkID}
                    type="button"
                    onClick={copyToClipboard}
                >
                    Copy invite Link
                </Button>
                <Button
                    color={loading ? 'gray' : linkID ? 'primary' : 'gray'}
                    onClick={
                        loading ? () => console.log('loading') : createInvite
                    }
                >
                    Create new Link
                </Button>
            </ButtonContainer>
        </StyledCard>
    );
};

// const invitePanelVariants = {
//     loading: {
//         opacity: 0,
//     },
//     loaded: {
//         opacity: 1,
//         transition: {
//             duration: 0.2,
//         },
//     },
// };

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    gap: 2rem;
`;

const StyledLabel = styled(Label)`
    grid-column: 1 / -1;
`;

const StyledCard = styled(Card)`
    /* display: grid; */
    grid-template-columns: 1fr 1fr;
    max-width: max-content;
    gap: 2rem;
`;

export default InvitePanel;
