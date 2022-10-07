import { Dispatch, Fragment, SetStateAction } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

type Props = {
  list: any[];
  selected: any;
  setSelected: Dispatch<SetStateAction<any>>;
};

const ListBox = ({ list, selected, setSelected }: Props) => {
  return (
    <div className="w-72">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button
            className={clsx(
              "relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-left",
              "bg-neutral-100 dark:bg-neutral-800 shadow-md"
            )}
          >
            <span className="block truncate">{selected}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={clsx(
                "absolute mt-1 max-h-60 w-full overflow-auto rounded-md py-1 ring-1 focus:outline-none",
                "bg-neutral-100 dark:bg-neutral-800 shadow-lg ring-neutral-900 ring-opacity-5"
              )}
            >
              {list.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    clsx(
                      "relative cursor-default select-none py-2 pl-10 pr-4",
                      {
                        "bg-amber-100 text-amber-900 dark:bg-neutral-900 dark:text-amber-100":
                          active,
                      }
                    )
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                      {selected && (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default ListBox;
