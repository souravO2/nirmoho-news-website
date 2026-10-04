const DateDisplay = async () => {
  const res = await fetch(
    "https://www.datetimes.today/api/public/time/Asia/Dhaka",
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch current time");
  }

  const data = await res.json();

  const date = new Date(data.unixtime * 1000).toLocaleDateString("bn-BD", {
    timeZone: "Asia/Dhaka",
    dateStyle: "full",
  });

  return <h2 className="text-slate-600">{date}</h2>;
};

// this one uses the client's time, that could be wrong

// "use client";
// const DateDisplay = () => {
//   const date = new Date().toLocaleDateString("bn-BD", {
//     timeZone: "Asia/Dhaka",
//     dateStyle: "full",
//   });
//   return <h2 className="text-slate-600">{date}</h2>;
// };

export default DateDisplay;
