import Head from "next/head";
import { useQuery } from "@apollo/client";

// components
import Hero from "@/components/Hero";

function HomePage() {
  return (
    <>
      <Head>
        <title>Pokemon App</title>
      </Head>
      <Hero />
    </>
  );
}

export default HomePage;
