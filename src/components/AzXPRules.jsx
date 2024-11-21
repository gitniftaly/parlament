import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";
import p5 from "../../images/p5.png";
import p6 from "../../images/p6.png";
import p7 from "../../images/p7.png";
import p8 from "../../images/p8.png";
import p9 from "../../images/p9.png";
import p10 from "../../images/p10.png";
import p11 from "../../images/p11.png";
import p12 from "../../images/p12.png";

const AzxpRules = () => {
  return (
    <Container
      className="p-2 bg-background w-full
                 rounded-t-xl -mt-2 h-dvh overflow-y-scroll"
    >
      <div className="flex flex-col items-center justify-center mt-5 gap-[0.5px]">
        <header className="pb-3">
          <h1 className="font-bold">AzXP Regulations - Nizamnamə</h1>
        </header>
        <Image alt="p1" src={p1} width="700" height="auto" />
        <Image alt="p2" src={p2} width="700" height="auto" />
        <Image alt="p3" src={p3} width="700" height="auto" />
        <Image alt="p4" src={p4} width="700" height="auto" />
        <Image alt="p5" src={p5} width="700" height="auto" />
        <Image alt="p6" src={p6} width="700" height="auto" />
        <Image alt="p7" src={p7} width="700" height="auto" />
        <Image alt="p8" src={p8} width="700" height="auto" />
        <Image alt="p9" src={p9} width="700" height="auto" />
        <Image alt="p10" src={p10} width="700" height="auto" />
        <Image alt="p11" src={p11} width="700" height="auto" />
        <Image alt="p12" src={p12} width="700" height="auto" />
      </div>
    </Container>
  );
};

export default AzxpRules;
