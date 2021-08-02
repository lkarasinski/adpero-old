import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import Navbar from "../Navbar";

interface Props {
    photoURL: string | null;
}

const Layout: React.FC<Props> = ({ children, photoURL }) => {
    return (
        <ThemeProvider theme={theme}>
            <Navbar photoURL={photoURL} />
            {children}
        </ThemeProvider>
    );
};

export default Layout;
