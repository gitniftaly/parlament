"use client";
import React from "react";
import Link from "next/link";

export default function GlobalError() {
  return (
    <div className="flex items-start justify-center">
      <h1>500</h1>
      <h2>Internal Server Error</h2>
      <Link href="/">Home Page</Link>
    </div>
  );
}
