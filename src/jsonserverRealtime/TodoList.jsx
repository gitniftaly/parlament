"use client";

import React from "react";
import useContextApi from "@/contextapi/useContextApi";
import { useActions } from "./TodosActions";
import { URL } from "@/constants/constan";

export default function TodoList() {
  const {
    todos,
    title,
    timer,
    setTimer,
    setTitle,
    voteNo,
    voteYes,
    reset,
    votingfor,
    timerVal,
  } = useActions(URL);
  console.log("URL: ", URL);
  const { lang } = useContextApi();

  if (!todos)
    return (
      <p className="flex w-full h-4 justify-center items-center py-3">
        Loading...
      </p>
    );
  return (
    <div className="flex flex-col w-full m-auto justify-center items-center sm:w-[600px] h-[400px]">
      <h1 className="text-xl">
        {lang === "az" ? "Gizlin səs vermə" : "Secret voting"}
      </h1>
      <h2 className="flex items-center  h-16 py-2 text-blue-600 text-xl font-serif">
        {title ? title : todos[0].votingFor}
      </h2>
      <ul className="flex w-full h-full">
        {todos.map((todo) => (
          <li key={todo.id} className="grid grid-cols-2 m-auto gap-4">
            <div className="w-[100px] h-[100px] text-xl flex rounded-full border justify-center items-center  bg-green-200">
              {todo.voteYes}
            </div>
            <div className="w-[100px] h-[100px] text-2xl flex justify-center items-center rounded-full bg-amber-200">
              {todo.voteNo}
            </div>
          </li>
        ))}
      </ul>
      <section className="flex flex-col items-end">
        <div className="flex gap-3 mt-5 justify-end items-center mb-1">
          <label htmlFor="votingFor">Title</label>
          <input
            className="h-8 w-[300px] border border-gray-300 rounded-sm px-1"
            name="votingFor"
            id="votingFor"
            type="text"
            value={title}
            placeholder="voting for"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex gap-3 mt-0 justify-center items-center mb-10">
          <label htmlFor="timer">Timer</label>
          <input
            className="h-8 w-[300px] border border-gray-300 rounded-sm px-1"
            name="timer"
            id="timer"
            type="text"
            value={timer}
            placeholder="time for timer"
            onChange={(e) => setTimer(e.target.value)}
          />
        </div>
      </section>
      <div className="sm:flex w-full justify-center  gap-3 grid grid-cols-2 px-1 pb-3 ">
        <button
          className="flex justify-center items-center h-10 border border-gray-300 rounded-sm sm:w-full text-xl bg-green-400"
          onClick={() => voteYes(todos[0])}
        >
          {lang === "az" ? "Lehinə" : "In favor"}
        </button>

        <button
          className="flex justify-center bg-amber-400 items-center h-10 border border-gray-300 rounded-sm sm:w-full text-xl"
          onClick={() => voteNo(todos[0])}
        >
          {lang === "az" ? "Əleyhinə" : "Against"}
        </button>
        <button
          className="flex justify-center items-center bg-blue-300 h-10 border border-gray-300 rounded-sm sm:w-full text-xl"
          onClick={() => votingfor(todos[0])}
        >
          {lang === "az" ? "Mövzu" : "Voting for"}
        </button>
        <button
          className="flex justify-center items-center h-10 border border-gray-300 rounded-sm sm:w-full text-xl bg-background"
          onClick={() => reset(todos[0])}
        >
          {lang === "az" ? "Nəticə" : "Reset"}
        </button>
        <button
          className="flex justify-center items-center h-10 border  rounded-sm sm:w-full text-xl bg-background"
          onClick={() => timerVal(todos[0])}
        >
          {lang === "az" ? "Vaxt" : "Timer"}
        </button>
      </div>
    </div>
  );
}
