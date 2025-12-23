import React from "react";

const VotingClient = () => {
  return (
    <div
      key={user.id}
      onClick={() => toggleSelection(user.id)}
      className={`group relative p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
        selectedIds.includes(user.id)
          ? "border-green-500 bg-green-500/10 shadow-[0_0_20px_rgba(34,197,94,0.2)]"
          : "border-slate-800 bg-slate-800/40 hover:border-slate-600"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
            selectedIds.includes(user.id)
              ? "bg-green-500 text-white"
              : "bg-slate-700 text-slate-300"
          }`}
        >
          {user.firstName[0]}
          {user.lastName[0]}
        </div>
        <div>
          <h3 className="font-bold text-lg">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-sm text-slate-500">ID: {user.id}</p>
        </div>
        {selectedIds.includes(user.id) && (
          <div className="ml-auto text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default VotingClient;
