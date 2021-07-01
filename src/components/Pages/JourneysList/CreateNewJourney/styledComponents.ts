import styled from 'styled-components';
import { InputField } from 'components/Shared/Expenses/ExpenseForm/InputField';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 275px 54px;
	grid-template-rows: 54px 54px;
	gap: 26px;
`;

export const Heading = styled.h3`
	font-weight: 500;
	font-size: 36px;

	grid-column: 1/3;
`;

export const Span = styled.span`
	color: #5671fe;
`;

export const Input = styled(InputField)`
	grid-area: 'i';
`;

export const Button = styled.button`
	width: 54px;
	height: 54px;
	border-radius: 10px;
	background-color: #5671fe;
	border: none;
	cursor: pointer;
	grid-area: 'b';
	display: grid;
	place-items: center;
`;
