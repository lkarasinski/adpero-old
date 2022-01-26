import React from "react";
import Link from "next/link";
import Text from "components-ui/Atoms/Text";
import styled from "styled-components";
import { useRouter } from "next/router";

type Props = {
    href: string;
    label: string;
};

const EditLink: React.FC<Props> = ({ href, label }) => {
    const router = useRouter();

    const active = router.asPath == href ? true : false;

    return (
        <Wrapper href={href} passHref>
            <StyledText active={active}> {label}</StyledText>
        </Wrapper>
    );
};

const Wrapper = styled(Link)`
    transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
`;

const StyledText = styled(Text)<{ active: boolean }>`
    padding: 0.35rem 0.5rem;
    margin: 0.25rem 0;
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: 0.9rem;
    background-color: ${({ theme, active }) =>
        active ? theme.colors.background : "transparent"};
    color: ${({ theme, active }) =>
        active ? theme.colors.gray.dark : theme.colors.gray.light};
    cursor: pointer;

    transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;

    :hover {
        background-color: ${({ theme }) => `${theme.colors.background}d1`};
        filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.125));
    }
`;

export default EditLink;
