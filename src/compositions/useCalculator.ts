import { computed, reactive, ref, watch } from "vue";
import { Formula } from "../lib/formula";

export type Command = typeof buttonLabels[number];

// prettier-ignore
const buttonLabels = [
  "C", "+-", "%", "/",
  "7", "8", "9", "X",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "0", ".", "="
] as const

/**
 * 計算コマンドと現在の式を渡して新しい式を生成する
 */
function runCommand(
  displayValue: string,
  command: Command,
  formula: Formula
): string {
  switch (command) {
    case "C":
      formula.clear();
      return formula.currentValue();
    case "+-":
      formula.inverse();
      return formula.currentValue();
    case "%":
      formula.transToPercentage();
      return formula.currentValue();
    case "/":
    case "X":
    case "-":
    case "+":
      if (formula.operator) {
        formula.calc();
        formula.setOperator(command);
      } else {
        formula.setLeftValue(displayValue);
        formula.setOperator(command);
      }
      return formula.currentValue();
    case ".":
      formula.appendPoint();
      return formula.currentValue();
    case "=":
      formula.calc();
      return formula.currentValue();
    default:
      // 0,1,2,3,4,5,6,7,8,9
      formula.appendValue(command);
      return formula.currentValue();
  }
}

export default function useCalculator() {
  type State = { displayValue: string; formula: Formula };
  const state = ref<State>({
    displayValue: "0",
    formula: new Formula(),
  });
  const sendCommand = (command: Command) => {
    state.value.displayValue = runCommand(
      state.value.displayValue,
      command,
      state.value.formula
    );
  };
  return { state, sendCommand, buttonLabels };
}
