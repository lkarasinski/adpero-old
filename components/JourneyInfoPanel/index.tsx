import Button from 'components-ui/Atoms/Button';
import Text from 'components-ui/Atoms/Text';
import EditJourneyDataPanel from 'components-ui/Organisms/EditJourneyDataPanel';
import React from 'react';
import styled from 'styled-components';
import ParticipantsPanel from '../ParticipantsPanel';
import InvitePanel from 'components/InvitePanel';

type Props = {
    deleteJourney: () => Promise<void>;
    journeyID: string;
    createNewPoll: (() => Promise<void>) | null;
    email: string;
    participants: string[];
};

const JourneyInfoPanel: React.FC<Props> = ({
    deleteJourney,
    journeyID,
    createNewPoll,
    email,
    participants,
}) => {
    return (
        <>
            <Button color="red" type="button" onClick={deleteJourney}>
                Delete journey
            </Button>
            <Container>
                <EditJourneyDataPanel errors={{}} />

                {journeyID.startsWith('offline') ? null : (
                    <OnlinePanel>
                        <InvitePanel userEmail={email} journeyID={journeyID} />
                        <ParticipantsPanel participants={participants} />
                    </OnlinePanel>
                )}
            </Container>
            {createNewPoll ? (
                <div>
                    <Text>New Poll</Text>
                    <button onClick={() => createNewPoll()}>Create</button>
                </div>
            ) : null}
        </>
    );
};

const OnlinePanel = styled.div`
    width: max-content;
    margin-left: 2rem;
`;

const Container = styled.div`
    display: flex;
`;

export default JourneyInfoPanel;
