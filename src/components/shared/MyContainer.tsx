import type { ReactNode } from "react";

type containerProps = {
  className?: string;
  children: ReactNode;
};
const MyContainer = ({ children, className }: containerProps) => {
  return (
    <div
      className={`mx-auto max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl px-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default MyContainer;
