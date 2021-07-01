import firebase from 'firebase';
import React from 'react';
import { JourneyHeading, Wrapper } from './styledComponents';
import { GoButton } from './GoButton';
interface Props {
	data: firebase.firestore.DocumentData;
}

/**
 * Brief description of the journey referenced in the docs. Displayed on the JourneyList
 * @param data - firebase journey document snapshot data
 */
const JourneyPanel: React.FC<Props> = ({ data }) => {
	return (
		<Wrapper>
			<JourneyHeading>{data.data().name}</JourneyHeading>
			<GoButton id={data.ref.id} />
		</Wrapper>
	);
};

export default JourneyPanel;
