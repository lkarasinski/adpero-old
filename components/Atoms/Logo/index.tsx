import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.a`
    font-size: 2rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary};
`;

const Logo: React.FC = () => {
    return (
        <Link href="/" passHref>
            <Wrapper>Adpero</Wrapper>
        </Link>
    );
};

export default Logo;
