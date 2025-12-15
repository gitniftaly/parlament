"use client";

import Image from "next/image";
import React, { useState } from "react";

const Info = ({ img }) => {
  const [hide, setHide] = useState(true);

  return (
    <div
      className={`absolute font-bold bg-white h-[650px] w-[400px] top-0 mt-11 right-0 z-30 px-2 ${
        hide ? "" : "hidden"
      }`}
    >
      {img && (
        <Image
          src={img}
          width={100}
          height={100}
          className="mx-auto py-1 rounded-xl w-[100px] h-[100px]"
          alt="info"
        />
      )}
      <p className="">
        Azərbaycan Xalq Parlamenti (AzXP) adından, parlamentimizin üzvü,
        hörmətli millət vəkili Elvin İsayevin dəyərli atası İltiham İsayevin
        vəfatı ilə bağlı dərin kədər və hüzn ifadə edirik. Bu ağır itki ilə
        əlaqədar Elvin İsayevə, onun ailəsinə və yaxınlarına ürəkdən başsağlığı
        verir, dərin hüznümüzü bildiririk.
      </p>
      <p>
        İltiham İsayev kimi dəyərli şəxsiyyətlərin itkisi yalnız ailə üçün
        deyil, bütün cəmiyyət üçün böyük bir itkidir. Onun xatirəsi hər zaman
        qəlblərimizdə yaşayacaq.
      </p>
      <p>
        Bu çətin anlarda Elvin İsayevə və onun ailəsinə səbir və dözüm diləyir,
        Allahdan ruhuna rəhmət arzulayırıq.
      </p>
      <p className="font-bold">Azərbaycan Xalq Parlamenti Mətbuat Xidməti</p>
      <p className="text-green-600" onClick={() => setHide((pr) => !pr)}>
        Gizlət: <span className="font-bold text-red-400 text-xl ml-5">X</span>
      </p>
    </div>
  );
};

export default Info;
