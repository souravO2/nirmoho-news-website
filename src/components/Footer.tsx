import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 text-center md:text-left bg-slate-950 text-slate-300">
      <div className="mx-auto px-6 py-12 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-around gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex justify-center text-2xl font-bold tracking-tight text-white"
            >
              <Image
                src="/nirmoho-white.png"
                width={200}
                height={100}
                alt="News Page Logo"
                className="cursor-pointer"
              />
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Stay informed with the latest news, stories, and updates from
              around the world.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex justify-center md:justify-start gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 transition hover:bg-red-700 hover:text-white"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 transition hover:bg-red-700 hover:text-white"
              >
                <FaTwitter size={15} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 transition hover:bg-red-700 hover:text-white"
              >
                <FaInstagram size={15} />
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 transition hover:bg-red-700 hover:text-white"
              >
                <FaGithub size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/" className="transition hover:text-red-500">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/" className="transition hover:text-red-500">
                  Latest News
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="transition hover:text-red-500"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link href="/" className="transition hover:text-red-500">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-white">Categories</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/category/politics"
                  className="transition hover:text-red-500"
                >
                  Politics
                </Link>
              </li>

              <li>
                <Link
                  href="/category/technology"
                  className="transition hover:text-red-500"
                >
                  Technology
                </Link>
              </li>

              <li>
                <Link
                  href="/category/sports"
                  className="transition hover:text-red-500"
                >
                  Sports
                </Link>
              </li>

              <li>
                <Link
                  href="/category/economy"
                  className="transition hover:text-red-500"
                >
                  Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white">Stay Updated</h3>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Get the latest news and important updates delivered to you.
            </p>

            <div className="mt-5 flex">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-l-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-red-600"
              />

              <button className="rounded-r-lg bg-red-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-800">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-slate-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
            <p>© {new Date().getFullYear()} NirMoho. All rights reserved.</p>

            <div className="flex gap-6">
              <Link href="/privacy" className="transition hover:text-slate-300">
                Privacy Policy
              </Link>

              <Link href="/terms" className="transition hover:text-slate-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
