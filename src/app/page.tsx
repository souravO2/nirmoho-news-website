import Card from "@/components/shared/Card";
import MostRead from "@/components/homepage/MostRead";
import MainNews from "@/components/homepage/MainNews";
import { WholeSectionType } from "@/types/WholeSectionType";
import { NewsProp } from "@/types/NewsProp";

const DataPromise = async () => {
  try {
    const res = await fetch(
      "https://news-api-v2.vercel.app/api/news/sections",
      {
        next: { revalidate: 3600 },
      },
    );
    return res.json();
  } catch (error) {
    console.log("Error", error);
  }
};

export default async function Home() {
  const fetchedData = await DataPromise();
  const sections = fetchedData.data;
  const mainNews = sections[0];
  const otherSections = fetchedData.data.filter(
    (_: NewsProp, index: number) => ![0, 2, 4, 10].includes(index),
  );

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
      <div className="col-span-1">
        <MostRead />
      </div>
    </div>
  );
}
