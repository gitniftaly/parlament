import Card from "@/components/Card";
import Contactus from "@/components/Contactus";
import Container from "@/components/Container";
import React from "react";

const Contact = () => {
  return (
    <Container className="">
      <section className="flex m-auto py-4">
        <header className="font-bold m-auto">AzXP contacts</header>
      </section>
      <section className="flex gap-6 justify-center">
        <div className="font-bold">Phone:</div>
        <div className="font-mono">
          <p>+46 76 050 30 38</p>
          <p>+46 70 776 03 03</p>
          <p>+49 163 226 88 86</p>
        </div>
      </section>
      <section className="flex justify-center py-5 w-[400px] m-auto gap-5">
        <div className="font-bold -ml-5 justify-end border-inherit border">
          Email:
        </div>
        <div className="font-mono flex justify-end border border-inherit">
          <p className="text-orange-500">It is coming soon!</p>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
