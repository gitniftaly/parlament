"use client";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { FaCircle } from "react-icons/fa6";
import Link from "next/link";

const AboutMobileSubs = ({ mlinks, handleAbout, lang }) => {
  return (
    <>
      <div className="flex w-full">
        <span className="flex items-center">
          {lang === "az" ? "Haqqinda" : "About"}
          {mlinks ? <MdArrowDropDown size="20" /> : <MdArrowDropUp size="20" />}
        </span>
      </div>

      <section className="flex -ml-20">
        {mlinks ? (
          <div className={`flex flex-col w-full px-3 gap-1 mt-1`}>
            <div className="text-gray-600 flex">
              <Link
                className="hover:bg-gray-200 font-serif text-black"
                href={"/about/aboutazxp"}
                alt="active"
                onClick={(e) => handleAbout(e)}
              >
                <section className="flex items-center gap-1">
                  <FaCircle size="4" />
                  <span>
                    {lang === "az" ? "AzXP ilə tanışlıq" : "About AzXP"}
                  </span>
                </section>
              </Link>
            </div>
            <div className="text-gray-600 flex">
              <Link
                className="hover:bg-gray-200 font-serif text-black"
                href={"/about/initiativegroup"}
                alt="late"
                onClick={(e) => handleAbout(e)}
              >
                <section className="flex items-center gap-1">
                  <FaCircle size="4" />
                  <span>
                    {lang === "az" ? "Təşəbbüz qrupu" : "Initiative group"}
                  </span>
                </section>
              </Link>
            </div>
            <div className="text-gray-600 flex">
              <Link
                className="hover:bg-gray-200 font-serif text-black"
                href={"/about/founders"}
                alt="late"
                onClick={(e) => handleAbout(e)}
              >
                <section className="flex items-center gap-1">
                  <FaCircle size="4" />
                  <span>{lang === "az" ? "Təsisçilər" : "Founders"}</span>
                </section>
              </Link>
            </div>
            <div className="text-gray-600 flex">
              <Link
                className="hover:bg-gray-200 font-serif text-black"
                href={"/about/elccommision"}
                alt="late"
                onClick={(e) => handleAbout(e)}
              >
                <section className="flex items-center gap-1">
                  <FaCircle size="4" />
                  <span>
                    {lang === "az" ? "Seçki Komissiyası" : "Election commision"}
                  </span>
                </section>
              </Link>
            </div>
            <div className="text-gray-600 flex">
              <Link
                className="hover:bg-gray-200 font-serif text-black"
                href={"/about/deputies"}
                alt="late"
                onClick={(e) => handleAbout(e)}
              >
                <section className="flex items-center gap-1">
                  <FaCircle size="4" />
                  <span>{lang === "az" ? "Deputatlar" : "Deputies"}</span>
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

export default AboutMobileSubs;