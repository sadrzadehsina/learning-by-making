import { useCallback, useEffect, useRef, useState } from "react";

function QuizTimer({ duration }) {
  const timerId = useRef(null);

  const [[hours, minutes, seconds], setTime] = useState([
    duration.hours,
    duration.minutes,
    duration.seconds,
  ]);

  const resetTimer = useCallback(
    () =>
      setTime([
        parseInt(duration.hours),
        parseInt(duration.minutes),
        parseInt(duration.seconds),
      ]),
    [duration.hours, duration.minutes, duration.seconds]
  );

  const tick = useCallback(() => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      resetTimer();
    } else if (minutes === 0 && seconds === 0) {
      setTime([hours - 1, 59, 59]);
    } else if (seconds === 0) {
      setTime([hours, minutes - 1, 59]);
    } else {
      setTime([hours, minutes, seconds - 1]);
    }
  }, [hours, minutes, resetTimer, seconds]);

  useEffect(() => {
    timerId.current = setInterval(tick, 1000);
    return () => clearInterval(timerId.current);
  }, [tick]);

  return (
    <div>
      <span>{`${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}</span>
    </div>
  );
}

export { QuizTimer };
