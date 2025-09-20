import React from "react";
import OtherBrowser from "@/jsonserverRealtime/OtherBrowser";
import { URL } from "@/constants/constan";

const UserVoter = () => {
  return (
    <div>
      <OtherBrowser url={URL} />
    </div>
  );
};

export default UserVoter;
