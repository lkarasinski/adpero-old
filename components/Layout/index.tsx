import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../../utils/theme";
import Sidebar from "components/Sidebar";
import useEventListener from "hooks/useEventListener";
import { useRouter } from "next/router";
import Burger from "components-ui/Atoms/Burger";
import useMobile from "hooks/useMobile";
import Text from "components-ui/Atoms/Text";
import Headroom from "react-headroom";

interface ContentProps {
    isMobile: boolean;
}

type Props = {
    isEditModeEnabled?: boolean;
};

// React.MutableRefObject<HTMLInputElement>;
type RefType = React.MutableRefObject<HTMLDivElement>;

const Layout: React.FC<Props> = ({ children, isEditModeEnabled }) => {
    const isMobile = useMobile();
    const MainRef = React.useRef() as RefType;
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        if (isMobile) {
            setIsMenuOpen(false);
        }
    }, [router.asPath]);

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
            <ThemeProvider theme={theme}>
                <StyledMain ref={MainRef}>
                    <Sidebar
                        isEditModeEnabled={!!isEditModeEnabled}
                        isMobile={isMobile}
                        isMenuOpen={isMenuOpen}
                        toggleMenu={toggleMenu}
                    />
                    <Content isMobile={isMobile}>
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
                                    <Text color="background">Adpero</Text>
                                </BurgerContainer>
                            </Headroom>
                        ) : null}
                        <MobileMargin isMobile={isMobile}>
                            {children}
                        </MobileMargin>
                    </Content>
                </StyledMain>
            </ThemeProvider>
        </>
    );
};

const BurgerContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0rem;
    padding: 0.25rem 0;
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.25);
`;

const MobileMargin = styled.div<ContentProps>`
    margin: ${({ isMobile }) => (isMobile ? "0rem 1rem" : "0")};
`;

const Content = styled.div<ContentProps>`
    z-index: 0;
    width: ${({ isMobile }) =>
        isMobile ? `calc(100%) - 1rem` : `calc(100%) - 16rem`};
    min-height: 100vh;
    margin: ${({ isMobile }) => (isMobile ? "0" : "0 0 4rem 16rem")};
    background-color: white;
    transition: margin-left 100ms ease-in-out;
`;

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

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
`;

export default Layout;
