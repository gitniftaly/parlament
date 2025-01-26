import Link from "next/link";
import clsx from "clsx";
import ImagePage from "../ImagePage";
import parlament from "/images/parlament.png";
import { TbHandClick } from "react-icons/tb";

const LinkElement = ({ link, alt, title, date, className }) => {
  return (
    <Link
      href={`${link}`}
      alt={alt}
      target="_blank"
      className={clsx("border border-gray-300 rounded-md", className)}
    >
      <ImagePage src={parlament} width={50} height={50} alt="parlament" />
      <div className="flex flex-col">
        <div className="font-thin">{date}</div>
        <div className="text-blue-800">{title}</div>
      </div>
      <div className="flex flex-1 items-center justify-end">
        <TbHandClick className="text-green-700" />
      </div>
    </Link>
  );
};

export default LinkElement;
