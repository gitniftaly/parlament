"use client";
import React, { useState } from "react";

const Epage = () => {
  const initialUser = {
    name: "",
    dob: "",
    burthplace: "",
    citizen: "",
    education: "",
    occupation: "",
    pactivity: "",
    contact: "",
    membership: "",
    signature: "",
    date: "",
  };
  const labels = [
    "Ad, soyad, ata adı:",
    "Doğum tarixi",
    "Doğum yeri",
    "Vətəndaşlıq",
    "Təhsil",
    "İxtisas/peşə",
    "İş və ictimai fəaliyyət təcrübəsi:",
    "Əlaqə məlumatları (telefon, e-poçt)",
    "Üzv olduğu ictimai-siyasi təşkilatlar (əgər varsa)",
    "Namizədin imzası",
    "Tarix",
  ];
  const [user, setUser] = useState(initialUser);
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/sendemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!res.ok) throw new Error();

      setUser(initialUser);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col h-[800px] items-center overflow-scroll mb-10">
      <p className="mt-10 font-bold">Namizədin anket ərizəsi</p>
      <div className="flex flex-col items-center mt-3 w-[500px] h-full border border-gray-300 rounded-md">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 p-3 w-[380px]"
        >
          {Object.keys(initialUser).map((field, ind) => (
            <div key={ind} className="flex flex-col">
              <label htmlFor={field} className="ml-2">
                {labels[ind]}
              </label>
              <input
                type={field === "date" ? "date" : "text"}
                id={field}
                name={field}
                value={user[field]}
                required
                onChange={handleChange}
                className="border border-gray-300 rounded-sm h-7 px-2"
              />
            </div>
          ))}
          <button
            type="submit"
            className="mt-2 px-3 py-1 bg-blue-600 text-white rounded"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>
          {status === "success" && <p className="text-green-600">Sent!</p>}
          {status === "error" && (
            <p className="text-red-600">Error sending email</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Epage;
