import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";

const Layout: React.FC = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Layout;
