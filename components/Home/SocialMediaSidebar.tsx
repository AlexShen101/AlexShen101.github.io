import React from "react";
import { motion } from "../../node_modules/framer-motion/dist/framer-motion";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import EmailIcon from "../Icons/EmailIcon";

const IconClickableWithAnimation = props => {
  return (
    <motion.div
      whileHover={{
        y: -3,
        transition: { duration: 0.1 },
      }}
      className=""
    >
      <a href={props.href} className="" target={"_blank"} rel="noreferrer">
        <props.Icon className={"w-6 h-6 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"} />
      </a>
    </motion.div>
  );
};
export default function SocialMediaEmail(props: { }) {
  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ y: { delay: 0, duration: 0} }}
        className="z-10 fixed bottom-0 left-0  hidden lg:flex flex-row px-12 items-center justify-between  "
      >
        <div className="flex flex-col space-y-8 justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-5">
            {/* Github Icon */}
            <IconClickableWithAnimation Icon={GithubIcon} href={"https://github.com/AlexShen101"} />
            {/* Linkedin icon */}
            <IconClickableWithAnimation Icon={LinkedinIcon} href={"https://www.linkedin.com/in/alexandershen2004/"} />
            <IconClickableWithAnimation Icon={EmailIcon} href={"mailto:alexander.shen@gmail.com"} />
          </div>
          <div className="h-28 w-0.5 bg-gray-700"></div>
        </div>
      </motion.div>
    </>
  );
}
