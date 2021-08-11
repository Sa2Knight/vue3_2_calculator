import { computed, reactive, ref } from "vue";

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
        leftValue: inversion(formula.leftValue),
        operator: null,
        rightValue: null,
      };
    case "%":
      alert("未実装");
      return initialFormula;
    case "/":
      alert("未実装");
      return initialFormula;
    case "X":
      alert("未実装");
      return initialFormula;
    case "-":
      alert("未実装");
      return initialFormula;
    case "+":
      alert("未実装");
      return initialFormula;
    case ".":
      alert("未実装");
      return initialFormula;
    case "=":
      alert("未実装");
      return initialFormula;
    default:
      return {
        leftValue: appendNumber(formula.leftValue, command),
        operator: null,
        rightValue: null,
      };
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
  return { displayValue, sendCommand, buttonLabels };
}
