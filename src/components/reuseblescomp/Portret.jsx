import React from "react";
import ImagePage from "../ImagePage";

const Portret = ({ data }) => {
  return (
    <div className="w-[305px] h-[360px] p-1 border border-gray-300 rounded-lg shadow-md mt-10">
      <ImagePage
        src={`${data.imgLink}`}
        alt="portret"
        width={300}
        height={100}
        className="h-[300px] rounded-lg"
      />
      <article className="pl-3 font-bold py-1">
        <p className="flex gap-2">
          <span className="ml-2 font-normal italic text-blue-700">
            {data.title}
          </span>
          <span>{data.name}</span>
        </p>
        <p>Phone: {data.phone}</p>
      </article>
    </div>
  );
};

export default Portret;
