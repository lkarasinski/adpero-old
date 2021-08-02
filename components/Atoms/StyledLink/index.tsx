import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface Props {
    href: string;
}

const Wrapper = styled.div`
    padding: 0.5rem;
    font-size: 0.875rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray.light};
    cursor: pointer;
`;

const StyledLink: React.FC<Props> = ({ children, href }) => {
    return (
        <Link href={href} passHref prefetch>
            <Wrapper>{children}</Wrapper>
        </Link>
    );
};

export default StyledLink;
