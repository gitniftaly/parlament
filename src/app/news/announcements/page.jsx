import LinkElement from "@/components/reuseblescomp/LinkElement";
import Anouncments from "@/files/Anouncments";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-full bg-background -mt-2 rounded-xl py-5 justify-center">
      <header className="font-bold mx-auto py-2">
        <h1>Informasiya elanlar bölgəsi.</h1>
      </header>
      <LinkElement
        link="/docpdf/economicsocialpolicy.pdf"
        alt="economic"
        title="İqtisadiyyat və Sosial Siyasət Komitəsi"
        date="19.02.2025"
        target="_blank"
        className="flex w-full gap-3 sm:w-[780px] mx-auto p-2 font-bold"
      />
      <LinkElement
        link="/docpdf/educationhealthcommittee.pdf"
        alt="education"
        title="Təhsil və Səhiyyə Komitəsi"
        date="17.02.2025"
        target="_blank"
        className="flex w-full gap-3 sm:w-[780px] mx-auto p-2 font-bold"
      />
      <LinkElement
        link="/docpdf/foreaignrelationships.pdf"
        alt="education"
        title="Xarici Əlaqələr Komitəsi"
        date="18.02.2025"
        target="_blank"
        className="flex w-full gap-3 sm:w-[780px] mx-auto p-2 font-bold"
      />
      <LinkElement
        link="/docpdf/humansrightscomeettie.pdf"
        alt="education"
        title="İnsan Hüquqları Komitəsi"
        date="18.02.2025"
        target="_blank"
        className="flex w-full gap-3 sm:w-[780px] mx-auto p-2 font-bold"
      />
      <Anouncments />
    </div>
  );
};

export default page;
