import Link from "next/link";
import React from "react";

const Shortcuts = () => {
  return (
    <div className="sm:flex hidden flex-col h-full justify-between items-start sm:flex-row gap-2">
      <section className="border border-gray-300 rounded-xl flex h-full w-full flex-col px-3 py-2 items-center">
        <Link href="documents/statement" alt="">
          AzXP Bəyannamə | Etik kodeksi
        </Link>
        <Link href="documents/regulations" alt="">
          AzXP Nizamnamələr | Reqlament
        </Link>
        <Link href="/documents/archive" alt="">
          AzXP Arxivi
        </Link>
        <Link href="/documents/ebooks" alt="kitab">
          Kitabxana
        </Link>
      </section>
      <section className="border border-gray-300 rounded-xl flex h-full w-full flex-col px-3 py-2 items-center">
        <Link href="/news/newsLine" alt="">
          AzXP xəbərləri
        </Link>
        <Link href="/news/announcements" alt="">
          AzXP elanları
        </Link>
        <Link href="/news/decisions" alt="">
          AzXP qərarları
        </Link>
        <Link href="/documents/ebooks" alt="kitabxana">
          Kitabxana
        </Link>
      </section>
      <section className="border border-gray-300 rounded-xl flex h-full w-full flex-col px-3 py-2 items-center">
        <Link href="/about/counterteam" alt="">
          AzXP Hesablama Komissiyası
        </Link>
        <Link href="/about/elccommision" alt="">
          AzXP Seçki Komissiyası
        </Link>
        <Link href="/about/discipline" alt="">
          AzXP İntizam Komissiyası
        </Link>
        <Link href="/documents/ebooks" alt="kitabxana">
          Kitabxana
        </Link>
      </section>
      <section className="border border-gray-300 rounded-xl flex h-full w-full flex-col px-3 py-2 items-center">
        <Link href="/docpdf/listofcommittees.pdf" alt="" target="_blank">
          AzXP komitələri
        </Link>
        <Link href="/docpdf/azxpresolution.pdf" alt="" target="_blank">
          AzXP Resolution
        </Link>

        <Link href="/documents/ebooks" alt="kitabxana">
          Kitabxana
        </Link>
      </section>
    </div>
  );
};

export default Shortcuts;
