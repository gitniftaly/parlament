import Link from "next/link";
import dynamic from "next/dynamic";
const ProfileList = dynamic(() => import("./ProfileList"), {
  ssr: false, // Don't render on the server
});
const CandidatesListView = ({ candidates }) => {
  return (
    <div className="overflow-y-scroll">
      {candidates?.map((can) => (
        <Link key={can.idn} href={`/elections/electionyear/${can.idn}`}>
          <ProfileList data={can} />
        </Link>
      ))}
    </div>
  );
};

export default CandidatesListView;
