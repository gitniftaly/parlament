// import ProfileList from "./ProfileList";
import Link from "next/link";
import dynamic from "next/dynamic";
const ProfileList = dynamic(() => import("../../pages/ProfileList"), {
  ssr: false, // Don't render on the server
});
const DepityListView = ({ candidates }) => {
  // const profile = (id) => {
  //   return candidates.filter((item) => item.idn === id);
  // };

  return (
    <div className="overflow-y-scroll ">
      {candidates?.map((can, id) => (
        <Link key={id} href={`/deputies/deputies2024/${can.idn}`}>
          <ProfileList data={can} />
        </Link>
      ))}
    </div>
  );
};

export default DepityListView;
