import clsx from "clsx";

const ThemeToggle = () => {
  return (
    <div className="w-14 h-8 absolute top-4 right-4 md:top-8 md:right-8">
      <input
        type="checkbox"
        id="dark-mode-toggle"
        className="hidden"
        onChange={() => document.documentElement.classList.toggle("dark")}
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
