import React from "react";
import Img from "../../smallComp/image/Img";

const ProjectImg = (props) => {
  return (
    <>
      {/* Desktop Image Content */}
      <div
        className="hidden bg-AAprimary z-10  py-4 
            absolute md:grid grid-cols-12 w-full h-full  content-center"
      >
        <div
          className={
            props.imageOnLeft
              ? "relative rounded w-full h-full col-span-7 "
              : "relative rounded w-full h-full col-start-6 col-span-7 "
          }
        >
          {props.imgPath !== "" ? (
            <>
              <a href={props.deployLink} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
             transition-opacity opacity-50 hover:opacity-20 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={props.imgPath}
                alt={props.imgAlt}
                className={`w-full rounded h-full `}
              />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectImg;
