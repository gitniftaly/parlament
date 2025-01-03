import ImagePage from "./ImagePage";
import Link from "next/link";

const SocialMedia = ({ social }) => {
  return (
    <div className="flex flex-row h-24 w-[300px] items-center justify-center p-2 gap-3">
      {social.map((item, ind) => (
        <Link href={item.url} key={ind}>
          <ImagePage
            src={item.img}
            width={30}
            height={30}
            alt={item.name}
            className="w-full h-auto"
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
