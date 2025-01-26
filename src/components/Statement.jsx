import Link from "next/link";
import React from "react";

const Sublinks = () => {
  return (
    <main className="grid grid-cols-1 text-blue-900 font-mono">
      <Link alt="statement" href={"/documents/statement"}>
        AzXP statement - Bəyanət
      </Link>
      <Link alt="documents" href={"/documents/regulations"}>
        AzXP Regulations - Nizamnamə
      </Link>
    </main>
  );
};

export default Sublinks;
