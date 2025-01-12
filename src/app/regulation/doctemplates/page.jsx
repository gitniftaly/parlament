// "use client";
// import Image from "next/image";
// // import temp from "../../../../public/Docdoc.docx";
// import Link from "next/link";
// import useContextApi from "@/contextapi/useContextApi";
// import { FcDownload } from "react-icons/fc";

// const page = () => {
//   const { lang } = useContextApi();
//   return (
//     <div className="flex bg-background rounded-t-2xl -mt-2 h-dvh w-full">
//       <section className="flex flex-col items-center w-full py-10">
//         <header className="font-bold font-serif">
//           <h1>Sənədlər formatı - templetlər</h1>
//         </header>
//         <Link
//           href={temp}
//           alt="temp"
//           rel="noopener noreferrer"
//           locale={false}
//           download
//           target="_blank"
//           className="font-bold text-blue-500 mt-3 border border-gray-300 rounded-md p-2 flex sm:w-[400px] items-center justify-center gap-3"
//         >
//           {lang === "az" ? "Templayti ükləyin burdan" : "Download template"}
//           <FcDownload />
//         </Link>
//         <Image
//           src={temp}
//           width={400}
//           height={500}
//           alt="temp"
//           className="sm:w-[500px] sm:h-[600px] mt-10"
//         />
//       </section>
//     </div>
//   );
// };

// export default page;
