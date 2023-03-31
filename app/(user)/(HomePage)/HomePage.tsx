"use client";

// ReactJS imports
import React from "react";
import { useEffect } from "react";

// NextJS imports
import Image from "next/image";
import Head from "next/head";

// Pakage imports
import { motion } from "framer-motion";

// Component imports
import {
   pageAnimation,
   frameParentIvert,
   frameAnimationIvert,
   fade,
} from "@/components/effects/animation";
import HeroSection from "@/components/website/HomePage/HeroSection";
import AboutSection from "@/components/website/HomePage/AboutSection";

// Styles import
import styles from "/styles/pages/Home.module.scss";

// Other imports

const HomePage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <motion.div
         exit="exit"
         variants={pageAnimation}
         initial="hidden"
         animate="show"
      >
         {/* The screen up sliding animation */}
         <motion.div variants={frameParentIvert}>
            <motion.div
               className="animation-frame one"
               variants={frameAnimationIvert}
            ></motion.div>
            <motion.div
               className="animation-frame two"
               variants={frameAnimationIvert}
            ></motion.div>
            <motion.div
               className="animation-frame three"
               variants={frameAnimationIvert}
            ></motion.div>
         </motion.div>
         {/* ------------------------------ */}

         <motion.div variants={fade}>
            <HeroSection />
            <AboutSection />
            {/* <ServicesSection />
            <FaqSection />
            <TestimonialSection />
            <HireUsSection /> */}
         </motion.div>
      </motion.div>
   );
};

export default HomePage;
