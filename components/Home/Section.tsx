// Section.js
import React from 'react';

const Section = ({ num, title, children }) => {
  const string_num = "0" + num + "."

  return (
    <div
      id={title + "_section"}
      data-aos="fade-up"
      className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary"
    >
      <div className="flex flex-row items-center ">
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-sans text-sm  sm:text-base">
            {" "}
            {num}.
          </span>
          <span className=" font-sans text-AAsecondary text-base">
            {title}
          </span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Section;