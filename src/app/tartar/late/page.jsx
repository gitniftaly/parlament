import Container from "@/components/Container";
import TartarList from "@/components/tartar/TartarList";
import React from "react";

const Late = () => {
  return (
    <Container
      className="bg-background w-full h-auto flex  rounded-t-xl
                          flex-grow flex-col -mt-2"
    >
      <TartarList />;
    </Container>
  );
};

export default Late;
