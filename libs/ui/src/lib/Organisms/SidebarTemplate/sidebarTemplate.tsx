import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Button from "../../Atoms/Button/button";
import Heading from "../../Atoms/Heading/heading";
import { faCogs, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dashboardTheme } from "@adpero/themes";

export type SidebarTemplateProps = {
    editMode?: boolean;
    isMobile: boolean;
    isMenuOpen: boolean;
    toggleMenu: () => void;
};

export const SidebarTemplate: React.FC<SidebarTemplateProps> = ({
    children,
    editMode,
    isMobile,
    isMenuOpen,
}) => {
    return (
        <Wrapper isMenuOpen={isMenuOpen}>
            <Link href="/">
                <StyledHeading
                    as={"a"}
                    color={dashboardTheme.colors.primary.regular}
                >
                    Adpero
                </StyledHeading>
            </Link>
            <StyledNav editMode={!!editMode}>{children}</StyledNav>
            {editMode ? null : (
                <BottomContainer isMobile={isMobile}>
                    <Link href="/settings" passHref>
                        <StyledButton
                            color={dashboardTheme.colors.gray.dark}
                            as={"a"}
                            aria-label="Settings"
                        >
                            Settings
                            <FontAwesomeIcon icon={faCogs} />
                        </StyledButton>
                    </Link>
                    <Link href="/new" passHref>
                        <StyledButton
                            as={"a"}
                            aria-label="New Journey"
                            color={dashboardTheme.colors.primary.regular}
                        >
                            New journey
                            <FontAwesomeIcon icon={faPlus} />
                        </StyledButton>
                    </Link>
                </BottomContainer>
            )}
        </Wrapper>
    );
};

const StyledButton = styled(Button)`
    text-decoration: none;
    gap: 8px;
`;

const StyledHeading = styled(Heading)`
    text-decoration: none;
    cursor: pointer;
`;

const Wrapper = styled.div<{ isMenuOpen: boolean }>`
    position: fixed;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 14rem;
    height: 100vh;
    padding: 2rem 1rem;
    background-color: #f2f5f9;
    box-shadow: ${({ theme }) => `${theme.shadow} ${theme.colors.shadow}`};
    transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1);

    transform: ${({ isMenuOpen }) =>
        isMenuOpen ? "translateX(0)" : "translateX(-100%)"};
`;

const StyledNav = styled.nav<{ editMode: boolean }>`
    margin-top: ${({ editMode }) => (editMode ? "2rem" : "5.25rem")};
`;

const BottomContainer = styled.div<{ isMobile: boolean }>`
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: ${({ isMobile }) => (isMobile ? "3rem" : "0")};
`;

export default SidebarTemplate;
