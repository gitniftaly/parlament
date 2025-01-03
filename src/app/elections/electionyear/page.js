"use client";
import { useEffect, useState } from "react";
import { candidates } from "@/constants/candidates";
import Container from "@/components/Container";
import { useDebounce } from "@/utils/debounce";
import dynamic from "next/dynamic";
import { ClipLoader } from "react-spinners";
import useContextApi from "@/contextapi/useContextApi";

const CandidatesListView = dynamic(() => import("@/pages/CandidatesListView"), {
  ssr: false,
  loading: () => (
    <p className="py-20 h-5 w-5">
      <ClipLoader color="#36d7b7" />
    </p>
  ),
});

const ElectionYear = () => {
  const { lang } = useContextApi();
  const [search, setSearch] = useState("");
  const [data, setData] = useState(candidates);

  const debValue = useDebounce(search, 300);
  useEffect(() => {
    let res = candidates.filter((item) =>
      item.Adı.toLowerCase().includes(debValue.toLowerCase())
    );
    setData(res);
  }, [setData, debValue]);

  return (
    <Container className="h-dvh bg-background rounded-xl -mt-2 flex justify-center flex-col items-center">
      <div className="flex font-bold font-serif flex-wrap py-3 px-2">
        Azərbaycan Xalq Parlamentinə namizədlər 2024.
      </div>
      <div className=" bg-background">
        <span className="font-bold p-2">
          {lang === "az" ? "Axtaış" : "Search"}
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
      <CandidatesListView candidates={data} source="can" />
    </Container>
  );
};

export default ElectionYear;
