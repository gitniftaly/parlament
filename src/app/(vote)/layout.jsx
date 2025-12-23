import React from "react";

export default function VoteLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <nav className="p-4 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="font-bold text-xl tracking-tight text-green-500">
            AZXP VOTING
          </h1>
          <div className="text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-400">
            Secure Session
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
