"use client";
import { useState, useContext } from "react";
import Container from "../Container";
import { Button } from "../ui/button";
import Link from "next/link";
import { ContextApi } from "@/contextapi/CreateContexApi";
import { setItem } from "@/utils/localStore";

const AddingUrl = () => {
  const [linkText, setLinkText] = useState("");
  const [urlText, setUrlText] = useState("");
  const { links, setLinks, STOREKEY } = useContext(ContextApi);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const expiry = Date.now() + 2 * 60 * 60 * 1000;
    const expiry = Date.now() + 60 * 60 * 1000;

    if (linkText && urlText) {
      setLinks({ name: urlText, url: linkText });
      setItem(
        STOREKEY,
        JSON.stringify({ value: { name: urlText, url: linkText }, expiry })
      );
    }
    //JSON.stringify({ value: { name: urlText, url: linkText }, expiry })
    setLinkText("");
    setUrlText("");
  };

  return (
    <Container
      className="bg-background w-full h-dvh rounded-xl 
                            -mt-2 sm:flex sm:flex-col items-center justify-start"
    >
      <form onSubmit={handleSubmit}>
        <div
          className="flex w-full h-[200px] gap-2 py-7 px-10 justify-center
                         items-start flex-col"
        >
          <label htmlFor="addlink" className="font-bold font-serif">
            Add Link
          </label>
          <input
            type="text"
            name="addlink"
            value={linkText}
            placeholder="enter link"
            onChange={(e) => setLinkText(e.target.value)}
            className="h-8 w-80 border border-gray-300 rounded-lg px-2"
          />
          <input
            type="text"
            name="urlText"
            value={urlText}
            placeholder="enter text"
            onChange={(e) => setUrlText(e.target.value)}
            className="h-8 w-80 border border-gray-300 rounded-lg px-2"
          />
          <section className="flex flex-row gap-10 px-7">
            <Button
              variant="outline"
              className="h-8 w-28 border border-slate-400 bg-blue-300 
            font-serif font-bold sm:hover:bg-slate-500 mt-2"
            >
              Enter
            </Button>
            <Button
              variant="outline"
              className="h-8 w-28 border border-slate-400 bg-blue-300 
            font-serif font-bold sm:hover:bg-slate-500 mt-2"
            >
              Cancel
            </Button>
          </section>
          <section
            className="absolute mt-[400px] h-10 w-80 border shadow-xl
                            border-gray-300 flex items-center justify-center"
          >
            <Link href={links.url}>{links.name}</Link>
          </section>
        </div>
      </form>
    </Container>
  );
};

export default AddingUrl;
