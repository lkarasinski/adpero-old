import React from "react";
import Icon from "components/Atoms/Icon";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface Props {
    href: string;
    icon: IconDefinition;
}

interface IStyled {
    active: boolean;
}

const Wrapper = styled.div<IStyled>`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    width: 12rem;
    padding: 1rem;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    font-weight: 900;
    color: ${({ theme, active }) =>
        active ? theme.colors.gray.dark : theme.colors.gray.light};
    cursor: pointer;
    background-color: ${({ active }) => (active ? "#ffffff" : "#f2f5f9")};
    filter: ${({ active }) =>
        active ? "drop-shadow(0 0 2px rgba(0, 0, 0, 0.25))" : ""};
    border-radius: ${({ theme }) => theme.borderRadius};
`;

const IconContainer = styled.div<IStyled>`
    display: grid;
    place-items: center;
    width: 2rem;
    color: ${({ theme, active }) =>
        active ? theme.colors.primary : theme.colors.gray.light};
`;

const StyledLink: React.FC<Props> = ({ children, href, icon }) => {
    const router = useRouter();
    const active = router ? (router.pathname == href ? true : false) : false;

    return (
        <Link href={href} passHref>
            <Wrapper active={active}>
                <IconContainer active={active}>
                    <Icon icon={icon} />
                </IconContainer>
                {children}
            </Wrapper>
        </Link>
    );
};

export default StyledLink;
