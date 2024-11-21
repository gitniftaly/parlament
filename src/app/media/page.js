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
    </Container>
  );
};

export default Media;
