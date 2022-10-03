import clsx from "clsx";
import {
  MapPinIcon,
  InformationCircleIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { TEvent } from "../utils/types";

type Props = {
  event: TEvent;
  i: number;
};

dayjs.extend(relativeTime);

const Event = ({ event, i }: Props) => {
  return (
    <div
      className={clsx(
        "border-t border-b border-transparent hover:border-gray-300 group",
        {
          "bg-gray-50": i % 2 === 0,
        }
      )}
    >
      <div
        className={clsx(
          "py-5 md:py-10 lg:py-12 xl:py-16 px-3 max-w-[1300px] mx-auto"
        )}
      >
        <div className="flex justify-between h-10 items-center">
          <span>{dayjs(event.datetime).fromNow()}</span>
          <a
            className="hidden group-hover:block"
            target="_blank"
            rel="noreferrer"
            href={`https://polisen.se/${event.url}`}
          >
            <ArrowTopRightOnSquareIcon width={30} height={30} />
          </a>
        </div>
        <h2 className="text-2xl my-6 md:text-4xl lg:text-5xl xl:text-6xl mb-5">
          {event.summary}
        </h2>
        <div className="flex">
          <div className="flex mr-10">
            <InformationCircleIcon width={25} height={25} />
            {event.type}
          </div>
          <div className="flex">
            <MapPinIcon width={25} height={25} /> {event.location.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
