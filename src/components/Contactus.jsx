import Container from "./Container";
import Card from "./Card";
import React from "react";

const Contactus = () => {
  return (
    <Container className=" w-screen flex justify-center items-center bg-background">
      <section className="flex flex-col">
        <section>
          <Card
            name={"AzXP contacts"}
            phones={"+4676 0503038 | +4670 7760303"}
            emails={"coming soon"}
          />
        </section>
      </section>
    </Container>
  );
};

export default Contactus;
