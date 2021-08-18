import ReactDOM from "react-dom";
import React from "react";
import Text from "../components/Atoms/Text";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";

describe("Text", () => {
    const message = "Test message";

    it("Check default color", () => {
        const container = document.createElement("div");
        const Element = (
            <ThemeProvider theme={theme}>
                (<Text>{message}</Text>
            </ThemeProvider>
        );
        ReactDOM.render(Element, container);
        const text = container.children[0];
        expect(getComputedStyle(text).getPropertyValue("color")).toBe(
            "rgb(103, 103, 103)"
        );
    });

    it("Check dark color", () => {
        const container = document.createElement("div");
        const Element = (
            <ThemeProvider theme={theme}>
                (<Text isDark>{message}</Text>
            </ThemeProvider>
        );
        ReactDOM.render(Element, container);
        const text = container.children[0];
        expect(getComputedStyle(text).getPropertyValue("color")).toBe(
            "rgb(50, 50, 50)"
        );
    });
});
