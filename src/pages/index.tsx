import React, { useState } from "react";
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { CountdownProvider } from '../contexts/CountdownContext';
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import styles from '../styles/components/Home.module.css';
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ChallengeBox from "../components/ChallengeBox";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import ThemeButton from "../components/ThemeButton";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  theme: string;
}

export default function Home({ level, currentExperience, challengesCompleted, theme }: HomeProps) {

  return (
    <ThemeProvider theme={theme}>
      <ChallengesProvider level={level} currentExperience={currentExperience} challengesCompleted={challengesCompleted} >
        <div className={styles.container}>
          <Head>
            <title>Início | Drink.it</title>
          </Head>
          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <ThemeButton theme={theme} />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </ChallengesProvider>
    </ThemeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const { level, currentExperience, challengesCompleted, theme } = context.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      theme: String(theme)
    }
  }
}