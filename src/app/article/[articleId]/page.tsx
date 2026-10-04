import ArticleCard from "@/components/shared/ArticleCard";
import React from "react";

const ArticlePage = async ({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) => {
  const { articleId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${articleId}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );
  const fetchedData = await res.json();
  const data = fetchedData.data;
  console.log(data);
  return (
    <div className="my-4 mx-2">
      <ArticleCard article={data} />
    </div>
  );
};

export default ArticlePage;
