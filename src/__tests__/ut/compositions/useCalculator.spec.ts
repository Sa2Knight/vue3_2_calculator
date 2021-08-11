import useCalculator, { Command } from "../../../compositions/useCalculator";

describe("compositions", () => {
  describe("useCalculator", () => {
    const calc = (...commands: Command[]): number => {
      const calculator = useCalculator();
      commands.forEach((command) => calculator.sendCommand(command));
      return calculator.displayValue.value;
    };

    describe("左辺のみ入力するパターン", () => {
      test("0 0 0 1", () => {
        expect(calc("0", "0", "0", "1")).toBe(1);
      });
      test("1 2 3 4 5 6 7 8 9 0", () => {
        expect(calc("1", "2", "3", "4", "5", "6", "7", "8", "9", "0")).toBe(
          1234567890
        );
      });
      test("1 2 3 C", () => {
        expect(calc("1", "2", "3", "C")).toBe(0);
      });
      test("1 +-", () => {
        expect(calc("1", "+-")).toBe(-1);
      });
      test("1 +- +-", () => {
        expect(calc("1", "+-", "+-")).toBe(1);
      });
    });
  });
});
