import ReactDOM from "react-dom";
import React from "react";
import NotLoggedInBanner from "../components/Molecules/NotLoggedInBanner";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";

describe("NotLoggedInBanner", () => {
    const message = "Test message";
    const container = document.createElement("div");
    const mockCallback = jest.fn();
    const Element = (
        <ThemeProvider theme={theme}>
            (
            <NotLoggedInBanner closeFunction={mockCallback}>
                {message}
            </NotLoggedInBanner>
        </ThemeProvider>
    );
    ReactDOM.render(Element, container);
    const banner = container.children[0];

    it("Check text color", () => {
        expect(
            getComputedStyle(banner.children[0]).getPropertyValue("color")
        ).toBe("rgb(50, 50, 50)");
    });

    it("Test click event", () => {
        banner.querySelector("div").click();
        expect(mockCallback.mock.calls.length).toEqual(1);
    });
});
