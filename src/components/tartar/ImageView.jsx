import Image from "next/image";
import React from "react";

const ImageView = ({ data }) => {
  return (
    <div>
      <Image
        alt={data.first}
        src={data.img}
        width={240}
        height={240}
        style={{
          objectFit: "cover",
          borderRadius: "8px",
        }}
        className="border border-inherit p-1 rounded-md"
      />
    </div>
  );
};

export default ImageView;
