import "/styles/global.scss";

// ReactJS imports

// NextJS imports
import Image from "next/image";
import Head from "next/head";

// Component imports

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
            <main>{children}</main>
         </body>
      </html>
   );
}
