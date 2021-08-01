import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
    margin: 0;
    font-size: 1rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.gray.light};
`;

const Text: React.FC = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default Text;
