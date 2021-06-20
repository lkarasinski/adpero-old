import styled from 'styled-components';

export const SmallInput = styled.input`
	margin: 0.5rem;
	border-radius: 1rem;
	width: min(400px, 50%);
	font-size: 1em;

	padding: calc(1rem - 3px) calc(1.5rem - 3px);
	border: 3px solid #6730cf;

	transition: background-color 0.1s ease-in;
`;
