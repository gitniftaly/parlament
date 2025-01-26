import Container from "@/components/Container";
import Image from "next/image";
import mammd from "../../../public/mammd.png";
import Link from "next/link";
import azxp from "../../../public/azxp.jpg";
import join from "../../../public/comeTogether.jpg";
import aba from "../../../public/aba.jpg";
import azxpComing from "../../../public/azxpComing.jpg";
import azxpfirst from "../../../public/azxpfirst.jpg";
import azxpsecond from "../../../public/azxpsecond.jpg";
import { TbHandClick } from "react-icons/tb";

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
          className=" flex flex-col rounded-xl shadow-md border border-gray-300 w-full h-[280px]
                      items-center sm:h-[200px]"
        >
          <header>
            <h1 className="font-bold py-1 flex gap-4 items-center">
              Azxp yaranması <TbHandClick className="text-green-700" />
            </h1>
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
          className="flex flex-col rounded-xl shadow-md border border-gray-300 w-full 
        sm:h-[200px] h-[270px] items-center"
        >
          <header>
            <h1 className="font-bold py-1 flex items-center gap-4">
              The configuration of PPA{" "}
              <TbHandClick className="text-green-700" />
            </h1>
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

      <section className="flex sm:h-40 w-full flex-col sm:flex-row rounded-lg gap-2 mt-10 sm:-mt-5">
        <article
          className="w-full h-full flex flex-col border border-gray-300 shadow-md 
                            items-center px-2 rounded-md"
        >
          <Link
            href="/documents/statement"
            alt="azxpbnt"
            className="flex flex-col items-center"
          >
            <header>
              <h1 className="font-bold py-1 flex items-center gap-3">
                Azərbaycan Xalq Parlamentinin Bəyanatı
                <TbHandClick className="text-green-700" />
              </h1>
            </header>
            <p>
              1993-cü ildən Azərbaycanda hakimiyyəti ələ keçirmiş Əliyevlər
              rejimi 30 ildən artıqdır ki, ölkədə anti milli siyasət yeritməklə
              yanaşı, vətəndaşların hüquq və azadlıqlarını təmin etmir...
            </p>
          </Link>
        </article>
        <article className="w-full h-full border border-gray-300 shadow-md flex flex-col items-center px-2 rounded-md">
          <Link
            href="news/newsLine"
            alt="azxpbnt"
            className="flex flex-col items-center"
          >
            <header>
              <h1 className="font-bold flex items-center flex-col">
                <p className="flex gap-3 items-center">
                  Azərbaycan Xalq Parlamentinin
                  <TbHandClick className="text-green-700" />
                </p>
                <p>Azərbaycan respublikası Daxili İşlər Nazirliynə müraciət</p>
              </h1>
            </header>
            <p>
              18.01.2025-ci il tarixdə, İmişli rayonu ərazisində baş vermiş
              avtomobil qəzası nəticəsində iki məktəbli uşağın vəfat etməsi...
            </p>
          </Link>
        </article>
        <article className="w-full h-full border border-gray-300 shadow-md flex flex-col items-center px-2 rounded-md">
          <Link href="about/discipline" alt="azxpbnt" className="flex flex-col">
            <header>
              <h1 className="font-bold flex flex-col items-center">
                <p className="flex items-center gap-2">
                  Azərbaycan Xalq Parlamenti
                  <TbHandClick className="text-green-700" />
                </p>
                <p className="flex items-end">
                  İntizam komissiyasının üzviləri
                </p>
              </h1>
            </header>
            <p className="flex mt-3">
              12 yanvar 2025 il tarixli toplantısının qərarı #:1
            </p>
          </Link>
        </article>
      </section>

      <section
        className="flex flex-col  w-full gap-3  h-full py-10
                      mt-10 sm:mt-0 sm:h-full mb-60 justify-around items-center px-1"
      >
        <section className="flex sm:flex-row flex-col gap-2">
          <div
            className="flex flex-1 border border-gray-300 h-[200px] shadow-sm 
                           rounded-md items-center sm:h-[190px]"
          >
            <Link
              target="_blank"
              href="https://www.youtube.com/watch?v=46gfXhy2q9E"
              className="flex items-center flex-col gap-2 sm:h-[200px] sm:py-3"
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
          <div
            className="flex border border-gray-300 h-[200px] shadow-sm 
                           rounded-md items-center sm:h-[190px]"
          >
            <Link
              target="_blank"
              href="https://www.youtube.com/watch?v=vushV9NS1R8&t=7693s"
              className="flex items-center flex-col gap-2 sm:h-[200px] sm:py-3"
            >
              <div className="font-bold mt-1">
                <p>Azxp ikinci sesiyası</p>
              </div>
              <Image
                src={azxpsecond}
                alt="join"
                width={300}
                height={300}
                className="sm:flex h-[144px] rounded-md"
              />
            </Link>
          </div>
        </section>
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
