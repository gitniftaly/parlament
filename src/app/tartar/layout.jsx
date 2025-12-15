import React from "react";

export const metadata = {
  title: "Azxp tartar bölməsi",
  description: "Tartar events: torturing inosents.",
};

// eslint-disable-next-line react/prop-types
const TartarRoot = ({ children }) => {
  return <div className="flex bg-background -mt-2 rounded-xl ">{children}</div>;
};

export default TartarRoot;
