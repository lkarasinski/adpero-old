import styled from 'styled-components';

export const SmallButton = styled.button`
	background-color: #9d62fd;
	color: white;
	margin: 0.5rem;
	border-radius: 1rem;
	font-weight: bold;
	font-size: 1em;
	width: 150px;

	padding: calc(1rem - 3px) calc(1.5rem - 3px);
	border: 3px solid transparent;

	transition: background-color 0.1s ease-in;

	:hover {
		background-color: transparent;
		color: #9d62fd;
		border: 3px solid #9d62fd;
	}
`;
