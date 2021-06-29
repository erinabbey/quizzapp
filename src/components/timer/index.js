import React, { useState, useEffect } from 'react';

const Timer = () => {
  const hoursMinSecs = { hours: 0, minutes: 1, seconds: 0 };
  const { hours1 = 0, minutes1 = 1, seconds1 = 0 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = useState([0, 1, 0]);
  const [isTimeOut, setIsTimeOut] = useState(false);

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) {
      setIsTimeOut((isTimeOut) => !isTimeOut);
      reset();
    } else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };
  console.log(isTimeOut);
  const reset = () =>
    setTime([parseInt(hours1), parseInt(minutes1), parseInt(seconds1)]);

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      <p>{`${hrs.toString().padStart(2, '0')}:${mins
        .toString()
        .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p>
    </div>
  );
};
export default Timer;
