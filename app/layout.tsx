'use client';

import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {ReactNode} from "react";
import {TanStackProvider} from "@/components/TanStackProvider/TanStackProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {

    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
            <div className="wrapper">
                <Header/>
                <main>
                    <div className="container">
                        {children}
                    </div>
                </main>
                <Footer/>
            </div>
        </TanStackProvider>
        </body>
        </html>
    );
}
