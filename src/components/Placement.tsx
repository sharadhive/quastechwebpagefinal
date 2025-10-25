import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Briefcase, Users, Star, Globe } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 🔹 Type Definitions
type Stat = {
  icon: React.ElementType;
  value: string;
  label: string;
};

type Partner = {
  name: string;
  logo: string;
};

// 🔹 Stats
const stats: Stat[] = [
  { icon: Users, value: "5000+", label: "Students Placed" },
  { icon: Briefcase, value: "300+", label: "Hiring Partners" },
  { icon: Globe, value: "25+", label: "Global Recruiters" },
  { icon: Star, value: "95%", label: "Placement Rate" },
];

// 🔹 Hiring Partners (logos)
const partners: Partner[] = [
  { name: "AQM", logo: "/images/Logo folder/AQM_New_Logo.jpg" },
  { name: "Aurion", logo: "/images/Logo folder/Aurion logo.png" },
  { name: "CC Avenue", logo: "/images/Logo folder/cc avenue-payment-module.png" },
  { name: "CRM Next", logo: "/images/Logo folder/crm next.webp" },
  { name: "Cyber Tech", logo: "/images/Logo folder/Cyber Tech-Logo.png" },
  { name: "GreytHR", logo: "/images/Logo folder/greytrix_logo.jpg" },
  { name: "Mind Gate", logo: "/images/Logo folder/mind gate.jpg" },
  { name: "Proteus", logo: "/images/Logo folder/proteus.jpg" },
  { name: "Shawman", logo: "/images/Logo folder/shawman.png" },
  { name: "SWQA", logo: "/images/Logo folder/swqa_india_logo.jpg" },
];

// --- Sub Components ---
const Card = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
    className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-200/50 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
  >
    {children}
  </motion.div>
);

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12"
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#3154a6] to-[#f15a29] bg-clip-text text-transparent">
      {title}
    </h2>
    {subtitle && (
      <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
        {subtitle}
      </p>
    )}
  </motion.div>
);

const Subtitle = ({ text }: { text: string }) => (
  <div className="text-center mb-10">
    <h3 className="text-3xl font-bold text-slate-800">{text}</h3>
    <div className="mt-2 h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-[#3154a6] to-[#f15a29]" />
  </div>
);

// --- Main Placement Component ---
const Placement = () => {
  const partnersStyles = `
        .swiper-button-next,
        .swiper-button-prev {
          color: #3154a6 !important;
          transition: transform 0.2s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          transform: scale(1.2);
        }
        .swiper-pagination-bullet-active {
          background-color: #f15a29 !important;
        }

        @keyframes scroll-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(-100% + 420px)); }
        }

        .animate-scroll-vertical { animation: scroll-vertical 15s linear infinite; will-change: transform; }
        .group:hover .animate-scroll-vertical { animation-duration: 30s; }
      `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: partnersStyles }} />

      <section id="placement" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading
            title="Our Placement Success"
            subtitle="QUASTECH students have transformed their careers by joining top MNCs with lucrative packages and exciting roles."
          />


          {/* 📊 Stats */}
          <div className="mb-20">
            <Subtitle text="Placement Stats at a Glance" />
            <Swiper
              loop
              autoplay={{ delay: 3000 }}
              navigation
              pagination={{ clickable: true }}
              modules={[Autoplay, Navigation, Pagination]}
              className="py-4"
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
              }}
            >
              {stats.map((s, i) => (
                <SwiperSlide key={i} className="pb-8">
                  <Card>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#3154a6] to-[#f15a29] shadow-lg">
                        <s.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-4xl font-bold text-[#3154a6]">{s.value}</h3>
                      <p className="mt-1 text-slate-700 font-medium">{s.label}</p>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 🤝 Hiring Partners */}
          <div className="group">
            <Subtitle text="Our students are placed and working in this companies" />
            <div className="relative h-[420px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
              <div className="animate-scroll-vertical">
                {/* One full grid pass */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 px-2">
                  {partners.map((p, i) => (
                    <div
                      key={`partners-1-${i}`}
                      className="flex items-center justify-center rounded-2xl bg-white/80 border border-slate-200/70 shadow-sm h-28 md:h-32 px-6 grayscale hover:grayscale-0 transition-all duration-300"
                    >
                      <img src={p.logo} alt={p.name} className="max-h-16 md:max-h-20 object-contain" />
                    </div>
                  ))}
                </div>
                {/* Duplicate for seamless loop */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 px-2">
                  {partners.map((p, i) => (
                    <div
                      key={`partners-2-${i}`}
                      className="flex items-center justify-center rounded-2xl bg-white/80 border border-slate-200/70 shadow-sm h-28 md:h-32 px-6 grayscale hover:grayscale-0 transition-all duration-300"
                    >
                      <img src={p.logo} alt={p.name} className="max-h-16 md:max-h-20 object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Placement;
