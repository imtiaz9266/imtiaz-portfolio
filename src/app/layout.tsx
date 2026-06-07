import type { Metadata } from "next";
import { ThemeProvider } from "../components/layout/ThemeProvider";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imtiaz Ahamed | Social Media Marketing Specialist",
  description: "Professional Social Media Marketing Specialist based in Khulna, Bangladesh.",
  keywords: "social media marketing, Facebook marketing, Instagram marketing, Bangladesh",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}