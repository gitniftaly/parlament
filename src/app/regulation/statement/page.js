import Link from "next/link";
// import bnma1 from "../../../../public/azxpbnma/bnma1.jpg";
import { TbHandClick } from "react-icons/tb";
// import Image from "next/image";
const page = () => {
  // return (
  //   <div className="flex h-dvh bg-background rounded-t-2xl -mt-2 sm:[780px]">
  //     <iframe src="/decision.pdf" width="auto" height="100%" />
  //   </div>
  // );
  return (
    <div className="flex flex-col h-dvh bg-background rounded-t-2xl -mt-2 sm:[780px] items-center gap-4 mb-20 sm:mb-0">
      <div className="border border-gray-300 rounded-lg flex h-16 w-[400px] sm:w-[780px] mt-5 justify-center items-center font-bold">
        <Link
          href="/decisions.pdf"
          target="_blank"
          className="flex gap-4 items-center"
        >
          AzXP Bəyannaməsi <TbHandClick className=" text-green-700" />
        </Link>
      </div>
      <div className="border border-gray-300 rounded-md flex flex-col sm:w-[600px] items-center sm:mb-0 overflow-auto">
        <header className="py-2">
          <h1 className="font-bold">Azərbaycan Xalq Parlamentinin Bəyanati</h1>
        </header>
        <p className="indent-4 px-2 font-sans">
          1993-cü ildən Azərbaycanda hakimiyyəti ələ keçirmiş Əliyevlər rejimi
          30 ildən artıqdır ki, ölkədə anti milli siyasət yeritməklə yanaşı,
          vətəndaşların hüquq və azadlıqlarını təmin etmir. O dövrdən
          başlayaraq, daha öncəki müəyyən bir dövr ərzində cəmiyyətdə
          formalaşmış demokratik dəyərlərin üzərinə total hücumlar həyata
          keçirilməkdədir.
        </p>
        <p className="indent-4 px-2 font-sans">
          Hakimiyyəti əldə saxlamaq naminə, YAP rejimi elə ilk gündən xalqa və
          cəmiyyətə qarşı siyasi təqib siyasəti həyata keçirməyə başlamış,
          vətəndaşların bütün siyasi hüquq və azadlıqları kobud surətdə pozulmuş
          və məhdudlaşdırılmışdır. Bu proses, 2003-cü ildə ində hakimiyyət İlham
          Əliyev tərəfindən ələ keçirdikdən sonra daha sərt formada həyata
          keçirilməkdədir. Korrupsiya, rüşvətxorluq və total hakimiyyət
          özbaşınalığının baş alıb getdiyi bir şəraitdə hakimiyyət və
          idarəçiliyi ən yüngül şəkildə belə təndiq edən şəxslər hakimiyyət
          tərəfindən dərhal təqiblərə məruz qalırlar. Bunun nəticəsi olaraq,
          keçən əsrin 90-cı illərin ikinci yarısından başlayaraq Azərbaycanda
          aparılan amansız siyasi təqiblər nəticəsində, Azərbaycan Avropa
          dövlətləri və keçmiş post sovet respublikaları arasında siyasi
          məhbusların sayına görə daimi birinci yerləri tutmaqdadır.
        </p>
        <p className="indent-4 px-2 font-sans">
          Son 20 il ərzində siyasi təqiblərə məruz qalan, və siyasi məhbus
          həyatı yaşayan şəxslərin sayı, istənilən zaman kəsiyində 100-150
          nəfərdən aşağı olmamışdır. Hal-hazırda ölkədə siyasi təqiblər özünün
          ən yüksək zirvəsinə qalxmışdır. Ölkədaxili və Beynəlxalq Hüquq müdafiə
          təşkilatlarının da təsdiq etdikləri kimi, hazırda ölkədə siyasi
          məhbusların sayı 300 nəfəri ötmüşdür.
        </p>
        <p className="indent-4 px-2 font-sans">
          Ölkədə siyasi fəaliyyətə demək olar ki, tam olaraq qadağa qoyulmuşdur.
          Hətta hakim rejimin repsessiv təqibləri üzündən ölkəni tərk etməyə
          məcbur olmuş siyasi muhacirlər, müxtəlif vasitələrlə ələ keçirilərək
          ölkəyə gətirilir, saxta və qondarma ittihamlarla təqib olunurlar.
          Artıq ölkədə siyasi repsesiya və təqiblərin miqyası ən yüksək həddə
          çatıb və bütün hədləri ötmüşdür.
        </p>
        <p className="indent-4 px-2 font-sans">
          Bütün bunları nəzərə alaraq, Azərbaycan Xalq Parlamenti hakimiyyətdən
          siyasi təqiblərə dərhal son qoyulmasını, siyasi fəaliyyətə, qanunlarda
          nəzərdə tutulmuş qaydada imkan yaradılmasını və bütün siyasi
          məhbusların hamılıqla azadlığa buraxılmasını tələb edir.
        </p>
        <p>
          Azərbaycan Xalq Parlamentinin dönəm sədri: Abid Qafarov.
          <p>___ yanvar 2025-ci il.</p>
        </p>
        {/* <Image
          src={bnma1}
          alt="bnma1"
          className="rounded-md sm:w-[400px]"
          layout="responsive"
          width={400}
          height={500}
        />*/}
      </div>
    </div>
  );
};

export default page;
