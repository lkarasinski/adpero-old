import styled from "styled-components";

const Card = styled.div`
    padding: 2rem;
    box-shadow: ${({ theme }) => `${theme.shadow} ${theme.colors.shadow}`};
    border-radius: ${({ theme }) => theme.borderRadius};
`;

export default Card;
