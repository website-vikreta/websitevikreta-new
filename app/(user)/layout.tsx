import "/styles/global.scss";

// ReactJS imports

// NextJS imports
import Image from "next/image";
import Head from "next/head";

// Component imports
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Styles import
import styles from "../../styles/pages/Home.module.scss";

// Other imports

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
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
