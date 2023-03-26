import { Roboto } from "next/font/google";

export const roboto = Roboto({
   weight: ["300", "400", "500", "700", "900"],
   style: ["normal", "italic"],
   subsets: ["latin"],
   variable: "--font-roboto",
});
