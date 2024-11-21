"use client";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { FaCircle } from "react-icons/fa6";
import Link from "next/link";
import clsx from "clsx";

const TartarSubLinks = ({ className, tlinks, handleTartarLinks, lang }) => {
  return (
    <>
      <span className="flex items-center justify-start relative -ml-28">
        Tartar
        {tlinks ? <MdArrowDropDown size="20" /> : <MdArrowDropUp size="20" />}
      </span>

      <section className={clsx("-ml-20", className)}>
        {tlinks ? (
          <div className="flex flex-col -ml-[20px] mt-[-5px]">
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
