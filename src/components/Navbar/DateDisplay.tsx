"use client";

const DateDisplay = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    timeZone: "Asia/Dhaka",
    dateStyle: "full",
  });
  return <h2 className="text-slate-600">{date}</h2>;
};

export default DateDisplay;
