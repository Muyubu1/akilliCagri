import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/assets/logoAkıllıCagrı.png";

export default function LoginPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/10 via-secondary/5 to-transparent opacity-50 pointer-events-none" />

            <Card className="w-full max-w-md relative z-10 mx-4 border-slate-700/50 bg-slate-900/70 backdrop-blur-xl">
                <div className="text-center mb-8">
                    <Link className="inline-block mb-4" href="/">
                        <Image 
                            src={logoImage} 
                            alt="Akıllı Çağrı" 
                            width={160} 
                            height={53}
                            className="h-12 w-auto mx-auto"
                            priority
                        />
                    </Link>
                    <h1 className="text-xl font-semibold text-white">Hoşgeldiniz</h1>
                    <p className="text-slate-400 text-sm">Hesabınıza giriş yapın</p>
                </div>

                <form className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">E-posta</label>
                        <input
                            type="email"
                            className="w-full rounded-lg border border-slate-700/50 bg-slate-800/50 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                            placeholder="ornek@sirket.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-slate-300">Şifre</label>
                            <a href="#" className="text-xs text-primary hover:underline">Şifremi Unuttum</a>
                        </div>
                        <input
                            type="password"
                            className="w-full rounded-lg border border-slate-700/50 bg-slate-800/50 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    <Button className="w-full" size="lg">Giriş Yap</Button>
                </form>

                <div className="mt-6 text-center text-xs text-slate-500">
                    Hesabınız yok mu? <a href="#" className="text-white hover:text-primary transition-colors duration-200">Kayıt Olun</a>
                </div>
            </Card>
        </main>
    );
}
