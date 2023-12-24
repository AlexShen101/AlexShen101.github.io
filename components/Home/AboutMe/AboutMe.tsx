import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
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
            <ArrowIcon
              className={ 
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
              }
            />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl">
              {" "}
              01.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="justify-center w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-400  tracking-wide">
                Type paragraph 1 here. With{" "}
                <span className="text-AAsecondary">1.5 years</span> of
                experience and a recent graduate with a Bachelors of Comp.
                Science @ Sheridan College, I&apos;ve grown, developed and
                dedicated my ability and skills in the software development
                industry as a Full Stack Web / Mobile developer.
              </span>

              <br className="md:block hidden" />
              <br />

              <span className="text-gray-400  tracking-wide">
                Type paragraph 2 here. I&apos;ve dedicated myself to creating
                and building full stack solutions. In the process, I&apos;ve
                honed myself in{" "}
                <span className="text-AAsecondary">
                  web and mobile development
                </span>{" "}
                skills and technologies to build full stack solutions in an
                Agile team environment.
              </span>

              <br className="md:block hidden" />
              <br />
              <div className="font-Header tracking-wide">
                <span className="text-gray-400  ">
                  My tech stack includes but is not limited to:
                </span>
              </div>
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
            {/* // ? Image in Desktop and Tablet */}

            {/* <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
              <div
                className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
              ></div>

              <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
                <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
                <Img
                  src={"/img/Portfolio-portrait-3.jpg"}
                  className={"object-contain rounded-lg"}
                  alt="My Image Not Found"
                />
              </div>
            </div> */}

            {/* // ?Image in Mobile */}
            
            {/* <div className=" relative w-full h-48 md:hidden  flex items-center">
              <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
              <div className="absolute w-48 h-full rounded overflow-hidden">
                <Img
                  src={"/img/titof.jpg"}
                  className={"object-contain rounded-lg"}
                  alt="My Image Not Found"
                />
              </div>
              <div className="absolute w-48 h-full  bg-AAsecondary opacity-60  rounded overflow-hidden"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
