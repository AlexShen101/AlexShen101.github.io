import React from "react";
import { useRouter } from "next/router";
import GithubIcon from "../../Icons/GithubIconProjects";
import ExternalLink from "../../Icons/ExternalLink";

const ProjectContent = (props) => {
  const router = useRouter();
  return (
    <>
      <div
        className={
          props.imageOnLeft
            ? "flex flex-col space-y-1 md:items-end z-10"
            : "flex flex-col space-y-1 z-10"
        }
      >
        <span className="text-AAsecondary text-base">Featured Project</span>
        <a href={props.deployLink} target="_blank" rel="noopener noreferrer">
          <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer hover:text-AAsecondary">
            {props.title}
          </span>
        </a>
      </div>

      <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
        <p
          className={
            props.imageOnLeft
              ? "text-gray-300 md:text-gray-400 text-left md:text-right "
              : "text-gray-300 md:text-gray-400 text-left "
          }
        >
          {props.desc}
        </p>
      </div>
      <ul
        className={
          props.imageOnLeft
            ? "flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end"
            : "flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start"
        }
      >
        {props.tags.map((tag) => (
          <span className="pr-4 z-10" key={tag}>
            {tag}
          </span>
        ))}
      </ul>
      <div className="z-10 flex fle-row space-x-5 ">
        {/* All icons here */}
        <GithubIcon link={props.githubLink} />
        {props.deployLink != props.githubLink && (
          <a href={props.deployLink} target="_blank" rel="noreferrer">
            <ExternalLink url={""} router={router} />
          </a>
        )}
      </div>
    </>
  );
};

export default ProjectContent;
