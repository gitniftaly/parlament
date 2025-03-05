import LinkElement from "@/components/reuseblescomp/LinkElement";
import Anouncments from "@/files/Anouncments";
import Commeettees from "@/pages/Commeettees";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-full bg-background -mt-2 rounded-xl py-5 justify-center">
      <header className="font-bold mx-auto py-2">
        <h1>Informasiya: elanlar bölməsi.</h1>
      </header>
      <Commeettees />
      <Anouncments />
    </div>
  );
};

export default page;
