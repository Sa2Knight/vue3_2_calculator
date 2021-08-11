import { ref } from "vue";
export default function useCalculator(initialValue: number) {
  const answer = ref(initialValue);
  return { answer };
}
