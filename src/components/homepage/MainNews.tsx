import { NewsProp } from "@/types/NewsProp";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainNews = ({ mainNews }: { mainNews: NewsProp[] }) => {
  const [firstNews, ...otherNews] = mainNews;

  if (!firstNews) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
      {/* Main News */}
      <div className="card group bg-base-100 border border-slate-200 hover:border-red-200 w-full shadow-sm cursor-pointer">
        <Link href={`/article/${firstNews.id}`}>
          <figure>
            <Image
              src={firstNews.imageUrl}
              width={300}
              height={200}
              alt={firstNews.imageAlt}
              className="max-w-full w-full"
            />
          </figure>

          <div className="card-body">
            <p className="text-red-700 text-lg">{firstNews.category}</p>

            <h2 className="card-title text-xl font-bold group-hover:text-red-700">
              {firstNews.title}
            </h2>

            <p>{firstNews.description}...</p>
          </div>
        </Link>
      </div>

      {/* Other News */}
      <div className="flex flex-col space-y-4 border p-4 rounded-xl border-slate-300">
        {otherNews.slice(0, 5).map((item, id) => (
          <Link
            key={id}
            href={`/article/${item.id}`}
            className="font-semibold flex flex-col text-lg cursor-pointer hover:text-red-700"
          >
            <span className="font-normal text-red-700">{item.category}</span>

            {item.title}

            <span className="h-px bg-slate-300" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
