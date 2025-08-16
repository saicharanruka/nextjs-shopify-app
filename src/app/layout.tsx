import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google"; import fonts here
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NextJS Shopify Store",
  description: "Headless shopify store in Next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`max-w-5xl mx-4 mt-5 lg:mx-auto antialiased`}>
        <main>
          <NavBar />

          {children}

          <Footer />
        </main>
      </body>
    </html>
  );
}
