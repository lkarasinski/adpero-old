import styled from 'styled-components';
import firebase from '../../../../firebase';

import { ErrorMessage } from '../../../Shared/Text decoration/ErrorMessage';
import JourneyPanel from './JourneyPanel';
import { withRouter } from 'react-router-dom';
import { NewJourneyForm } from './NewJourneyForm';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

const Wrapper = styled.div``;

const StyledHeading = styled.h3`
	font-size: 1.4em;
	text-align: center;
	font-weight: lighter;
`;

const journeysRef = firebase.firestore().collection('journeys');

/**
 * withRouter component rendering journeys accessible to currently logged in user and a new journey form.
 */
const JourneyList = withRouter(({ history }) => {
	const [auth] = useAuthState(firebase.auth());

	const email = auth?.email ?? '';
	const dataQuery = journeysRef.where('users', 'array-contains', email);
	const [collectionData, loading] = useCollection(dataQuery);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!auth) {
		return (
			<Wrapper>
				<ErrorMessage>{`You need to be logged in to access this page.`}</ErrorMessage>
			</Wrapper>
		);
	}

	const displayJourneys = () => {
		if (collectionData) {
			return collectionData.docs.map(
				(data: firebase.firestore.DocumentData, i: number) => {
					return <JourneyPanel key={i} data={data} />;
				}
			);
		}
	};

	return (
		<Wrapper>
			<StyledHeading>Your Journeys: </StyledHeading>
			{displayJourneys()}
			<NewJourneyForm historyPush={(x: string) => history.push(x)} />
		</Wrapper>
	);
});

export default JourneyList;
