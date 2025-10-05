// import ProfileList from "./ProfileList";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const ProfileList = dynamic(() => import("@/pages/ProfileList"), {
  ssr: false, // Don't render on the server
});
const DepityListView = ({ candidates }) => {
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
DepityListView.propTypes = {
  candidates: PropTypes.arrayOf(
    PropTypes.shape({
      idn: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      // add other fields if needed, e.g. name, age, etc.
    })
  ).isRequired,
};
export default DepityListView;
