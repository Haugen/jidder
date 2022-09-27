import axios from "axios";

import { TEvent } from "./types";
import { config } from "./constants";

export const fetchEvents = async (): Promise<TEvent[]> => {
  try {
    const data = await axios.get(config.API_URL);
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
