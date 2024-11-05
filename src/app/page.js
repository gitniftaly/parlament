import Image from "next/image";
import Root from "./home/page";
import HomeContent from "./home/page";

export default function Home() {
  return (
    <div className="">
      <main className="h-full w-full">
        <HomeContent />
      </main>
    </div>
  );
}
