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
                href={"/tartar/ttorture"}
                alt="active"
                onClick={(e) => handleTartarLinks(e)}
              >
                <section className="flex items-center gap-1">
                  <FaCircle size="4" />
                  <span>
                    {lang === "az" ? "Tərtər hadisələri" : "Tartar events"}
                  </span>
                </section>
              </Link>
            </div>
            <div className="text-gray-600 flex">
              <Link
                className="hover:bg-gray-200 font-serif text-black"
                href={"/tartar/nardaran"}
                alt="late"
                onClick={(e) => handleTartarLinks(e)}
              >
                <section className="flex items-center gap-1">
                  <FaCircle size="4" />
                  <span>
                    {lang === "az" ? "Nardaran hadisələri" : "Nardarn events"}
                  </span>
                </section>
              </Link>
            </div>
            <div className="text-gray-600 flex">
              <Link
                className="hover:bg-gray-200 font-serif text-black"
                href={"/tartar/ganzha"}
                alt="late"
                onClick={(e) => handleTartarLinks(e)}
              >
                <section className="flex items-center gap-1">
                  <FaCircle size="4" />
                  <span>
                    {lang === "az" ? "Gəncə hadisələri" : "Ganzha events"}
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
