import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa";

const SubLinks = ({ text, url }) => {
  return (
    <div className="flex shadow-lg rounded-md mt-8  w-full h-6 px-3 text-lg sm:w-[800px]">
      <Link
        href={url}
        className="flex justify-between h-full w-full gap-24 items-center"
      >
        {text}
        <FaChevronRight />
      </Link>
    </div>
  );
};
SubLinks.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default SubLinks;
