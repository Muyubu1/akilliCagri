import { Card } from "@/components/ui/Card";
import { Mic, Clock, Calendar, Shield, Zap, Users } from "lucide-react";

const features = [
    {
        title: "İnsan Gibi İletişim",
        description: "Doğal dil işleme teknolojisi ile müşterilerinizle akıcı ve anlaşılır diyaloglar kurar.",
        icon: Mic,
    },
    {
        title: "7/24 Aktif",
        description: "Mesai saatlerinden bağımsız, müşterilerinize günün her saati hizmet verin.",
        icon: Clock,
    },
    {
        title: "Otomatik Randevu",
        description: "Takviminize erişir, uygun saatleri kontrol eder ve randevuları otomatik oluşturur.",
        icon: Calendar,
    },
    {
        title: "Hızlı Kurulum",
        description: "Dakikalar içinde işletmenize özel asistanı eğitin ve kullanmaya başlayın.",
        icon: Zap,
    },
    {
        title: "Kişiselleştirilebilir",
        description: "Asistanınızın ses tonunu, konuşma stilini ve ismini kendiniz belirleyin.",
        icon: Users,
    },
    {
        title: "Güvenli Altyapı",
        description: "Görüşmeleriniz ve verileriniz en yüksek güvenlik standartlarıyla korunur.",
        icon: Shield,
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                        <span className="text-primary">Akıllı</span> Özellikler
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        İşletmenizi geleceğe taşıyacak teknolojilerle donatılmış özelliklerimizi keşfedin.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} hoverEffect className="bg-slate-900/50 border-slate-700/50 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/8 blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
}
