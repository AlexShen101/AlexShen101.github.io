import React from "react";
import { motion } from "../../node_modules/framer-motion/dist/framer-motion";
import { Link as ReactScrollLink } from "react-scroll";
import { useRouter } from "next/router";
export default function MyName(props: {}) {
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
          opacity: { delay: 0.25, duration: 0.5 },
          y: { delay: 0.25, duration: 0.5 },
        }}
        className="text-AAsecondary font-mono"
      >
        Hi, my name is
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.25, duration: 0.5 },
          y: { delay: 0.25, duration: 0.5 },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Alexander Shen
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.25, duration: 0.5 },
          y: { delay: 0.25, duration: 0.5 },
        }}
        className="text-gray-400 font-bold text-2xl lg:text-5xl sm:text-4xl md:text-4xl mt-4"
      >
        Web Developer.
      </motion.h2>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.25, duration: 0.5 },
          y: { delay: 0.25, duration: 0.5 },
        }}
        className="text-gray-400 text-sm md:text-lg sm:text-md mt-4 tracking-wider"
      >
        I solve business problems by writing clean, elegant, and cutting-edge code. 
      </motion.p>

      <div className="flex flex-row pt-12 space-x-4">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: 0.25, duration: 0.5 },
            y: { delay: 0.25, duration: 0.5 },
          }}
          className=""
        >
          <a
            href={
              `/resume.pdf`
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
                className="bg-AAprimary text-AAsecondary border rounded px-1 sm:px-8 py-3 sm:py-4 border-AAsecondary"
              >
                Check out my resume!
              </motion.button>
            </div>
          </a>
          {/* </a> */}
        </motion.div>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: 0.25, duration: 0.5 },
            y: { delay: 0.25, duration: 0.5 },
          }}
          className=""
        >
          <ReactScrollLink
            to="GetInTouchSection"
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}
          >
            <div className="bg-AAsecondary rounded">
              <motion.button
                initial={{ z: 1 }}
                whileHover={{ translateY: -5, translateX: -5 }}
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
                className="bg-AAprimary text-AAsecondary border rounded px-1 sm:px-8 py-3 sm:py-4 border-AAsecondary hover:cursor-pointer"
              >
                Let&apos;s connect
              </motion.button>
            </div>
          </ReactScrollLink>
        </motion.div>
      </div>
    </div>
  );
}
