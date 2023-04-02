"use client";

// ReactJS imports

// NextJS imports
import Link from "next/link";

// Pakage imports

// Component imports

// Styles import
import styles from "/styles/pages/Home.module.scss";

// Other imports

const ServicesSection = () => {
   return (
      <section className={`${styles.services}`} id="services">
         <div className={`${styles.container} container`}>
            <div className={`${styles.heading} heading`}>
               <h2>Our Services</h2>
               <div className={`${styles.line}`}></div>
            </div>

            <div className={`${styles.cardWrapper}`}>
               <div className={`${styles.card}`}>
                  <img
                     src="/assets/Service1.svg"
                     alt="Web Design Service Img"
                  />

                  <h4 className={`${styles.cardHeading}`}>UX Design</h4>
                  <p className={`${styles.para} para`}>
                     Every application experience should be user friendly, and
                     when you're working with us you don't have to worry about
                     that. We provide
                  </p>
                  <ul>
                     <li>
                        <i className="bi bi-patch-check"></i> UX Research
                     </li>
                     <li>
                        <i className="bi bi-patch-check"></i> Interaction Design
                     </li>
                     <li>
                        <i className="bi bi-patch-check"></i> Wireframing
                     </li>
                     <li>
                        <i className="bi bi-patch-check"></i> Strategy &
                        Planning
                     </li>
                  </ul>
               </div>
               <div className={`${styles.card}`}>
                  <img
                     src="/assets/Service3.svg"
                     alt="Web Development Service Img"
                  />

                  <h4 className={`${styles.cardHeading}`}>UI Design</h4>
                  <p className={`${styles.para} para`}>
                     The first thing user notices about anything is how it
                     looks, how it feels. We provide design interface, not what
                     you need, but what you deserve.
                  </p>
                  <ul>
                     <li>
                        <i className="bi bi-patch-check"></i> Website Design /
                        Re-Design
                     </li>
                     <li>
                        <i className="bi bi-patch-check"></i> App Design /
                        Re-Design
                     </li>
                     <li>
                        <i className="bi bi-patch-check"></i> Prototyping
                     </li>
                     <li>
                        <i className="bi bi-patch-check"></i> MockUps & Design
                        Systems
                     </li>
                  </ul>
               </div>
               <div className={`${styles.card}`}>
                  <img
                     src="/assets/Service2.svg"
                     alt="Web & Mobile App Service Img"
                  />

                  <h4 className={`${styles.cardHeading}`}>
                     Website Development
                  </h4>
                  <p className={`${styles.para} para`}>
                     We are an innovative web development agency delivering
                     quality, yet affordable websites for businesses all over
                     the globe.
                  </p>
                  <ul>
                     <li>
                        <i className="bi bi-patch-check"></i> Dynamic / Static
                        Website
                     </li>
                     <li>
                        <i className="bi bi-patch-check"></i> Landing Pages
                     </li>
                     <li>
                        <i className="bi bi-patch-check"></i> Figma/XD to HTML
                     </li>
                     <li>
                        <i className="bi bi-patch-check"></i> Front-end
                        Development
                     </li>
                     <li>
                        <i className="bi bi-patch-check"></i> Responsive
                        Websites
                     </li>
                  </ul>
               </div>
               <div className={`${styles.card}`}>
                  <img
                     src="/assets/Service1.svg"
                     alt="Digital Marketing Service Img"
                  />

                  <h4 className={`${styles.cardHeading}`}>Web & Mobile Apps</h4>
                  <p className={`${styles.para} para`}>
                     We provide mobile friendly and responsive web applications
                     and well mobile applications for client needs.
                  </p>
                  <ul>
                     <li>
                        <i className="bi bi-patch-check"></i> Web Apps / Portals
                     </li>
                     <li>
                        <i className="bi bi-patch-check"></i> Content Management
                        Systems
                     </li>
                     <li>
                        <i className="bi bi-patch-check"></i> CRM Systems
                     </li>
                     <li>
                        <i className="bi bi-patch-check"></i> E-Commerce
                        Solutions
                     </li>
                     <li>
                        <i className="bi bi-patch-check"></i> Custom Application
                        Development
                     </li>
                  </ul>
               </div>
            </div>

            <div className={`${styles.buttonGroup}`}>
               <Link href="/work" className={`normalBtn primary`}>
                  View Our Work
               </Link>
               <Link href="/contact" className={`normalBtn secondary`}>
                  Get a Free Quote
               </Link>
            </div>
         </div>
      </section>
   );
};

export default ServicesSection;
