import React from "react";

const CandidatesList = ({ candidates }) => {
  return (
    <div className="flex justify-center flex-col items-center p-3 mt-16">
      {candidates.map((item) => (
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
  );
};

export default CandidatesList;
