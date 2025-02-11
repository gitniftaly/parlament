import React from "react";

const FloatingBook = () => {
  return (
    <div
      className="flex fixed h-6 mt-[150px] sm:w-12 z-auto 
                      justify-end items-center px-2 w-[120px]"
    >
      <article
        className="hidden sm:flex flex-col font-bold rounded-r-xl mr-1 py-1 
                                  sm:h-[200px] items-center bg-orange-300 w-10"
      >
        <p>K</p>
        <p>i</p>
        <p>t</p>
        <p>a</p>
        <p>b</p>
        <p>l</p>
        <p>a</p>
        <p>r</p>
      </article>
      <article
        className="justify-start items-center rounded-r-2xl w
                        bg-red-300 flex mx-9 w-[120px]"
      >
        <p>Kitablar</p>
      </article>
    </div>
  );
};

export default FloatingBook;
