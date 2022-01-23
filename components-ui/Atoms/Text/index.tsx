import React from 'react';
import styled from 'styled-components';

interface Props {
    isSmall?: boolean;
    color?: 'light' | 'dark' | 'red';
}

const Wrapper = styled.p<Props>`
    margin: 0;
    font-size: ${({ isSmall }) => (isSmall ? '0.75rem' : '1rem')};
    font-weight: 800;
    word-break: break-word;
    color: ${({ color, theme }) => {
        switch (color) {
            case 'dark':
                return theme.colors.gray.dark;
            case 'red':
                return theme.colors.red;
            default:
                return theme.colors.gray.light;
        }
    }};
`;

const Text: React.FC<Props> = ({ children, ...props }) => {
    return <Wrapper {...props}>{children}</Wrapper>;
};

export default Text;
