import { NewsProp } from "@/types/NewsProp";
import Link from "next/link";
import React from "react";

const DataPromise = async () => {
  try {
    const res = await fetch(
      "https://news-api-v2.vercel.app/api/news/most-read",
      {
        next: {
          revalidate: 3600,
        },
      },
    );
    return res.json();
  } catch (error) {
    console.log("Error", error);
  }
};

const MostRead = async () => {
  const fetchedData = await DataPromise();
  const data: NewsProp[] = fetchedData.data;
  console.log(data);
  return (
    <div className="m-4 p-4 border border-slate-200 rounded-xl">
      <h1 className="font-semibold text-xl p-4">সর্বাধিক পঠিত</h1>
      <ol className="list-decimal flex flex-col gap-4 pl-6 list-outside marker:text-red-700">
        {data.map((item) => (
          <Link
            href={`/article/${item.id}`}
            key={item.id}
            className="font-semibold text-lg hover:text-red-700"
          >
            <li>{item.title}</li>
          </Link>
        ))}
      </ol>
    </div>
  );
};

export default MostRead;
