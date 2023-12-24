import React from "react";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconProjects";
import ExternalLink from "../../Icons/ExternalLink";
import ProjectImg from "./ProjectImg";
import ProjectContent from "./ProjectContent";

const Project = (props) => {
  return (
    <>
      <div
        data-aos="fade-up"
        className="relative md:grid md:grid-cols-12 w-full md:h-96 "
      >
        <ProjectImg
          imageOnLeft={props.imageOnLeft}
          deployLink={props.deployLink}
          imgPath={props.imgPath}
          imgAlt={props.imgAlt}
        />

        {/* Text Content */}
        <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
          {/* background for text in mobile responsive */}
          <div
            className={
              props.imageOnLeft
                ? "absolute w-full h-full bg-opacity-70 z-0"
                : "absolute w-full h-full bg-opacity-70 z-0 md:order-2"
            }
          >
            <div className="relative w-full h-full">
              <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
              <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
              {props.imgPath !== "" ? (
                <Img
                  src={props.imgPath}
                  alt={props.imgAlt}
                  className={`w-full h-full `}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          <div
            className={
              props.imageOnLeft
                ? "px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 col-span-8 flex flex-col items-start md:items-end space-y-3"
                : "px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1"
            }
          >
            <ProjectContent
              githubLink={props.githubLink}
              deployLink={props.deployLink}
              title={props.title}
              desc={props.desc}
              tags={props.tags}
              imageOnLeft={props.imageOnLeft}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
