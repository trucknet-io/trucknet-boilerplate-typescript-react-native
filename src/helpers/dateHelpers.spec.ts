import { timeToFraction } from "./dateHelpers";

describe("timeToFraction", () => {
  test("It should return 2 for 0200", () => {
    expect(timeToFraction("0200")).toBe(2);
  });

  test("It should return 2.8333333333333335 for 0250", () => {
    expect(timeToFraction("0250")).toBe(2.8333333333333335);
  });

  test("It should return 3.666666666666667 for 0340", () => {
    expect(timeToFraction("0340")).toBe(3.666666666666667);
  });

  test("It should return 17 for 1720", () => {
    expect(timeToFraction("1720")).toBe(17.333333333333332);
  });

  test("It should return 0.5 for 0030", () => {
    expect(timeToFraction("0030")).toBe(0.5);
  });

  test("It should throw an error if time string is not 4 chars", () => {
    expect(() => timeToFraction("030")).toThrowError();
    expect(() => timeToFraction("00")).toThrowError();
    expect(() => timeToFraction("0")).toThrowError();
    expect(() => timeToFraction("32430")).toThrowError();
    expect(() => timeToFraction("324390")).toThrowError();
  });
});
