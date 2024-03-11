import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
// import { AuthProviders } from "@/components/Authproviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce web",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        {/* <AuthProviders> */}
        {children}
        {/* </AuthProviders> */}
      </body>
    </html>
  );
}
