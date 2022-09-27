export type TEvent = {
  id: number;
  datetime: string;
  summary: string;
  url: string;
  type: string;
  location: {
    name: string;
    gps: string;
  };
};
