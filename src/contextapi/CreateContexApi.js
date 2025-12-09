/* eslint-disable react/prop-types */
"use client";
import React from "react";
import { createContext, useState } from "react";
import { expiredDeputies } from "@/constants/deputiesout";
import { deputies2024 } from "@/constants/deputies2024";
// import { pozitive, negative } from "@/constants/votesCounter";
export const ContextApi = createContext();

export const AppContextApi = ({ children }) => {
  const [lang, setLang] = useState("az");
  const [adminAccess, setAdminAccess] = useState(false);
  const STOREKEY = "STOREKEY";
  const VISITOR = "visitor";
  const [links, setLinks] = useState({ name: "", url: "" });
  const [visitorCount, setVisitorCount] = useState("");
  const [hide, setHide] = useState(true);

  // const dep2020 = deputies2024.sort((a, b) => (a.vote < b.vote ? 1 : -1));

  // const dep2024 = dep2020.filter((dep) => !expiredDeputies.includes(dep.idn));

  const safeDeputies2024 = Array.isArray(deputies2024) ? deputies2024 : [];
  const dep2020 = safeDeputies2024.sort((a, b) => (a.vote < b.vote ? 1 : -1));
  const dep2024 = dep2020.filter((dep) => !expiredDeputies.includes(dep.idn));

  return (
    <ContextApi.Provider
      value={{
        lang,
        setLang,
        adminAccess,
        setAdminAccess,
        links,
        setLinks,
        STOREKEY,
        VISITOR,
        visitorCount,
        setVisitorCount,
        dep2024,
        hide,
        setHide,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};
