import React from "react";
import styled from "styled-components";
import { faCogs, faPlus } from "@fortawesome/free-solid-svg-icons";
import Logo from "components-ui/Atoms/Logo";
import Icon from "components-ui/Atoms/Icon";
import Link from "next/link";
import SidePanelButton from "components-ui/Molecules/SidePanelButton";

type Props = {
    isContracted: boolean;
    editMode?: boolean;
};

const DefaultSidePanel: React.FC<Props> = ({
    isContracted,
    children,
    editMode,
}) => {
    return (
        <Wrapper isContracted={isContracted}>
            <Logo isContracted={isContracted} />
            <StyledNav editMode={!!editMode}>{children}</StyledNav>
            {editMode ? null : (
                <BottomContainer>
                    <Link href="/settings" passHref>
                        <SidePanelButton
                            aria-label="Settings"
                            isContracted={isContracted}
                        >
                            {!isContracted && "Settings"}
                            <Icon icon={faCogs} />
                        </SidePanelButton>
                    </Link>
                    <Link href="/new" passHref>
                        <SidePanelButton
                            aria-label="New Journey"
                            color="primary"
                            isContracted={isContracted}
                        >
                            {!isContracted && "New journey"}
                            <Icon icon={faPlus} />
                        </SidePanelButton>
                    </Link>
                </BottomContainer>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div<Props>`
    position: fixed;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: ${({ isContracted }) => (isContracted ? "5rem" : "14rem")};
    height: 100vh;
    padding: 2rem 1rem;
    background-color: #f2f5f9;
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};

    transition: max-width 200ms ease-in-out;
`;

const StyledNav = styled.nav<{ editMode: boolean }>`
    margin-top: ${({ editMode }) => (editMode ? "2rem" : "5.25rem")};
`;

const BottomContainer = styled.div`
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export default DefaultSidePanel;
