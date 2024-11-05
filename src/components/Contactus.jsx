import React from "react";
import Container from "./Container";
import { contacts } from "@/constants/constan";
import Card from "./Card";

const Contactus = () => {
  return (
    <Container className=" w-screen flex justify-center items-center">
      <section className="flex flex-col">
        {/* {contacts.map((contact, id) => ( */}
        <section>
          <Card
            name={"AzXP contacts"}
            phones={"+4676 0503038 | +4670 7760303"}
            emails={"coming soon"}
          />
        </section>
        {/* ))} */}
      </section>
    </Container>
  );
};

export default Contactus;
