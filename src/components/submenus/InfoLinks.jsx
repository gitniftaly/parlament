import Link from "next/link";
import { FaCircle } from "react-icons/fa6";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const InfoLinks = ({ infolinks, handleInfoLinks, lang }) => {
  return (
    <>
      <div className="w-full flex">
        <span className={`flex items-center`}>
          {lang === "az" ? "İnformasiya" : "News"}
          {infolinks ? (
            <MdArrowDropDown size="20" />
          ) : (
            <MdArrowDropUp size="20" />
          )}
        </span>
      </div>

      <section className="w-full px-2">
        {infolinks ? (
          <div className="flex flex-col ">
            <div className="text-gray-600 flex">
              <Link
                className="hover:bg-gray-200 font-serif text-black"
                href={"/news/newsLine"}
                alt="news"
                onClick={(e) => handleInfoLinks(e)}
              >
                <section className="flex items-center gap-1">
                  <FaCircle size="4" />
                  <span>{lang === "az" ? "Xəbərlər" : "NewsLine"}</span>
                </section>
              </Link>
            </div>
            <div className="text-gray-600 flex">
              <Link
                className="hover:bg-gray-200 font-serif text-black"
                href={"/news/announcements"}
                alt="statement"
                onClick={(e) => handleInfoLinks(e)}
              >
                <section className="flex items-center gap-1">
                  <FaCircle size="4" />
                  <span> {lang === "az" ? "Elanlar" : "Announcements"}</span>
                </section>
              </Link>
            </div>
            <div
              className=" flex font-serif text-black"
              onClick={(e) => handleInfoLinks(e)}
            >
              <Link
                className="hover:bg-gray-200"
                href={"/news/decisions"}
                alt="regulations"
              >
                <section className="flex items-center gap-1">
                  <FaCircle size="4" />
                  <span>{lang === "az" ? "Qərarlar" : "Decisions"}</span>
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
