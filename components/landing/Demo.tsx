import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, PhoneOff, Mic } from "lucide-react";

export function Demo() {
    return (
        <section id="demo" className="py-24 relative overflow-hidden bg-slate-950/50">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 space-y-8">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                        Asistanınızı <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sky-400 to-accent">
                            Şimdi Deneyimleyin
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Aşağıdaki simülatörü kullanarak yapay zeka asistanımızla canlı bir görüşme yaparmış gibi test edebilirsiniz.
                        Ses tonu, tepki süresi ve doğal konuşma yeteneğine hayran kalacaksınız.
                    </p>

                    <ul className="space-y-4">
                        {["Diş Hekimi Randevusu", "Restoran Rezervasyonu", "Teknik Destek"].map((item, i) => (
                            <li key={i} className="flex items-center text-slate-300">
                                <span className="h-2 w-2 rounded-full bg-accent mr-3" />
                                {item} Senaryosu
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:w-1/2 w-full flex justify-center">
                    <div className="relative w-full max-w-sm">
                        {/* Phone Frame Glow - Kurumsal tonlar */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-[3rem] blur opacity-25" />

                        {/* Phone UI */}
                        <Card className="relative h-[600px] rounded-[2.5rem] border-slate-800 bg-slate-950 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
                            {/* Dynamic Island Area */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-24 bg-black rounded-b-2xl z-20" />

                            <div className="mt-12 text-center space-y-2">
                                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-primary/20 via-secondary/15 to-accent/20 flex items-center justify-center relative">
                                    <div className="absolute inset-0 rounded-full border border-primary/30 animate-[ping_3s_linear_infinite]" />
                                    <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center border border-slate-700">
                                        <Mic className="text-primary w-8 h-8" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-white">Akıllı Asistan</h3>
                                <p className="text-sm text-primary animate-pulse">Dinliyor...</p>
                            </div>

                            <div className="space-y-4 my-8 flex-1 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* Visualization of sound waves */}
                                    <div className="flex gap-1 items-center h-12">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="w-1 bg-primary/50 rounded-full animate-[music_1s_ease-in-out_infinite]" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Button variant="ghost" className="bg-red-500/10 text-red-400 hover:bg-red-500/20 h-16 rounded-full flex flex-col items-center justify-center gap-1 border border-red-500/20">
                                    <PhoneOff size={20} />
                                </Button>
                                <Button variant="ghost" className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 h-16 rounded-full flex flex-col items-center justify-center gap-1 border border-emerald-500/20">
                                    <Phone size={20} />
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
