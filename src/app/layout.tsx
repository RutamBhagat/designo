import { NavbarComponent } from "@/components/navbar";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { FooterComponent } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Designo Agency Website",
  description: "Frontend Mentor | Designo Agency Website Challenge",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className={inter.className}>
        <NavbarComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
