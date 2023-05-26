"use client";

// ReactJS imports
import React from "react";
import { useEffect } from "react";

// NextJS imports
import Image from "next/image";
import Head from "next/head";

// Pakage imports
import { motion } from "framer-motion";
import {
   frameParentIvert,
   frameAnimationIvert,
   pageAnimation,
   smoothFade,
} from "../../../components/utility/animation";

// Component imports
import ContactForm from "@/components/website/ContactPage/ContactForm";

// Styles import
import styles from "/styles/pages/Contact.module.scss";

// Other imports
const ContactPage = () => {
   // Scroll to top
   useEffect(() => {
      window.scrollTo(0, 0);
      document.title = "Contact Us";
   }, []);

   return (
      <div>
         <motion.div
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
         >
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

            <motion.section
               className={`${styles.contactUs}`}
               variants={smoothFade}
            >
               <div className={`${styles.container} container`}>
                  <div className={`${styles.left}`}>
                     <h3 className={`${styles.heading} heading`}>
                        Get in touch with us
                     </h3>

                     <ul className={`${styles.social}`}>
                        <li>
                           <a
                              href="https://www.instagram.com/websitevikreta/"
                              target="_BLANK"
                              rel="noreferrer"
                           >
                              <i className="bi bi-instagram"></i>{" "}
                              @websitevikreta
                           </a>
                        </li>
                        <li>
                           <a
                              href="mailto:contact@websitevikreta.com"
                              target="_BLANK"
                              rel="noreferrer"
                           >
                              <i className="bi bi-envelope"></i>{" "}
                              contact@websitevikreta.com
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://www.linkedin.com/company/websitevikreta/"
                              target="_BLANK"
                              rel="noreferrer"
                           >
                              <i className="bi bi-linkedin"></i> @websitevikreta
                           </a>
                        </li>
                        <li>
                           <a
                              href="tel:+919970445198"
                              target="_BLANK"
                              rel="noreferrer"
                           >
                              <i className="bi bi-telephone-fill"></i> +91
                              9970445198
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div className={`${styles.line}`}></div>
                  <div className={`${styles.right}`}>
                     <h3 className={`${styles.heading} heading`}>
                        Feel Free to Contact Us
                     </h3>
                     <p className={`${styles.para} para`}>
                        We look forward to hear from you. We take pride in quick
                        response time to all inquiries. If you are interested in
                        receiving a quote for any of our service please fill the
                        form
                     </p>

                     <ContactForm />
                  </div>
               </div>
            </motion.section>
         </motion.div>
      </div>
   );
};

export default ContactPage;
