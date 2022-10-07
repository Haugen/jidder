import { ReactNode } from "react";

import ThemeToggle from "./theme-toggle";

type Props = {
  children: ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <ThemeToggle />
      {children}
      <footer className="text-center my-20">Slut på jidder</footer>
    </>
  );
};

export default PageLayout;
