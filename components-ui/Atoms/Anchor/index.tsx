import styled from "styled-components";

const Anchor = styled.a`
    font-size: 1rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.gray.dark};
    text-decoration: underline;
    text-decoration-thickness: 2px;
    word-break: break-word;
`;

export default Anchor;
