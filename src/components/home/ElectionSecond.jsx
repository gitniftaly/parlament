import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegHandPointDown } from "react-icons/fa6";
// import Container from "../Container";

const ElectionSecond = () => {
  return (
    <div
      className="grid grid-cols-1 sm:flex h-full w-full justify-center items-center 
                      pb-10"
    >
      <section className="flex flex-col justify-center items-center">
        {/* <Link
          href="https://www.youtube.com/watch?v=Ol3yDDpIPHg"
          target="_blank"
          className="pb-20 font-serif text-2xl text-blue-600 underline"
        >
          <Image
            height={300}
            width={300}
            src="/temp/azxp.jpg"
            alt="election2"
            layout="responsive"
            className="py-4 pb-5"
          />
          Səsvermə başladı! Saat 08:00-dən öz millət vəkillərinizi seçin!
        </Link> */}
      </section>
      <section className="flex flex-col justify-center items-center">
        <Image
          height={300}
          width={300}
          src="/temp/election2.jpg"
          alt="election2"
          className="py-4 pb-5"
        />
        <Link
          href="https://pollforall.com/plqqn8w2"
          target="_blank"
          className="pb-20 font-serif text-2xl text-blue-600 underline"
        >
          Azərbaycan Xalq Parlamentinə əlavə seçkilər.
        </Link>
        <div className="flex gap-5  text-amber-700 text-2xl animate-bounce">
          <span>Səs vermə qaydaları </span>
          <span>
            <FaRegHandPointDown />
          </span>
        </div>
        <Link
          href="https://www.youtube.com/watch?v=laPCOgaVyxg"
          target="_blank"
          className="pb-20 font-serif text-2xl text-blue-600 underline"
        >
          Azərbaycan Xalq Parlamentinə növbəti seçkilər başlayır 21.9.25
        </Link>
      </section>
    </div>
  );
};

export default ElectionSecond;
