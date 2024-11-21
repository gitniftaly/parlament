import React from "react";
import Container from "../Container";
import TartarView from "./TartarView";
import { tartarData } from "@/constants/tartar";

const TartarList = () => {
  return (
    <Container className="w-auto h-dvh overflow-y-scroll">
      {tartarData.map((data, ind) => (
        <TartarView key={ind} data={data} />
      ))}
    </Container>
  );
};

export default TartarList;
