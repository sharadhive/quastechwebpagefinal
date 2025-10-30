import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Briefcase, Users, Star, Globe, Award, Building2 } from "lucide-react";
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
  { icon: Briefcase, value: "800+", label: "Hiring Partners" },
  { icon: Globe, value: "25+", label: "Global Recruiters" },
  { icon: Star, value: "95%", label: "Placement Rate" },
];

// 🔹 Hiring Partners (logos)
const partners: Partner[] = [
  { name: "Accenture", logo: "/images/Logo folder/accenture.jpg" },
  { name: "AQM", logo: "/images/Logo folder/AQM_New_Logo.jpg" },
  { name: "Aurion", logo: "/images/Logo folder/Aurion logo.png" },
  { name: "Axioned", logo: "/images/Logo folder/axioned.jpg" },
  { name: "Capgemini", logo: "/images/Logo folder/capgemini.jpg" },
  { name: "CC Avenue", logo: "/images/Logo folder/cc avenue-payment-module.png" },
  { name: "Circux", logo: "/images/Logo folder/circux.jpg" },
  { name: "CRM Next", logo: "/images/Logo folder/crm next.webp" },
  { name: "Cyber Tech", logo: "/images/Logo folder/Cyber Tech-Logo.png" },
  { name: "Cybertech", logo: "/images/Logo folder/cybertech.jpg" },
  { name: "GreytHR", logo: "/images/Logo folder/greytrix_logo.jpg" },
  { name: "Infibeam", logo: "/images/Logo folder/infibeam.jpg" },
  { name: "Infosos", logo: "/images/Logo folder/infosos.jpg" },
  { name: "Ingram", logo: "/images/Logo folder/ingram.jpg" },
  { name: "JustDial", logo: "/images/Logo folder/justdial.jpg" },
  { name: "Mind Gate", logo: "/images/Logo folder/mind gate.jpg" },
  { name: "Mr", logo: "/images/Logo folder/mr.jpg" },
  { name: "Nisco", logo: "/images/Logo folder/nisco.jpg" },
  { name: "Planit", logo: "/images/Logo folder/planit.jpg" },
  { name: "Proteus", logo: "/images/Logo folder/proteus.jpg" },
  { name: "Quality Tech", logo: "/images/Logo folder/qualitytech.jpg" },
  { name: "Shawman", logo: "/images/Logo folder/shawman.png" },
  { name: "SurePR", logo: "/images/Logo folder/surepr.jpg" },
  { name: "SWQA India", logo: "/images/Logo folder/swqa_india_logo.jpg" },
  { name: "SWQA", logo: "/images/Logo folder/swqa.jpg" },
  { name: "TCS", logo: "/images/Logo folder/tcs.jpg" },
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
    <div className="inline-flex items-center gap-3 px-6 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 shadow text-white text-base font-semibold">
      <Award className="w-6 h-6 mr-1 text-white" />
      PLACEMENT
    </div>
    <h2 className="text-4xl md:text-6xl font-extrabold mb-3">
      <span className="bg-gradient-to-r from-[#6B5B95] via-[#9B6B8F] to-[#8B5A5A] bg-clip-text text-transparent">
        {title}
      </span>
    </h2>
    <div className="h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 mb-4" />
    {subtitle && (
      <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
        {subtitle}
      </p>
    )}
  </motion.div>
);

const Subtitle = ({ text }: { text: string }) => (
  <div className="text-center mb-10">
    <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full mb-4">
      <Building2 className="w-5 h-5 text-blue-600" />
      <span className="text-sm font-bold text-blue-600 tracking-wide">HIRING PARTNERS</span>
    </div>
    <h3 className="text-2xl md:text-3xl font-extrabold">
      <span className="bg-gradient-to-r from-[#6B5B95] via-[#9B6B8F] to-[#8B5A5A] bg-clip-text text-transparent">
        {text}
      </span>
    </h3>
    <div className="mt-2 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500" />
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
      {/* <style dangerouslySetInnerHTML={{ __html: partnersStyles }} /> */}

      <section id="placement" className="py-8 md:py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* <SectionHeading
            title="Our Placement Success"
            subtitle="QUASTECH students have transformed their careers by joining top MNCs with lucrative packages and exciting roles."
          /> */}


          {/* 📊 Stats */}
          <div className="mb-8">
            <Subtitle text="Placement Stats at a Glance" />
            <Swiper
              loop
              autoplay={{ delay: 3000 }}
              navigation
              pagination={{ clickable: true }}
              modules={[Autoplay, Navigation, Pagination]}
              className="py-4"
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 16 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 24 },
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

          {/* 🤝 Hiring Partners - 3 Rows with Alternating Animations */}
          <div className="overflow-hidden bg-gradient-to-br from-blue-100 via-slate-100 to-orange-100 rounded-3xl py-12 px-4">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-extrabold">
                <span className="bg-gradient-to-r from-[#6B5B95] via-[#9B6B8F] to-[#8B5A5A] bg-clip-text text-transparent">
                  Associated with 800+ Hiring partners
                </span>
              </h3>
              <div className="mt-2 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500" />
            </div>
            
            {/* Row 1 - Slide Left */}
            <div className="relative overflow-hidden mb-6">
              <motion.div
                className="flex gap-6"
                animate={{ x: [0, -1500] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear",
                  },
                }}
              >
                {/* First set */}
                {partners.slice(0, 6).map((p, i) => (
                  <div
                    key={`row1-set1-${i}`}
                    className="flex-shrink-0 w-48 h-28 flex items-center justify-center rounded-xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 px-6"
                  >
                    <img src={p.logo} alt={p.name} className="max-h-16 max-w-full object-contain" />
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {partners.slice(0, 6).map((p, i) => (
                  <div
                    key={`row1-set2-${i}`}
                    className="flex-shrink-0 w-48 h-28 flex items-center justify-center rounded-xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 px-6"
                  >
                    <img src={p.logo} alt={p.name} className="max-h-16 max-w-full object-contain" />
                  </div>
                ))}
                {/* Third set for extra smoothness */}
                {partners.slice(0, 6).map((p, i) => (
                  <div
                    key={`row1-set3-${i}`}
                    className="flex-shrink-0 w-48 h-28 flex items-center justify-center rounded-xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 px-6"
                  >
                    <img src={p.logo} alt={p.name} className="max-h-16 max-w-full object-contain" />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2 - Slide Right */}
            <div className="relative overflow-hidden mb-6">
              <motion.div
                className="flex gap-6"
                animate={{ x: [-1500, 0] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {/* First set */}
                {partners.slice(3, 9).map((p, i) => (
                  <div
                    key={`row2-set1-${i}`}
                    className="flex-shrink-0 w-48 h-28 flex items-center justify-center rounded-xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 px-6"
                  >
                    <img src={p.logo} alt={p.name} className="max-h-16 max-w-full object-contain" />
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {partners.slice(3, 9).map((p, i) => (
                  <div
                    key={`row2-set2-${i}`}
                    className="flex-shrink-0 w-48 h-28 flex items-center justify-center rounded-xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 px-6"
                  >
                    <img src={p.logo} alt={p.name} className="max-h-16 max-w-full object-contain" />
                  </div>
                ))}
                {/* Third set */}
                {partners.slice(3, 9).map((p, i) => (
                  <div
                    key={`row2-set3-${i}`}
                    className="flex-shrink-0 w-48 h-28 flex items-center justify-center rounded-xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 px-6"
                  >
                    <img src={p.logo} alt={p.name} className="max-h-16 max-w-full object-contain" />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 3 - Slide Left */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: [0, -1500] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {/* First set */}
                {partners.slice(0, 6).map((p, i) => (
                  <div
                    key={`row3-set1-${i}`}
                    className="flex-shrink-0 w-48 h-28 flex items-center justify-center rounded-xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 px-6"
                  >
                    <img src={p.logo} alt={p.name} className="max-h-16 max-w-full object-contain" />
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {partners.slice(0, 6).map((p, i) => (
                  <div
                    key={`row3-set2-${i}`}
                    className="flex-shrink-0 w-48 h-28 flex items-center justify-center rounded-xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 px-6"
                  >
                    <img src={p.logo} alt={p.name} className="max-h-16 max-w-full object-contain" />
                  </div>
                ))}
                {/* Third set */}
                {partners.slice(0, 6).map((p, i) => (
                  <div
                    key={`row3-set3-${i}`}
                    className="flex-shrink-0 w-48 h-28 flex items-center justify-center rounded-xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 px-6"
                  >
                    <img src={p.logo} alt={p.name} className="max-h-16 max-w-full object-contain" />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* View All Partners Button */}
            <div className="text-center mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View All Partners
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Placement;
