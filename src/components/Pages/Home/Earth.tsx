import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import EarthModel from '../../../models/Lowpoly_earth';
import styled from 'styled-components';

// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { ContactShadows, Environment, useGLTF } from '@react-three/drei';

const Container = styled.div`
	width: 800px;
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
