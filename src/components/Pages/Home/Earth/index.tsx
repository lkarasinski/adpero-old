import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import EarthModel from '@utils/models/Lowpoly_earth';
import {
	CanvasContainer,
	EarthHeading,
	EarthPanel,
	Highlight,
} from './earth.style';

export const Earth: React.FC = () => {
	const [width, setWidth] = useState(window.innerWidth);
	window.addEventListener('resize', () => setWidth(window.innerWidth));
	const pixelRatio = Math.max(window.devicePixelRatio, 2);

	return (
		<EarthPanel>
			<EarthHeading>
				Manage your {width < 1350 ? <br /> : null}journeys{' '}
				<Highlight>easier</Highlight>
			</EarthHeading>
			<CanvasContainer>
				<Canvas
					gl={{ antialias: true }}
					dpr={pixelRatio}
					camera={{ position: [0, -8, 0], fov: 75 }}
				>
					<Suspense fallback={null}>
						<EarthModel />
					</Suspense>
				</Canvas>
			</CanvasContainer>
		</EarthPanel>
	);
};
