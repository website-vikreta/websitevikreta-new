// ReactJS imports
import React from "react";

// NextJS imports
import Link from "next/link";

// Pakage imports
import { motion } from "framer-motion";

// Component imports

// Styles import
import styles from "/styles/components/layout/Footer.module.scss";

// Other imports

const Footer = () => {
   return (
      <motion.footer layout>
         <section className={`${styles.footer}`}>
            <div className={`${styles.container} container`}>
               <div className={`${styles.left}`}>
                  <Link href="/">
                     <div className={`${styles.logo}`}>
                        <img
                           src="/assets/LogoIcon.svg"
                           alt="Website Vikreta Logo"
                        />
                        <h1>
                           <span>Website</span>Vikreta
                        </h1>
                     </div>
                  </Link>
                  <p className={`${styles.des}`}>
                     Website Vikreta is an answer to all your web development
                     needs. We provide services to whoever need, from small
                     start-ups to large corporation. Our mission is to fulfil
                     your needs and give you the best service.
                  </p>
               </div>

               <div className={`${styles.right}`}>
                  <div className={`${styles.quickLinks}`}>
                     <span className={`${styles.link}`}>
                        <i className={`${styles.icon} bi bi-chevron-right`}></i>
                        <Link href="/">Home</Link>
                     </span>
                     <span className={`${styles.link}`}>
                        <i className={`${styles.icon} bi bi-chevron-right`}></i>
                        <Link href="../#aboutUs">About Us</Link>
                     </span>
                     <span className={`${styles.link}`}>
                        <i className={`${styles.icon} bi bi-chevron-right`}></i>
                        <Link href="../#services">Our Services</Link>
                     </span>
                     <span className={`${styles.link}`}>
                        <i className={`${styles.icon} bi bi-chevron-right`}></i>
                        <Link href="/work">Our Work</Link>
                     </span>
                     <span className={`${styles.link}`}>
                        <i className={`${styles.icon} bi bi-chevron-right`}></i>
                        <Link href="/contact">Contact Us</Link>
                     </span>
                  </div>

                  <div className={`${styles.socialMedia}`}>
                     <a
                        href="https://www.instagram.com/websitevikreta/"
                        target="_BLANK"
                        rel="noreferrer"
                     >
                        <i className={`${styles.icon} bi bi-instagram`}></i>
                        &nbsp; instagram
                     </a>
                     <a
                        href="https://www.linkedin.com/company/websitevikreta/"
                        target="_BLANK"
                        rel="noreferrer"
                     >
                        <i className={`${styles.icon} bi bi-linkedin`}></i>
                        &nbsp; linkedin
                     </a>
                  </div>
                  <div className={`${styles.line}`}></div>
                  <p className={`${styles.copyright}`}>
                     © 2020-22 <span>Website</span>Vikreta.
                     <br className={`${styles.break}`} /> All rights reserved
                  </p>
               </div>
            </div>
         </section>
      </motion.footer>
   );
};

export default Footer;
