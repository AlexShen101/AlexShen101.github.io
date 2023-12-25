import React from "react";
import Img from "../smallComp/image/Img";
import ArrowIcon from "../Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    ["React.js", "Node.js", "JavaScript (ES6+)", "Python"], 
    ["C++", "C", "Java", "AWS suite"],
    ["MongoDB", "Bootstrap", "Docker", "TypeScript"],
  ];
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col  items-center py-20 bg-AAprimary"
    >
      {/* // ? 0.1 About Me */}
      <div
        className="justify-center flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="justify-center flex flex-row items-center ">
          <div className="flex flex-rowitems-center mr-4">
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl">
              {" "}
              {props.num}.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-700 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="justify-center w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-400  tracking-wide">
              </span>

              <br className="md:block hidden" />
              <br />
              <div className="font-Header tracking-wide">
                <span className="text-gray-400  ">
                  My tech stack includes but is not limited to:
                </span>
              </div>
              
              <br className="md:block hidden" />
              <br />
              <div className="font-Header tracking-wide flex flex-row space-x-16">
                <div className="flex flex-row space-x-2 items-center">
                  <div className="flex flex-col space-y-4 sm:text-base text-sm">
                    {technologies[0].map((tech, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-row items-center space-x-2"
                        >
                          <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                          <span className="text-gray-400 sm:text-sm text-xs">
                            {tech}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <div className="flex flex-col space-y-4 sm:text-base text-sm">
                    {technologies[1].map((tech, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-row items-center space-x-2"
                        >
                          <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                          <span className="text-gray-400 sm:text-sm text-xs">
                            {tech}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <div className="flex flex-col space-y-4 sm:text-base text-sm">
                    {technologies[2].map((tech, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-row items-center space-x-2"
                        >
                          <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                          <span className="text-gray-400 sm:text-sm text-xs">
                            {tech}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
