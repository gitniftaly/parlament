import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";

const ElectionView = ({ href, text }) => {
  return (
    <div className="h-12 sm:w-[600px] w-80 border-collapse border-l-2 border-b-2 border-gray-300 rounded-bl-md shadow-md flex justify-center items-center">
      <Link href={href} className="font-bold text-blue-700 text-lg font-mono">
        {text}
      </Link>
    </div>
  );
};
ElectionView.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
};
export default ElectionView;
