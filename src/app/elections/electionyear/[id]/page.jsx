import CandidatDeteails from "@/pages/CandidatDeteails";
import React from "react";
import { candidates } from "@/constants/candidates";

const Details = async ({ params }) => {
  const id = (await params).id;
  const profile = (ing) => {
    return candidates.filter((item) => item.idn === ing);
  };
  const obj = profile(parseInt(id));
  return (
    <div className="h-dvh bg-background -mt-2 rounded-xl flex justify-center py-4">
      <CandidatDeteails item={obj[0]} />
    </div>
  );
};

export default Details;
