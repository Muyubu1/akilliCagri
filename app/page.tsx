import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Demo } from "@/components/landing/Demo";
import { Pricing } from "@/components/landing/Pricing";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/30">
            <Navbar />
            <Hero />
            <Features />
            <Demo />
            <Pricing />
            <Footer />
        </main>
    );
}
