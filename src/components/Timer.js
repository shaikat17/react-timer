import { useState, useEffect } from "react";

const SECOND = 1_000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Timer = (deadline, interval = SECOND) => {
  const [timeSpan, setTimeSpan] = useState(new Date(deadline) - Date.now());

  /* If the initial deadline value changes */
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeSpan(new Date(deadline) - Date.now());
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [deadline, interval]);


  return {
    days: Math.floor(timeSpan / DAY),
    hours: Math.floor((timeSpan / HOUR) % 24),
    minutes: Math.floor((timeSpan / MINUTE) % 60),
    seconds: Math.floor((timeSpan / SECOND) % 60)
  };
}

export default Timer