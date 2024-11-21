"use client";
import { createContext, useState } from "react";

export const ContextApi = createContext();

export const AppContextApi = ({ children }) => {
  const [lang, setLang] = useState("azn");
  return (
    <ContextApi.Provider value={{ lang, setLang }}>
      {children}
    </ContextApi.Provider>
  );
};
