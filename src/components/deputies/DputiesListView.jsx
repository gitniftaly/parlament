"use client";
import { useEffect, useState } from "react";

import Container from "@/components/Container";
import { useDebounce } from "@/utils/debounce";

import useContextApi from "@/contextapi/useContextApi";
import DepityListView from "./DepityListView";

const DeputiesListView = () => {
  const { lang, dep2024 } = useContextApi();
  const [search, setSearch] = useState("");
  const [data, setData] = useState(dep2024);

  const debValue = useDebounce(search, 300);
  useEffect(() => {
    let res = dep2024.filter((item) =>
      item.Adı.toLowerCase().includes(debValue.toLowerCase())
    );
    setData(res);
  }, [setData, dep2024, debValue]);

  return (
    <Container className="h-dvh bg-background rounded-xl -mt-2 flex items-center justify-center flex-col">
      <div className="flex font-bold font-serif flex-wrap py-3 px-2">
        Azərbaycan Xalq Parlamentinə seçilmiş 87 deputatın siyahısı.
      </div>
      <div className=" bg-background">
        <span className="font-bold p-2">
          {lang === "az" ? "Axtarış: " : "Search: "}
        </span>
        <span>
          <input
            type="search"
            value={search}
            className="h-7 w-[280px] rounded-lg p-2 bg-background border border-gray-400"
            placeholder="enter text"
            onChange={(e) => setSearch(e.target.value)}
          />
        </span>
      </div>
      <DepityListView candidates={data} />
    </Container>
  );
};

export default DeputiesListView;
