import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
    title: "Akıllı Çağrı - Otomatize Telekom AI",
    description: "Kobiler için yeni nesil yapay zeka asistanı.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr">
            <body className={cn(inter.variable, orbitron.variable, "min-h-screen bg-background font-sans antialiased")}>
                {children}
            </body>
        </html>
    );
}
