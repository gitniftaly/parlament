"use client";
import AddingUrl from "@/components/admin/AddingUrl";
import { useContext } from "react";
import { ContextApi } from "@/contextapi/CreateContexApi";

const Admin = () => {
  const { adminAccess } = useContext(ContextApi);
  return (
    <div className="">
      {adminAccess ? (
        <AddingUrl />
      ) : (
        <div
          className="h-20 flex justify-center items-center
                         text-red-400 font-bold"
        >
          Admin user only!
        </div>
      )}
    </div>
  );
};

export default Admin;
