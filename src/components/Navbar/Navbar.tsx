import Image from "next/image";
import Link from "next/link";
import Navlinks from "./Navlinks";
import Time from "./Time";
import Marquee from "./Marquee";
import DateDisplay from "./DateDisplay";
import LogInButtons from "./LogInButtons";

const Navbar = () => {
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

            <DateDisplay />
          </div>
        </Link>

        {/* Buttons */}
        <LogInButtons />
      </div>

      <Navlinks />
      <Marquee />
    </div>
  );
};

export default Navbar;
