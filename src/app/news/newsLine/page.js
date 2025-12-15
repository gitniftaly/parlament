import Container from "@/components/Container";
import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const page = () => {
  return (
    <Container className="flex flex-col h-dvh w-full bg-background  rounded-t-xl overflow-auto mb-10 sm:mb-0">
      <div className="p-2">
        <Link href={"/news"} className="text-lg">
          <IoArrowBackOutline />
        </Link>
      </div>
      <main className="w-full px-10 flex">
        <div className="w-[400px] h-full items-center justify-center flex flex-col sm:w-full overflow-auto">
          <header>
            <h1 className="font-bold flex items-center flex-col py-2">
              <p className="flex gap-3 items-center">
                Azərbaycan Xalq Parlamentinin
              </p>
              <p>Azərbaycan respublikası Daxili İşlər Nazirliynə müraciət</p>
            </h1>
          </header>
          <p className="indent-4 px-3">
            18.01.2025-ci il tarixdə, İmişli rayonu ərazisində baş vermiş
            avtomobil qəzası nəticəsində iki məktəbli uşağın vəfat etməsi, eləcə
            də digər uşaqların yaralanması bizi dərindən kədərləndirib. Bu cür
            faciələr, ailələrimizdə və cəmiyyətimizdə böyük bir acı yaradıb.
            Biz, itkilərimizə görə dərin hüzn içindəyik və bütün yaralı
            uşaqlarımıza tezliklə sağalmalarını arzulayırıq. Əvvəllər buna
            bənzər hadisələrin müvafiq orqanlar tərəfindən araşdırılmaması,
            günahkarların cəzasız qalmasını nəzərə alaraq, Azərbaycan Xalq
            Parlamentinin aşağıdakı tələblərini sizə bildiririk:
          </p>
          <section className="indent-6 px-3 flex gap-2 flex-col">
            <p>
              1. Baş vermis qəzanın səbəbləri obyektiv və qərəzsiz şəkildə
              araşdırılsın!
            </p>
            <p> 2. Günahkar şəxslər dərhal qanun qarşısında cəzalandırılsın!</p>
            <p>
              3. Araşdırmanın şəffaflığı təmin edilsin, istintaqın gedişi və
              nəticələri barədə ictimaiyata vaxtlı-vaxtında məlumatlar verilsin.
            </p>
            <p>
              4. Qəzadan sonra etiraz edən vətəndaşların həbsi dayandırılsın və
              həbs edilənlər dərhal sərbəst buraxılsın!
            </p>
            <p>
              {" "}
              5. Qəzada həyatını itirmiş uşaqların ailələrinə heç bir təzyiq
              göstərilməsin!{" "}
            </p>
            <p>
              6. Polis üçün “cəzasızlıq mühiti” formalaşdırmaqdan çəkinilsin və
              hamının qanun qarşısında bərabərliyi polis nəfərləri üçün tətbiq
              edilsin!
            </p>
          </section>
          <article>
            Hörmətlə, Azərbaycan Xalq Parlamenti Mətbuat Xidməti
          </article>
        </div>
      </main>
    </Container>
  );
};

export default page;
