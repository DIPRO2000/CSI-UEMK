import { useState, useEffect } from "react";

const Countdown = () => {
  const endDateTime = new Date("2025-06-21T09:00:00+05:30"); // IST (Indian Standard Time)

  const calculateTimeLeft = () => {
    const difference = endDateTime - new Date();
    return difference > 0 ? Math.floor(difference / 1000) : 0;
  };

  const [seconds, setSeconds] = useState(calculateTimeLeft);

  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setInterval(() => {
      setSeconds(calculateTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(seconds / (24 * 3600));
  const hours = Math.floor((seconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return (
    <div className="text-center p-4 flex flex-col justify-center items-center ">
      <h2 className="text-2xl font-semibold text-white mb-2 z-10 font-orbitron">Countdown to HACKBERRY PI</h2>
      <div className="flex justify-center items-center space-x-4">
        <TimeUnit label="Days" value={days} />
        <span className="text-yellow-500 text-3xl font-bold mx-2 mb-7 z-10">:</span>
        <TimeUnit label="Hours" value={hours} />
        <span className="text-yellow-500 text-3xl font-bold mx-2 mb-7  z-10">:</span>
        <TimeUnit label="Minutes" value={minutes} />
        <span className="text-yellow-500 text-3xl font-bold mx-2 mb-7  z-10">:</span>
        <TimeUnit label="Seconds" value={secs} />
      </div>
    </div>
  );
};

const TimeUnit = ({ label, value }) => {
  return (
    <div className="text-center z-20">
      <div className="text-4xl font-bold text-yellow-500 font-orbitron">{value}</div>
      <div className="text-lg font-semibold text-white">{label}</div>
    </div>
  );
};

export default Countdown;
