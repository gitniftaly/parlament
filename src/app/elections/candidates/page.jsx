"use client";
import { useState, useEffect } from "react";
// import file from "../../../../public/Azxp.xlsx";
// import * as XLSX from "xlsx";
import { candidates } from "@/constants/candidates";
import Container from "@/components/Container";

import { useDebounce } from "@/utils/debounce";

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
      <div className="flex justify-center flex-col items-center p-3 mt-16">
        {data.map((item) => (
          <div
            key={item.id}
            className=" flex flex-col w-[400px] h-auto border border-gray-300 
                      rounded-lg shadow-md px-2 mb-1 items-center "
          >
            <div className="h-5 flex m-2">
              <span className="font-bold font-serif ">{item.Adı}</span>
            </div>
            <div className="h-5 flex w-[300px] justify-between">
              <span>Doguldugu Yer</span>
              <span>{item.DogYer}</span>
            </div>
            <hr className=" border-gray-300 border-inherit w-[300px] mt-1" />
            <div className="h-5 flex w-[300px] justify-between">
              <span>Təvəllüd</span>
              <span>{item.Təvəllüd}</span>
            </div>
            <hr className=" border-gray-300 border-inherit w-[300px] mt-1" />
            <div className="h-5 flex w-[300px] justify-between">
              <span>Təhsil</span>
              <span>{item.Təhsil}</span>
            </div>
            <hr className=" border-gray-300 border-inherit w-[300px] mt-1" />
            <div className="h-5 flex w-[300px] justify-between">
              <span>Fəaliyyət</span>
              <span>{item.Fəaliyyət}</span>
            </div>
            <hr className=" border-gray-300 border-inherit w-[300px] mt-1" />
            <div className="h-5 flex w-[300px] justify-between">
              <span>İxtisas</span>
              <span>{item.İxtisas}</span>
            </div>
            <hr className=" border-gray-300 border-inherit w-[300px] mt-1" />
            <div className="h-5 flex w-[300px] justify-between">
              <span>AiləStatus</span>
              <span>{item.AiləStatus}</span>
            </div>
            <hr className=" border-gray-300 border-inherit w-[300px] mt-1" />
            <div className="h-5 flex w-[300px] justify-between">
              <span>AzVətOlubmu</span>
              <span>{item.AzVətOlubmu}</span>
            </div>
            <hr className=" border-gray-300 border-inherit w-[300px] mt-1" />
            <div className="h-5 flex w-[300px] justify-between">
              <span>Yaşadıgı Ölkə</span>
              <span>{item.Ölkəsi}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Candidates;
