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

  describe("When it receives NaN and NaN", () => {
    test("Then it should returns false", () => {
      const valueA = NaN;
      const valueB = NaN;
      const expectedResult = false;

      const result = equals(valueA, valueB);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives 0 and -0", () => {
    test("Then it should returns true", () => {
      const valueA = 0;
      const valueB = -0;
      const expectedResult = true;

      const result = equals(valueA, valueB);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives -0 and 0", () => {
    test("Then it should returns true", () => {
      const valueA = -0;
      const valueB = 0;
      const expectedResult = true;

      const result = equals(valueA, valueB);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives 1 and '1'", () => {
    test("Then it should returns false", () => {
      const valueA = 1;
      const valueB = "1";
      const expectedResult = false;

      const result = equals(valueA, valueB);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives true and false", () => {
    test("Then it should returns false", () => {
      const valueA = true;
      const valueB = false;
      const expectedResult = false;

      const result = equals(valueA, valueB);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives false and false", () => {
    test("Then it should returns true", () => {
      const valueA = false;
      const valueB = false;
      const expectedResult = true;

      const result = equals(valueA, valueB);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives 'Water' and 'oil'", () => {
    test("Then it should returns false", () => {
      const valueA = "Water";
      const valueB = "oil";
      const expectedResult = false;

      const result = equals(valueA, valueB);

      expect(result).toBe(expectedResult);
    });
  });
});
