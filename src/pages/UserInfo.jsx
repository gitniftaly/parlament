import React from "react";
import { status } from "@/constants/status";

const UserInfo = ({ item }) => {
  return (
    <div
      key={item?.idn}
      className=" flex flex-col w-[400px] h-96 border border-gray-300 
                rounded-lg shadow-md px-2 items-center pb-2"
    >
      <div className="h-5 flex m-2">
        <span className="font-bold font-serif ">{item?.Adı}</span>
      </div>
      <div className="h-5 flex w-[300px] justify-between">
        <span>Doguldugu Yer</span>
        <span>{item?.DogYer}</span>
      </div>
      <hr className=" border-gray-300 border-inherit w-[300px] mt-1" />
      <div className="h-5 flex w-[300px] justify-between">
        <span>Təvəllüd</span>
        <span>{item?.Təvəllüd}</span>
      </div>
      <hr className=" border-gray-300 border-inherit w-[300px] mt-1" />
      <div className="h-5 flex w-[300px] justify-between">
        <span>Təhsil</span>
        <span>{item?.Təhsil}</span>
      </div>
      <hr className=" border-gray-300 border-inherit w-[300px] mt-1" />
      <div className="h-5 flex w-[300px] justify-between">
        <span>Fəaliyyət</span>
        <span>{item?.Fəaliyyət}</span>
      </div>
      <hr className=" border-gray-300 border-inherit w-[300px] mt-1" />
      <div className="h-5 flex w-[300px] justify-between">
        <span>İxtisas</span>
        <span>{item?.İxtisas}</span>
      </div>
      <hr className=" border-gray-300 border-inherit w-[300px] mt-1" />
      <div className="h-5 flex w-[300px] justify-between">
        <span>Ailə-Statusu</span>
        <span>{item?.AiləStatus}</span>
      </div>
      <hr className=" border-gray-300 border-inherit w-[300px] mt-1" />
      <div className="h-5 flex w-[300px] justify-between">
        <span>Az-Vətəndaşlıgı</span>
        <span>{item?.AzVətOlubmu}</span>
      </div>
      <hr className=" border-gray-300 border-inherit w-[300px] mt-1" />
      <div className="h-5 flex w-[300px] justify-between">
        <span>Yaşadıgı Ölkə</span>
        <span>{item?.Ölkəsi}</span>
      </div>
      {status.map((obj) => {
        if (obj.id === item?.idn) {
          return (
            <div
              className="font-bold mt-5 shadow-md w-full flex flex-col items-center"
              key={item.id}
            >
              <p>{obj.aztxt}</p>
              <p>{obj.entxt}</p>
            </div>
          );
        } else {
          return "";
        }
      })}
      {/* {status[item?.id] ? (
        <div className="font-bold mt-5 shadow-md">
          <p>{status[item?.id].aztxt}</p>
          <p>{status[item?.id].entxt}</p>
        </div>
      ) : (
        ""
      )} */}
      {/* {item.vote ? (
        <>
          <hr className=" border-gray-300 border-inherit w-[300px] mt-1" />
          <div className="h-5 flex w-[300px] justify-between">
            <span>Səs alıb </span>
            <span>{item?.vote}</span>
          </div>
        </>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default UserInfo;
