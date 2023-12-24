import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../Icons/ArrowIcon";
import Img from "../smallComp/image/Img";
import GithubIcon from "../Icons/GithubIconProjects";
import ExternalLink from "../Icons/ExternalLink";

export default function Projects() {
  const router = useRouter();
  return (
    <div
      id="ProjectsSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="http://genshintcg.alexshen.com.de"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/projects/genshintcg.png"}
                alt={"Genshin TCG PNG"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/projects/genshintcg.png"}
                  alt={"Genshin TCG PNG"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Featured Project
                </span>
                <a
                  href="http://genshintcg.alexshen.com.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Genshin Deck Builder
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                  A web app that acts as a deck manager for users, allowing them
                  to build new decks, download current decks and share it with
                  others using the{" "}
                  <span className="text-AAsecondary">MERN stack</span> (MongoDB,
                  Express, Node.js, React) with a{" "}
                  <span className="text-AAsecondary">
                    React, Bootstrap and Redux frontend{" "}
                  </span>{" "}
                  for global state management and responsive UI.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">JavaScript</span>
                <span className="pr-4 z-10">MongoDB</span>
                <span className="pr-4 z-10">Express</span>
                <span className="pr-4 z-10">Node.js</span>
                <span className="pr-4 z-10">React</span>
                <span className="pr-4 z-10">Firebase</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="http://genshintcg.alexshen.com.de"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <Img
                src={"/projects/cq-hero.png"}
                alt={"CQ Hero Img"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/projects/cq-hero.png"}
                  alt={"CQ Hero Img"}
                  className={`w-full rounded h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Featured Project
                </span>
                <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl">
                  CQ Hero Wiki/TierList
                </span>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  Created a wiki and tier list website using{" "}
                  <span className="text-AAsecondary">
                    React, JavaScript, and SCSS
                  </span>{" "}
                  for users to easily find ratings and info for specific
                  characters. Utilized Python to scrape tier list data
                  containing{" "}
                  <span className="text-AAsecondary">over 300 characters</span>{" "}
                  from websites and Google Sheets
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">React</span>
                <span className="pr-4 z-10">JavaScript</span>
                <span className="pr-4 z-10">Python</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/AlexShen101/cq-hero-db" />
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project  3*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Img
                src={"/projects/1280-720.jpg"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/projects/1280-720.jpg"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Featured Project
                </span>
                <Link href={"https://github.com/AlexShen101/Notion_YT_Player"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Notion Youtube Player
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Made a set of Python scripts that imitates a music player app
                  utilizing the{" "}
                  <span className="text-AAsecondary">
                    YouTube Data API and Notion API
                  </span>
                  , using YouTube to play songs and Notion to store song data.
                  Created a simple UI using Keyboard Maestro to map keyboard
                  shortcuts to{" "}
                  <span className="text-AAsecondary">Bash commands</span> and
                  run relevant Python scripts
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Python</span>
                <span className="pr-4 z-10">Bash</span>
                <span className="pr-4 z-10">AppleScript</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/AlexShen101/Notion_YT_Player" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
