import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import UrlInfo from "./UrlInfo";
import ImageView from "./ImageView";

const TartarView = ({ data, lang }) => {
  return (
    <>
      <div className="py-4 flex flex-col justify-center items-start gap-2 sm:flex-row">
        <div className="border border-gray-300 rounded-md">
          <ImageView data={data} className="" />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:flex">
          <div
            className="flex flex-col w-[300px] h-[400px]
                        border border-gray-300 rounded-md p-1"
          >
            <div className="">
              <span className="font-bold">Name:&nbsp;</span>
              <span className="text-amber-900 font-mono">
                {data.personal.first}
              </span>
              &nbsp;
              <span className="text-amber-900 font-mono">
                {data.personal.last}
              </span>
            </div>
            <div>
              <span className="font-bold">Title:</span> {data.personal.title}
            </div>
            <div>
              <span className="font-bold">Year:</span> {data.personal.year}
            </div>
            <div>
              <span className="font-bold">Base:</span> {data.personal.base}
            </div>
            <div>
              <span className="font-bold">Status:</span> {data.personal.status}
            </div>
            <div>
              <span className="font-bold">Accusation:</span> {data.accusation}
            </div>
            <div>
              <span className="font-bold">Judgment:</span> {data.judgment}
            </div>
            <div>{<UrlInfo urls={data.url} />}</div>
          </div>
        </div>
      </div>
      <hr className=" border-gray-400" />
    </>
  );
};

export default TartarView;
