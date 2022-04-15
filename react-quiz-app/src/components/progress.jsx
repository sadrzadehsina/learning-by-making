import { useMemo } from "react";

function Progress({ questionsLength, currentQuestionIndex }) {
  const percent = useMemo(
    () => (currentQuestionIndex / questionsLength) * 100,
    [questionsLength, currentQuestionIndex]
  );

  return (
    <div className="w-full bg-gray-200">
      <div className="bg-blue-600 h-1" style={{ width: `${percent}%` }} />
    </div>
  );
}

export { Progress };
