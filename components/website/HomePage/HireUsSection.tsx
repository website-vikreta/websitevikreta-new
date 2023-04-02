"use client";

// ReactJS imports

// NextJS imports
import Link from "next/link";

// Pakage imports

// Component imports

// Styles import
import styles from "/styles/pages/Home.module.scss";

// Other imports

const HireUsSection = () => {
   return (
      <section className={`${styles.hireUs}`}>
         <div className={`${styles.container} container`}>
            <div className={`${styles.left}`}>
               <h2 className={`${styles.heading} heading`}>
                  Hire us for your next project
               </h2>
               <p className={`${styles.para} para`}>
                  We can help! We are passionate about making beautiful websites
                  help you to grow your business.
               </p>
            </div>

            <div className={`${styles.center}`}>
               <div className={`${styles.line}`}></div>
               <div className={`${styles.line}`}></div>
               <div className={`${styles.line}`}></div>
            </div>

            <div className={`${styles.right}`}>
               <Link href="/work" className="normalBtn primary">
                  View Our Work
               </Link>
               <Link href="/contact" className="normalBtn secondary">
                  Get a Free Quote
               </Link>
            </div>
         </div>
      </section>
   );
};

export default HireUsSection;
