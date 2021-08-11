import { computed, reactive, ref } from "vue";

type Command = typeof buttonLabels[number];
type Formula = {
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
  "C", "+=", "%", "/",
  "7", "8", "9", "X",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "0", ".", "="
] as const

/**
 * 計算コマンドと現在の式を渡して新しい式を生成する
 */
function runCommand(command: Command, formula: Formula): Formula {
  switch (command) {
    case "C":
      return initialFormula;
    case "+=":
      alert("未実装");
      return initialFormula;
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
        leftValue: Number(command),
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
