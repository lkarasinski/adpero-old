import ReactDOM from "react-dom";
import React from "react";
import Heading from "../components/Atoms/Heading";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";

describe("Heading", () => {
    const message = "Test message";

    it("Check default color", () => {
        const container = document.createElement("div");
        const Element = (
            <ThemeProvider theme={theme}>
                (<Heading>{message}</Heading>
            </ThemeProvider>
        );
        ReactDOM.render(Element, container);
        const heading = container.children[0];
        expect(heading.textContent).toBe(message);
    });
});
