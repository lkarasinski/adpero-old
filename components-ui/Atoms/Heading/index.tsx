import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
    margin: 2rem 0 2rem 2rem;
    font-size: 2.25rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary};
`;

const Heading: React.FC = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default Heading;
