import { useMemo } from "react";

function Questionaire({ question, checkAnswer }) {
  const shuffledAnswers = useMemo(() => {
    return [question.correct_answer, ...question.incorrect_answers].sort(
      () => Math.random() - 0.5
    );
  }, [question]);

  return (
    <div>
      <h1
        className="text-3xl p-4"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />
      <div className="grid grid-cols-2 mt-4">
        {shuffledAnswers.map((answer) => (
          <button
            className="border-2 border-slate-800 p-4 m-1 hover:bg-slate-800 active:bg-slate-300 active:text-black"
            dangerouslySetInnerHTML={{ __html: answer }}
            onClick={() => checkAnswer(answer)}
          />
        ))}
      </div>
    </div>
  );
}

export { Questionaire };
