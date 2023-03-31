// ReactJS imports
import React from "react";
import { useEffect } from "react";

// NextJS imports
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

// Pakage imports
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Component imports

// Styles import
import styles from "/styles/pages/Home.module.scss";

// Other imports

const HeroSection = () => {
   // slider settings
   const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "ease-out",
      autoplay: true,
      autoplaySpeed: 4000,
   };
   return (
      <section className={`${styles.hero}`}>
         <div className={`${styles.container} container`}>
            {/* left section */}
            <div className={`${styles.content}`}>
               <div className={`${styles.textWrapper}`}>
                  {/* <p className="sub-title">Celebrating 1 Year in the industry</p> */}
                  <h1 className={`${styles.title}`}>
                     Your <span>creative</span> web development partner.
                  </h1>
               </div>
               <p className={`${styles.para}`}>
                  Website Vikreta is an answer to all your web development
                  needs. We provide services to whoever need, from small
                  start-ups to large corporation. Our mission is to fulfil your
                  needs and give you the best service.
               </p>
               <ul className={`${styles.features}`}>
                  <li>
                     <i className="bi bi-check2-all"></i> Innovate
                  </li>
                  <li>
                     <i className="bi bi-check2-all"></i> Inspire
                  </li>
                  <li>
                     <i className="bi bi-check2-all"></i> Impact
                  </li>
               </ul>

               <div className={`${styles.buttonGroup}`}>
                  <Link
                     href="/contact"
                     className={`${styles.awesomeLink} awesomeLink`}
                  >
                     Get a Quote
                  </Link>
                  <a
                     href="/#aboutUs"
                     className={`${styles.awesomeLink} awesomeLink`}
                  >
                     Learn More
                  </a>
               </div>
            </div>
            {/* right section */}
            <div className={`${styles.heroImage}`}>
               <div className={`${styles.sliderWrapper}`}>
                  <Slider {...settings} className={`${styles.heroSlider}`}>
                     <div className={`${styles.image}`}>
                        <img
                           src="/assets/Hero Slider/Slide 1.jpg"
                           alt="Hero One"
                        />
                     </div>
                     <div className={`${styles.image}`}>
                        <img
                           src="/assets/Hero Slider/Slide 2.jpg"
                           alt="Hero Two"
                        />
                     </div>
                     <div className={`${styles.image}`}>
                        <img
                           src="/assets/Hero Slider/Slide 3.png"
                           alt="Hero Three"
                        />
                     </div>
                  </Slider>
               </div>
            </div>
         </div>
      </section>
   );
};

export default HeroSection;
