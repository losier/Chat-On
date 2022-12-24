import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useState, useEffect } from "react";

import truth_text from "../json_text_files/truth.json";
import dare_text from "../json_text_files/dare.json";
import flirt_text from "../json_text_files/flirt.json";
import topic_text from "../json_text_files/topic.json";
import nickname_text from "../json_text_files/nickname.json";
import neverHaveIEver_text from "../json_text_files/never_have_i_ever.json";
import wouldYouRather_text from "../json_text_files/would_you_rather.json";

const Home: NextPage = () => {
  const [data, setData] = useState("Click the button to load data");

  const randomTruth = truth_text[Math.floor(Math.random() * truth_text.length)];
  const randomDare = dare_text[Math.floor(Math.random() * dare_text.length)];
  const randomFlirt = flirt_text[Math.floor(Math.random() * flirt_text.length)];
  const randomTopic = topic_text[Math.floor(Math.random() * topic_text.length)];
  const randomNickname =
    nickname_text[Math.floor(Math.random() * nickname_text.length)];
  const randomNeverHaveIEver =
    neverHaveIEver_text[Math.floor(Math.random() * neverHaveIEver_text.length)];
  const randomWouldYouRather =
    wouldYouRather_text[Math.floor(Math.random() * wouldYouRather_text.length)];

  return (
    <div className={styles.container}>
      <Head>
        <title>Chat-0n</title>
        <meta
          name="description"
          content="A simple webapp to generate random chat related text"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Chat<a>{`'On'`}</a>
        </h1>

        <p className={styles.main_content}>
          <code className={styles.code}>{data}</code>
        </p>
        <div className={styles.grid}>
          <a
            onClick={() => {
              setData(randomTruth);
            }}
            className={styles.card}
          >
            <h2>Truth</h2>
          </a>
          <a
            onClick={() => {
              setData(randomTopic);
            }}
            className={styles.card}
          >
            <h2>Topic</h2>
          </a>
          <a
            onClick={() => {
              setData(randomDare);
            }}
            className={styles.card}
          >
            <h2>Dare</h2>
          </a>
          <a
            onClick={() => {
              setData(randomFlirt);
            }}
            className={styles.card}
          >
            <h2>Flirt </h2>
          </a>
          <a
            onClick={() => {
              setData(randomWouldYouRather);
            }}
            className={styles.card}
          >
            <h2>Would you rather</h2>
          </a>
          <a
            onClick={() => {
              setData(randomNickname);
            }}
            className={styles.card}
          >
            <h2>Nickname</h2>
          </a>
          <a
            onClick={() => {
              setData(`Never Have I Ever ${randomNeverHaveIEver}`);
            }}
            className={styles.card}
          >
            <h2>Never Have I Ever</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://raw.githubusercontent.com/losier/Chat-On/master/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
        >
          All rights reserved to{" "}
          <span className={styles.logo}>&copy; Losier</span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
