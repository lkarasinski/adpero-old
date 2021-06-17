import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import firebase from './../../firebase';
interface Props {
	data: {
		[key: string]: any;
	};
}

const Wrapper = styled.div`
	font-size: 1em;
	margin: 2rem;
	border: 0.4rem #6730cf solid;
	border-radius: 1rem;
	padding: 1rem;
`;

const JourneyPanel: React.FC<Props> = ({ data }) => {
	return (
		<Wrapper>
			<h2>{data.name}</h2>
			<ul>
				{data.users.map((user: string) => (
					<li>{user}</li>
				))}
			</ul>
			<Link to={`/journeys/${data.docId}`}>Check</Link>
		</Wrapper>
	);
};

export default JourneyPanel;
