"use client";
import "./globals.css";
import React from "react";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { ThemeProvider } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { theme } from "@/theme";
import { ClientProvider } from "@/components/providers/ClientProvider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="w-screen">
        <ThemeProvider theme={theme}>
          <ClientProvider>
            <AuthProvider>{children}</AuthProvider>
          </ClientProvider>

          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
