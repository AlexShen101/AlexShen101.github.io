import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
export default function Logo(props: {}) {
  return (
    <>
      <motion.div
        className=" relative h-12 w-10 "
      >
        <motion.span
          initial={{ x: 1 }}
          className="absolute h-full w-full flex justify-center items-center text-lg font-Header text-AAsecondary"
        >
          AS
        </motion.span>
      </motion.div>
    </>
  );
}
