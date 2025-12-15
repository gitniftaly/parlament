import Container from "@/components/Container";
import React from "react";

const Contact = () => {
  return (
    <Container className="bg-background rounded-xl -mt-2 w-auto h-dvh">
      <section className="flex m-auto py-4">
        <header className="font-bold m-auto">AzXP contacts</header>
      </section>
      <section className="flex gap-6 justify-center">
        <div className="font-bold">Phone:</div>
        <div className="font-mono">
          <div className="mt-3">
            <span className="font-bold">Teymur Eminbəyli</span>
            <div>+46 76 050 30 38</div>
            <div>+46 70 776 03 03</div>
          </div>
          {/* <div className="mt-3">
            <span className="font-bold">Abid Qafarov</span>
            <div>+49 1520 5921770</div>
          </div>
          <div className="mt-3">
            <span className="font-bold">Qurban Məmmədli</span>
            <div>+44 7859 168159</div>
          </div> */}
        </div>
      </section>
      <section className="flex justify-center py-5 w-[400px] m-auto gap-5">
        <div className="font-bold -ml-5 justify-end border-inherit border">
          Email:
        </div>
        <div className="font-mono flex justify-end border border-inherit">
          <div className="text-blue-800">info@azxp.org</div>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
