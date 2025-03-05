/* eslint-disable no-irregular-whitespace */

import LinkElement from "@/components/reuseblescomp/LinkElement";
import AzxpProtocol24 from "@/files/AzxpProtocol24";
import AzxpProtocol25 from "@/files/AzxpProtocol25";
import Link from "next/link";
import { FcDownload } from "react-icons/fc";

const Decisions = () => {
  return (
    <div className="flex flex-col min-h-dvh -mt-2 rounded-t-2xl overflow-x-hidden py-3 w-full bg-background px-2 gap-3">
      <header className="font-bold mx-auto py-2">
        <h1>Informasiya: qərarlar bölməsi.</h1>
      </header>
      <section className="flex flex-col h-auto w-full gap-3">
        <LinkElement
          link="/docpdf/listofcommittees.pdf"
          alt="committees"
          title="AzXP komitələri"
          date="16.02.2025"
          target="_blank"
          className="flex w-full gap-3 sm:w-[780px] mx-auto p-2 font-bold"
        />
        <LinkElement
          link="/docpdf/azxpresolution.pdf"
          alt="azxp_resolution"
          title="AzXP hakimiyyət böhranı haqqinda"
          date="16.02.2025"
          target="_blank"
          className="flex w-full gap-3 sm:w-[780px] mx-auto p-2 font-bold"
        />
        <LinkElement
          link="/docpdf/azxp_protokol_25.pdf"
          alt="azxp_protokol_25"
          title="Protokol_25"
          date="10.02.2025"
          target="_blank"
          className="flex w-full gap-3 sm:w-[780px] mx-auto p-2 font-bold"
        />
        <LinkElement
          link="/docpdf/qatnama_01_02_2025.pdf"
          alt="qatname_01_02_2025"
          title="Gətnamə_01_02_2025"
          date="01.02.2025"
          target="_blank"
          className="flex w-full gap-3 sm:w-[780px] mx-auto p-2 font-bold"
        />
        <LinkElement
          link="https://youtube.com/watch?v=03xi15-3_zw&si=Gh6IfoQHaSyZXAR3"
          alt="seçki"
          title="AzXP-nə namizədliyinizi necə verə bilərsiz?"
          date="10.02.2025"
          target="_blank"
          className="flex w-full gap-3 sm:w-[780px] mx-auto p-2 font-bold"
        />

        <AzxpProtocol25 />
        <div
          className="w-full mx-auto sm:w-[780px] h-14 border border-gray-300 
                       flex justify-center items-center px-2 rounded-lg"
        >
          <Link
            href="/protocol.docx"
            alt="alt text"
            rel="noopener noreferrer"
            target="_blank"
            locale={false}
            className="font-bold text-blue-600 flex items-center gap-2 "
          >
            AzXP SK-nın 24-saylı Yekun Protokolu.
            <span>
              <FcDownload />
            </span>
          </Link>
        </div>

        <AzxpProtocol24 />
      </section>
    </div>
  );
};

export default Decisions;
