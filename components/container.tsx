import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

const Container = ({ className, children }: Props) => {
  return (
    <div className={clsx("px-7 md:px-14 max-w-[1300px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
