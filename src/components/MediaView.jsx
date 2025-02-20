import clsx from "clsx";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const MediaView = ({ tv, profile, produser, since, url, className }) => {
  console.log("Profile: ", profile);
  return (
    <section
      className={clsx(
        "flex w-[350px] sm:w-[600px] h-[200px] " +
          "border border-inherit rounded-md mx-auto",
        className
      )}
    >
      <div className="flex flex-1 items-center justify-center flex-col mt-2">
        <Link href={url}>
          <Image src={`/media/${tv}.png`} alt={tv} width="120" height="120" />
          <div className="py-2">{since}</div>
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-center flex-col">
        <Link href={url} className="rounded-lg">
          <Image
            src={profile}
            alt={produser}
            width="120"
            height="120"
            className="rounded-lg flex"
          />
        </Link>
        <div className="py-2">{produser}</div>
      </div>
    </section>
  );
};

export default MediaView;
