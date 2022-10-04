import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";

export default function Document() {
  // Check out https://github.com/pacocoursey/next-themes for better theme toggle.

  return (
    <Html className="dark">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body
        className={clsx(
          "bg-neutral-100 text-neutral-900 transition duration-100",
          "dark:bg-neutral-900 dark:text-neutral-300"
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
