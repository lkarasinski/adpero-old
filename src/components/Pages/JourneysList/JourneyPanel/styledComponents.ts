import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 716px;
	height: 450px;
	border-radius: 10px;
	filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 25%));
	background-color: white;
	margin: 54px;
	padding: 17px;
`;

export const DetailsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 152px 152px;
	/* gap: 30px; */
`;

export const DescriptionContainer = styled.div`
	grid-row: 1/3;
	grid-column: 1/3;
	background-color: #ffffff;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 25%));
	border-radius: 10px;
	padding: 10px;
	width: 442px;
`;
export const CostsContainer = styled.div`
	padding: 10px;
	grid-row: 1/2;
	grid-column: 3/4;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 25%));
	border-radius: 10px;

	margin-left: 17px;
	margin-bottom: 15px;
	background-color: white;
`;
export const UsersContainer = styled.div`
	padding: 10px;
	grid-row: 2/3;
	grid-column: 3/4;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 25%));
	border-radius: 10px;
	background-color: white;
	margin-top: 15px;
	margin-left: 17px;
`;

export const JourneyHeading = styled.h2`
	color: #3d5eff;
	font-weight: 700;
	font-size: 36px;
	text-align: center;
`;

export const DetailHeading = styled.h3`
	color: #5671fe;
	font-weight: 700;
	font-size: 21px;
	text-align: center;
`;

export const DetailDescription = styled.p`
	font-size: 18px;
`;

export const DetailListElement = styled.li`
	font-size: 12px;
	margin-left: 10px;
	list-style-type: '- ';
`;

export const GoButton = styled.div`
	width: 42px;
	height: 42px;
	border-radius: 50%;
	background-color: #4ac7ff;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 25%));
	margin: 15px 0 17px auto;
	display: grid;
	place-items: center;
`;
