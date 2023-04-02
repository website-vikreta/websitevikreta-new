"use client";

// ReactJS imports
import React, { useRef } from "react";

// NextJS imports

// Pakage imports
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Component imports

// Styles import
import styles from "/styles/pages/Home.module.scss";

// Other imports
import testimonialData from "../../../jsonData/testimonialData";

const TestimonialSection = () => {
   const customSlider = useRef<Slider | null>(null);

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };
   // grabbing testimonials from json
   const testimonials = testimonialData();

   // functions
   const gotoNext = () => {
      if (customSlider.current !== null) customSlider.current.slickNext();
   };

   const gotoPrev = () => {
      if (customSlider.current !== null) customSlider.current.slickPrev();
   };

   return (
      <section className={`${styles.testimonials} testimonialSlider`}>
         <div className={`${styles.container} container`}>
            <div className={`${styles.heading} heading`}>
               <h2>What Our Clients Think About Us</h2>
               <div className={`${styles.line} line`}></div>
            </div>

            <div className={`${styles.testimonialSliderWrapper}`}>
               {/* prev button */}
               <button
                  className={`${styles.prev} ${styles.sliderBtn}`}
                  id="test-prev"
                  onClick={() => gotoPrev()}
               >
                  <i className="bi bi-chevron-left"></i>
               </button>
               {/* slider */}
               <Slider
                  {...settings}
                  className={`${styles.testimonialSlider}`}
                  ref={customSlider}
               >
                  {testimonials.map((test, index) => (
                     <div className={`${styles.card}`} key={index}>
                        <img
                           src="/assets/Quote.svg"
                           alt="quote svg"
                           className={`${styles.quote}`}
                        />

                        <p className={`${styles.review}`}>{test.review}</p>

                        <div className={`${styles.group}`}>
                           <div className={`${styles.user}`}>
                              {test.image !== "" && (
                                 <img src={test.image} alt="" />
                              )}
                              <div className={`${styles.text}`}>
                                 <p className={`${styles.name}`}>
                                    {test.userName}
                                 </p>
                                 <p className={`${styles.des}`}>
                                    {test.userDes}
                                 </p>
                              </div>
                           </div>
                           <div className={`${styles.ratings}`}>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                           </div>
                        </div>
                     </div>
                  ))}
               </Slider>

               {/* next button */}
               <button
                  className={`${styles.next} ${styles.sliderBtn}`}
                  id="test-next"
                  onClick={() => gotoNext()}
               >
                  <i className="bi bi-chevron-right"></i>
               </button>
            </div>
         </div>
      </section>
   );
};

export default TestimonialSection;
