import React from "react";
import { motion } from "../../node_modules/framer-motion/dist/framer-motion";
import Link from "next/link";
import { Link as ReactScrollLink } from "react-scroll";
import { useRouter } from "next/router";
export default function MyName(props: { finishedLoading: boolean }) {
  const router = useRouter();
  return (
    <div
      
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
    >
      
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
            y: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
          }}
          className="text-AAsecondary font-mono"
        >
          Hi, my name is
        </motion.span>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
            y: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
          }}
          className="text-gray-300 font-bold text-md lg:text-md sm:text-2xl md:text-md mt-4"
        >
          Alexander Shen
        </motion.h1>
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
            y: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
          }}
          className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
        >
          I make things.
        </motion.h2>

        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
            y: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
          }}
          className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
        >
          <br className="md:block hidden" />
          I build exceptional and accessible digital experiences for the web.
        </motion.h3>

        <div className="flex flex-row pt-12 space-x-4">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              opacity: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
              y: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
            }}
            className=""
          >
            
            <a
              href={"https://drive.google.com/file/d/1AYqI_2-_V3lxneXoZaBpb6FgSqdKLx6x/view?usp=sharing"}
              className="bg-AAprimary text-AAsecondary border rounded px-1 sm:px-8 py-3 sm:py-4 border-AAsecondary"
              target={"_blank"} rel="noreferrer"
            >
              Check out my resume!
            </a>
            {/* </a> */}
          </motion.div>
        
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              opacity: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
              y: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
            }}
            className=""
          >

            <ReactScrollLink
              to="GetInTouchSection"
              spy={true} smooth={true} offset={-100} duration={200}
              className="bg-AAprimary text-AAsecondary border rounded px-1 sm:px-8 py-3 sm:py-4 border-AAsecondary"
            >
              Let&apos;s connect!
            </ReactScrollLink>
            
          </motion.div>
        </div>
    </div>
  );
}
