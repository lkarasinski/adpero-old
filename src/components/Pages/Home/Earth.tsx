import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import EarthModel from '../../../models/Lowpoly_earth';
import styled from 'styled-components';

const Container = styled.div`
	width: 600px;
	height: 600px;
	margin: auto;
`;

export const Earth: React.FC = () => {
	return (
		<Container>
			<Canvas camera={{ position: [0, -8, 0] }}>
				<Suspense fallback={null}>
					<EarthModel />
				</Suspense>
			</Canvas>
		</Container>
	);
};
