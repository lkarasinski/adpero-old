import { convertToDate } from "./convertToDate";

describe("convertToDate", () => {
    it("should convert valid string to date", () => {
        expect(convertToDate("11 15 2001").toLocaleDateString("en-GB")).toMatch(
            "15/11/2001"
        );
    });

    it("should return new date when input is undefined or null", () => {
        const currentDate = new Date().toLocaleDateString("en-GB");

        expect(convertToDate(null).toLocaleDateString("en-GB")).toMatch(
            currentDate
        );
    });

    it("should return new date when string is invalid", () => {
        const currentDate = new Date().toLocaleDateString("en-GB");

        expect(
            convertToDate("invalid date").toLocaleDateString("en-GB")
        ).toMatch(currentDate);
    });

    it("should convert valid timestamp to date", () => {
        expect(
            convertToDate({
                seconds: 1577884800,
                nanoseconds: 0,
            }).toLocaleDateString("en-GB")
        ).toMatch("01/01/2020");
    });

    it("should return input if input is a date", () => {
        const currentDate = new Date();

        expect(convertToDate(currentDate).toLocaleDateString("en-GB")).toMatch(
            currentDate.toLocaleDateString("en-GB")
        );
    });
});
