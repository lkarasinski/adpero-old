import React from "react";
import Icon from "components-ui/Atoms/Icon";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface Props {
    href: string;
    icon: IconDefinition;
}

interface IStyled {
    isActive: boolean;
}

const StyledLink: React.FC<Props> = ({ children, href, icon }) => {
    const router = useRouter();
    const active = router ? (router.asPath == href ? true : false) : false;

    return (
        <Link href={href} passHref>
            <Wrapper isActive={active} as="a">
                <IconContainer isActive={active}>
                    <Icon icon={icon} />
                </IconContainer>
                {children}
            </Wrapper>
        </Link>
    );
};

const Wrapper = styled.div<IStyled>`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    width: 12rem;
    min-width: auto;
    height: 3rem;
    padding: 1rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.gray.dark};
    cursor: ${({ isActive }) => (isActive ? "auto" : "pointer")};
    background-color: ${({ isActive }) => (isActive ? "#ffffff" : "#f2f5f9")};
    filter: ${({ isActive }) =>
        isActive ? "drop-shadow(0 0 2px rgba(0, 0, 0, 0.25))" : ""};
    border-radius: ${({ theme }) => theme.borderRadius};
    user-select: none;

    transition: width 200ms ease-in-out;
    transition: background-color 100ms ease-in-out;
    transition: filter 100ms ease-out;

    :hover {
        background-color: ${({ isActive }) =>
            isActive ? "#ffffff" : "#ffffffd1"};
        filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.125));
    }
`;

const IconContainer = styled.div<IStyled>`
    display: grid;
    place-items: center;
    width: 2rem;
    font-size: 1rem;
    color: ${({ theme, isActive }) =>
        isActive ? theme.colors.primary : theme.colors.gray.dark};
`;

export default StyledLink;
