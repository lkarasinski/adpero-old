import ReactDOM from "react-dom";
import React from "react";
import Dashboard from "../components/Templates/Dashboard";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";

describe("Dashboard", () => {
    const container = document.createElement("div");
    const Element = (
        <ThemeProvider theme={theme}>
            (
            <Dashboard />
        </ThemeProvider>
    );
    ReactDOM.render(Element, container);
    const banner = container.children[0];

    it("Check text color", () => {
        expect(container.children.length).toBe(5);
    });
});
