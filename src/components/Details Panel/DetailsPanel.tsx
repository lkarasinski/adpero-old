import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
	grid-row: 2/3;
	grid-column: 2/3;
`;

const DetailsPanel: React.FC = () => {
	return <Wrapper>Details Panel</Wrapper>;
};

export default DetailsPanel;
