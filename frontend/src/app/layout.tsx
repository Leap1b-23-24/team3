"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { AuthProvider } from "@/components/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="w-screen">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
