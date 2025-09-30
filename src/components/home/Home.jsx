import React from "react";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { TbHandClick } from "react-icons/tb";
import AzxpSession from "@/components/reuseblescomp/AzxpSession";
import Shortcuts from "@/files/Shortcuts";
import { azxpsessions } from "@/constants/azxpsessions";
import Terror from "./TerrorLink";
// import ElectionLink from "./ElectionLink";
import Activists from "../popup/activists";
// import Overlay from "../popup/overlay";

const Home = () => {
  return (
    <Container
      className="flex flex-col  bg-background  justify-start relative
    rounded-t-xl -mt-2 overflow-y-scroll items-center h-full gap-3"
    >
      <section className="flex mt-5 sm:mt-3 px-2 py-2 h-5 justify-center items-center">
        <Terror />
      </section>
      {/* <section className="flex mt-4 sm:m-0 px-2 py-2 h-15 justify-center bg-green-400 items-center rounded-md">
        <ElectionLink />
      </section> */}
      <section
        className="flex m-auto mt-3 h-[100px] sm:w-full rounded-xl sm:px-2
                w-[400px] sm:h-auto"
      >
        <Image
          alt="mmad"
          src="/mammd.png"
          height={300}
          width={300}
          layout="responsive"
          className="flex rounded-lg w-full h-[170px]"
        />
      </section>
      {/* <Overlay className="" /> */}
      <Activists />

      <div className="flex-col flex sm:flex-row p-1 sm:gap-1 gap-3 sm:h-[220px] h-[280px] items-center mb-1">
        <div
          className=" flex flex-col rounded-xl shadow-md border border-gray-300 w-full h-[280px]
                      items-center sm:h-[200px]"
        >
          <header>
            <h1 className="font-bold py-1 flex gap-4 items-center">
              AzXP yaranması <TbHandClick className="text-green-700" />
            </h1>
          </header>
          <Link href="/about/aboutazxp" className="px-2">
            <span>
              Avtoritar idarəçiliyə qarşı çıxmaq və demokratik idarəetməni bərpa
              etmək məqsədilə Azərbaycan vətəndaşları Azərbaycan Xalq
              Parlamentinin (AzXP) təsis edildiyini elan etdilər. Bu cəsarətli
              təşəbbüs demokratik ənənələrin bərpasını, insan hüquqlarının
              müdafiəsini və sistematik korrupsiyanın aradan qaldırılmasını
              hədəfləyir...
            </span>
          </Link>
        </div>
        <div
          className="hidden sm:flex flex-col rounded-xl shadow-md border border-gray-300 w-full
        sm:h-[200px] h-[270px] items-center"
        >
          <header>
            <h1 className="font-bold py-1 flex items-center gap-4">
              The configuration of APP{" "}
              <TbHandClick className="text-green-700" />
            </h1>
          </header>
          <Link href="/about/aboutazxp" className="px-2">
            <span>
              In a significant move to counter decades of authoritarian rule and
              advocate for democratic governance, Azerbaijani citizens have
              announced the formation of the Azerbaijan Popular Parliament
              (APP). This bold initiative aims to restore democratic traditions,
              promote human rights, and dismantle systemic corruption...
            </span>
          </Link>
        </div>
      </div>

      <section className="sm:h-40 w-full flex flex-col">
        <header className="mx-auto font-bold pb-2">
          <h1>Sayitda qısa istiqamətlər!</h1>
        </header>
        <Shortcuts />
      </section>

      <section
        className="flex w-full gap-3  h-full sm:py-0 sm:mb-2
                       sm:mt-0 sm:h-full justify-around items-start px-1"
      >
        <section className="grid sm:grid-cols-4 gap-2 overflow-y-auto sm:h-96 h-60">
          {azxpsessions.map((session) => (
            <AzxpSession
              key={session.idn}
              src={session.src}
              text={session.textaz}
              link={session.link}
            />
          ))}
        </section>
      </section>
    </Container>
  );
};

export default Home;
