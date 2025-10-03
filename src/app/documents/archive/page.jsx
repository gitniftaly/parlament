import Container from "@/components/Container";
import Archive from "@/components/documents/Archive";
import React from "react";

const page = () => {
  return (
    <Container className="flex bg-background rounded-t-2xl -mt-2 h-dvh overflow-y-auto">
      <Archive />
    </Container>
  );
};

export default page;
