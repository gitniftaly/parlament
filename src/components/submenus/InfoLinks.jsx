import clsx from "clsx";
import Link from "next/link";
import { FaCircle } from "react-icons/fa6";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const InfoLinks = ({ className, infolinks, handleInfoLinks }) => {
  return (
    <>
      <span className="flex relative items-center -ml-44">
        Info
        {infolinks ? (
          <MdArrowDropDown size="20" />
        ) : (
          <MdArrowDropUp size="20" />
        )}
      </span>

      <section className={clsx(className)}>
        {infolinks ? (
          <div className="flex flex-col -ml-[20px] mt-[-5px]">
            <div className="text-gray-600 flex">
              <Link
                className="hover:bg-gray-200 font-serif text-black"
                s
                href={"/info/news"}
                alt="news"
                onClick={(e) => handleInfoLinks(e)}
              >
                <section className="flex items-center gap-1">
                  <FaCircle size="4" />
                  <span>News</span>
                </section>
              </Link>
            </div>
            <div className="text-gray-600 flex">
              <Link
                className="hover:bg-gray-200 font-serif text-black"
                href={"/info/announcements"}
                alt="statement"
                onClick={(e) => handleInfoLinks(e)}
              >
                <section className="flex items-center gap-1">
                  <FaCircle size="4" />
                  <span>Announcements</span>
                </section>
              </Link>
            </div>
            <div
              className=" flex font-serif text-black"
              onClick={(e) => handleInfoLinks(e)}
            >
              <Link
                className="hover:bg-gray-200"
                href={"/info/decisions"}
                alt="regulations"
              >
                <section className="flex items-center gap-1">
                  <FaCircle size="4" />
                  <span>Decisions</span>
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

export default InfoLinks;
