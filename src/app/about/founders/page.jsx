"use client";

import useContextApi from "@/contextapi/useContextApi";
import { useState } from "react";

const Founders = () => {
  const { pozitive, negative, voteCounters } = useContextApi();

  const [yes, setYes] = useState("");
  const [no, setNo] = useState("");
  const [name, setName] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (name && (no || yes)) {
      voteCounters.push({ name, no, yes });
    }
    setNo("");
    setYes("");
    setName("");
  };

  return (
    <div className="h-dvh bg-background -mt-2 rounded-xl flex flex-col items-center sm:w-full]">
      <header className="py-5 font-bold">
        <h1>Təsisçilər</h1>
      </header>
      <form onSubmit={handleOnSubmit} className=" flex items-center flex-col">
        <input
          placeholder="ismin soy adın"
          type="text"
          value={name}
          className="h-10 w-64 border border-white rounded-lg bg-transparent px-1"
          onChange={(e) => setName(e.target.value)}
        />
        <div className="w-[400px] flex items-center justify-center h-24 gap-2">
          <button
            type="submit"
            className="h-10 flex-1 border border-white rounded-md"
            onClick={() => setYes("yes")}
          >
            Yes
          </button>
          <button
            type="submit"
            className="h-10 flex-1 border border-white rounded-md"
            onClick={() => setNo("no")}
          >
            No
          </button>
        </div>

        <div>
          {pozitive()}:{negative()}
        </div>
      </form>
    </div>
  );
};

export default Founders;
