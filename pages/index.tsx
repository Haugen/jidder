import type { NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import { fetchEvents } from "../utils/api-helpers";
import { queryKeys } from "../utils/constants";

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

      <h1 className="text-3xl">Polis-händelser</h1>
      {data?.map((event) => {
        return <div key={event.id}>{event.summary}</div>;
      })}
    </div>
  );
};

export default Home;
