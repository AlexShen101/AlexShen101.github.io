import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link as ReactScrollLink } from "react-scroll";

export default function DesktopMenu(props: {}) {
  return (
    <div className="font-mono text-xs md:flex hidden flex-row items-center space-x-8 ">
      {/* <motion.div className=" text-AAsecondary hover:cursor-pointer">
        <ReactScrollLink
          to="aboutSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          &gt; 01.{" "}
          <span className="text-white hover:text-AAsecondary duration-300">
            About
          </span>
        </ReactScrollLink>
      </motion.div> */}

      <motion.div className="text-AAsecondary hover:cursor-pointer">
        <ReactScrollLink
          to="WhereIhaveWorkedSection"
          spy={true}
          smooth={true}
          offset={-300}
          duration={200}
        >
          &gt; 01.{" "}
          <span className="text-white hover:text-AAsecondary duration-300">
            Experience
          </span>
        </ReactScrollLink>
      </motion.div>

      <motion.div className="text-AAsecondary hover:cursor-pointer">
        <ReactScrollLink
          to="ProjectsSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          &gt; 02.{" "}
          <span className="text-white hover:text-AAsecondary duration-300">
            Projects
          </span>
        </ReactScrollLink>
      </motion.div>
      <motion.span className="text-AAsecondary hover:cursor-pointer">
        <ReactScrollLink
          to="GetInTouchSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          &gt; 03.{" "}
          <span className="text-white hover:text-AAsecondary duration-300">
            Contact
          </span>
        </ReactScrollLink>
      </motion.span>
      <a
        href={
          "/resume.pdf"
        }
        target={"_blank"}
        rel="noreferrer"
      >
        <div className="bg-AAsecondary rounded">
          <motion.button
            initial={{ z: 1 }}
            whileHover={{ translateY: -5, translateX: -5 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            className="text-AAsecondary border border-spacing-2 py-2 px-3 rounded border-AAsecondary bg-AAprimary"
          >
            Resume
          </motion.button>
        </div>
      </a>
    </div>
  );
}
