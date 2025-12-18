"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useContextApi from "@/contextapi/useContextApi";

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
    "Tarix",
  ];
  const { lang } = useContextApi();
  const router = useRouter();
  const [user, setUser] = useState(initialUser);
  const [status, setStatus] = useState(null);
  const [greeting, setGreeting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (greeting) {
        router.push("/home");
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, [greeting]);

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
      setGreeting(true);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col h-[800px] items-center overflow-scroll mb-10">
      <p className="mt-10 font-bold">Namizədin anket ərizəsi</p>
      <div className="flex flex-col relative items-center mt-3 w-[500px] h-full border border-gray-300 rounded-md">
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
            {lang === "az"
              ? status === "sending"
                ? "Göndərir..."
                : "Göndər"
              : status === "sending"
              ? "Sending..."
              : "Send"}
          </button>
          {status === "success" && <p className="text-green-600">Sent!</p>}
          {/* {status === "success" && setGreeting(true)} */}
          {status === "error" && (
            <p className="text-red-600">Error sending email</p>
          )}
        </form>
        {/*POPUP GREETING VIET*/}
        {greeting && (
          <section
            className="flex flex-col rounded-2xl mx-1 overflow-x-hidden  
                              h-[330px] absolute bg-white p-2 top-20 border
                               border-gray-400"
          >
            <header className="text-center">
              <h1 className="font-bold text-lg font-sans">Hörmətli namizəd</h1>
            </header>
            <div className="h-full flex text-2xl font-medium text-blue-800">
              <p
                className="flex rounded-full p-14 bg-gray-100 
                            border border-slate-400 shadow-md "
              >
                Sizin AzXP-ə namizədliyinizin elektron qaydada təqdim edilməsi
                qəbul edilmişdir. Sənədlərin nəticəsi barədə məlumat 5 iş günü
                ərzində Sizə bildirələcəkdir.
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Epage;
