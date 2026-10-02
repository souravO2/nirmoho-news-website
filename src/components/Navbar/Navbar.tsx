import Image from "next/image";
import Link from "next/link";
import Navlinks from "./Navlinks";
import Time from "./Time";
import Marquee from "./Marquee";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="bg-white">
      <div className="container mx-auto relative">
        {/* Time */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden sm:block text-4xl font-bold">
          <Time />
          <h1 className="text-lg font-normal text-slate-600">
            Dhaka, Bangladesh
          </h1>
        </div>

        {/* Logo + title */}
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/nirmoho.png"
            width={200}
            height={100}
            alt="News Page Logo"
            className="cursor-pointer"
          />

          <div className="flex flex-col gap-2 justify-evenly">
            <h1 className="font-bold text-xl text-red-700">
              সত্যের পাশে, পক্ষপাতের বাইরে
            </h1>

            <h2 className="text-slate-600">{date}</h2>
          </div>
        </Link>

        {/* Buttons */}
        <div
          className="
      flex justify-center gap-2 mt-2 pb-3
      md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2
      md:mt-0 md:pb-0
    "
        >
          <Link
            href=""
            className="btn rounded-lg border-none hover:text-red-700"
          >
            সাইন ইন
          </Link>

          <Link href="" className="btn rounded-lg bg-red-700 text-white">
            সাইন আপ
          </Link>
        </div>
      </div>

      <Navlinks />
      <Marquee />
    </div>
  );
};

export default Navbar;
