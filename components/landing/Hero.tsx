import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden pt-20">
            {/* Kurumsal gradient arka plan */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-primary/15 via-secondary/10 to-transparent blur-[100px] rounded-full opacity-60 pointer-events-none" />
            <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/10 blur-[80px] rounded-full opacity-40 pointer-events-none" />

            <div className="z-10 max-w-4xl space-y-8 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-10">
                <div className="inline-flex items-center rounded-full border border-slate-700/50 bg-slate-900/50 px-4 py-1.5 text-sm text-primary backdrop-blur-xl">
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                    Yapay Zeka Destekli Çağrı Merkezi
                </div>

                <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white corporate-text">
                    İşletmeniz İçin <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sky-400 to-accent">
                        Yapay Zeka
                    </span> Sesli Asistan
                </h1>

                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Müşterilerinizle 7/24 gerçek bir insan gibi konuşan, randevu alan ve satış yapan yapay zeka asistanı.
                    KOBİ'ler için özel olarak tasarlandı.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Button size="lg" className="w-full sm:w-auto text-lg">
                        Hemen Başla
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg">
                        Demoyu Dene
                    </Button>
                </div>
            </div>

            {/* Decorational Elements */}
            <div className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent z-20" />
        </section>
    );
}
