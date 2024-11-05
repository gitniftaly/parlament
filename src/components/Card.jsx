import React from "react";
import Container from "./Container";

const Card = ({ name, phones, emails }) => {
  return (
    <Container
      className="w-screen flex 
                    m-auto justify-center items-baseline"
    >
      <div className="border border-inherit mt-5 rounded-lg shadow-md">
        <header className="flex justify-center mt-2 font-semibold">
          <h1>{name}</h1>
        </header>
        <div
          className="grid grid-cols-2 w-[400px] mt-2 
                     "
        >
          <section className="h-7 flex items-center justify-center">
            Phones
          </section>
          <section className="h-7 flex items-center justify-center">
            {phones}
          </section>
          <section className="h-7 flex flex-col items-center justify-center">
            Emails
          </section>
          <section className="h-7 flex items-center justify-center">
            {emails}
          </section>
        </div>
      </div>
    </Container>
  );
};

export default Card;
