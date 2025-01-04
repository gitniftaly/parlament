// import AzxpRules from "@/components/AzXPRules";
import Link from "next/link";

const page = () => {
  // return <AzxpRules />;
  return (
    <div className="flex h-dvh bg-background rounded-t-2xl -mt-2 sm:[780px] justify-center">
      <div className="border border-gray-300 rounded-lg flex h-16 w-[400px] sm:w-[780px] mt-5 justify-center items-center font-bold">
        <Link href="/statement.pdf" target="_blank">
          AzXP Nizamnaməsi
        </Link>
      </div>
    </div>
  );
};

export default page;
{
  /* <iframe src="/statement.pdf" width={"100%"} /> */
}
