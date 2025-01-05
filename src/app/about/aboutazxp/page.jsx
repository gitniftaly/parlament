"use client";
import Container from "@/components/Container";
import AzxMemoazn from "@/pages/axpMemAzn";
import AxpMemoEng from "@/pages/AxpMemoEng";

import useContextApi from "@/contextapi/useContextApi";

const AboutAzxp = () => {
  const { lang } = useContextApi();

  return (
    <Container
      className="flex flex-col  bg-background  justify-center
    rounded-t-xl -mt-2 overflow-y-scroll items-center h-auto gap-3"
    >
      <div className="flex-col flex sm:flex-row p-1 sm:gap-1 gap-3 sm:h-[220px] h-[450px] items-center mb-[400px]">
        <div
          className=" flex flex-col rounded-xl shadow-xl  w-full h-[275px]
                      items-center sm:h-[200px]"
        >
          <AzxMemoazn />
        </div>
        <div
          className="flex flex-col rounded-xl shadow-xl w-full 
        sm:h-[200px] h-[250px] items-center"
        >
          <AxpMemoEng />
        </div>
      </div>
      <div className="sm:hidden flex">
        {lang === "az" ? <AzxMemoazn /> : <AxpMemoEng />}
      </div>
    </Container>
  );
};

export default AboutAzxp;
