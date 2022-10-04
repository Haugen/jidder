import axios from "axios";

import { TEvent } from "./types";
import { config } from "./constants";

export const fetchEvents = async (): Promise<TEvent[]> => {
  try {
    const { data } = (await axios.get(config.API_URL)) as { data: TEvent[] };

    const result = data
      .slice(0, 100)
      .filter((event) => event.type !== "Övrigt");

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
