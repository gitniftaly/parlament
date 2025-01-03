"use client";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { FaCircle } from "react-icons/fa6";
import Link from "next/link";

const DepMobilSubLink = ({ dlinks, handleDepLinks, lang }) => {
  return (
    <>
      <div className="flex w-full">
        <span className="flex items-center">
          {lang === "az" ? "Vəkillər" : "Deputies"}
          {dlinks ? <MdArrowDropDown size="20" /> : <MdArrowDropUp size="20" />}
        </span>
      </div>

      <section className="flex">
        {dlinks ? (
          <div className={`flex flex-col w-full px-3 gap-1 mt-1`}>
            <div className="text-gray-600 flex">
              <Link
                className="hover:bg-gray-200 font-serif text-black"
                href={"/deputies/deputies2024"}
                alt="active"
                onClick={(e) => handleDepLinks(e)}
              >
                <section className="flex items-center gap-1">
                  <FaCircle size="4" />
                  <span>
                    {lang === "az" ? "Vəkillər 2024" : "Deputies 2024"}
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

export default DepMobilSubLink;
