import { computed, reactive, ref, watch } from "vue";

export type Command = typeof buttonLabels[number];
export type Formula = {
  leftValue: number;
  operator: "+" | "-" | "X" | "/" | null;
  rightValue: number | null;
};

const initialFormula: Formula = {
  leftValue: 0,
  operator: null,
  rightValue: null,
};

// prettier-ignore
const buttonLabels = [
  "C", "+-", "%", "/",
  "7", "8", "9", "X",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "0", ".", "="
] as const

function calcable(formula: Formula): boolean {
  return formula.operator !== null && formula.rightValue !== null;
}

function calc(formula: Formula): Formula {
  const { leftValue, operator, rightValue } = formula;
  if (operator === null || rightValue === null) return formula;

  const answer = (() => {
    switch (operator) {
      case "+":
        return leftValue + rightValue;
      case "-":
        return leftValue - rightValue;
      case "X":
        return leftValue * rightValue;
      case "/":
        return leftValue / rightValue;
    }
  })();

  return { leftValue: answer, operator: null, rightValue: null };
}

function appendNumber(v1: number | string, v2: number | string): number {
  return Number(`${v1}${v2}`);
}

function inversion(value: number): number {
  return value * -1;
}

/**
 * 計算コマンドと現在の式を渡して新しい式を生成する
 */
function runCommand(command: Command, formula: Formula): Formula {
  switch (command) {
    case "C":
      return initialFormula;
    case "+-":
      return {
        ...formula,
        leftValue: inversion(formula.leftValue),
      };
    case "%":
      alert("未実装");
      return initialFormula;
    case "/":
    case "X":
    case "-":
    case "+":
      return {
        ...calc(formula),
        operator: command,
        rightValue: 0,
      };
    case ".":
      alert("未実装");
      return initialFormula;
    case "=":
      return calc(formula);
    default:
      if (formula.operator) {
        return {
          ...formula,
          rightValue: appendNumber(formula.rightValue || 0, command),
        };
      } else {
        return {
          ...formula,
          leftValue: appendNumber(formula.leftValue, command),
        };
      }
  }
}

export default function useCalculator() {
  const state = reactive<{ formula: Formula }>({
    formula: { ...initialFormula },
  });
  const displayValue = computed(() => {
    return state.formula.rightValue || state.formula.leftValue;
  });
  const sendCommand = (command: Command) => {
    state.formula = runCommand(command, state.formula);
  };
  // for debug
  watch(
    () => state.formula,
    () => {
      console.log(state.formula);
    }
  );
  return { displayValue, sendCommand, buttonLabels };
}
