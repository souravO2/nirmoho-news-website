"use client";

import { ArticleType } from "@/types/ArticleType";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = ({ data }: { data: ArticleType[] }) => {
  const pathname = usePathname();

  return (
    <>
      <Link
        className={`hidden sm:block link no-underline text-black rounded-xl px-2 py-1 ${
          pathname === "/" ? "bg-red-700/10 text-red-700" : ""
        }`}
        href="/"
      >
        হোম
      </Link>
      {data.map((item) => {
        const href = `/${item.slug}`;

        return (
          <Link
            key={item.topicId}
            className={`link no-underline text-black rounded-xl md:mx-2 px-2 py-1 ${
              pathname === href ? "bg-red-700/10 text-red-700" : ""
            }`}
            href={href}
          >
            {item.title}
          </Link>
        );
      })}
    </>
  );
};

export default NavItems;
