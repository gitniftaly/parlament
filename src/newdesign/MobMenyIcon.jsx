"use client";
import React from "react";
import { newNavBarContent } from "@/constants/contents";
import useContextApi from "@/contextapi/useContextApi";
import SubLinks from "@/components/reuseblescomp/SubLinks";

const MobMenyIcon = () => {
  const { lang } = useContextApi();

  return (
    <div>
      {newNavBarContent.map((item, ind) => (
        <SubLinks
          key={ind}
          text={lang === "az" ? item.infoaz : item.infoen}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default MobMenyIcon;
