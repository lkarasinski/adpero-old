import styled from "styled-components";

const Card = styled.div`
    padding: 2rem;
    box-shadow: 0px 11px 38px 0px ${({ theme }) => theme.colors.shadow};
    border-radius: ${({ theme }) => theme.borderRadius};
`;

export default Card;
