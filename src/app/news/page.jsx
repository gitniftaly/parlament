/* eslint-disable react/react-in-jsx-scope */
"use client";
import Container from "@/components/Container";
import SubLinks from "@/components/reuseblescomp/SubLinks";

const News = () => {
  return (
    <Container className="mt-2 h-[500px] flex flex-col items-center">
      <SubLinks text="Xəbərlər" url="/news/newsLine" />
      <SubLinks text="Elanlar" url="/news/announcements" />
      <SubLinks text="Qərarlar" url="/news/decisions" />
    </Container>
  );
};

export default News;
