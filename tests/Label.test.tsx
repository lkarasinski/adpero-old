/**
 * @jest-environment jsdom
 */

import Label from "../components/Atoms/Label";
import React from "react";
import ReactDOM from "react-dom";

test("label", () => {
    const container = document.createElement("div");
    ReactDOM.render(<Label />, container);
    expect(container.textContent).toMatch("label");
});
