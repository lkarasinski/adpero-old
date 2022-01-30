import React from "react";
import styled from "styled-components";
import { faCogs, faPlus } from "@fortawesome/free-solid-svg-icons";
import Logo from "components-ui/Atoms/Logo";
import Icon from "components-ui/Atoms/Icon";
import Link from "next/link";
import SidePanelButton from "components-ui/Molecules/SidePanelButton";

type Props = {
    editMode?: boolean;
    isMobile: boolean;
    isMenuOpen: boolean;
    toggleMenu: () => void;
};

const DefaultSidePanel: React.FC<Props> = ({
    children,
    editMode,
    isMobile,
    isMenuOpen,
}) => {
    return (
        <>
            <Wrapper isMenuOpen={isMenuOpen}>
                <Logo isContracted={false} />
                <StyledNav editMode={!!editMode}>{children}</StyledNav>
                {editMode ? null : (
                    <BottomContainer isMobile={isMobile}>
                        <Link href="/settings" passHref>
                            <SidePanelButton as={"a"} aria-label="Settings">
                                Settings
                                <Icon icon={faCogs} />
                            </SidePanelButton>
                        </Link>
                        <Link href="/new" passHref>
                            <SidePanelButton as={"a"} aria-label="New Journey">
                                New journey
                                <Icon icon={faPlus} />
                            </SidePanelButton>
                        </Link>
                    </BottomContainer>
                )}
            </Wrapper>
        </>
    );
};

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

export default DefaultSidePanel;
