import React from "react";
import Image from "next/image";
const ImagePage = ({ alt, src, width, height, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default ImagePage;
