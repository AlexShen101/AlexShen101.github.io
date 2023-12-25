import { useRouter } from "next/router";
import React from "react";
import Project from "./Project";

export default function Projects(props) {
  const router = useRouter();
  return (
    <div
      id="ProjectsSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            {props.num}.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I've Built
          </span>
        </div>
        <div className="bg-gray-700 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        <Project
          githubLink="https://github.com/AlexShen101/genshin_tcg_deck_builder"
          deployLink="http://genshintcg.alexshen.com.de"
          imgPath="/projects/genshintcg.png"
          imgAlt="Genshin TCG IMG"
          title="Genshin Deck Builder"
          desc={
            <>
              A web app that acts as a deck manager for users, allowing them to
              build new decks, download current decks and share it with others
              using the <span className="text-AAsecondary">MERN stack</span>{" "}
              (MongoDB, Express, Node.js, React) with a{" "}
              <span className="text-AAsecondary">
                React, Bootstrap and Redux frontend{" "}
              </span>{" "}
              for global state management and responsive UI.
            </>
          }
          tags={[
            "JavaScript",
            "MongoDB",
            "Express",
            "Node.js",
            "React",
            "Firebase",
          ]}
          imageOnLeft={true}
        />

        <Project
          githubLink="https://github.com/AlexShen101/cq-hero-db"
          deployLink="https://github.com/AlexShen101/cq-hero-db"
          imgPath="/projects/cq-hero.png"
          imgAlt="CQ Hero Img"
          title="CQ Hero Wiki/Tierlist"
          desc={
            <>
              Created a wiki and tier list website using{" "}
                  <span className="text-AAsecondary">
                    React, JavaScript, and SCSS
                  </span>{" "}
                  for users to easily find ratings and info for specific
                  characters. Utilized Python to scrape tier list data
                  containing{" "}
                  <span className="text-AAsecondary">over 300 characters</span>{" "}
                  from websites and Google Sheets
            </>
          }
          tags={["React", "JavaScript", "Python"]}
          imageOnLeft={false}
        />

        <Project
          githubLink="https://github.com/AlexShen101/Notion_YT_Player"
          deployLink="https://github.com/AlexShen101/Notion_YT_Player"
          imgPath=""
          title="Notion Youtube Player"
          desc={
            <>
              Made a set of Python scripts that imitates a music player app
              utilizing the{" "}
              <span className="text-AAsecondary">
                YouTube Data API and Notion API
              </span>
              , using YouTube to play songs and Notion to store song data.
              Created a simple UI using Keyboard Maestro to map keyboard
              shortcuts to{" "}
              <span className="text-AAsecondary">Bash commands</span> and run
              relevant Python scripts
            </>
          }
          tags={["Python", "Bash", "AppleScript"]}
          imageOnLeft={true}
        />

        <Project
          githubLink="https://github.com/AlexShen101/simple-chess_cs-246"
          deployLink="https://github.com/AlexShen101/simple-chess_cs-246"
          imgPath="/projects/simple-chess.png"
          imgAlt="Chess Img"
          title="Simple Chess"
          desc={
            <>
              Created a chess application using{" "}
              <span className="text-AAsecondary">C++</span> , with a focus on{" "}
              <span className="text-AAsecondary">
                OOP concepts and Design Patterns
              </span>{" "}
              to create a modular and streamlined chess app and cpu engine.
            </>
          }
          tags={["Python", "Bash", "AppleScript"]}
          imageOnLeft={false}
        />
      </div>

      {/* // ? Title === view the archive  */}
      {/* <div className="justify-center flex flex-row items-center ">
        <div className="flex flex-row space-x-2 items-center">
          <a href={"/archive"} className="" target={"_blank"} rel="noreferrer">
            <span className="font-sans text-AAsecondary text-base">
              view the archive
            </span>
          </a>
        </div>
      </div> */}
    </div>
  );
}
