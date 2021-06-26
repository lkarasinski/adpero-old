import styled from 'styled-components';

export const TinyButton = styled.button`
	background-color: #9d62fd;
	color: white;
	margin: 0.5rem;
	border-radius: 1rem;
	font-weight: bold;
	font-size: 0.8em;

	padding: calc(0.3rem - 3px) calc(0.5rem - 3px);
	border: 3px solid transparent;

	transition: background-color 0.1s ease-in;

	:hover {
		background-color: transparent;
		color: #9d62fd;
		border: 3px solid #9d62fd;
	}
`;
