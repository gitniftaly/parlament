// import AzxpRules from "@/components/AzXPRules";
import Link from "next/link";
import { TbHandClick } from "react-icons/tb";
const page = () => {
  // return <AzxpRules />;
  return (
    <div className="flex flex-col h-dvh bg-background rounded-t-2xl -mt-2 sm:[780px] items-center">
      <header className="py-3">
        <h1>
          <p className="font-bold">Sənədlər bölməsi</p>
        </h1>
      </header>
      <div className="border border-gray-300 rounded-lg flex h-16 w-[400px] sm:w-[780px] mt-5 justify-center items-center font-bold">
        <Link
          href="/statement.pdf"
          target="_blank"
          className="flex items-center gap-4"
        >
          AzXP-nin Nizamnaməsi <TbHandClick className="text-green-700" />
        </Link>
      </div>
      <div className="border border-gray-300 rounded-lg flex h-16 w-[400px] sm:w-[780px] mt-5 justify-center items-center font-bold">
        <Link
          href="/AzXP-REQLAMENTİ.pdf"
          target="_blank"
          className="flex items-center gap-4"
        >
          AzXP-nin Reqlamenti <TbHandClick className="text-green-700" />
        </Link>
      </div>
    </div>
  );
};

export default page;
{
  /* <iframe src="/statement.pdf" width={"100%"} /> */
}
