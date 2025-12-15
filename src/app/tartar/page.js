"use client";
import Container from "@/components/Container";
import SubLinks from "@/components/reuseblescomp/SubLinks";
import { statecrimes } from "@/constants/contents";
import React from "react";
import useContextApi from "@/contextapi/useContextApi";

const Tartar = () => {
  const { lang } = useContextApi();

  return (
    <Container className="mt-2 h-[400px] flex flex-col items-center">
      {statecrimes.map((abt, ind) => (
        <SubLinks
          key={ind}
          text={lang === "az" ? abt.infoaz : abt.infoen}
          url={abt.url}
        />
      ))}
    </Container>
  );
};

export default Tartar;
