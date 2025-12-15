"use client";
import Container from "@/components/Container";
import SubLinks from "@/components/reuseblescomp/SubLinks";
import React from "react";
import { about } from "@/constants/contents";
import useContextApi from "@/contextapi/useContextApi";

const About = () => {
  const { lang } = useContextApi();

  return (
    <Container className="mt-2 h-[500px] flex flex-col items-center">
      {about.map((abt, ind) => (
        <SubLinks
          key={ind}
          text={lang === "az" ? abt.infoaz : abt.infoen}
          url={abt.url}
        />
      ))}
    </Container>
  );
};

export default About;
