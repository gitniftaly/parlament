import Container from "@/components/Container";
import Image from "next/image";
// import mammd from "../../../public/mammd.png";
// import Link from "next/link";
// import azxp from "../../../public/azxp.jpg";
// import join from "../../../public/comeTogether.jpg";
// import aba from "../../../public/aba.jpg";
// import azxpComing from "../../../public/azxpComing.jpg";
import ll from "../../../public/leyla.jpg";

const HomeContent = () => {
  return (
    <Container
      className="flex flex-col  bg-background  justify-start
    rounded-t-xl -mt-2 overflow-y-scroll items-center h-dvh gap-3"
    >
      <div
        className="flex flex-col sm:w-full w-[400px] h-auto 
      justify-center items-start sm:items-center sm:mt-10 mt-2"
      >
        <Image
          src={ll}
          alt="ll"
          className="sm:w-[500px] w-[400px]  border border-gray-400 rounded-2xl"
        />
        <article className="mt-3 flex items-center flex-col gap-1">
          <span className="font-bold">
            Azərbaycan Xalq Parlamentinin deputatı Leyla Məmmədovanın vaxtsız
            vəfatı ilə əlaqədar baş sağlığı mesajı.
          </span>
          <p className="font-serif px-3 mb-20">
            <span className="font-bold">Leyla Məmmədova</span>, cəmiyyətimizdəki
            fəaliyyətləri ilə yadda qalan, insanlara xidmət etməyə can atan bir
            şəxsiyyət idi. Onun itirilməsi, yalnız ailəsi və yaxınları üçün
            deyil, eyni zamanda bütün xalqımız üçün böyük bir itkidir. Hörmətli
            <span className="font-bold"> Leyla Məmmədovanın</span> ailəsi və
            yaxınlarına. Azərbaycan Xalq Parlamenti adından sizə dərin hüznlə
            baş sağlığı veririk.{" "}
            <span className="font-bold">Leyla Məmmədova</span>, cəmiyyətimizdəki
            fəaliyyəti, insanlara olan sevgisi və qayğısı ilə hər zaman
            xatırlanacaq. Onun mübariz ruhu, ədalətə olan inamı və insanlara
            olan bağlılığı, bizlər üçün örnək olacaq. Leyla xanımın xatirəsi,
            onun gördüyü işlər və cəmiyyətimizə qatdığı dəyər ilə daim
            yaşayacaq. Bu ağır günlərdə sizə səbr və dözüm arzulayırıq.
            Unutmayın ki, <span className="font-bold">Leyla Məmmədova</span>,
            yalnız bir deputat deyil, eyni zamanda bir dost, bir ana və bir
            insan olaraq, bizlərin qəlbində əbədi yaşayacaq.{" "}
            <p>
              <span className="font-bold">Başınız sağ olsun.</span>
            </p>
          </p>
        </article>
      </div>
      {/* <section
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
        className="flex flex-col sm:flex-row w-full gap-1 sm:gap-1 h-[350px] 
                      mt-10 sm:mt-0 sm:h-[300px] mb-60 justify-around px-1"
      >
        <div className="flex flex-1 border border-gray-300 h-[100px] shadow-sm  rounded-md items-center sm:h-[210px]">
          <Link
            href="https://www.youtube.com/watch?v=5ZVqBN9Cxfs"
            className="flex items-center flex-col"
          >
            <div className="w-full h-10 font-bold pl-24 mb-5">
              <p>Birləşə bilərik</p>
              <p>We can unite</p>
            </div>
            <Image
              src={join}
              alt="join"
              width={300}
              height={300}
              className="hidden sm:flex h-[144px]"
            />
          </Link>
        </div>
        <div className="flex flex-1 border border-gray-300 h-[100px] shadow-sm rounded-md items-center sm:h-[210px]">
          <Link
            href="https://www.youtube.com/watch?v=Uf9Sb_Yjdmg"
            className="flex items-center flex-col"
          >
            <div className="w-full h-10 font-bold pl-24 mb-5">
              <p>Azxp qurulur</p>
              <p>Azxp is built</p>
            </div>
            <Image
              src={azxpComing}
              alt="azxpComing"
              width={300}
              height={300}
              className="hidden sm:flex"
            />
          </Link>
        </div>
        <div
          className="flex flex-1 border border-gray-300 h-[100px] shadow-sm 
                         rounded-md items-center sm:h-[210px]"
        >
          <Link
            href="https://www.youtube.com/watch?v=sWuKJMCVHg8"
            className="flex items-center flex-col"
          >
            <div className="w-full h-10 font-bold pl-24 mb-5">
              <p>Səs namusdur</p>
              <p>Voice is honor</p>
            </div>
            <Image
              src={aba}
              alt="aba"
              width={300}
              height={300}
              className="hidden sm:flex h-[144px]"
            />
          </Link>
        </div>
        <div
          className="flex flex-col flex-1 border border-gray-300 h-[100px] 
           shadow-sm sm:h-[210px] rounded-md  items-center"
        >
          <Link
            href="https://www.youtube.com/watch?v=Wa1JaPV7GEw"
            className="flex items-center flex-col"
          >
            <div className="w-full h-10 font-bold pl-5 mb-5">
              <p>Azxp elan günü</p>
              <p>The Foundation day of PPA</p>
            </div>
            <Image
              src={azxp}
              alt="azxp"
              width={300}
              height={300}
              className="hidden sm:flex"
            />
          </Link>
        </div>
      </section> */}
    </Container>
  );
};

export default HomeContent;
