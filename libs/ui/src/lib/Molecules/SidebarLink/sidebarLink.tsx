import * as React from "react";
import styled from "styled-components";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Text } from "../../Atoms/Text/text";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface SidebarLinkProps {
    href: string;
    text: string;
    currentLink: string;
    icon?: IconDefinition;
}

export const SidebarLink = ({
    href,
    text,
    currentLink,
    icon,
}: SidebarLinkProps) => {
    const isActive = currentLink === href;

    if (icon) {
        return (
            <StyledBigLink isActive={isActive}>
                <IconContainer isActive={isActive}>
                    <FontAwesomeIcon icon={icon} />
                </IconContainer>
                {text}
            </StyledBigLink>
        );
    }

    return (
        <Link href={href} passHref>
            <StyledSmallLink as={"a"} isActive={isActive}>
                {text}
            </StyledSmallLink>
        </Link>
    );
};

const StyledBigLink = styled.a<{ isActive: boolean }>`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    min-width: auto;
    height: 3rem;
    padding: 1rem;
    margin-top: 0.5rem;

    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size.small};
    font-weight: ${({ theme }) => theme.font.weight.black};
    color: ${({ theme }) => theme.colors.gray.dark};

    cursor: ${({ isActive }) => (isActive ? "auto" : "pointer")};

    background-color: ${({ theme, isActive }) =>
        isActive ? theme.colors.background : "#f2f5f9"};
    box-shadow: ${({ theme, isActive }) =>
        isActive ? theme.shadow.medium : "none"};
    border-radius: 10px;
    user-select: none;

    transition: width 200ms ease-in-out, background-color 100ms ease-in-out,
        box-shadow 100ms ease-out;

    :hover {
        background-color: ${({ theme, isActive }) =>
            isActive ? theme.colors.background : "#ffffffd1"};
        box-shadow: ${({ theme }) => theme.shadow.medium};
    }
`;

const IconContainer = styled.div<{ isActive: boolean }>`
    display: grid;
    place-items: center;
    width: 2rem;
    font-size: 1rem;
    color: ${({ theme, isActive }) =>
        isActive ? theme.colors.primary.regular : theme.colors.gray.dark};
`;

const StyledSmallLink = styled(Text)<{ isActive: boolean }>`
    display: block;
    padding: 0.35rem 0.5rem;
    margin: 0.25rem 0;
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: 900;
    text-decoration: none;
    background-color: ${({ theme, isActive }) =>
        isActive ? theme.colors.background : "transparent"};
    color: ${({ theme, isActive }) =>
        isActive ? theme.colors.gray.dark : theme.colors.gray.light};
    cursor: pointer;

    transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;

    :hover {
        background-color: ${({ theme }) => `${theme.colors.background}d1`};
        box-shadow: ${({ theme }) => theme.shadow.medium};
    }
`;

export default SidebarLink;
