import { useMemo } from "react";

function useCurrentQuestion({ questions, currentQuestionIndex }) {
  return useMemo(
    () => questions[currentQuestionIndex],
    [questions, currentQuestionIndex]
  );
}

export { useCurrentQuestion };
