import React from "react";
import Image from "next/image";
const ImagePage = ({ alt, src, width, height, className, layout }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      layout={layout}
    />
  );
};

export default ImagePage;
