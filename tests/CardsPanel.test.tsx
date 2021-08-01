import ReactDOM from "react-dom";
import React from "react";
import CardsPanel from "../components/Organisms/CardsPanel";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";

const pollsValues = [
    {
        label: "Poznań",
        detail: "Apartament",
    },
    {
        label: "Poznań",
        detail: "Apartament",
    },
    {
        label: "Poznań",
        detail: "Apartament",
    },
    {
        label: "Poznań",
        detail: "Apartament",
    },
    {
        label: "Poznań",
        detail: "Apartament",
    },
    {
        label: "Poznań",
        detail: "Apartament",
    },
];

const journeysValues = [
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Test1"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Test2"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Test3"],
    },
];
describe("CardsPanel", () => {
    it("Show correct amount of panels in the grid", () => {
        const container = document.createElement("div");
        const Element = (
            <ThemeProvider theme={theme}>
                (<CardsPanel label={"Jest label"} elements={pollsValues} />
            </ThemeProvider>
        );
        ReactDOM.render(Element, container);
        const panel = container.children[0].children[1];
        expect(panel.children.length).toBe(pollsValues.length);
    });
    it("Show JourneyCard", () => {
        const container = document.createElement("div");
        const Element = (
            <ThemeProvider theme={theme}>
                (<CardsPanel label={"Jest label"} elements={journeysValues} />
            </ThemeProvider>
        );
        ReactDOM.render(Element, container);
        const panel = container.children[0].children[1];
        const label = panel.children[0];
        expect(label.textContent).toBe(
            journeysValues[0].label + journeysValues[0].details.join("")
        );
    });
});
