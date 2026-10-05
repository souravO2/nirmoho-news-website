"use client";

import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

const SignInPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    const { data: resData, error } = await signIn.email({
      email: data.email as string,
      password: data.password as string,
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(resData, error);
    if (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleBtn = async () => {
    const res = await signIn.social({
      provider: "google",
    });
    return res;
  };
  const handleGitHubBtn = async () => {
    const res = await signIn.social({
      provider: "github",
    });
    return res;
  };
  return (
    <div className="flex flex-col justify-center items-center text-center m-4">
      <h1 className="text-2xl text-red-700 font-extrabold text-center">
        সাইন ইন করুন
      </h1>
      <form className="" onSubmit={onSubmit}>
        <fieldset className="fieldset border-none rounded-box w-xs border p-4">
          <label className="label">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Enter your email"
            required
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Enter your password"
            required
          />

          <button
            type="submit"
            className="btn btn-neutral bg-red-700 border-none mt-4"
          >
            সাইন ইন করুন
          </button>
        </fieldset>
        <p>
          অ্যাকাউন্ট নেই?{" "}
          <Link href={"/signup"} className="text-red-700 hover:underline">
            সাইন আপ করুন
          </Link>
        </p>
      </form>
      <span>-------OR-------</span>
      <div className="flex flex-col gap-y-2">
        <button onClick={handleGoogleBtn} className="btn text-center">
          <FcGoogle /> Google
        </button>
        <button onClick={handleGitHubBtn} className="btn text-center">
          <FaGithub />
          GitHub
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
