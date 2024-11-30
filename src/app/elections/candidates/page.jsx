"use client";
import { useState, useEffect } from "react";
// import file from "../../../../public/Azxp.xlsx";
// import * as XLSX from "xlsx";
import { candidates } from "@/constants/candidates";
import Container from "@/components/Container";
import CandidatesList from "@/pages/CandidatesList";
import { useDebounce } from "@/utils/debounce";
// import CandidatesList from "@/pages/CandidatesList";
const Candidates = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(candidates);

  // const handleFileUpload = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = (event) => {
  //     const workbook = XLSX.read(event.target.result, { type: "binary" });
  //     const sheetName = workbook.SheetNames[0];
  //     const sheet = workbook.Sheets[sheetName];
  //     const sheetData = XLSX.utils.sheet_to_json(sheet);

  //     setData(sheetData);
  //   };

  //   reader.readAsBinaryString(file);
  // };

  // const handleChange = (e) => {
  //   debounce(() => {
  //     setSearch(e.target.value);
  //   }, 5000);
  // };
  const debValue = useDebounce(search, 300);
  useEffect(() => {
    let res = candidates.filter((item) =>
      item.Adı.toLowerCase().includes(debValue.toLowerCase())
    );
    setData(res);
  }, [setData, debValue]);

  return (
    <Container
      className="flex flex-col h-dvh bg-background rounded-xl -mt-2
                          overflow-y-scroll items-center "
    >
      <div className="fixed m-5 bg-background">
        <span className="font-bold p-2">Search</span>
        <span>
          <input
            type="search"
            value={search}
            className="h-7 w-[280px] rounded-lg p-2 bg-background border border-gray-300"
            placeholder="enter text"
            onChange={(e) => setSearch(e.target.value)}
          />
        </span>
      </div>
      <CandidatesList candidates={data} />
    </Container>
  );
};

export default Candidates;
