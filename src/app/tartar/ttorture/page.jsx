"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

const Tartar = () => {
  return (
    <div className="flex py-5 h-10 w-full justify-center gap-5">
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
  );
};

export default Tartar;
