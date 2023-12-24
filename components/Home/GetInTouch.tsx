import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";

const IconsData = [
  { href: "https://github.com/AlexShen101", Icon: GithubIcon },
  { href: "https://www.linkedin.com/in/alexandershen2004/", Icon: LinkedinIcon },
];

const ClickableIcon = props => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon className={"w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"} />
    </a>
  );
};

export default function GetInTouch() {
  return (
    <div id="GetInTouchSection" data-aos="fade-up" className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary">
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-sans text-sm  sm:text-base">
            {" "}
            04.
          </span>
          <span className=" font-sans text-AAsecondary text-base">
            What's Next?
          </span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">
        Get In Touch
      </span>
      <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        I'm always looking for new opportunities and people to meet, so let's link up! 
        <br className="md:block hidden" />
        Whether you have a question or just want to say hi, feel free to reach out!
      </p>
      <div className="pt-4">
        <a href="mailto:alexander.shen@gmail.com" target={"_blank"} rel="noreferrer">
          <button
            className="font-mono text-sm text-AAsecondary border-AAsecondary 
                            px-8 py-4 border-[1.5px] rounded "
          >
            Say Hello
          </button>
        </a>
      </div>
    </div>
  );
}
