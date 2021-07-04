import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import EarthModel from '../../../models/Lowpoly_earth';

// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { ContactShadows, Environment, useGLTF } from '@react-three/drei';

export const Earth: React.FC = () => {
	return (
		<>
			<Canvas camera={{ position: [-5, 4, 4], fov: 40 }}>
				<Suspense fallback={null}>
					<EarthModel />
				</Suspense>
			</Canvas>
			d
		</>
	);
};
