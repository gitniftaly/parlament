"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

const Tartar = () => {
  return (
    <div className="flex flex-col py-14 h-10 w-full justify-center gap-5 items-center">
      <div className="flex">
        <Link href="/tartar/ttorture/late">
          <Button
            variant="outline"
            className="border border-gray-400 w-40 font-serif font-bold"
          >
            Gətil olunmuşlar
          </Button>
        </Link>
        <Link href={"#"}>
          <Button
            variant="outline"
            className="border border-gray-400 w-40 font-serif font-bold"
          >
            Cəza almışlar
          </Button>
        </Link>
      </div>
      <Link href={"/TartərHökmləri-24.05.2025.pdf"} target="_blank">
        <Button
          variant="outline"
          className="border border-gray-400 w-80 font-serif font-bold"
        >
          Qurban Məmmədli: Tərtər hökümləri
        </Button>
      </Link>
    </div>
  );
};

export default Tartar;
