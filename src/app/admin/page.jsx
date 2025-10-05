"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useContext } from "react";
import { adminAccessData } from "@/constants/adminAccess";
import { ContextApi } from "@/contextapi/CreateContexApi";
import { redirect } from "next/navigation";

const Login = () => {
  const [admin, setAdmin] = useState({ user: "", password: "" });
  const { setAdminAccess } = useContext(ContextApi);

  const handleAccess = (e) => {
    const { name, value } = e.target;
    setAdmin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // useEffect(() => {
  //   for (let n = 0; n < adminAccessData.length; n++) {
  //     if (
  //       adminAccessData[n].user === admin.user &&
  //       adminAccessData[n].password === admin.password
  //     ) {
  //       setAdminAccess(true);
  //       redirect("/admin/login/");
  //     }
  //   }
  // }, [admin, setAdminAccess]);

  const onSubmit = (e) => {
    e.preventDefault();
    for (let n = 0; n < adminAccessData.length; n++) {
      if (
        adminAccessData[n].user === admin.user &&
        adminAccessData[n].password === admin.password
      ) {
        setAdminAccess(true);
        redirect("/admin/login/");
      }
    }
    setAdmin({ user: "", password: "" });
  };
  return (
    <div
      className="h-dvh w-full bg-background rounded-xl 
                    -mt-2 flex justify-center"
    >
      <form onSubmit={onSubmit} className="mt-10 flex flex-col">
        <div className="pl-10 flex flex-col gap-1 py-2">
          <label htmlFor="user" className="font-mono flex justify-start">
            User name
          </label>
          <input
            name="user"
            value={admin.user}
            placeholder="user name"
            type="text"
            onChange={(e) => handleAccess(e)}
            autoComplete="off"
            className="h-8 w-80 border border-gray-300 rounded-lg px-2"
          />
        </div>
        <div className="px-10 flex flex-col gap-2">
          <label htmlFor="password" className="flex font-mono w-[100px] px-0">
            Password
          </label>
          <input
            name="password"
            value={admin.password}
            placeholder="password"
            type="password"
            onChange={(e) => handleAccess(e)}
            autoComplete="off"
            className="h-8 w-80 border border-gray-300 rounded-lg px-2 justify-end -pr-2"
          />
        </div>
        <Button
          variant="outline"
          className=" bg-blue-500 font-bold font-mono text-white
            sm:hover:bg-gray-400 mt-5 mx-10"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
