import Container from "@/components/Container";
import React from "react";

const FirstEleciton = () => {
  return (
    <Container
      className="flex flex-col h-dvh bg-background rounded-xl -mt-2
                          overflow-y-scroll items-center "
    >
      <h1 className="py-10 text-lg font-bold text-blue-500">First Election!</h1>
    </Container>
  );
};

export default FirstEleciton;
