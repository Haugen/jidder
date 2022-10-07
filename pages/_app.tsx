import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { ThemeProvider } from "next-themes";

import PageLayout from "../components/page-layout";
import "../utils/dayjs";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps<{ dehydratedState: any }>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider attribute="class" enableColorScheme={false}>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
