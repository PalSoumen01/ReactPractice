import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(70);

  useEffect(() => {
    const timer =
      time > 0 &&
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);

    return () => clearTimeout(timer); // Clean up the timer
  }, [time]);

  // Convert total seconds to minutes and seconds
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // Optional: Pad seconds with zero for consistent display
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div>
      <h1>Timer</h1>
      {time > 0 ? (
        <h2>
          {minutes}:{formattedSeconds} remaining
        </h2>
      ) : (
        <h2>Time's up!</h2>
      )}
    </div>
  );
}

export default Timer;
