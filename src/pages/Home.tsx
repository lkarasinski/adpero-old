import AuthContext from 'contexts/AuthProvider';
import React, { useContext } from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';

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
			<Layout>
				<Wrapper>
					<StyledHeading>
						{auth.authenticated
							? `Hello ${auth.user?.displayName}`
							: `Hello stranger 🥺`}
					</StyledHeading>
				</Wrapper>
			</Layout>
		</>
	);
};
