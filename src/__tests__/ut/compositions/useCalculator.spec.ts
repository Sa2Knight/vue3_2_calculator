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
    });

    describe("右辺と左辺を入力するパターン", () => {
      test("1 2 + 3 4", () => {
        expect(calc("1", "2", "+", "3", "4")).toBe(34);
      });
      test("1 0 - 5", () => {
        expect(calc("1", "0", "-", "5")).toBe(5);
      });
      test("2 X 3", () => {
        expect(calc("2", "X", "3")).toBe(3);
      });
      test("8 / 2", () => {
        expect(calc("8", "/", "2")).toBe(2);
      });
    });

    describe("二つの値を計算するパターン", () => {
      test("1 2 + 3 4 =", () => {
        expect(calc("1", "2", "+", "3", "4", "=")).toBe(12 + 34);
      });
      test("1 0 - 5 =", () => {
        expect(calc("1", "0", "-", "5", "=")).toBe(10 - 5);
      });
      test("2 X 3 =", () => {
        expect(calc("2", "X", "3", "=")).toBe(2 * 3);
      });
      test("8 / 2 =", () => {
        expect(calc("8", "/", "2", "=")).toBe(8 / 2);
      });
    });

    describe("二つの値を計算後に続けて演算子を入力するパターン", () => {
      test("1 + 1 +", () => {
        expect(calc("1", "+", "1", "+")).toBe(1 + 1);
      });
      test("9 - 7 -", () => {
        expect(calc("9", "-", "7", "-")).toBe(9 - 7);
      });
      test("3 X 2 X", () => {
        expect(calc("3", "X", "2", "X")).toBe(3 * 2);
      });
      test("1 0 / 5 /", () => {
        expect(calc("1", "0", "/", "5", "/")).toBe(10 / 5);
      });
    });

    describe("四則演算を組み合わせるパターン", () => {
      test("1 + 1 + 1 =", () => {
        expect(calc("1", "+", "1", "+", "1", "=")).toBe(1 + 1 + 1);
      });
      test("3 + 7 - 5 =", () => {
        expect(calc("3", "+", "7", "-", "5", "=")).toBe(3 + 7 - 5);
      });
      test("2 X 1 0 / 5 =", () => {
        expect(calc("2", "X", "1", "0", "/", "5", "=")).toBe((2 * 10) / 5);
      });
    });

    describe("% を使うパターン", () => {
      test("1 0 0 %", () => {
        expect(calc("1", "0", "0", "%")).toBe(1);
      });

      test("1 0 %", () => {
        expect(calc("1", "0", "%")).toBe(0.1);
      });

      test("0 %", () => {
        expect(calc("0", "%")).toBe(0);
      });

      test("2 + 3 %", () => {
        expect(calc("2", "+", "3", "%")).toBe(0.03); // 表示中の数値を使う仕様
      });
    });

    describe("+- を使うパターン", () => {
      test("1 +-", () => {
        expect(calc("1", "+-")).toBe(-1);
      });
      test("1 +- +-", () => {
        expect(calc("1", "+-", "+-")).toBe(1);
      });
      test("1 + 2 +- =", () => {
        expect(calc("1", "+", "2", "+-", "=")).toBe(-2); // 表示中の数値を使う仕様
      });
    });
  });
});
