"use client";

// ReactJS imports
import { SetStateAction, useEffect, useState } from "react";

// NextJS imports
import Link from "next/link";

// Pakage imports

// Component imports

// Styles import
import styles from "/styles/pages/Home.module.scss";

// Other imports

const AboutSection = () => {
   const [offset, setOffset] = useState(0);

   useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   let totalProjects = 30;
   let totalWebProjects = 23;
   let totalClientsServed = 19;
   let totalOngoingProjects = 3;

   const [projectsCompleted, setprojectsCompleted] = useState(0);
   const projectCounter = (start: number, end: number) => {
      if (start === end) return;

      let timer = setInterval(() => {
         start += 1;
         setprojectsCompleted(start);

         if (start === end) clearInterval(timer);
      }, 100);
   };

   const [webProjects, setWebProjects] = useState(0);
   const webProjectCounter = (start: number, end: number) => {
      if (start === end) return;

      let timer = setInterval(() => {
         start += 1;
         setWebProjects(start);

         if (start === end) clearInterval(timer);
      }, 100);
   };

   const [clientsServed, setClientsServed] = useState(0);
   const clientCounter = (start: number, end: number) => {
      if (start === end) return;

      let timer = setInterval(() => {
         start += 1;
         setClientsServed(start);

         if (start === end) clearInterval(timer);
      }, 200);
   };

   const [onGoingProjects, setOnGoingProjects] = useState(0);
   const onGoingCounter = (start: number, end: number) => {
      if (start === end) return;

      let timer = setInterval(() => {
         start += 1;
         setOnGoingProjects(start);

         if (start === end) clearInterval(timer);
      }, 200);
   };

   if (offset > 300 && offset < 350) {
      projectCounter(0, totalProjects);
      webProjectCounter(0, totalWebProjects);
      clientCounter(0, totalClientsServed);
      onGoingCounter(0, totalOngoingProjects);
      setOffset(0);
   }
   return (
      <section className={`${styles.aboutUs}`} id={"aboutUs"}>
         <div className={`${styles.numbers}`}>
            <div className={`${styles.card}`}>
               <img
                  src="assets/numbers-svg.svg"
                  alt=""
                  className={`${styles.image} image`}
               />
               <h1 className={`${styles.number}`}>{projectsCompleted}</h1>
               <p className={`${styles.text}`}>Projects Completed</p>
            </div>
            <div className={`${styles.card}`}>
               <img
                  src="assets/numbers-svg.svg"
                  alt=""
                  className={`${styles.image} image`}
               />
               <h1 className={`${styles.number}`}>{webProjects}</h1>
               <p className={`${styles.text}`}>Web Projects</p>
            </div>
            <div className={`${styles.card}`}>
               <img
                  src="assets/numbers-svg.svg"
                  alt=""
                  className={`${styles.image} image`}
               />
               <h1 className={`${styles.number}`}>{clientsServed}</h1>
               <p className={`${styles.text}`}>Clients Served</p>
            </div>
            <div className={`${styles.card}`}>
               <img
                  src="assets/numbers-svg.svg"
                  alt=""
                  className={`${styles.image} image`}
               />
               <h1 className={`${styles.number}`}>{onGoingProjects}</h1>
               <p className={`${styles.text}`}>Ongoing Projects</p>
            </div>
         </div>

         <div className={`${styles.wrapper}`}>
            <div className={`${styles.left}`}>
               <div className={`${styles.vertCol} ${styles.one}`}></div>
               <div className={`${styles.vertCol} ${styles.two}`}></div>
               <div className={`${styles.vertCol} ${styles.three}`}></div>
               <div className={`${styles.vertCol} ${styles.four}`}></div>
            </div>
            <div className={`${styles.right}`}>
               <h2 className={`${styles.heading} heading`}>About Us</h2>
               <div>
                  <p className={`${styles.para} para`}>
                     Website Vikreta is committed to provide web development
                     services. We design, build professional
                     website/web-applications according to the need of clients;
                     as well as we help them to build their presence through
                     digital marketing and much more.
                  </p>
                  <p className={`${styles.para} para`}>
                     We have completed 2+ years in the IT industry and hoping
                     for many more. Every business requires impressive and
                     attractive impact on the internet and we are thrilled to
                     provide it. We are dedicated to design and develop verity
                     of web products. With highest commitment and customer
                     focus, we are known to deliver reliable web solutions.
                  </p>
                  <p className={`${styles.para} para`}>
                     We believe to deliver solutions that meet customer needs,
                     business and budget expectations.
                  </p>
               </div>
               <Link
                  href="/work"
                  className={`${styles.awesomeLink} awesomeLink`}
               >
                  Explore Our Work
               </Link>
            </div>
         </div>
      </section>
   );
};

export default AboutSection;
