import ReactDOM from "react-dom";
import React from "react";
import Button from "../components/Atoms/Button";

describe("Button", () => {
    const message = "Test message";
    const mockCallback = jest.fn();
    const container = document.createElement("div");
    ReactDOM.render(
        <Button onClick={mockCallback} isBig primary>
            {message}
        </Button>,
        container
    );
    const button = container.querySelector("button");
    it("Display message", () => {
        expect(button.textContent).toMatch(message);
    });
    it("Check if onClick is executed", () => {
        button.click();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
    it("Check if it has correct padding", () => {
        expect(getComputedStyle(button).getPropertyValue("font-size")).toBe(
            "1.5rem"
        );
    });
    it("Check if it has correct background color", () => {
        expect(
            getComputedStyle(button).getPropertyValue("background-color")
        ).toBe("rgb(61, 94, 255)");
    });
});
