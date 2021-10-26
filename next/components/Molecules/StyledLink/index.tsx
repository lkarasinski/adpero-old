import React from "react";
import Icon from "components/Atoms/Icon";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface Props {
    href: string;
    icon: IconDefinition;
    isContracted: boolean;
}

interface IStyled {
    isActive: boolean;
    isContracted: boolean;
}

const Wrapper = styled.div<IStyled>`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    width: ${({ isContracted }) => (isContracted ? "3rem" : "12rem")};
    height: 3rem;
    padding: 1rem;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    font-weight: 900;
    color: ${({ theme, isActive }) =>
        isActive ? theme.colors.gray.dark : theme.colors.gray.light};
    cursor: pointer;
    background-color: ${({ isActive }) => (isActive ? "#ffffff" : "#f2f5f9")};
    filter: ${({ isActive }) =>
        isActive ? "drop-shadow(0 0 2px rgba(0, 0, 0, 0.25))" : ""};
    border-radius: ${({ theme }) => theme.borderRadius};

    transition: width 200ms ease-in-out;
`;

const IconContainer = styled.div<IStyled>`
    display: grid;
    place-items: center;
    width: 2rem;
    color: ${({ theme, isActive }) =>
        isActive ? theme.colors.primary : theme.colors.gray.light};
`;

const StyledLink: React.FC<Props> = ({
    children,
    href,
    icon,
    isContracted,
}) => {
    const router = useRouter();
    const active = router ? (router.pathname == href ? true : false) : false;

    return (
        <Link href={href} passHref>
            <Wrapper isContracted={isContracted} isActive={active}>
                <IconContainer isContracted={isContracted} isActive={active}>
                    <Icon icon={icon} />
                </IconContainer>
                {!isContracted && children}
            </Wrapper>
        </Link>
    );
};

export default StyledLink;
