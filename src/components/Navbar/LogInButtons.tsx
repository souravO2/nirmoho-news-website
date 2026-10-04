"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { RxAvatar } from "react-icons/rx";

const LogInButtons = () => {
  const { data: session, isPending } = useSession();
  if (isPending) {
    return (
      <div className="flex flex-col items-center gap-2">
        <span>Loading...</span>
      </div>
    );
  }
  console.log(session);
  return (
    <div
      className="
      flex justify-center gap-2 mt-2 pb-3
      md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2
      md:mt-0 md:pb-0
    "
    >
      {session?.user ? (
        <div className="text-center flex items-center gap-2">
          <div>
            <Link
              href={"/profile"}
              className="flex flex-col justify-center items-center"
            >
              <RxAvatar className="w-8 h-8" />
              <span>{session.user.name}</span>
            </Link>
          </div>
          <button
            onClick={() => signOut()}
            className="btn rounded-lg bg-red-700 text-white"
          >
            সাইন আউট
          </button>
        </div>
      ) : (
        <>
          <Link
            href="/signin"
            className="btn rounded-lg border-none hover:text-red-700"
          >
            সাইন ইন
          </Link>

          <Link href="/signup" className="btn rounded-lg bg-red-700 text-white">
            সাইন আপ
          </Link>
        </>
      )}
    </div>
  );
};

export default LogInButtons;
