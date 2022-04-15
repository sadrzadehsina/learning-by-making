import { useState } from "react";

import { Questionaire } from "../components/questionaire";
import { useQuestions } from "../components/use-questions";
import { useCurrentQuestion } from "../components/use-current-question";
import { Loading } from "../components/loading";

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  const { questions, fetching } = useQuestions();

  const currentQuestion = useCurrentQuestion({
    questions,
    currentQuestionIndex,
  });

  const checkAnswer = (answer) => {
    const newIndex = currentQuestionIndex + 1;

    if (answer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }

    setCurrentQuestionIndex(newIndex);

    if (newIndex === questions.length) {
      setGameEnded(true);
    }
  };

  return (
    <div className="w-full h-96 flex flex-col justify-center items-center">
      {fetching && <Loading />}
      {gameEnded && (
        <h1 className="text-3xl font-semibold">
          Game Ended, your score is {score}
        </h1>
      )}
      {currentQuestion && (
        <Questionaire question={currentQuestion} checkAnswer={checkAnswer} />
      )}
    </div>
  );
}

export { Quiz };
