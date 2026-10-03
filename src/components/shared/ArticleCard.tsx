import Image from "next/image";

type ArticleBody =
  | {
      type: "text";
      text: string;
    }
  | {
      type: "subheading";
      text: string;
    }
  | {
      type: "image";
      url: string;
      width: number;
      height: number;
      caption?: string;
      altText?: string;
      copyrightHolder?: string;
    };

type Article = {
  id: string;
  title: string;
  description: {
    blocks: {
      type: string;
      model: {
        blocks: {
          type: string;
          model: {
            text: string;
          };
        }[];
      };
    }[];
  };
  firstPublished: string;
  lastPublished: string;
  byline: {
    name: string;
    role: string;
  }[];
  topics: {
    id: string;
    name: string;
  }[];
  tags: string[];
  imageUrl: string;
  body: ArticleBody[];
  text: string;
  wordCount: number;
  source: string;
  sourceUrl: string;
};

const ArticleCard = ({ article }: { article: Article }) => {
  const description =
    article.description.blocks[0]?.model.blocks[0]?.model.text ?? "";

  const publishedDate = new Intl.DateTimeFormat("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(new Date(article.firstPublished));

  return (
    <article className="mx-auto max-w-5xl">
      {/* Hero Image */}
      <div className="relative aspect-video overflow-hidden rounded-2xl">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </div>

      {/* Article Content */}
      <div className="mt-8">
        {/* Topics */}
        <div className="mb-4 flex flex-wrap gap-2">
          {article.topics.map((topic) => (
            <span
              key={topic.id}
              className="rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-600"
            >
              {topic.name}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold leading-tight text-gray-950 md:text-5xl">
          {article.title}
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-600">
          {description}
        </p>

        {/* Meta */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-b border-gray-200 pb-6 text-sm text-gray-500">
          <span className="font-semibold text-gray-900">
            {article.byline[0]?.name}
          </span>
          <span>{publishedDate}</span>
          <span>•</span>
          <span>{article.wordCount} শব্দ</span>

          {article.byline[0]?.role && (
            <>
              <span>•</span>
              <span>{article.byline[0].role}</span>
            </>
          )}
        </div>
      </div>

      {/* Article Body */}
      <div className="mt-10 max-w-3xl mx-auto">
        {article.body.map((item, index) => {
          if (item.type === "text") {
            return (
              <p key={index} className="mb-7 text-lg leading-8 text-gray-800">
                {item.text}
              </p>
            );
          }

          if (item.type === "subheading") {
            return (
              <h2
                key={index}
                className="mb-5 mt-10 text-2xl font-bold text-gray-950"
              >
                {item.text}
              </h2>
            );
          }

          if (item.type === "image") {
            return (
              <figure key={index} className="my-8">
                <Image
                  src={item.url}
                  alt={item.altText || ""}
                  width={item.width}
                  height={item.height}
                  className="h-auto w-full rounded-xl"
                />

                {item.caption && (
                  <figcaption className="mt-2 text-sm text-gray-500">
                    {item.caption} ({item.copyrightHolder})
                  </figcaption>
                )}
              </figure>
            );
          }

          return null;
        })}
      </div>
    </article>
  );
};

export default ArticleCard;
