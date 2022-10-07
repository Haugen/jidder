import clsx from "clsx";
import { useTheme } from "next-themes";
import useIsMounted from "../hooks/useIsMounted";

const ThemeToggle = () => {
  const isMounted = useIsMounted();
  const { theme, setTheme } = useTheme();

  if (!isMounted) return null;

  return (
    <div className="w-14 h-8 absolute top-4 right-4 md:top-8 md:right-8">
      <input
        type="checkbox"
        id="dark-mode-toggle"
        className="hidden"
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <label
        htmlFor="dark-mode-toggle"
        className={clsx(
          "w-full h-full bg-neutral-800 dark:bg-neutral-100 rounded-full p-1",
          "flex justify-between cursor-pointer transition duration-100"
        )}
      >
        <span className="inline dark:hidden">🌞</span>
        <span className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-900 block float-right dark:float-left"></span>
        <span className="hidden dark:inline">🌛</span>
      </label>
    </div>
  );
};

export default ThemeToggle;
