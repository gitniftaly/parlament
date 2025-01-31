import React from "react";
import Container from "@/components/Container";
import Book from "../reuseblescomp/Book";
import { ebooks } from "@/constants/ebooks";

const Ebooks = () => {
  return (
    <Container className="w-full bg-background -mt-2 rounded-t-2xl h-dvh py-5">
      {ebooks.map((data, ind) => (
        <Book data={data} key={ind} />
      ))}
    </Container>
  );
};

export default Ebooks;
