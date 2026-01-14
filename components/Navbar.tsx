import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";

export function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link className="flex items-center gap-2" href="#">
                    <Image 
                        src="/logoAkıllıCagrı.png" 
                        alt="Akıllı Çağrı" 
                        width={360} 
                        height={120}
                        className="h-24 w-auto"
                        priority
                    />
                </Link>
                <nav className="hidden md:flex gap-6">
                    <Link className="text-sm font-medium text-slate-300 hover:text-primary transition-colors duration-200" href="#features">
                        Özellikler
                    </Link>
                    <Link className="text-sm font-medium text-slate-300 hover:text-primary transition-colors duration-200" href="#demo">
                        Demo
                    </Link>
                    <Link className="text-sm font-medium text-slate-300 hover:text-primary transition-colors duration-200" href="#pricing">
                        Fiyatlandırma
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors duration-200 hidden md:block">
                        Giriş Yap
                    </Link>
                    <Button size="sm">Hemen Başla</Button>
                </div>
            </div>
        </header>
    );
}
