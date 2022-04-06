import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { useEventListener } from "usehooks-ts";
import Headroom from "react-headroom";
import Sidebar from "../Sidebar";
import { useRouter } from "next/router";
import { useMobile } from "@adpero/hooks";
import { Text, Burger } from "@adpero/ui";
import { dashboardTheme } from "@adpero/themes";
import { mobileScreenSize } from "@adpero/constants";

export type LayoutProps = {
    isEditModeEnabled?: boolean;
    children?: React.ReactNode;
};

type RefType = React.MutableRefObject<HTMLDivElement>;

export const Layout = ({ children, isEditModeEnabled }: LayoutProps) => {
    const isMobile = useMobile();
    const MainRef = React.useRef() as RefType;
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        if (isMobile) {
            setIsMenuOpen(false);
        }
    }, [router.asPath, isMobile]);

    React.useEffect(() => {
        setIsMenuOpen(!isMobile);
    }, [isMobile]);

    const toggleMenu = () => setIsMenuOpen((v) => !v);

    useEventListener(
        "click",
        () => {
            if (isMenuOpen && isMobile) {
                setIsMenuOpen(false);
            }
        },
        MainRef
    );

    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={dashboardTheme}>
                <StyledMain ref={MainRef}>
                    <Sidebar
                        isEditModeEnabled={!!isEditModeEnabled}
                        isMenuOpen={isMenuOpen}
                        toggleMenu={toggleMenu}
                    />
                    <Content>
                        {isMobile ? (
                            <Headroom
                                style={{
                                    width: "100vw",
                                }}
                            >
                                <BurgerContainer
                                    onClick={toggleMenu}
                                    tabIndex={-1}
                                    role="button"
                                    onKeyDown={toggleMenu}
                                >
                                    <Burger />
                                    <Text color="lightPrimary">Adpero</Text>
                                </BurgerContainer>
                            </Headroom>
                        ) : null}
                        <MobileMargin>{children}</MobileMargin>
                    </Content>
                </StyledMain>
            </ThemeProvider>
        </>
    );
};
const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
}`;

const BurgerContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0rem;
    padding: 0.25rem 0;
    background: ${({ theme }) => theme.colors.background};
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.0625);
`;

const MobileMargin = styled.div`
    margin: 0;
    @media (max-width: ${mobileScreenSize}px) {
        margin: 0rem 1rem;
    }
`;

const Content = styled.div`
    z-index: 0;
    margin: 0 0 4rem 16rem;
    width: calc(100%) - 16rem;
    min-height: 100vh;
    background-color: white;
    transition: margin-left 100ms ease-in-out;

    @media (max-width: ${mobileScreenSize}px) {
        width: calc(100%) - 1rem;
        margin: 0;
    }
`;

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
`;
