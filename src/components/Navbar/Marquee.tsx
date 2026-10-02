import { MarqueeProp } from "@/types/MarqueeProp";
import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const DataPromise = async () => {
  try {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
    return res.json();
  } catch (error) {
    console.log("Error", error);
  }
};

const Marquee = async () => {
  const fetchedData = await DataPromise();
  const data: MarqueeProp[] = fetchedData.data;
  return (
    <div className="flex bg-red-700 text-white">
      <div className="container mx-auto flex items-center">
        <h1 className="bg-red-800 p-2 font-semibold">সর্বশেষ</h1>
        <MarqueeText
          className="p-y-1"
          direction="right"
          pauseOnHover
          duration={10}
        >
          {data.map((item, id) => (
            <span key={id}>
              <span>{item.title}</span>
              <span className="mx-4">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
