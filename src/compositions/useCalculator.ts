import { ref } from "vue";

// prettier-ignore
const buttonLabels = [
  "C", "+=", "%", "/",
  "7", "8", "9", "X",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "0", ".", "="
] as const

type Command = typeof buttonLabels[number];

export default function useCalculator(initialValue: number) {
  const answer = ref(initialValue);

  function sendCommand(command: Command) {
    alert(command);
  }
  return { answer, sendCommand, buttonLabels };
}
