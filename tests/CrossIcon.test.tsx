import ReactDOM from "react-dom";
import React from "react";
import CrossIcon from "../components/Atoms/CrossIcon";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";

describe("CrossIcon", () => {
    const message = "Test message";
    const mockCallback = jest.fn();
    const container = document.createElement("div");
    const Element = (
        <ThemeProvider theme={theme}>
            <CrossIcon closeFunction={mockCallback}>{message}</CrossIcon>,
        </ThemeProvider>
    );
    ReactDOM.render(Element, container);
    const cross = container.querySelector("div");
    it("Have no text content", () => {
        expect(cross.textContent).toBe("");
    });
    it("Check if onClick is executed", () => {
        cross.click();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
