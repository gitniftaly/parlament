"use client";
import { useContext } from "react";
import { ContextApi } from "./CreateContexApi";

const useContextApi = () => useContext(ContextApi);

export default useContextApi;
