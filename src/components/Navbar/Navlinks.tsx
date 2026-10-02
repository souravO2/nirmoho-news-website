import NavItems from "./NavItems";
import { ArticleType } from "@/types/ArticleType";

const DataPromise = async () => {
  try {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories");
    return res.json();
  } catch (error) {
    console.log("Error", error);
  }
};

const Navlinks = async () => {
  const fetchedData = await DataPromise();
  const data: ArticleType[] = fetchedData.data.filter(
    (data: ArticleType) => data.scrapable,
  );
  return (
    <div className="container mx-auto flex justify-center items-center my-1">
      <NavItems data={data} />
    </div>
  );
};

export default Navlinks;
