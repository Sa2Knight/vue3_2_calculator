type Operator = "+" | "-" | "X" | "/";

export class Formula {
  leftValue: string;
  operator: Operator | null;
  rightValue: string | null;

  constructor() {
    this.leftValue = "0";
    this.operator = null;
    this.rightValue = null;
  }

  currentValue() {
    return this.rightValue === null ? this.leftValue : this.rightValue;
  }

  clear(initialValue: number = 0) {
    this.leftValue = `${initialValue}`;
    this.operator = null;
    this.rightValue = null;
  }

  appendValue(v: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9") {
    const append = (
      currentValue: string | null,
      appendValue: string
    ): string => {
      if (currentValue === null || currentValue === "0") {
        return appendValue;
      } else {
        return `${currentValue}${appendValue}`;
      }
    };
    if (this.operator === null) {
      this.leftValue = append(this.leftValue, v);
    } else {
      this.rightValue = append(this.rightValue, v);
    }
  }

  appendPoint() {
    const isValid = (v: string | null): boolean => {
      return v !== null && v.indexOf(".") === -1;
    };
    if (this.operator === null) {
      this.leftValue = isValid(this.leftValue)
        ? `${this.leftValue}.`
        : this.leftValue;
    } else {
      this.rightValue = isValid(this.rightValue)
        ? `${this.rightValue}.`
        : this.rightValue;
    }
  }

  inverse() {
    if (this.rightValue !== null) {
      this.clear(Number(this.rightValue) * -1);
    } else {
      this.clear(Number(this.leftValue) * -1);
    }
  }

  transToPercentage() {
    if (this.rightValue !== null) {
      this.clear(Number(this.rightValue) / 100);
    } else {
      this.clear(Number(this.leftValue) / 100);
    }
  }

  setLeftValue(value: string) {
    this.leftValue = value;
  }

  setRightValue(value: string) {
    this.rightValue = value;
  }

  setOperator(operator: Operator) {
    this.operator = operator;
  }

  calc(): string {
    const { leftValue, operator, rightValue } = this;
    if (operator === null || rightValue === null) return this.currentValue();

    const answer = (() => {
      const leftNumber = Number(leftValue);
      const rightNumber = Number(rightValue);
      switch (operator) {
        case "+":
          return leftNumber + rightNumber;
        case "-":
          return leftNumber - rightNumber;
        case "X":
          return leftNumber * rightNumber;
        case "/":
          return leftNumber / rightNumber;
      }
    })();

    return `${answer}`;
  }
}
