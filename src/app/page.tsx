import Head from "next/head";
import Second from "./components/Second";
import Third from "./components/Third";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="tags"
          content="tailwind Css practice by Asad Shah, tailwind practice questions by asadshah, iamasadshah"
        />
      </Head>
      <Second />
      <Third />
    </>
  );
}
