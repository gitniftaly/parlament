import Link from "next/link";
import { TbHandClick } from "react-icons/tb";

const ElectionLink = () => {
  return (
    <section
      className="flex justify-center sm:h-[50px] sm:px-0 h-24 px-2 w-full bg-black text-white
                             mx-auto rounded-lg animate-pulse"
    >
      <Link
        href="/docpdf/azxpnotificationlist.pdf"
        alt="secki"
        target="_blank"
        className="flex flex-col items-center "
      >
        <p className="flex font-bold gap-2 items-center font-white">
          Parlamentə namizədliyinizi necə verə bilərsiniz
          <span>
            <TbHandClick className="text-black" />
          </span>
        </p>
        <p>
          Xalq vəkili olmag üçün nədən başlamalısan? Seçki komisiyası bəyan
          edir.
        </p>
      </Link>
    </section>
  );
};

export default ElectionLink;
