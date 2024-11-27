"use client";
import { createContext, useEffect, useState } from "react";
import { getItem, removeItem } from "@/utils/localStore";
export const ContextApi = createContext();

export const AppContextApi = ({ children }) => {
  const [lang, setLang] = useState("azn");
  const [adminAccess, setAdminAccess] = useState(false);
  const STOREKEY = "STOREKEY";
  const [links, setLinks] = useState({ name: "", url: "" });

  useEffect(() => {
    const data = getItem(STOREKEY);
    if (data) {
      const { value, expiry } = JSON.parse(data);
      if (expiry > Date.now()) {
        setLinks(value);
      } else {
        removeItem(STOREKEY);
      }
    }
  }, []);

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
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};
