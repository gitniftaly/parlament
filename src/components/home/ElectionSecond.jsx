import Image from "next/image";
import Link from "next/link";
import React from "react";

const ElectionSecond = () => {
  return (
    <div className="flex flex-col  h-full w-full items-center justify-center">
      <Image
        height={300}
        width={300}
        src="/temp/election2.jpg"
        alt="election2"
        className="py-4 pb-5"
      />
      <Link
        href="https://pollforall.com/p34897dx"
        className="pb-20 font-serif text-2xl text-blue-600 underline"
      >
        Azərbaycan Xalq Parlamentinə əlavə seçkilər.
      </Link>
    </div>
  );
};

export default ElectionSecond;
