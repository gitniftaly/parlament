import Link from "next/link";
import React from "react";

const Shortcuts = () => {
  return (
    <div className="flex flex-col h-full justify-between items-start sm:flex-row gap-2">
      <section className="border border-gray-300 rounded-xl flex h-full w-full flex-col px-3 py-2 items-center">
        <Link href="documents/statement" alt="">
          Azxp bəyannamə | Etik kodeksi
        </Link>
        <Link href="documents/regulations" alt="">
          Azxp Nizamnamə | Reqlament
        </Link>
        <Link href="/documents/archive" alt="">
          Azxp Arxivi
        </Link>
        <Link href="/documents/ebooks" alt="kitab">
          Kitabxana
        </Link>
      </section>
      <section className="border border-gray-300 rounded-xl flex h-full w-full flex-col px-3 py-2 items-center">
        <Link href="/news/newsLine" alt="">
          Azxp xəbərləri
        </Link>
        <Link href="/news/announcements" alt="">
          Azxp elanları
        </Link>
        <Link href="/news/decisions" alt="">
          Azxp qərarları
        </Link>
        <Link href="/documents/ebooks" alt="kitabxana">
          Kitabxana
        </Link>
      </section>
      <section className="border border-gray-300 rounded-xl flex h-full w-full flex-col px-3 py-2 items-center">
        <Link href="/about/counterteam" alt="">
          Azxp hesablayıcı qrupu
        </Link>
        <Link href="/about/elccommision" alt="">
          Azxp seçki komissiyası
        </Link>
        <Link href="/about/discipline" alt="">
          Azxp intizam komissiyası
        </Link>
        <Link href="/documents/ebooks" alt="kitabxana">
          Kitabxana
        </Link>
      </section>
      <section className="border border-gray-300 rounded-xl flex h-full w-full flex-col px-3 py-2 items-center">
        <Link href="/docpdf/listofcommittees.pdf" alt="" target="_blank">
          Azxp kommitələri
        </Link>
        <Link href="/docpdf/azxpresolution.pdf" alt="" target="_blank">
          Azxp Resolution
        </Link>

        <Link href="/documents/ebooks" alt="kitabxana">
          Kitabxana
        </Link>
      </section>
    </div>
  );
};

export default Shortcuts;
