import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft === 0) return; // Stop when countdown reaches zero

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000); // Update every second

    return () => clearInterval(timerId); // Cleanup on unmount or time change
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div style={{ marginRight: "20px" }}>
      <p>{formatTime(timeLeft)}</p>
      {timeLeft === 0 && <p>Time's up!</p>}
    </div>
  );
};

export default CountdownTimer;
