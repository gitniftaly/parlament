"use client";
import React, { useEffect, useState } from "react";
// import Candidates from "../candidates/page";
import { candidates } from "@/constants/candidates";
import CandidatesListView from "@/pages/CandidatesListView";
import Container from "@/components/Container";
import { useDebounce } from "@/utils/debounce";

const ElectionYear = () => {
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
    <Container className="h-dvh bg-background rounded-xl -mt-2 flex justify-center">
      <div className="fixed m-5 bg-background">
        <span className="font-bold p-2">Search</span>
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
      <CandidatesListView candidates={data} />
    </Container>
  );
};

export default ElectionYear;
