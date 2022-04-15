import { useEffect, useState } from "react";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

function useQuestions() {
  const [fetching, toggleFetching] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    toggleFetching(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setQuestions(data.results))
      .then(() => toggleFetching(false));
  }, []);

  return {
    questions,
    fetching,
  };
}

export { useQuestions };
