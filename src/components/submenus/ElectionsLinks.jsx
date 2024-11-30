import Link from "next/link";
import { FaCircle } from "react-icons/fa6";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const ElectionsLinks = ({ electionLinks, handleElectionLinks, lang }) => {
  return (
    <>
      <div className="w-full">
        <span className={`flex`}>
          {lang === "az" ? "Seçkilər" : "Elections"}
          {electionLinks ? (
            <MdArrowDropDown size="20" />
          ) : (
            <MdArrowDropUp size="20" />
          )}
        </span>
      </div>
      <section className="w-full">
        {electionLinks ? (
          <div className="flex flex-col px-2 justify-start items-start">
            <div className="text-gray-600 w-full">
              <Link
                className="hover:bg-gray-200 font-serif text-black"
                href={"/elections/electioncommision"}
                alt="commision"
                onClick={(e) => handleElectionLinks(e)}
              >
                <section className="flex items-center gap-1 flex-row">
                  <FaCircle size="4" />
                  <span>
                    {lang === "az"
                      ? "Seçki commisiyası"
                      : "Election Commission"}
                  </span>
                </section>
              </Link>
            </div>
            <div className="flex  w-full">
              <Link
                className="hover:bg-gray-200 font-serif text-black"
                href={"/elections/electionyear"}
                alt="electionyear"
                onClick={(e) => handleElectionLinks(e)}
              >
                <section className="flex justify-center items-center gap-1">
                  <FaCircle size="4" />
                  <span>{lang === "az" ? "Kandidatlar" : "Candidates"}</span>
                </section>
              </Link>
            </div>
            {/* <div className="flex  w-full">
              <Link
                className="hover:bg-gray-200 font-serif text-black"
                href={"/elections/candidates"}
                alt="electionyear"
                onClick={(e) => handleElectionLinks(e)}
              >
                <section className="flex justify-center items-center gap-1">
                  <FaCircle size="4" />
                  <span>{lang === "az" ? "Kandidatlar" : "Candidates"}</span>
                </section>
              </Link>
            </div> */}
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default ElectionsLinks;
