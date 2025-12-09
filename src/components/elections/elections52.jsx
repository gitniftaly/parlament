"use client";
import React, { useEffect, useState } from "react";

const Elections52 = () => {
  const [show, setShow] = useState(true);
  const [showSlide, setShowSlide] = useState(false);

  // Show slide after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlide(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section
      className={`flex flex-col sm:w-[650px] mt-4 sm:m-0 px-2 py-2 h-15 justify-center
       bg-white items-center rounded-md absolute  ${
         !showSlide ? "animate-slide-down" : ""
       }
        ${show ? "visible" : "invisible"}`}
    >
      <div
        className="font-bold text-xl items-center justify-center 
           flex w-full h-8 bg-green-400 text-white text-center rounded-full"
        onClick={() => setShow((preShow) => !preShow)}
      >
        X
      </div>
      <article className="sm:text-lg">
        <header className="text-center">
          <h1 className="font-bold">
            AzXP Seçki Komissiyası iclasının 52 saylı Protokolu
          </h1>
          <h3>06.12.2025-ci il (Watsapp üzərindən)</h3>
        </header>
        <div className="p-2">
          <p className="font-bold mt-4 mb-2">
            İclasda iştirak etdilər (7 nəfər):
          </p>
          <p>
            Rasim Əlizadə, Kəmalə Mehdiyeva, Şəmsəddin Camiyev, Cavanşir
            Abbasov, Oktay Omarov, Bəxtiyar İsmayılov, Fikrət Qəhrəmanov.
          </p>
          <p className="mt-1">
            1. 2-ci Çağırış Parlament seçkilərinin keçirilməsinin elan edilməsi.
          </p>
          <p>
            2. 2-ci Çağırış Parlament seçkilərinin keçirilməsinin təşkil
            edilməsi.
          </p>
          <p className="font-bold mt-1 mb-1">ÇIXIŞLAR:</p>
          <p>
            Gündəlikdəki məsələlər üzrə R. Əlizadə, O. Omarov, K. Mehdiyeva,
            Ş.Camıyev, B. İsmayılov, C. Abbasov, F. Qəhrəmanov çıxış etdilər.
          </p>
          <p className="font-bold mt-2 mb-1">
            İclasda aşağıdakı QƏRARLAR QƏBUL EDİLDİ:
          </p>
          <p>
            1. AzXP-nin Nizamnaməsinin 5.12 bəndinə və AzXP-nin 08.11.2025-ci
            tarixli Qərarına əsasən,
          </p>
          <p className="font-bold">
            2-ci Çağırış Parlament seçkilərinin tarixi 15.03.2026-ci il Bakı
            vaxtilə saat 22:00-a təyin edilsin.
          </p>
          <p>
            2. AzXP-nin 2-ci Çağırış Parlament seçkilərində{" "}
            <span className="font-bold">Seçki kompaniyasının</span> keçirilməsi
            aşağıdakı qaydalarla təşkil edilsin:
          </p>
          <p>
            2.1. AzXP-nin 2-ci Çağırış Parlament seçkilərində namizədlərin
            <span className="font-bold">Qeydiyyat müddəti</span> 10.12.2025-ci
            il Bakı v/ilə saat 00:00-dan 03.03.2026-ci il saat 22:00-adək təyin
            edilsin.
          </p>
          <p>
            2.2. AzXP-nin 2-ci çağırış Parlament seçklərində namizədlərin
            <span className="font-bold">Təbliğat kompaniyasının</span> müddəti
            16.12.2025-ci il tarixindən 07.03.2026i il tarixinədək təyin
            edilsin.
          </p>
          <p>
            2.3. AzXP-nin 2-ci Çağırış Parlament seçkilərində 08.03.2026-ci il
            tarixi <span className="font-bold">“Sükut günü”</span> təyin
            edilsin.
          </p>
          <p>
            2.4. AzXP-nin 2-ci Çağırış Parlament seçkilərində{" "}
            <span className="font-bold">Səsvermə müddəti&nbsp;</span>
            09.03.2026-cı il Bakı v/ilə saat 00:00-dan 15.03.2026-cı il saat
            22:00-adək təyin edilsin.
          </p>
          <p>
            2.5. AzXP SK-nın 06.12.2025-ci il tarixli 52 saylı Protokolu
            AzXP-nin rəsmi saytında (azxp.org) yerləşdirilsin .
          </p>
          <p>
            2.5. AzXP SK-nın 06.12.2025-ci il tarixli 52 saylı Protokolu
            AzXP-nin rəsmi saytında (<span className="font-bold">azxp.org</span>
            ) yerləşdirilsin .
          </p>
          <p>
            2.6. Sosial setlərtə AzXP-nə 2-ci Çağırış Parlament seçkilərinin
            başlanması barədə{" "}
            <span className="font-bold">Reklam kompaniyasına</span> start
            verilsin.
          </p>
          <p className="font-bold mt-3">
            AzXP Seçki Komissiyasının sədri: R. Əlizadə
          </p>
          <p className="font-bold">
            AzXP Seçki Komissiyasının katibi: K. Mehdiyeva
          </p>
        </div>
        <div
          className="font-bold text-xl items-center justify-center 
           flex w-full h-8 bg-red-400 text-white text-center rounded-full"
          onClick={() => setShow((preShow) => !preShow)}
        >
          X
        </div>
      </article>
    </section>
  );
};

export default Elections52;
