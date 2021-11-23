import React, { useEffect, useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import useWindowWidth from "hooks/useWindowWidth";
import theme from "../../utils/theme";
import SidePanel from "../../components-ui/Organisms/SidePanel";

interface ContentProps {
    isContracted: boolean;
}

const Main = styled.div`
    display: flex;
    flex-direction: row;
`;

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
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;

type Props = {
    auth: any;
};

const Layout: React.FC<Props> = ({ children, auth }) => {
    const [isContracted, setIsContracted] = useState(false);
    const [showContent, setShowContent] = useState(false);

    const [width, loading] = useWindowWidth(setShowContent);

    useEffect(() => {
        setIsContracted(width < 920);
    }, [width]);

    if (loading) return null;

    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <SidePanel isContracted={isContracted} />
                <Main>
                    <Content isContracted={isContracted}>
                        {showContent && children}
                    </Content>
                </Main>
            </ThemeProvider>
        </>
    );
};

export default Layout;
