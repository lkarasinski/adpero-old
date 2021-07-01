import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 120px;
	border-radius: 20px;
	padding: 0 20px;
	filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 25%));
	background-color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 40px 0;
`;

export const JourneyHeading = styled.h2`
	color: #3d5eff;
	font-weight: 700;
	font-size: 40px;
`;

export const SLink = styled(Link)`
	text-decoration: none;
`;

export const Button = styled.div`
	width: 220px;
	height: 66px;
	border-radius: 20px;
	padding: 37px;
	background: linear-gradient(92.27deg, #5671fe 0%, #3d5eff 100%);
	filter: drop-shadow(4px 0px 4px rgba(0, 0, 0, 25%));

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	span {
		font-size: 18px;
		font-weight: 600;
		color: white;
	}
`;
