import { Card } from "@/components/ui/Card";
import { Phone, Clock, CalendarCheck, TrendingUp } from "lucide-react";

export default function DashboardHome() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-display font-bold text-white">Genel Bakış</h1>
                <p className="text-slate-400">Son 30 günlük aktiviteleriniz.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="p-6 bg-slate-900/70 border-slate-700/50">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-slate-400 text-sm">Toplam Çağrı</span>
                        <Phone className="text-primary" size={20} />
                    </div>
                    <div className="text-3xl font-bold text-white">1,284</div>
                    <div className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
                        <TrendingUp size={12} /> +12% geçen aydan
                    </div>
                </Card>

                <Card className="p-6 bg-slate-900/70 border-slate-700/50">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-slate-400 text-sm">Kullanılan Dakika</span>
                        <Clock className="text-secondary" size={20} />
                    </div>
                    <div className="text-3xl font-bold text-white">4,320</div>
                    <div className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
                        <TrendingUp size={12} /> +8% geçen aydan
                    </div>
                </Card>

                <Card className="p-6 bg-slate-900/70 border-slate-700/50">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-slate-400 text-sm">Randevular</span>
                        <CalendarCheck className="text-accent" size={20} />
                    </div>
                    <div className="text-3xl font-bold text-white">342</div>
                    <div className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
                        <TrendingUp size={12} /> +24% geçen aydan
                    </div>
                </Card>

                <Card className="p-6 bg-slate-900/70 border-slate-700/50">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-slate-400 text-sm">Aktif Asistan</span>
                        <div className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                    </div>
                    <div className="text-3xl font-bold text-white">Aktif</div>
                    <div className="text-xs text-slate-500 mt-2">7/24 Hizmet veriyor</div>
                </Card>
            </div>

            {/* Recent Activity / Chart Placeholder */}
            <div className="grid gap-6 lg:grid-cols-3">
                <Card className="lg:col-span-2 p-6 bg-slate-900/70 border-slate-700/50 h-[400px]">
                    <h3 className="font-semibold mb-6 text-white">Çağrı Trafiği</h3>
                    <div className="flex items-end justify-between h-[300px] w-full gap-2 opacity-70">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="bg-gradient-to-t from-primary/40 to-primary/80 w-full rounded-t-sm hover:opacity-100 transition-opacity duration-200" style={{ height: `${Math.random() * 80 + 20}%` }} />
                        ))}
                    </div>
                </Card>

                <Card className="p-6 bg-slate-900/70 border-slate-700/50 h-[400px] overflow-y-auto">
                    <h3 className="font-semibold mb-6 text-white">Son Çağrılar</h3>
                    <div className="space-y-4">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800/80 transition-colors duration-200 cursor-pointer">
                                <div>
                                    <div className="font-medium text-sm text-white">+90 532 4XX XX {30 + i}</div>
                                    <div className="text-xs text-slate-500">Bugün, 14:{30 + i}</div>
                                </div>
                                <div className="text-xs px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/20">
                                    Başarılı
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}
