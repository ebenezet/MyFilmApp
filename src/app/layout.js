import { Sofia } from "next/font/google";
import {Crimson_Text} from "next/font/google"

import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

export const sofia = Sofia({
  weight: "400",
  style: "normal",
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-sofia",
  subsets: ["latin"],
});

export const crimson = Crimson_Text({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson",
})



export const metadata = {
  title: "Films Blog",
  description: "Great films with great reviews",
  openGraph: {
    title: "Films Blog",
    description: "Great films with great reviews",
    type: "website",
    url: "https://MyFilmApp.vercel.app",
    images: ["https://MyFilmApp.vercel.app/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${crimson.variable} ${sofia.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
