import styled from "styled-components";

const Card = styled.div`
    padding: 2rem;
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};
    border-radius: ${({ theme }) => theme.borderRadius};
`;

export default Card;
