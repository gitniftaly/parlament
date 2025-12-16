/* eslint-disable react/react-in-jsx-scope */
"use client";
import Container from "@/components/Container";
import SubLinks from "@/components/reuseblescomp/SubLinks";
import { news } from "@/constants/contents";
import useContextApi from "@/contextapi/useContextApi";

const News = () => {
  const { lang } = useContextApi();
  return (
    <Container className="mt-2 h-[500px] flex flex-col items-center">
      {news.map((abt, ind) => (
        <SubLinks
          key={ind}
          text={lang === "az" ? abt.infoaz : abt.infoen}
          url={abt.url}
        />
      ))}
    </Container>
  );
};

export default News;
