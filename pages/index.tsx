import type { NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { fetchEvents } from "../utils/api-helpers";
import { queryKeys } from "../utils/constants";
import Event from "../components/event";
import ThemeToggle from "../components/theme-toggle";
import ListBox from "../components/list-box";
import { TEvent } from "../utils/types";
import { categories, locations } from "../utils/content";
import Container from "../components/container";

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([queryKeys.EVENTS, locations[0]], () =>
    fetchEvents(locations[0])
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Home: NextPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  let events: TEvent[] = [];

  const { data } = useQuery(
    [queryKeys.EVENTS, selectedLocation],
    () => fetchEvents(selectedLocation),
    {
      staleTime: 10000,
    }
  );

  if (data) {
    if (selectedCategory !== categories[0]) {
      events = data?.filter((item) => item.type === selectedCategory);
    } else {
      events = data;
    }
  }

  return (
    <div>
      <Head>
        <title>Jidder</title>
        <meta name="description" content="Jidder runt om i Sverige" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="py-10">
        <h1 className="text-5xl md:text-7xl xl:text-9xl uppercase my-20 md:my-28">
          Jidder
        </h1>
        <div className="flex">
          <ListBox
            list={locations}
            selected={selectedLocation}
            setSelected={setSelectedLocation}
          />
          <div className="w-10" />
          <ListBox
            list={categories}
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
        </div>
        <div className="mt-10">
          Visar {selectedCategory} i {selectedLocation}
        </div>
      </Container>

      {events?.map((event, i) => (
        <Event key={`event_${i}`} i={i} event={event} />
      ))}
    </div>
  );
};

export default Home;
