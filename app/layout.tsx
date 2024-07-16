import type { Metadata } from "next";
import { Lato, Italiana } from "next/font/google";
import "./globals.css";
import { MdMenu } from "react-icons/md";
import Header from "@/components/custom/header";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-italiana",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Jemila Card Designer",
  description:
    "This is the right place for ordering and chooising card design for your business, weddings and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${italiana.variable}`}>
        <div className="font-lato container">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
