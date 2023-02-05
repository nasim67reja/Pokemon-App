import "@/styles/globals.css";
import { AppProps } from "next/app";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import Head from "next/head";

const pokemon = new ApolloClient({
  uri: "https://graphql-pokeapi.graphcdn.app/",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={pokemon}>
      <Head>
        <title>Pokemon App</title>
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
