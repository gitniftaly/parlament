import clsx from "clsx";

const Container = ({ className, ...props }) => {
  return (
    <div
      className={clsx(
        "max-w-screen-xl mx-auto px-1 sm:px-4 lg:px-8",
        className
      )}
      {...props}
    />
  );
};

export default Container;
