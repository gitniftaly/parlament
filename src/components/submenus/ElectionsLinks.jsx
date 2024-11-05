import clsx from "clsx";
import Link from "next/link";
import { FaCircle } from "react-icons/fa6";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const ElectionsLinks = ({ className, electionLinks, handleElectionLinks }) => {
  return (
    <>
      <span className="flex -ml-36">
        Elections
        {electionLinks ? (
          <MdArrowDropDown size="20" />
        ) : (
          <MdArrowDropUp size="20" />
        )}
      </span>
      <section className={clsx(className)}>
        {electionLinks ? (
          <div className="flex flex-col -ml-[20px] mt-[-5px]">
            <div className="text-gray-600 flex">
              <Link
                className="hover:bg-gray-200 font-serif text-black"
                href={"/elections/electioncommision"}
                alt="commision"
                onClick={(e) => handleElectionLinks(e)}
              >
                <section className="flex items-center gap-1 ml-2">
                  <FaCircle size="4" />
                  <span>Election Commission</span>
                </section>
              </Link>
            </div>
            <div className="text-gray-600 flex">
              <Link
                className="hover:bg-gray-200 font-serif text-black"
                href={"/elections/electionyear"}
                alt="electionyear"
                onClick={(e) => handleElectionLinks(e)}
              >
                <section className="flex items-center gap-1 ml-2">
                  <FaCircle size="4" />
                  <span>Election Year</span>
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

export default ElectionsLinks;
