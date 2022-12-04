import RomanNumeralCalculator from "@/components/RomanNumeralCalculator/RomanNumeralCalculator";
import styles from "@/pages/index.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>properti.ch assessment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Convert an integer to a{" "}
          <a
            href="https://en.wikipedia.org/wiki/Roman_numerals"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Roman
          </a>{" "}
          numeral
        </h1>

        <RomanNumeralCalculator />
      </main>
    </div>
  );
}
