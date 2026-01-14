"use client";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Check } from "lucide-react";

export function Pricing() {
    return (
        <section id="pricing" className="py-24 relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                        Basit <span className="text-primary">Fiyatlandırma</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Sürpriz faturalar yok. Sadece asistanınızın konuştuğu süre kadar ödeyin.
                    </p>
                </div>

                <div className="max-w-md mx-auto">
                    <Card className="hoverEffect p-8 border-primary/20 bg-gradient-to-b from-slate-900/80 to-slate-950/80 backdrop-blur-xl">
                        <div className="text-center mb-8">
                            <h3 className="text-lg font-medium text-slate-300 uppercase tracking-wider">Dakika Başına</h3>
                            <div className="mt-4 flex items-baseline justify-center gap-2">
                                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">₺2.50</span>
                                <span className="text-slate-400">/ dakika</span>
                            </div>
                            <p className="mt-2 text-sm text-accent">İlk 100 dakika hediye</p>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Tüm yapay zeka özellikleri",
                                "Sınırsız çağrı karşılama",
                                "Özelleştirilebilir senaryolar",
                                "Randevu entegrasyonu",
                                "Detaylı raporlama paneli",
                                "7/24 Teknik Destek"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center text-slate-300">
                                    <div className="h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center mr-3 text-accent border border-accent/30">
                                        <Check size={12} />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Button size="lg" className="w-full">
                            Hemen Başla
                        </Button>
                    </Card>
                </div>
            </div>
        </section>
    );
}
