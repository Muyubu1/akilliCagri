import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
    title: "Akıllı Çağrı - Otomatize Telekom AI",
    description: "Kobiler için yeni nesil yapay zeka asistanı.",
    metadataBase: new URL('https://muyubu1.github.io/akilliCagri'),
    openGraph: {
        title: "Akıllı Çağrı - Otomatize Telekom AI",
        description: "Kobiler için yeni nesil yapay zeka asistanı.",
        images: ["/logo.png"],
        locale: "tr_TR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Akıllı Çağrı - Otomatize Telekom AI",
        description: "Kobiler için yeni nesil yapay zeka asistanı.",
        images: ["/logo.png"],
    },
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
