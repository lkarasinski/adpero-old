import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import Navbar from "../../Organisms/Navbar";
import SidePanel from "../../Organisms/SidePanel";

interface Props {
    photoURL: string | null;
}

const Main = styled.div`
    display: flex;
    flex-direction: row;
`;
const Content = styled.div`
    width: 100%;
    padding-top: 75px;
    padding-left: 19rem;
    border-top: 2px solid #dddddd;
    border-left: 2px solid #dddddd;
`;

const Layout: React.FC<Props> = ({ children, photoURL }) => {
    return (
        <ThemeProvider theme={theme}>
            <Navbar photoURL={photoURL} />
            <Main>
                <SidePanel />
                <Content>{children}</Content>
            </Main>
        </ThemeProvider>
    );
};

export default Layout;
