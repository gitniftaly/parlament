"use client";
import { useState } from "react";
import { useSync } from "./useSync";

export const useActions = (url) => {
  const [todos, setTodos] = useSync(url);
  const [title, setTitle] = useState("");
  const [timer, setTimer] = useState(0);

  const voteYes = async (todo) => {
    const updated = { ...todo, voteYes: todo.voteYes + 1 };
    await fetch(`${url}${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        voteYes: updated.voteYes,
      }),
    });
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
    setTodos(todos.map((t) => (t.id === todo.id ? updated : t)));
  };
  const reset = async (todo) => {
    const updated = { ...todo, voteNo: 0, voteYes: 0 };
    await fetch(`${url}${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        voteNo: updated.voteNo,
        voteYes: updated.voteYes,
      }),
    });
    setTodos(todos.map((t) => (t.id === todo.id ? updated : t)));
  };

  const votingfor = async (todo) => {
    const updated = { ...todo, votingFor: title };
    await fetch(`${url}${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        votingFor: updated.votingFor,
      }),
    });
    setTodos(todos.map((t) => (t.id === todo.id ? updated : t)));
  };

  const timerVal = async (todo) => {
    const updated = { ...todo, timer: timer };
    await fetch(`${url}${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timer: updated.timer,
      }),
    });
    setTodos(todos.map((t) => (t.id === todo.id ? updated : t)));
  };
  return {
    todos,
    title,
    timer,
    setTimer,
    setTitle,
    setTodos,
    voteNo,
    voteYes,
    reset,
    votingfor,
    timerVal,
  };
};

// export default TodosActions
