"use client";

import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <div className="flex items-center justify-center">
      <h1>500</h1>
      <h2>Internal Server Error</h2>
      <Link href="/">Home Page</Link>
    </div>
  );
}
