"use client";
import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState<number | null>(null);

  useEffect(() => {
    const getTime = async () => {
      const res = await fetch(
        "https://www.datetimes.today/api/public/time/Asia/Dhaka",
      );
      if (!res.ok) {
        throw new Error("Failed to fetch current time.");
      }
      const data = await res.json();
      setTime(data.unixtime);
    };
    getTime();
  }, []);

  useEffect(() => {
    if (time === null) return;
    const interval = setInterval(() => {
      setTime((prev) => (prev ?? 0) + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  if (time === null) {
    return <span className="text-black">--:--</span>;
  }

  const formattedTime = new Date(time * 1000).toLocaleTimeString("en-BD", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
  });

  return <span className="text-black">{formattedTime}</span>;
};

// this one takes the time from client

// const Time = () => {
//   const [time, setTime] = useState("");
//   useEffect(() => {
//     const updateTime = () => {
//       setTime(
//         new Date().toLocaleTimeString("en-BD", {
//           timeZone: "Asia/Dhaka",
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       );
//     };
//     updateTime();
//     const interval = setInterval(updateTime, 1000);
//     return () => clearInterval(interval);
//   }, []);
//   return <span className="text-black">{time}</span>;
// };

export default Time;