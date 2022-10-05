import axios from "axios";

import { TEvent } from "./types";
import { config } from "./constants";

export const fetchEvents = async (
  selectedLocation: string
): Promise<TEvent[]> => {
  try {
    let url = config.API_URL;

    if (selectedLocation !== "Hela landet") {
      url = `${url}?locationname=${selectedLocation}`;
    }

    const { data } = (await axios.get(url)) as { data: TEvent[] };

    const result = data
      .slice(0, 100)
      .filter((event) => event.type !== "Övrigt");

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
