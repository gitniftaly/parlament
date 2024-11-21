import Link from "next/link";
import React from "react";

function UrlInfo({ urls }) {
  return (
    <section className="my-4 justify-center content-center">
      <h3 className="font-bold">More Info:</h3>
      <div className="">
        {urls.map((url, ind) => (
          <div key={`url-${ind}`}>
            <Link href={url} className="text-blue-500 ">
              {`Link see more--${ind + 1}`}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UrlInfo;
