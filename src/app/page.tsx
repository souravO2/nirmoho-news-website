import Card from "@/components/homepage/Card";
import MainNews from "@/components/MainNews";
import { WholeSectionType } from "@/types/WholeSectionType";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const fetchedData = await res.json();
  const sections = fetchedData.data;
  const [mainNews, ...otherSections] = sections;
  // const mainNews = sections[0].articles;

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3">
      <div className="col-span-2">
        <MainNews mainNews={mainNews.articles} />
        {otherSections.map((os: WholeSectionType) => (
          <div key={os.curationId} className="flex flex-col m-4">
            <h1 className="text-xl font-semibold">{os.title}</h1>
            <span className="h-0.5 bg-red-700 mt-2" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
              {os.articles.map((item) => (
                <Card key={item.id} data={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-1 bg-red-200"></div>
    </div>
  );
}
