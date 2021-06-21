import AuthContext from 'contexts/AuthProvider';
import React, { useContext } from 'react';
import styled from 'styled-components';

interface Props {}

const Wrapper = styled.div`
	grid-row: 2/3;
	grid-column: 2/3;
`;

const StyledHeading = styled.h1`
	font-size: 2em;
	text-align: center;
`;

export const Home: React.FC<Props> = () => {
	const auth = useContext(AuthContext);
	return (
		<>
			<Wrapper>
				<StyledHeading>
					{auth.authenticated
						? `Hello ${auth.user?.displayName?.split(' ')[0]}`
						: `Hello stranger 🥺`}
				</StyledHeading>
			</Wrapper>
		</>
	);
};
