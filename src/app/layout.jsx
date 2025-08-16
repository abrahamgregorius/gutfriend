import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/main/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GutFriend",
  description: "Your stomach’s best friend.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full flex justify-center items-center bg-gradient-to-b from-red-400 to-red-950`}
      >
        <div className="app bg-white w-[375px] min-h-screen">
          <div className="main p-4 mb-[100px]">{children}</div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
