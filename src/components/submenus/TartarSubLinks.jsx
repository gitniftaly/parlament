"use client";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { FaCircle } from "react-icons/fa6";
import Link from "next/link";

const TartarSubLinks = ({ tlinks, handleTartarLinks, lang }) => {
  return (
    <>
      <div className="flex w-full">
        <span className="flex items-center">
          {lang === "az" ? "Dövləti cinayətlər" : "State crimes"}
          {tlinks ? <MdArrowDropDown size="20" /> : <MdArrowDropUp size="20" />}
        </span>
      </div>

      <section className="flex">
        {tlinks ? (
          <div className={`flex flex-col w-full px-3 gap-1 mt-1`}>
            <div className="text-gray-600 flex">
              <Link
                className="hover:bg-gray-200 font-serif text-black"
                href={"/tartar/active"}
                alt="active"
                onClick={(e) => handleTartarLinks(e)}
              >
                <section className="flex items-center gap-1">
                  <FaCircle size="4" />
                  <span>{lang === "azn" ? "Activlər" : "Active"}</span>
                </section>
              </Link>
            </div>
            <div className="text-gray-600 flex">
              <Link
                className="hover:bg-gray-200 font-serif text-black"
                href={"/tartar/late"}
                alt="late"
                onClick={(e) => handleTartarLinks(e)}
              >
                <section className="flex items-center gap-1">
                  <FaCircle size="4" />
                  <span>
                    {lang === "azn" ? "Qətil olumuşlar" : "Not active"}
                  </span>
                </section>
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default TartarSubLinks;
