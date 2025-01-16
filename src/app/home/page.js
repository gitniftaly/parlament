import Container from "@/components/Container";
import Image from "next/image";
import mammd from "../../../public/mammd.png";
import Link from "next/link";
import azxp from "../../../public/azxp.jpg";
import join from "../../../public/comeTogether.jpg";
import aba from "../../../public/aba.jpg";
import azxpComing from "../../../public/azxpComing.jpg";
import azxpfirst from "../../../public/azxpfirst.jpg";

const HomeContent = () => {
  return (
    <Container
      className="flex flex-col  bg-background  justify-start
    rounded-t-xl -mt-2 overflow-y-scroll items-center h-dvh gap-3"
    >
      <section
        className="flex m-auto mt-3 h-[100px] sm:w-full rounded-xl sm:px-2
                w-[400px] sm:h-auto"
      >
        <Image
          alt="mmad"
          src={mammd}
          height={300}
          width={300}
          layout="responsive"
          className="flex rounded-lg w-full h-[170px]"
        />
      </section>

      <div className="flex-col flex sm:flex-row p-1 sm:gap-1 gap-3 sm:h-[220px] h-[460px] items-center mb-10">
        <div
          className=" flex flex-col rounded-xl shadow-xl border border-gray-300 w-full h-[280px]
                      items-center sm:h-[200px]"
        >
          <header>
            <h1 className="font-bold py-1">Azxp yaranması</h1>
          </header>
          <Link href="/about/aboutazxp" className="px-2">
            <span>
              Avtoritar idarəçiliyə qarşı çıxmaq və demokratik idarəetməni bərpa
              etmək məqsədilə Azərbaycan vətəndaşları Azərbaycan Xalq
              Parlamentinin (AzXP) təsis edildiyini elan etdilər. Bu cəsarətli
              təşəbbüs demokratik ənənələrin bərpasını, insan hüquqlarının
              müdafiəsini və sistematik korrupsiyanın aradan qaldırılmasını
              hədəfləyir. Milli və beynəlxalq səviyyədə diqqət çəkən AzXP,
              demokratik Azərbaycan uğrunda mübarizəsində qlobal həmrəylik
              çağırışı edir...
            </span>
          </Link>
        </div>
        <div
          className="flex flex-col rounded-xl shadow-xl border border-gray-300 w-full 
        sm:h-[200px] h-[270px] items-center"
        >
          <header>
            <h1 className="font-bold py-1">The configuration of PPA</h1>
          </header>
          <Link href="/about/aboutazxp" className="px-2">
            <span>
              In a significant move to counter decades of authoritarian rule and
              advocate for democratic governance, Azerbaijani citizens have
              announced the formation of the People’s Parliament of Azerbaijan
              (PPA). This bold initiative aims to restore democratic traditions,
              promote human rights, and dismantle systemic corruption. Drawing
              national and international attention, the PPA calls for global
              solidarity in its quest for a democratic Azerbaijan...
            </span>
          </Link>
        </div>
      </div>
      <section
        className="flex flex-col  w-full gap-3  h-full py-10
                      mt-10 sm:mt-0 sm:h-full mb-60 justify-around items-center px-1"
      >
        <div className="flex flex-1 border border-gray-300 h-[200px] shadow-sm  rounded-md items-center sm:h-[210px]">
          <Link
            target="_blank"
            href="https://www.youtube.com/watch?v=46gfXhy2q9E"
            className="flex items-center flex-col gap-2"
          >
            <div className="font-bold mt-1">
              <p>Azxp brinci sesiyası</p>
            </div>
            <Image
              src={azxpfirst}
              alt="join"
              width={300}
              height={300}
              className="sm:flex h-[144px] rounded-md"
            />
          </Link>
        </div>
        <section className="flex flex-col sm:flex-row sm:h-[350px] gap-1">
          <div
            className="flex sm:flex-1 border border-gray-300 h-[200px] shadow-sm
                             rounded-md items-center sm:h-[180px]"
          >
            <Link
              target="_blank"
              href="https://www.youtube.com/watch?v=5ZVqBN9Cxfs"
              className="flex items-center flex-col gap-2"
            >
              <div className="font-bold sm:py-0 py-1">
                <p>Birləşə bilərik</p>
              </div>
              <Image
                src={join}
                alt="join"
                width={300}
                height={300}
                className="sm:flex rounded-md h-[144px]"
              />
            </Link>
          </div>
          <div
            className="flex flex-col sm:flex-1 border border-gray-300 h-[200px] shadow-sm 
           rounded-md items-center sm:h-[180px]"
          >
            <Link
              href="https://www.youtube.com/watch?v=Uf9Sb_Yjdmg"
              target="_blank"
              className="flex items-center flex-col gap-2"
            >
              <div className="font-bold ">
                <p>Azxp qurulur</p>
              </div>
              <Image
                src={azxpComing}
                alt="azxpComing"
                width={300}
                height={300}
                className=" sm:flex rounded-md sm:h-[144px]"
              />
            </Link>
          </div>
          <div
            className="flex sm:flex-1 border border-gray-300 h-[180px] shadow-sm 
                         rounded-md items-center sm:h-[180px]"
          >
            <Link
              target="_blank"
              href="https://www.youtube.com/watch?v=sWuKJMCVHg8"
              className="flex items-center flex-col gap-2"
            >
              <div className="font-bold">
                <p>Səs namusdur</p>
              </div>
              <Image
                src={aba}
                alt="aba"
                width={300}
                height={300}
                className="sm:flex rounded-md sm:h-[144px]"
              />
            </Link>
          </div>
          <div
            className="flex flex-col flex-1 border border-gray-300 h-[200px] 
           shadow-sm sm:h-[180px] rounded-md  items-center"
          >
            <Link
              target="_blank"
              href="https://www.youtube.com/watch?v=Wa1JaPV7GEw"
              className="flex items-center flex-col gap-2"
            >
              <div className="font-bold">
                <p>Azxp elan günü</p>
              </div>
              <Image
                src={azxp}
                alt="azxp"
                width={300}
                height={300}
                className="sm:flex sm:h-[144px] rounded-md"
              />
            </Link>
          </div>
        </section>
      </section>
    </Container>
  );
};

export default HomeContent;
