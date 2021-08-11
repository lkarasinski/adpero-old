import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import useWindowWidth from "utils/functions/useWindowWidth";
import theme from "../../../utils/theme";
import SidePanel from "../../Organisms/SidePanel";

interface IContent {
    leftMargin: boolean;
}

const Main = styled.div`
    display: flex;
    flex-direction: row;
`;
const Content = styled.div<IContent>`
    z-index: 10;
    width: 100%;
    min-height: 100vh;
    padding-left: 2rem;
    margin-left: ${({ leftMargin }) => (leftMargin ? "14.3125rem" : "0rem")};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};
`;

const Layout: React.FC = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showContent, setShowContent] = useState(false);

    const width = useWindowWidth(setShowContent);

    useEffect(() => {
        setShowSidebar(width >= 920);
    }, [width]);

    return (
        <ThemeProvider theme={theme}>
            {showSidebar && <SidePanel />}
            <Main>
                <Content leftMargin={showSidebar}>
                    {showContent && children}
                </Content>
            </Main>
        </ThemeProvider>
    );
};

export default Layout;
