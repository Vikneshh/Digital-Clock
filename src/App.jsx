import { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Happens when you refresh that is unmount the page
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Converting railway time to the normal time
  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };

  const formatTimeWithLeadingZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="clock">
        <h1>Digital Clock</h1>
        <div className="time">
          {formatTimeWithLeadingZero(formatHour(currentTime.getHours()))}:
          {formatTimeWithLeadingZero(currentTime.getMinutes())}:
          {formatTimeWithLeadingZero(currentTime.getSeconds())}{" "}
          {currentTime.getHours() >= 12 ? "pm" : "am"}
        </div>

        <div className="date">{formatDate(currentTime)}</div>
      </div>
    </>
  );
};

export default App;
