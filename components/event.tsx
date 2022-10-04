import clsx from "clsx";
import {
  MapPinIcon,
  InformationCircleIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import dayjs from "dayjs";

import { TEvent } from "../utils/types";

type Props = {
  event: TEvent;
  i: number;
};

const Event = ({ event, i }: Props) => {
  // Firefox date parsing issue fix.
  const eventDate = Date.parse(event.datetime.replace(/-/g, " "));

  return (
    <div
      className={clsx(
        "border-t border-b border-transparent hover:border-neutral-300 dark:hover:border-neutral-600 group",
        { "bg-neutral-200 dark:bg-neutral-800": i % 2 === 0 }
      )}
    >
      <div
        className={clsx(
          "py-5 md:py-10 lg:py-12 xl:py-16 px-7 md:px-14 max-w-[1300px] mx-auto"
        )}
      >
        <div className="flex justify-between h-6 items-center">
          <span className="dark:text-neutral-400 text-neutral-600">
            {dayjs(eventDate).fromNow()}
          </span>
          <a
            className="hidden group-hover:block"
            target="_blank"
            rel="noreferrer"
            href={`https://polisen.se/${event.url}`}
          >
            <ArrowTopRightOnSquareIcon width={30} height={30} />
          </a>
        </div>
        <h2 className="text-2xl mt-5 mb-8 md:text-4xl lg:text-5xl xl:text-6xl lg:!leading-[1.1] break-words">
          {event.summary}
        </h2>
        <div className="flex flex-col sm:flex-row dark:text-neutral-400 text-neutral-600">
          <div className="flex mr-10 mb-1 items-center">
            <InformationCircleIcon width={25} height={25} />
            <span className="ml-1 md:text-xl">{event.type}</span>
          </div>
          <div className="flex items-center">
            <MapPinIcon width={25} height={25} />{" "}
            <span className="ml-1 md:text-xl">{event.location.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
