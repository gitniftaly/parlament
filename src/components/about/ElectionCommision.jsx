import Container from "@/components/Container";
import Portret from "@/components/reuseblescomp/Portret";
import { votingCommission } from "@/constants/discipline";

const ElectionCommision = () => {
  return (
    <Container className="flex bg-background -mt-2 rounded-t-2xl h-dvh w-full flex-col items-center">
      <header className="">
        <h1 className="flex mt-5 font-bold font-sans items-center flex-col">
          <p>Azərbaycan Xalq Parlamentinin seçki komissiyası</p>
        </h1>
      </header>
      <div
        className="flex sm:flex-row flex-col sm:w-full sm:grid sm:grid-cols-3 w-[400px] sm:gap-0 gap-1 mb-10 
                  items-center sm:items-start overflow-auto sm:h-[810px]"
      >
        {votingCommission.map((data) => (
          <Portret data={data} key={data.name} />
        ))}
      </div>
    </Container>
  );
};

export default ElectionCommision;
