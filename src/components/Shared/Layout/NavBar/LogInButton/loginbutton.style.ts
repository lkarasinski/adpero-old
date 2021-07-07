import styled from 'styled-components';

interface Props {
	horizontal?: boolean;
}

export const Button = styled.button<Props>`
	height: 3rem;
	width: 5rem;
	background-color: transparent;
	border: 0.15rem solid black;
	border-radius: 1rem;
	cursor: pointer;
	margin-left: ${({ horizontal }) => (horizontal ? ' auto' : '0')};
	margin-right: ${({ horizontal }) => (horizontal ? ' 20px' : '0')};
`;
