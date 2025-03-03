
"use client";

import React from 'react';
import styles from "@/app/styles/TransitionBanner.module.css";
import {ChevronDownIcon} from "@radix-ui/themes";
import {motion} from 'framer-motion';

export default function TransitionBanner() {
  return (
    <div className={styles.arrowContainer}>
      <motion.span
        initial={{ y: 0 }}
        animate={{ y: 10 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <span className="text-gray-400 text-[0.75rem]">Scroll down to see more</span>
      </motion.span>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 10 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
      >
        <ChevronDownIcon style={{ width: 20, height: 20 }} />
      </motion.div>
    </div>
  );
}
