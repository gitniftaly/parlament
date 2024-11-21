import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import s1 from "../../images/statement/s1.png";
import s2 from "../../images/statement/s2.png";
import s3 from "../../images/statement/s3.png";
import s4 from "../../images/statement/s4.png";
import s5 from "../../images/statement/s5.png";
import s6 from "../../images/statement/s6.png";
import s7 from "../../images/statement/s7.png";
import s8 from "../../images/statement/s8.png";

const AzXPStatement = () => {
  return (
    <Container
      className="p-2 bg-background w-full 
                          rounded-t-xl -mt-2 h-dvh overflow-y-scroll"
    >
      <div className="flex flex-col items-center justify-center mt-5 gap-[0.5px]">
        <header className="pb-3">
          <h1 className="font-bold">AzXP Statement - Bəyanət</h1>
        </header>
        <Image alt="s1" src={s1} width="700" height="auto" />
        <Image alt="s2" src={s2} width="700" height="auto" />
        <Image alt="s3" src={s3} width="700" height="auto" />
        <Image alt="s4" src={s4} width="700" height="auto" />
        <Image alt="s5" src={s5} width="700" height="auto" />
        <Image alt="s6" src={s6} width="700" height="auto" />
        <Image alt="s7" src={s7} width="700" height="auto" />
        <Image alt="s8" src={s8} width="700" height="auto" />
      </div>
    </Container>
  );
};

export default AzXPStatement;
