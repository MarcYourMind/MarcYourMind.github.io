import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { I18nProvider } from "@/components/I18nProvider";
import { CommandPalette } from "@/components/CommandPalette";
import { ToastContainer } from "@/components/Toast";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
    title: "MarcYourMind | Multi-Domain Software Engineer",
    description: "Personal portfolio of MarcYourMind, a Senior Software Engineer building high-performance systems across Quant, AI, Web3, and Backend architecture.",
    openGraph: {
        title: "MarcYourMind | Multi-Domain Software Engineer",
        description: "Portfolio of a Senior Software Engineer specializing in high-impact domains including Quant, AI, Web3, and Backend architecture.",
        type: "website",
    },
};

import { MusicPlayer } from "@/components/MusicPlayer";
import { creativeData } from "@/data/creative";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased selection:bg-accent-blue/30`}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                    <I18nProvider>
                        <CommandPalette />
                        {children}
                        <MusicPlayer songs={creativeData.songs} />
                        <ToastContainer />
                    </I18nProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
