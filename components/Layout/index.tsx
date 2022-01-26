import React, { useEffect, useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../../utils/theme";
import useWindowSize from "hooks/useWindowWidth";
import Sidebar from "components/Sidebar";

interface ContentProps {
    isContracted: boolean;
}

type Props = {
    isEditModeEnabled?: boolean;
};

const Layout: React.FC<Props> = ({ children, isEditModeEnabled }) => {
    const [isContracted, setIsContracted] = useState(false);
    const { width } = useWindowSize();

    useEffect(() => {
        setIsContracted(width < 920);
    }, [width < 920]);

    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Sidebar
                    isEditModeEnabled={!!isEditModeEnabled}
                    isContracted={isContracted}
                />
                <StyledMain>
                    <Content isContracted={isContracted}>{children}</Content>
                </StyledMain>
            </ThemeProvider>
        </>
    );
};

const Content = styled.div<ContentProps>`
    z-index: 0;
    width: 100%;
    min-height: 100vh;
    margin-left: ${({ isContracted }) => (isContracted ? "5rem" : "14rem")};
    padding-left: 2rem;
    background-color: white;
    transition: margin-left 200ms ease-in-out;
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
    flex-direction: row;
`;

export default Layout;
