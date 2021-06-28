import firebase from 'firebase';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
interface Props {
	data: firebase.firestore.DocumentData;
}

const Wrapper = styled.div`
	font-size: 1em;
	margin: 2rem;
	border: 0.4rem #9d62fd solid;
	border-radius: 1rem;
	padding: 1rem;
`;

/**
 * Brief description of the journey referenced in the docs. Displayed on the JourneyList
 * @param data - firebase journey document snapshot data
 */
const JourneyPanel: React.FC<Props> = ({ data }) => {
	return (
		<Wrapper>
			<h2>{data.data().name}</h2>
			<ul>
				{data.data().users.map((user: string, id: number) => (
					<li key={id}>{user}</li>
				))}
			</ul>
			<Link to={`/journeys/${data.ref.id}`}>More details</Link>
		</Wrapper>
	);
};

export default JourneyPanel;
