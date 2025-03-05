import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { TbHandClick } from "react-icons/tb";
import AzxpSession from "@/components/reuseblescomp/AzxpSession";
import Shortcuts from "@/files/Shortcuts";
import { azxpsessions } from "@/constants/azxpsessions";

const HomeContent = () => {
  return (
    <Container
      className="flex flex-col  bg-background  justify-start relative
    rounded-t-xl -mt-2 overflow-y-scroll items-center h-full gap-3"
    >
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
      <section
        className="flex justify-center sm:h-[50px] sm:px-0 h-20 px-2 w-full bg-blue-300 
                             mx-auto rounded-lg animate-pulse"
      >
        <Link
          href="/news/decisions"
          alt="secki"
          className="flex flex-col items-center "
        >
          <p className="flex font-bold gap-2 items-center">
            Parlamentə namizədliyinizi necə verə bilərsiniz
            <span>
              <TbHandClick className="text-black" />
            </span>
          </p>
          <p>
            Xalq vəkili olmag üçün nədən başlamalısan? Seçki komisiyası bəyan
            edir.
          </p>
        </Link>
      </section>
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
        <section className="grid sm:grid-cols-4 gap-2 overflow-y-auto">
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

export default HomeContent;
