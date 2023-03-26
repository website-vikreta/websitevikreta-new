"use client";

// ReactJS imports
import React from "react";
import { useEffect, useState } from "react";

// NextJS imports
import Image from "next/image";
import Link from "next/link";

// Pakage imports
import { HashLink } from "react-router-hash-link";

// Component imports

// Styles import
import styles from "/styles/components/layout/Header.module.scss";

// Other imports

const Header = () => {
   let unCheck;
   let scrollUp;
   const [navToggleChecked, setnavToggleChecked] = useState(false);

   useEffect(() => {
      scrollUp = () => {
         window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      };
   }, []);

   return (
      <header>
         <nav className={`${styles.navbar} navbar`}>
            <div className={`${styles.container} container`}>
               {/* toggle check */}
               <input
                  type="checkbox"
                  className={`${styles.checkboxNavToggle}`}
                  id="navToggl"
                  checked={navToggleChecked}
                  onChange={(e) => {}}
               />
               {/* top nav */}
               <div className={`${styles.topNavWrapper}`}>
                  <Link href="/">
                     <div className={`${styles.logo}`} onClick={scrollUp}>
                        <img
                           src="/assets/LogoIcon.svg"
                           alt="Website Vikreta Icon"
                        />{" "}
                        <h1>
                           <span>Website</span>Vikreta
                        </h1>
                     </div>
                  </Link>
               </div>
               {/* html toggle */}
               <label
                  className={`${styles.toggleBtn}`}
                  onClick={() => setnavToggleChecked(!navToggleChecked)}
               >
                  <div className={`${styles.line} ${styles.one}`}></div>
                  <div className={`${styles.line} ${styles.two}`}></div>
               </label>
               {/* navigation list items */}
               <div className={`${styles.wrapper}`}>
                  <ul className={`${styles.navList}`}>
                     <li className={`${styles.navItem}`} onClick={unCheck}>
                        <Link href="/">Home</Link>
                     </li>
                     <li className={`${styles.navItem}`} onClick={unCheck}>
                        <Link href="/#aboutUs">About Us</Link>
                     </li>
                     <li className={`${styles.navItem}`} onClick={unCheck}>
                        <Link href="/#services">Our Services</Link>
                     </li>
                     <li className={`${styles.navItem}`} onClick={unCheck}>
                        <Link href="/work">Our Work</Link>
                     </li>
                     <li className={`${styles.navItem}`} onClick={unCheck}>
                        <Link href="/contact">Contact Us</Link>
                     </li>
                  </ul>
                  {/* Social Icons */}
                  <ul className={`${styles.socialIcons}`}>
                     <li className={`${styles.social}`}>
                        <a
                           href="https://www.instagram.com/websitevikreta/"
                           target="_BLANK"
                           rel="noreferrer"
                        >
                           <i className="bi bi-instagram"></i>
                        </a>
                     </li>
                     <li className={`${styles.social}`}>
                        <a
                           href="https://www.linkedin.com/company/websitevikreta/"
                           target="_BLANK"
                           rel="noreferrer"
                        >
                           <i className="bi bi-linkedin"></i>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   );
};

export default Header;
