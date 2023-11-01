import "./globals.css";
import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";
export const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600"] });

export const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sculpt | Making college life worth-while ",
  description: "Making college life worth-while ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="favicon" href="/favicon.ico" type="img/icon" />
      <body className={` ${inter.className} ${manrope.className}`}>
        {children}
      </body>
    </html>
  );
}
