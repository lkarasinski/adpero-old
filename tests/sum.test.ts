// const sum = require("../functions/sum");
import sum from "../functions/sum";

test("properly adds two numbers", () => {
    expect(sum(1, 2)).toBe(3);
});
