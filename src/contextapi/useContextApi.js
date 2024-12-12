import { useContext } from "react";
import { ContextApi } from "./CreateContexApi";

const useContextApi = () => {
  const context = useContext(ContextApi);
  return context;
};

export default useContextApi;
