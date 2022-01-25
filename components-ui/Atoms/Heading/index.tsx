import styled from 'styled-components';

type Props = {
    hasLeftMargin?: boolean;
};

const Heading = styled.h1<Props>`
    margin-left: ${({ hasLeftMargin }) => (hasLeftMargin ? '2rem' : '0')};
    font-size: 2.25rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary};
`;

export default Heading;
