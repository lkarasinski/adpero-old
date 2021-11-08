import React from "react";
import styled from "styled-components";
import Link from "next/link";

interface Props {
    isContracted: boolean;
}

const Wrapper = styled.a`
    font-size: 2rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary};
`;

const Logo: React.FC<Props> = ({ isContracted }) => {
    return (
        <Link href="/" passHref>
            <Wrapper>{isContracted ? "A" : "Adpero"}</Wrapper>
        </Link>
    );
};

export default Logo;
