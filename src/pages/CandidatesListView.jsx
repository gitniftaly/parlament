import ProfileList from "./ProfileList";
import Link from "next/link";
// import dynamic from "next/dynamic";

// const ProfileList = dynamic(() => import("./ProfileList"), {
//   ssr: false, // Don't render on the server
// });
const CandidatesListView = ({ candidates }) => {
  return (
    <div className="overflow-y-scroll py-14">
      {candidates?.map((can) => (
        <Link key={can.id} href={`/elections/electionyear/${can.id}`}>
          <ProfileList data={can} />
        </Link>
      ))}
    </div>
  );
};

export default CandidatesListView;
