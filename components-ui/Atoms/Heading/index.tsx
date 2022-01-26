import styled from "styled-components";

const Heading = styled.h1`
    font-size: 2.25rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary};
`;

export default Heading;
