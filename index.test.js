import equals from "./index.js";

describe("Given a comparision function", () => {
  describe("When it receives 1 and 1", () => {
    test("Then it should returns true", () => {
      const valueA = 1;
      const valueB = 1;
      const expectedResult = true;

      const result = equals(valueA, valueB);

      expect(result).toBe(expectedResult);
    });
  });
});
