"use client";

// ReactJS imports
import { SetStateAction, useEffect, useState } from "react";

// NextJS imports
import Link from "next/link";

// Pakage imports
import { AnimateSharedLayout } from "framer-motion";
import parse from "html-react-parser";

// Component imports
import Toggle from "@/components/utility/toggleFaq";

// Styles import
import styles from "/styles/pages/Home.module.scss";

// Other imports
import faqData from "../../../jsonData/faqData";

const FaqSection = () => {
   // getting faq data from json
   const faqs = faqData();

   // return
   return (
      <section className={`${styles.faq}`}>
         <div className={`${styles.heading} heading`}>
            <h2>Frequently Asked Questions</h2>
            <div className={`${styles.line} line`}></div>
         </div>

         <div className={`${styles.faqWrapper}`}>
            <AnimateSharedLayout>
               {faqs.map((faq, index) => (
                  <Toggle
                     title={faq.title}
                     defaultToggle={faq.toggle ? faq.toggle : false}
                     key={index}
                  >
                     <div className={`${styles.answer}`}>
                        {parse(faq.answer)}
                     </div>
                  </Toggle>
               ))}
            </AnimateSharedLayout>
         </div>
      </section>
   );
};

export default FaqSection;
