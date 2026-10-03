import Card from "@/components/shared/Card";
import { NewsProp } from "@/types/NewsProp";
import React from "react";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const fetchedData = await res.json();
  const data: NewsProp[] = fetchedData.data;
  console.log(data);
  return (
    <div className="container mx-auto p-4">
      <div className="my-4 flex flex-col">
        <h1 className="text-2xl font-semibold">{fetchedData.title}</h1>
        <span className="h-0.5 bg-red-700 mt-2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
