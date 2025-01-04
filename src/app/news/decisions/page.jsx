/* eslint-disable no-irregular-whitespace */
"use client";

import AzxpProtocol24 from "@/files/AzxpProtocol24";
import Link from "next/link";
import { FcDownload } from "react-icons/fc";

const Decisions = () => {
  return (
    <div className="flex h-auto -mt-2 rounded-2xl py-3 w-full bg-background px-2 flex-col gap-3 sm:overflow-y-auto">
      <div className="w-full h-14 border border-gray-300 flex justify-center items-center px-2 rounded-lg">
        <Link
          href="/protocol.docx"
          alt="alt text"
          rel="noopener noreferrer"
          target="_blank"
          locale={false}
          className="font-bold text-blue-600 flex items-center gap-2"
        >
          AzXP SK-nın 24-saylı Yekun Protokolu.
          <span>
            <FcDownload />
          </span>
        </Link>
      </div>
      <AzxpProtocol24 />
    </div>
  );
};

export default Decisions;
