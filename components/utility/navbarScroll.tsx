"use client";
import { useEffect } from "react";

export const navbarScroll = () => {
   let previousScroll = 0;
   let currentScroll;

   useEffect(() => {
      const body = document.body;
      window.addEventListener("scroll", () => {
         currentScroll = window.pageYOffset;

         if (currentScroll <= 0) {
            body.classList.remove("scroll-up");
         }

         if (
            currentScroll > previousScroll &&
            !body.classList.contains("scroll-down")
         ) {
            body.classList.remove("scroll-up");
            body.classList.add("scroll-down");
         }
         if (
            currentScroll < previousScroll &&
            body.classList.contains("scroll-down")
         ) {
            body.classList.remove("scroll-down");
            body.classList.add("scroll-up");
         }

         previousScroll = currentScroll;
      });
   }, [previousScroll, currentScroll]);
};
