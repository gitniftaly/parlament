import CandidatDeteails from "@/pages/CandidatDeteails";
import React from "react";
import { candidates } from "@/constants/candidates";

const Details = async ({ params }) => {
  const id = (await params).id;
  return (
    <div className="h-dvh bg-background -mt-2 rounded-xl flex justify-center py-4">
      <CandidatDeteails item={candidates[id - 1]} />
    </div>
  );
};

export default Details;
