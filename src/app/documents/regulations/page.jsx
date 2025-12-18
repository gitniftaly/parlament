// import AzxpRules from "@/components/AzXPRules";
import Link from "next/link";
import { TbHandClick } from "react-icons/tb";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
const page = () => {
  // return <AzxpRules />;
  return (
    <div className="flex flex-col h-dvh bg-background rounded-t-2xl -mt-2 sm:[780px] items-center">
      <div className="p-2 w-full">
        <Link href={"/documents"} className="text-lg">
          <IoArrowBackOutline />
        </Link>
      </div>
      <header className="py-3">
        <h1>
          <p className="font-bold">Sənədlər bölməsi</p>
        </h1>
      </header>
      <div className="border border-gray-300 rounded-lg flex h-16 w-[400px] sm:w-[780px] mt-5 justify-center items-center font-bold">
        <Link
          href="/newstatement01.11.2025.pdf"
          target="_blank"
          className="flex items-center gap-4"
        >
          AzXP-nin Nizamnaməsi <TbHandClick className="text-green-700" />
        </Link>
      </div>
      <div className="border border-gray-300 rounded-lg flex h-16 w-[400px] sm:w-[780px] mt-5 justify-center items-center font-bold">
        <Link
          href="/reglament.pdf"
          target="_blank"
          className="flex items-center gap-4"
        >
          AzXP-nin Reqlamenti <TbHandClick className="text-green-700" />
        </Link>
      </div>
      <div className="border border-gray-300 rounded-lg flex h-16 w-[400px] sm:w-[780px] mt-5 justify-center items-center font-bold">
        <Link
          href="/docpdf/regulations_on_disciplinary.pdf"
          target="_blank"
          className="flex items-center gap-4"
        >
          Əsasnamə İntizam Komissiyası haqqında
          <TbHandClick className="text-green-700" />
        </Link>
      </div>
      <div className="border border-gray-300 rounded-lg flex h-16 w-[400px] sm:w-[780px] mt-5 justify-center items-center font-bold">
        <Link
          href="/docpdf/suleyman_eturn_plan_to_Karabakh.pdf"
          target="_blank"
          className="flex items-center gap-4"
        >
          Süleyman müəllim Qarabağa qayıdış planı
          <TbHandClick className="text-green-700" />
        </Link>
      </div>
      <div className="border border-gray-300 rounded-lg flex h-16 w-[400px] sm:w-[780px] mt-5 justify-center items-center font-bold">
        <Link
          href="/docpdf/resolution_on_the_HAF.pdf"
          target="_blank"
          className="flex items-center gap-4"
        >
          HƏF ilə bağlı Qətnamə
          <TbHandClick className="text-green-700" />
        </Link>
      </div>
      <div className="border border-gray-300 rounded-lg flex h-16 w-[400px] sm:w-[780px] mt-5 justify-center items-center font-bold">
        <Link
          href="/docpdf/election_rules.pdf"
          target="_blank"
          className="flex items-center gap-4"
        >
          Seçkilər Qaydalar
          <TbHandClick className="text-green-700" />
        </Link>
      </div>
      <div className="border border-gray-300 rounded-lg flex h-16 w-[400px] sm:w-[780px] mt-5 justify-center items-center font-bold">
        <Link
          href="/docpdf/election_commision_reg.pdf"
          target="_blank"
          className="flex items-center gap-4"
        >
          Seçki Komissiyası Əsasnamə
          <TbHandClick className="text-green-700" />
        </Link>
      </div>
    </div>
  );
};

export default page;
{
  /* <iframe src="/statement.pdf" width={"100%"} /> */
}
