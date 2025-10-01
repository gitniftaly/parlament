import Container from "./Container";
import ImagePage from "./ImagePage";
import Link from "next/link";
import { mediaObject } from "../constants/constan";
import SocialMedia from "./SocialMedia";
import { socialmedia } from "@/constants/socialmedia";
import React from "react";

const Footer = () => {
  return (
    <Container className="bg-blue-900 w-full rounded-t-xl relative bottom-2">
      <div className="m-auto flex flex-col">
        <div className="flex flex-row justify-end items-center">
          <header className="flex flex-1 text-white ">
            <h1 className="flex px-16">Media - Mediyalar</h1>
          </header>
          <SocialMedia social={socialmedia} />
        </div>
        <div
          className="grid grid-cols-3 gap-3 px-8 justify-center 
                        sm:grid-cols-4 py-5"
        >
          {mediaObject.map((img, ind) => (
            <Link
              key={ind}
              href={img.url}
              target="_blank"
              className="flex justify-center items-center"
            >
              <ImagePage
                key={ind}
                src={`/media/${img.tv}.png`}
                alt={img}
                width={100}
                height={100}
                className="w-32 h-auto rounded-full"
              />
            </Link>
          ))}
        </div>
      </div>

      <section className="flex justify-center mt-20">
        <span className="text-white">&copy; AzXP 2025 </span>
      </section>
    </Container>
  );
};

export default Footer;
