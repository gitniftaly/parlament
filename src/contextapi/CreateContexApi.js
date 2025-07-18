"use client";
import { createContext, useState } from "react";

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

  const dep2024 = deputies2024.sort((a, b) => (a.vote < b.vote ? 1 : -1));

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
