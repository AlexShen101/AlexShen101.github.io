import Header from "../components/Header/Header";
import MyName from "../components/Home/TitleSection";
import { useContext, useEffect, useState, useRef } from "react";
import SocialMediaSidebar from "../components/Home/SocialMediaSidebar";
import AboutMe from "../components/Home/AboutMe";
import Experience from "../components/Home/Workplaces/Experience";
import Projects from "../components/Home/Projects/Projects";
import GetInTouch from "../components/Home/GetInTouch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Section from "../components/Home/Section";

import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

export default function Home() {
  // context Variable to clearInterval
  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  const meta = {
    title: "Alex S. - Software Developer",
    description: `A fresh developer with 1+ years of experience.`,
  };

  const Sections = [
    {
      title: "About Me",
      component: AboutMe,
    },
    {
      title: "Where I've Worked",
      component: Experience,
    },
    {
      title: "Projects",
      component: Projects,
    },
    {
      title: "What's Next?",
      component: GetInTouch,
    },
  ];

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
        <Header />
        <MyName />
        <SocialMediaSidebar />

        {Sections.map((section, index) => {
          return (
            <section.component key={index} num={index + 1} />
          )
        })}

        <Footer
          githubUrl={"https://github.com/AlexShen101/my-portfolio"}
          hideSocialsInDesktop={true}
        />
      </div>
    </>
  );
}
