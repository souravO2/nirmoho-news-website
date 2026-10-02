import { NewsProp } from "@/types/NewsProp";
import Image from "next/image";
import React from "react";

const Card = ({ data }: { data: NewsProp }) => {
  return (
    <div className="card bg-base-100 hover:border-red-200 border border-slate-200 w-full shadow-sm cursor-pointer">
      <figure>
        <Image
          src={data.imageUrl}
          width={300}
          height={200}
          alt={data.imageAlt}
          className="max-w-full w-full"
        />
      </figure>

      <div className="card-body">
        <p className="text-red-700 text-lg">{data.category}</p>

        <h2 className="card-title text-xl font-bold hover:text-red-700">
          {data.title}
        </h2>

        <p>{data.description}...</p>
      </div>
    </div>
  );
};

export default Card;
