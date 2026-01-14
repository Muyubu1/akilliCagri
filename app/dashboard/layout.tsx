import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, Settings, PhoneCall, Users, LogOut } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-slate-950 text-white">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 h-screen w-64 border-r border-slate-800/50 bg-slate-900/50 backdrop-blur-xl">
                <div className="flex h-16 items-center px-6 border-b border-slate-800/50">
                    <Link className="flex items-center gap-2" href="/">
                        <Image 
                            src="/logoAkıllıCagrı.png" 
                            alt="Akıllı Çağrı" 
                            width={360} 
                            height={120}
                            className="h-24 w-auto"
                            priority
                        />
                    </Link>
                </div>

                <nav className="p-4 space-y-2">
                    <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium border border-primary/20">
                        <LayoutDashboard size={20} />
                        Genel Bakış
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-white transition-colors duration-200">
                        <PhoneCall size={20} />
                        Çağrı Kayıtları
                    </Link>
                    <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-white transition-colors duration-200">
                        <Settings size={20} />
                        Asistan Ayarları
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-white transition-colors duration-200">
                        <Users size={20} />
                        Müşteri Listesi
                    </Link>
                </nav>

                <div className="absolute bottom-4 left-0 w-full px-4">
                    <button className="flex w-full items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-colors duration-200">
                        <LogOut size={20} />
                        Çıkış Yap
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="ml-64 flex-1">
                <header className="h-16 border-b border-slate-800/50 flex items-center justify-between px-8 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-10">
                    <h2 className="font-semibold text-lg">Hoşgeldiniz, İşletme Sahibi</h2>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-accent" />
                </header>
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
