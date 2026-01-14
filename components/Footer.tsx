import Link from "next/link";
import Image from "next/image";
import logoImage from "@/assets/logoAkıllıCagrı.png";

export function Footer() {
    return (
        <footer className="w-full border-t border-slate-800/50 bg-slate-950 py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <Link className="flex items-center gap-2" href="#">
                            <Image 
                                src={logoImage} 
                                alt="Akıllı Çağrı" 
                                width={140} 
                                height={46}
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="text-slate-400 text-sm">
                            KOBİ'ler için geleceğin iletişim teknolojisi. 7/24 aktif yapay zeka asistanı.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold text-white">Ürün</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#features" className="hover:text-primary transition-colors duration-200">Özellikler</Link></li>
                            <li><Link href="#pricing" className="hover:text-primary transition-colors duration-200">Fiyatlandırma</Link></li>
                            <li><Link href="#demo" className="hover:text-primary transition-colors duration-200">Demo</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold text-white">Şirket</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-primary transition-colors duration-200">Hakkımızda</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors duration-200">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors duration-200">İletişim</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold text-white">Yasal</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-primary transition-colors duration-200">Gizlilik Politikası</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors duration-200">Hizmet Şartları</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-800/50 pt-8 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} Akıllı Çağrı AI. Tüm hakları saklıdır.
                </div>
            </div>
        </footer>
    );
}
