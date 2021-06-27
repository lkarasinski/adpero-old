import React from 'react';
import { leaveJourney } from '../../utilities/functions/leaveJourney';
import firebase from 'firebase';

interface Props {
	id: string;
	auth: firebase.User | null | undefined;
}

export const LeaveJourneyButton: React.FC<Props> = ({ id, auth }) => {
	return <button onClick={() => leaveJourney(id, auth)}>LEAVE</button>;
};
