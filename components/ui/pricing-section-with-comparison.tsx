import { Check, Minus, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function Pricing() {
  return (
    <div className="w-full py-20 lg:py-40 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Fiyatlandırma</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular text-white">
              Mantıklı <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Fiyatlar</span>!
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-slate-400 max-w-xl text-center">
              Küçük bir işletmeyi yönetmek zaten yeterince zor.
            </p>
          </div>
          <div className="grid text-left w-full grid-cols-3 lg:grid-cols-4 divide-x divide-slate-700/50 pt-20">
            <div className="col-span-3 lg:col-span-1"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col border-t border-slate-700/50">
              <p className="text-2xl text-white font-semibold">Başlangıç</p>
              <p className="text-sm text-slate-400">
                KOBİ ticaretini kolaylaştırmak, herkes için ve her yerde daha kolay ve hızlı hale getirmek hedefimiz.
              </p>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-bold">₺2.50</span>
                <span className="text-sm text-slate-400"> / dakika</span>
              </p>
              <Button variant="outline" className="gap-4 mt-8">
                Dene <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col border-t border-slate-700/50 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-white">Popüler</Badge>
              </div>
              <p className="text-2xl text-white font-semibold">Büyüme</p>
              <p className="text-sm text-slate-400">
                KOBİ ticaretini kolaylaştırmak, herkes için ve her yerde daha kolay ve hızlı hale getirmek hedefimiz.
              </p>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-bold">₺2.00</span>
                <span className="text-sm text-slate-400"> / dakika</span>
              </p>
              <Button variant="default" className="gap-4 mt-8">
                Dene <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col border-t border-slate-700/50">
              <p className="text-2xl text-white font-semibold">Kurumsal</p>
              <p className="text-sm text-slate-400">
                KOBİ ticaretini kolaylaştırmak, herkes için ve her yerde daha kolay ve hızlı hale getirmek hedefimiz.
              </p>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-bold">Özel</span>
                <span className="text-sm text-slate-400"> fiyatlandırma</span>
              </p>
              <Button variant="outline" className="gap-4 mt-8">
                İletişime Geç <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-slate-700/50">
              <b className="text-white">Özellikler</b>
            </div>
            <div className="border-t border-slate-700/50"></div>
            <div className="border-t border-slate-700/50"></div>
            <div className="border-t border-slate-700/50"></div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-slate-300">SSO</div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-slate-300">
              Yapay Zeka Asistanı
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-slate-600" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-slate-300">
              Versiyon Kontrolü
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-slate-600" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-slate-300">
              Üyeler
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-slate-400 text-sm">5 üye</p>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-slate-400 text-sm">25 üye</p>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-slate-400 text-sm">100+ üye</p>
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-slate-300">
              Çoklu Kullanıcı Modu
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-slate-600" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-slate-300">
              Orkestrasyon
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-slate-600" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };

