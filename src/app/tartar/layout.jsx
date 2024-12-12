import React from "react";

export const metadata = {
  title: "Azxp tartar bölməsi",
  description: "Tartar events: torturing inosents.",
};

const TartarRoot = ({ children }) => {
  return (
    <div className="flex bg-background -mt-2 rounded-xl h-dvh">{children}</div>
  );
};

export default TartarRoot;
