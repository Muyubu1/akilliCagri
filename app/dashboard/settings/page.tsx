import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Play, Save } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="space-y-8 max-w-4xl">
            <div>
                <h1 className="text-3xl font-display font-bold text-white">Asistan Ayarları</h1>
                <p className="text-slate-400">Yapay zeka asistanınızın kimliğini ve davranışlarını özelleştirin.</p>
            </div>

            <Card className="p-8 bg-slate-900/70 border-slate-700/50 space-y-8">
                {/* Persona Settings */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white border-b border-slate-700/50 pb-2">Kimlik Ayarları</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Asistan Adı</label>
                            <input type="text" defaultValue="Selin" className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg p-2.5 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Ses Tonu</label>
                            <select className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg p-2.5 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition-colors">
                                <option>Zeynep (Kadın - Resmi)</option>
                                <option>Can (Erkek - Resmi)</option>
                                <option>Selin (Kadın - Enerjik)</option>
                                <option>Emre (Erkek - Sakin)</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                        <Button size="sm" variant="outline" className="gap-2">
                            <Play size={16} /> Örnek Sesi Dinle
                        </Button>
                        <div className="h-1 flex-1 bg-slate-700/50 rounded-full overflow-hidden">
                            <div className="h-full w-0 bg-primary animate-[upload_2s_ease-in-out_infinite]" />
                        </div>
                    </div>
                </div>

                {/* Script Settings */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white border-b border-slate-700/50 pb-2">Konuşma Senaryosu</h3>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Açılış Cümlesi</label>
                        <p className="text-xs text-slate-500">Telefonu açtığında söyleyeceği ilk cümle.</p>
                        <textarea
                            className="w-full h-24 bg-slate-800/50 border border-slate-700/50 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none resize-none transition-colors"
                            defaultValue="Merhaba, Dr. Ahmet Bey'in muayenehanesine hoş geldiniz. Ben yapay zeka asistanıyım. Size randevu oluşturma veya bilgi verme konusunda nasıl yardımcı olabilirim?"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">İşletme Bilgileri (Knowledge Base)</label>
                        <p className="text-xs text-slate-500">Asistanın sorulara cevap verirken kullanacağı temel bilgiler.</p>
                        <textarea
                            className="w-full h-32 bg-slate-800/50 border border-slate-700/50 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none resize-none transition-colors"
                            defaultValue={`Çalışma Saatleri: Hafta içi 09:00 - 18:00
Adres: Atatürk Cad. No:123
Muayene Ücreti: 1500 TL
Randevu Süresi: 30 Dakika`}
                        />
                    </div>
                </div>

                <div className="pt-4 flex justify-end">
                    <Button className="gap-2">
                        <Save size={18} />
                        Değişiklikleri Kaydet
                    </Button>
                </div>
            </Card>
        </div>
    );
}
