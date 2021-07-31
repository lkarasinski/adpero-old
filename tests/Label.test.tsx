import Label from "../components/Atoms/Label";
import React from "react";
import ReactDOM from "react-dom";

const obj = {
    a: 3,
    b: 5,
};

test("label", () => {
    const container = document.createElement("div");
    ReactDOM.render(<Label {...obj} />, container);
    expect(container.textContent).toMatch(`label - ${obj.a + obj.b}`);
});
