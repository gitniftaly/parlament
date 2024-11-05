import Container from "@/components/Container";
import React from "react";
import aba from "../../../images/media/aba.png";
import man from "../../../images/media/man.png";
import azad from "../../../images/media/azad.png";
import ayvaz from "../../../images/media/ayvaz.png";
import Image from "next/image";
import MediaView from "@/components/MediaView";
import { mediaObject, tvprodusers } from "@/constants/constan";

const Media = () => {
  return (
    <Container className="sm:px-4 lg:px-8 my-5 flex-col gap-1 flex">
      <header className="flex justify-center items-center mb-2">
        <h1>Media sources</h1>
      </header>
      {mediaObject.map((media) => (
        <MediaView
          key={media.id}
          tv={media.tv}
          since={media.since}
          produser={media.produser}
          url={media.url}
          person={tvprodusers[0]}
        />
      ))}
      {/* <section className="flex w-[400px] h-[200px] border border-inherit rounded-md mx-auto">
        <div className="flex flex-1 items-center justify-center">
          <Image src={azad} alt="aba" width="200" height="200" />
        </div>
        <div className="flex flex-1 items-center justify-center flex-col">
          <Image src={man} alt="aba" width="120" height="120" />
          <div className="py-2">Tural Sadıglı</div>
        </div>
      </section>
      <section className="flex w-[400px] h-[200px] border border-inherit rounded-md mx-auto">
        <div className="flex flex-1 items-center justify-center">
          <Image src={ayvaz} alt="aba" width="200" height="200" />
        </div>
        <div className="flex flex-1 items-center justify-center flex-col">
          <Image src={man} alt="aba" width="120" height="120" />
          <div className="py-2">Tural Sadıglı</div>
        </div>
      </section> */}
    </Container>
  );
};

export default Media;
