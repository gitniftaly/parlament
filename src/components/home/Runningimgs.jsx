"use client";
import React, { useEffect, useState, useRef } from "react";
import useContextApi from "@/contextapi/useContextApi";
import Image from "next/image";
import Link from "next/link";

const Runningimgs = () => {
  const { dep2024 } = useContextApi();
  const trackRef = useRef(null);
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    if (!trackRef.current) return;

    const update = () => {
      if (!trackRef.current) return;

      const width = trackRef.current.scrollWidth / 2;

      // set CSS variable safely (JS way)
      trackRef.current.style.setProperty("--scroll-width", `${width}px`);

      // speed control
      setDuration(width / 60);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="w-full overflow-hidden ">
      <div
        ref={trackRef}
        className="flex w-max animate-marquee"
        style={{ animationDuration: `${duration}s` }}
      >
        {[...dep2024, ...dep2024].map((src, i) => (
          <div key={i} className="flex shrink-0 items-center px-1 ">
            <Link href="/deputies/deputies2024">
              <Image
                src={src.img}
                alt="logo"
                width={90}
                height={90}
                draggable={false}
                className="select-none rounded-lg"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Runningimgs;

{
  /* <div className="flex h-[90px] relative w-full justify-center bg-white marquee">
        {dep2024.map((img, ind) => (
          <Image
            key={ind}
            src={img.img}
            alt="logo"
            width={90}
            height={90}
            className="px-1 rounded-lg"
          />
        ))}
      </div> */
}
