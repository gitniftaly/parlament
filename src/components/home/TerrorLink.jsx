import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../Container";

const Terror = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <Link
        href="https://forms.gle/NimqXPN1EVeqb3ce7"
        target="_blank"
        className="font-serif text-2xl text-blue-800 underline animate-pulse"
      >
        Siyasi məhbuslar üzrə infomasiya mərkəzi.
      </Link>
    </section>
  );
};

export default Terror;
