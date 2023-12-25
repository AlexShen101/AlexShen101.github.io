import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";

import companies from "./Companies";
import Description from "./Descriptions/Description";

export default function Experience(props) {
  const barRef = React.useRef<HTMLDivElement>(null);
  // ? INFORMATIONAL control the green position using px,
  // ? INFORMATIONAL the default value of barRef's class should be at the beginning translate-y-[0px]

  const [company, setCompany] = React.useState(companies[0]);

  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary">
      {/* // ? Title "Where I've Worked" */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 
          {props.num}.</span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold  tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-700 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      {/* // ? Where I've Worked Content section */}
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start "
      >
        {/* // ? Left side of Where I've Worked, contains the bar and name of companies */}
        <CompaniesBar setCompany={setCompany}/>
        {/* // ? Description for The job */}
        <Description {... company} />
      </section>
    </div>
  );
}

const barHeight = 263/companies.length;

const CompaniesBar = props => {
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] = React.useState<boolean[]>(Array(companies.length).fill(false).map((elem, i) => i === 0 ? true : false));

  const CompanyButton = props => {
    return (
      <button
        onClick={() => {
          props.setCompany(props.company);
          setCompanyNameBackgroundColorGreen(props.CompanyNameBackgroundColorGreen);
        }}
        className={`flex-none sm:text-sm text-xs text-center md:text-left  hover:text-AAsecondary
             hover:bg-ResumeButtonHover font-mono  
             py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
             ${
               companyNameBackgroundColorGreen[props.ButtonOrderOfcompanyNameBackgroundColorGreen]
                 ? "bg-ResumeButtonHover text-AAsecondary border-l-2 border-AAsecondary"
                 : "text-gray-500 border-l-2 border-gray-100"
             }`}
      >
        {props.CompanyName}
      </button>
    );
  };

  return (
    <div
      id="WhereIhaveWorkedSection"
      className=" flex flex-col md:flex-row  w-screen md:w-auto 
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start
       sm:justify-center items-start sm:items-center"
    >
      {/* // ? Companies name as buttons */}
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0 ">
        <div className="flex flex-row md:flex-col">
          {companies.map((company, i) => {
            return (
              <CompanyButton
              key={company.workDate}
              ButtonOrderOfcompanyNameBackgroundColorGreen={i}
              CompanyName={company.company}
              DescriptionJob={company.company}
              CompanyNameBackgroundColorGreen={companies.map((elem, j) => j === i ? true : false)}
              setCompany={props.setCompany}
              company={company}
            />
            )
          })}
        </div>
      </div>
    </div>
  );
};
