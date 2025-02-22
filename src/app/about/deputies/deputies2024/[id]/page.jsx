import CandidatDeteails from "@/pages/CandidatDeteails";
import { deputies2024 } from "@/constants/deputies2024";

const Details = async ({ params }) => {
  const id = (await params).idn;
  const profile = (ing) => {
    return deputies2024.filter((item) => item.idn === ing);
  };
  const obj = profile(parseInt(id));
  return (
    <div className="h-dvh bg-background -mt-2 rounded-xl flex justify-center py-4">
      <CandidatDeteails item={obj[0]} />
    </div>
  );
};

export default Details;
