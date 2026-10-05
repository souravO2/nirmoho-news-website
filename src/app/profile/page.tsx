"use client";

import { useSession } from "@/lib/auth-client";
import { updateUser } from "@/lib/auth-client";
import React, { useState } from "react";

const ProfilePage = () => {
  const { data: session, isPending } = useSession();

  const [show, setShow] = useState(false);

  const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const resData = await updateUser({
      name: userData.name as string,
    });
    return resData;
  };

  if (isPending) {
    return (
      <div className="container mx-auto flex justify-center m-4">
        {" "}
        <span>Loading...</span>{" "}
      </div>
    );
  }

  return (
    <div className="container mx-auto flex flex-col justify-center m-4">
      <div className="flex justify-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <h1 className="text-red-700 text-lg text-center">Profile Info</h1>

          <div className="flex items-center gap-1">
            <h1 className="text-sm font-bold">Name :</h1>
            <p className="text-base">{session?.user.name ?? "N/A"}</p>
          </div>

          <div className="flex items-center gap-1">
            <h1 className="text-sm font-bold">Email :</h1>
            <p className="text-base">{session?.user.email ?? "N/A"}</p>
          </div>
        </fieldset>
      </div>
      <div className="flex justify-center m-4">
        <button onClick={() => setShow(!show)} className="btn">
          Edit Profile
        </button>
      </div>
      <div
        className={`${show ? "block" : "hidden"} flex flex-col justify-center items-center text-center m-4`}
      >
        <h1 className="text-2xl text-red-700 font-extrabold text-center">
          Update Profile
        </h1>
        <form className="" onSubmit={handleUpdateUser}>
          <fieldset className="fieldset border-none rounded-box w-xs border p-4">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Enter your new name"
              required
            />

            <button
              type="submit"
              className="btn btn-neutral bg-red-700 border-none mt-4"
            >
              Update
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
