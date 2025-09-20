"use client";

import React, { useState, useEffect } from "react";
import { useSync } from "./useSync";
import useContextApi from "@/contextapi/useContextApi";

export default function OtherBrowser(url) {
  const [todos, setTodos] = useSync(url);
  const [btnLocked, setBtnLocked] = useState(false);
  const { lang } = useContextApi();
  useEffect(() => {
    if (btnLocked) {
      const tir = setTimeout(
        () => setBtnLocked(false),
        parseInt(todos[0].timer) * 5000
      );
      return () => clearTimeout(tir); // cleanup
    }
  }, [btnLocked, todos]);

  const voteYes = async (todo) => {
    const updated = { ...todo, voteYes: todo.voteYes + 1 };
    await fetch(`${url}${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        voteYes: updated.voteYes,
      }),
    });
    setBtnLocked(true);
    setTodos(todos.map((t) => (t.id === todo.id ? updated : t)));
  };
  const voteNo = async (todo) => {
    const updated = { ...todo, voteNo: todo.voteNo + 1 };
    await fetch(`${url}${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        voteNo: updated.voteNo,
      }),
    });
    setBtnLocked(true);
    setTodos(todos.map((t) => (t.id === todo.id ? updated : t)));
  };
  if (!todos) return <p>Loading...</p>;
  return (
    <div className="flex flex-col m-auto w-full justify-center items-center sm:w-[600px] h-[400px]">
      <h1 className="text-xl">
        {lang === "az" ? "Gizlin səs verilir" : "Secretly voting"}
      </h1>
      <h2 className="h-16 py-2 text-blue-600 text-xl font-serif text-center">
        {todos[0].votingFor}
      </h2>
      <ul className="">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex w-full h-32 justify-center items-center gap-6"
          >
            <div className="w-[100px] h-[100px] text-2xl flex justify-center items-center rounded-full bg-green-200">
              {todo.voteYes}
            </div>
            <div className="w-[100px] h-[100px]  text-2xl flex justify-center items-center rounded-full bg-amber-200">
              {todo.voteNo}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex sm:w-[600px] w-full justify-center gap-5 mt-10">
        <button
          disabled={btnLocked}
          className=" h-10 border border-gray-300 rounded-sm w-32 text-xl bg-green-400"
          onClick={() => voteYes(todos[0])}
        >
          {lang === "az" ? "Lehinə" : "In favor"}
        </button>

        <button
          disabled={btnLocked}
          className=" h-[40px] border border-gray-300 rounded-sm w-32 text-xl bg-amber-400"
          onClick={() => voteNo(todos[0])}
        >
          {lang === "az" ? "Əleyhinə" : "Against"}
        </button>
      </div>
    </div>
  );
}
