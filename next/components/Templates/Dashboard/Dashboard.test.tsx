import ReactDOM from "react-dom";
import React from "react";
import Dashboard from ".";
import { ThemeProvider } from "styled-components";
import theme from "../../../utils/theme";
import getMockAuthUser from "../../../tests/helpers/getMockAuthUser";
import { withAuthUser } from "next-firebase-auth";

jest.mock("next-firebase-auth");

const polls = [
    { label: "Apartement", detail: "Poznań" },
    { label: "Apartement", detail: "Poznań" },
    { label: "Apartement", detail: "Poznań" },
];

const recentlyChanged = [
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
];

const journeys = [
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
    {
        label: "Poznań",
        details: ["Apartament", "Transport", "Komunikacja Miejska"],
    },
];

describe("Dashboard", () => {
    it("Shows banner when user is not logged in", () => {
        const user = getMockAuthUser(false);
        const getWrapperComponent = (wrappedComponent) => wrappedComponent;
        withAuthUser.mockImplementation(() => getWrapperComponent);
        const container = document.createElement("div");

        const Element = (
            <ThemeProvider theme={theme}>
                <Dashboard
                    userID={user.id}
                    polls={polls}
                    journeys={journeys}
                    recentlyChangedJourneys={recentlyChanged}
                />
            </ThemeProvider>
        );
        ReactDOM.render(Element, container);
        expect(container.children.length).toBe(5);
    });
    it("Shows no banner when user is logged in", () => {
        const user = getMockAuthUser(true);
        const getWrapperComponent = (wrappedComponent) => wrappedComponent;
        withAuthUser.mockImplementation(() => getWrapperComponent);
        const container = document.createElement("div");
        user.id = "mido";
        const Element = (
            <ThemeProvider theme={theme}>
                <Dashboard
                    userID={user.id}
                    polls={polls}
                    journeys={journeys}
                    recentlyChangedJourneys={recentlyChanged}
                />
            </ThemeProvider>
        );
        ReactDOM.render(Element, container);
        expect(container.children.length).toBe(4);
    });
});
