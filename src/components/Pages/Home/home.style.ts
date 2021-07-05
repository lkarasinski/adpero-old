import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	place-items: center;
	@media (min-width: 950px) {
		grid-template-columns: 0.75fr 1fr;
		margin: 50px;
	}
`;

export const EarthHeading = styled.h2`
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 48px;
	line-height: 72px;
`;

export const EarthPanel = styled.div`
	display: grid;
	place-items: center;
	@media (min-width: 950px) {
		margin-left: 50px;
	}
	@media (max-width: 950px) {
		grid-row: 1/2;
		margin: 50px;
	}
`;

export const CTAPanel = styled.div`
	@media (max-width: 950px) {
		grid-row: 2/3;
	}
`;

export const Highlight = styled.span`
	color: #5671fe;
	font-weight: bold;
	position: relative;
	display: inline-block;

	::before {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 10px;
		bottom: 0;
		background: linear-gradient(90deg, #5671fe -4.22%, #4ac7ff 100%);
		border-radius: 2px;
	}
`;
