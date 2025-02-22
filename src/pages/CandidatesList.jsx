import CandidatDeteails from "./CandidatDeteails";

const CandidatesList = ({ candidates }) => {
  return (
    <div className="flex justify-center flex-col items-center p-3 mt-16">
      {candidates?.map((item) => (
        <CandidatDeteails key={item.idn} item={item} />
      ))}
    </div>
  );
};

export default CandidatesList;
