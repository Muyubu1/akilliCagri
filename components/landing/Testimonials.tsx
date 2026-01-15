"use client";

import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials: Testimonial[] = [
  {
    text: "Bu ERP sistemimizin operasyonlarını devrim niteliğinde değiştirdi, finans ve envanter yönetimini kolaylaştırdı. Bulut tabanlı platform sayesinde uzaktan bile üretken kalabiliyoruz.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    name: "Briana Patton",
    role: "Operasyon Müdürü",
  },
  {
    text: "Bu ERP'yi uygulamak sorunsuz ve hızlıydı. Özelleştirilebilir, kullanıcı dostu arayüzü sayesinde ekip eğitimi çok kolay oldu.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    name: "Bilal Ahmed",
    role: "IT Müdürü",
  },
  {
    text: "Destek ekibi olağanüstü, kurulum sürecinde bize rehberlik ettiler ve devam eden yardımlarıyla memnuniyetimizi sağladılar.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    name: "Saman Malik",
    role: "Müşteri Destek Lideri",
  },
  {
    text: "Bu ERP'nin sorunsuz entegrasyonu iş operasyonlarımızı ve verimliliğimizi artırdı. Sezgisel arayüzü nedeniyle kesinlikle tavsiye ederim.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Güçlü özellikleri ve hızlı desteği sayesinde iş akışımızı dönüştürdü ve bizi önemli ölçüde daha verimli hale getirdi.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    name: "Zainab Hussain",
    role: "Proje Müdürü",
  },
  {
    text: "Sorunsuz uygulama beklentilerimizi aştı. Süreçleri kolaylaştırdı ve genel iş performansını iyileştirdi.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    name: "Aliza Khan",
    role: "İş Analisti",
  },
  {
    text: "Kullanıcı dostu tasarımı ve olumlu müşteri geri bildirimleriyle iş fonksiyonlarımız iyileşti.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    name: "Farhan Siddiqui",
    role: "Pazarlama Direktörü",
  },
  {
    text: "Beklentilerimizi aşan bir çözüm sundular, ihtiyaçlarımızı anladılar ve operasyonlarımızı geliştirdiler.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
    name: "Sana Sheikh",
    role: "Satış Müdürü",
  },
  {
    text: "Bu ERP'yi kullanarak çevrimiçi varlığımız ve dönüşümlerimiz önemli ölçüde arttı, iş performansını artırdı.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    name: "Hassan Ali",
    role: "E-ticaret Müdürü",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm py-1 px-4 rounded-lg text-slate-300 text-sm">Referanslar</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-white">
            Kullanıcılarımız <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Ne Diyor</span>
          </h2>
          <p className="text-center mt-5 opacity-75 text-slate-400">
            Müşterilerimizin bizim hakkımızda söylediklerini görün.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

