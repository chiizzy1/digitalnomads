import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { AOSInit } from "@/components/ui/aos";
import Navbar from "@/components/Navbar";
import ScrollUpButton from "@/components/ui/ScrollUpButton";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AFRIWICE global | innovation without borders",
  description: "Innovation Without Borders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <AOSInit />
      <body
        className={cn(
          "min-h-screen relative text-slate-900 bg-white antialiased",
          inter.className
        )}
      >
        <Navbar />
        <Toaster
          toastOptions={{
            success: {
              style: {
                color: "green",
              },
            },
            error: {
              style: {
                color: "red",
              },
            },
          }}
          position="bottom-center"
        />
        {children}
        <ScrollUpButton />
        <Footer />
      </body>
    </html>
  );
}
