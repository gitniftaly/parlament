import Container from "@/components/Container";
import Portret from "@/components/reuseblescomp/Portret";
import { votingCommission } from "@/constants/discipline";

const ElectionCommision = () => {
  return (
    <Container className="flex bg-background -mt-2 rounded-t-2xl h-dvh w-full flex-col items-center">
      <header className="">
        <h1 className="flex mt-5 font-bold font-sans items-center flex-col">
          <p>Azərbaycan Xalq Parlamenti Seçki Komissiyası</p>
        </h1>
      </header>
      <div
        className="flex sm:flex-row flex-col sm:w-full sm:grid sm:grid-cols-3 w-[400px] sm:gap-0  
                  items-center sm:items-start sm:h-full overflow-auto"
      >
        {votingCommission.map((data) => (
          <Portret data={data} key={data.name} />
        ))}
      </div>
      <div className="w-full h-[100px] sm:h-[50px]"></div>
    </Container>
  );
};

export default ElectionCommision;
