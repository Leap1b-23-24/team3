"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="w-screen">
        <ThemeProvider theme={theme}>
<<<<<<< HEAD
          <AuthProvider> {children} </AuthProvider>
=======
          <AuthProvider>{children}</AuthProvider>
>>>>>>> a50ef6a (fck)
        </ThemeProvider>
      </body>
    </html>
  );
}
