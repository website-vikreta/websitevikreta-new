"use client";
// ReactJS imports

// NextJS imports
import Image from "next/image";
import Head from "next/head";

// Package imports
import "bootstrap-icons/font/bootstrap-icons.css";

// Component imports
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { navbarScroll } from "@/components/utility/navbarScroll";

// Styles import
import "/styles/global.scss";

// Other imports

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   navbarScroll();
   return (
      <html lang="en">
         <body>
            <Header />
            <main>{children}</main>
            <Footer />
         </body>
      </html>
   );
}
