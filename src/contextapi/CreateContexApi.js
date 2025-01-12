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
  const voteCounters = [
    { name: "Ass ss", no: "no", yes: "" },
    { name: "Ass ss", no: "", yes: "yes" },
    { name: "Ass ss", no: "", yes: "yes" },
    { name: "Ass ss", no: "", yes: "yes" },
    { name: "Ass ss", no: "", yes: "yes" },
    { name: "Ass ss", no: "no", yes: "" },
  ];

  const pozitive = () => {
    let votes = 0;
    for (let o of voteCounters) {
      if (o.yes) {
        votes += 1;
      }
    }
    return votes;
  };
  const negative = () => {
    let votes = 0;
    for (let o of voteCounters) {
      if (o.no) {
        votes += 1;
      }
    }
    return votes;
  };

  const dep2024 = deputies2024.sort((a, b) => (a.vote < b.vote ? 1 : -1));
  // const Yes = pozitive() || 0;
  // const No = negative() || 0;
  const [poz, setPozitive] = useState(0);
  const [neg, setNegative] = useState(0);

  // useEffect(() => {
  //   setPozitive(pozitive());
  //   setNegative(negative());
  // }, [poz, neg]);

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
        poz,
        setPozitive,
        neg,
        setNegative,
        voteCounters,
        pozitive,
        negative,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};
