import React from 'react';
import { Button, SLink } from './styledComponents';

interface Props {
	id: string;
}

export const GoButton: React.FC<Props> = ({ id }) => {
	return (
		<SLink to={`/journeys/${id}`}>
			<Button>
				<span>More details</span>
				<svg
					width="13"
					height="22"
					viewBox="0 0 13 22"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0 19.0325L7.85785 11L0 2.9675L2.41912 0.5L12.7132 11L2.41912 21.5L0 19.0325Z"
						fill="white"
					/>
				</svg>
			</Button>
		</SLink>
	);
};
