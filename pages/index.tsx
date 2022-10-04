import type { NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import { fetchEvents } from "../utils/api-helpers";
import { queryKeys } from "../utils/constants";
import Event from "../components/event";
import ThemeToggle from "../components/theme-toggle";

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([queryKeys.EVENTS], fetchEvents);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Home: NextPage = () => {
  const { data } = useQuery([queryKeys.EVENTS], fetchEvents, {
    staleTime: 10000,
  });

  return (
    <div>
      <Head>
        <title>Polis-händelser</title>
        <meta name="description" content="polis händelser" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-5xl md:text-7xl xl:text-9xl uppercase text-center my-20 md:my-28">
        Jidder
      </h1>
      <ThemeToggle />

      {data?.map((event, i) => (
        <Event key={`event_${i}`} i={i} event={event} />
      ))}
    </div>
  );
};

export default Home;
