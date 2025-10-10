import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Briefcase, Users, Star, Globe } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 🔹 Type Definitions
type Placement = {
  role: string;
  company: string;
  package: string;
  icon: string;
  description: string;
};

type Stat = {
  icon: React.ElementType;
  value: string;
  label: string;
};

type Partner = {
  name: string;
  logo: string;
};

// 🔹 Success Stories
const placements: Placement[] = [
  {
    role: "Full Stack Developer",
    company: "Google",
    package: "₹24 LPA",
    icon: "👨‍💻",
    description: "Worked on scalable web apps and cloud-based solutions.",
  },
  {
    role: "AI/ML Engineer",
    company: "Amazon",
    package: "₹18 LPA",
    icon: "🤖",
    description: "Creating AI-driven recommendation systems at scale.",
  },
  {
    role: "Cyber Security Specialist",
    company: "Accenture",
    package: "₹12 LPA",
    icon: "🛡️",
    description: "Protecting digital assets with advanced security measures.",
  },
  {
    role: "Data Analyst",
    company: "TCS",
    package: "₹8 LPA",
    icon: "📊",
    description: "Building business insights from massive datasets.",
  },
  {
    role: "Software Engineer",
    company: "Infosys",
    package: "₹6.5 LPA",
    icon: "💻",
    description: "Developing enterprise applications for global clients.",
  },
  {
    role: "Cloud Engineer",
    company: "Microsoft",
    package: "₹20 LPA",
    icon: "☁️",
    description: "Managed and deployed cloud infrastructure on Azure.",
  },
  {
    role: "UI/UX Designer",
    company: "Deloitte",
    package: "₹10 LPA",
    icon: "🎨",
    description: "Designing intuitive user interfaces for financial products.",
  },
];

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
  return (
    <>
      <style jsx global>{`
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
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(calc(-100% + 420px));
          }
        }

        .animate-scroll-vertical {
          animation: scroll-vertical 40s linear infinite;
        }

        .group:hover .animate-scroll-vertical {
          animation-duration: 70s; /* slow down on hover */
        }
      `}</style>

      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading
            title="Our Placement Success"
            subtitle="QUASTECH students have transformed their careers by joining top MNCs with lucrative packages and exciting roles."
          />

          {/* 🎓 Success Stories */}
          <div className="mb-20">
            <Subtitle text="Recent Success Stories" />
            {/* Desktop */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
              {[0, 1, 2].map((colIndex) => (
                <Swiper
                  key={colIndex}
                  direction="vertical"
                  slidesPerView={1}
                  loop
                  autoplay={{
                    delay: 2000 + colIndex * 500,
                    reverseDirection: colIndex === 1,
                  }}
                  modules={[Autoplay]}
                  className="h-[380px]"
                >
                  {placements.map((p, i) => (
                    <SwiperSlide key={`${colIndex}-${i}`}>
                      <Card>
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#3154a6] to-[#f15a29] shadow-lg text-3xl">
                            {p.icon}
                          </div>
                          <h3 className="text-xl font-bold text-slate-800">{p.role}</h3>
                          <p className="text-slate-600">{p.company}</p>
                          <span className="mt-2 text-[#3154a6] font-semibold">{p.package}</span>
                          <p className="mt-4 text-slate-500 text-sm leading-relaxed">{p.description}</p>
                        </div>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ))}
            </div>
            {/* Mobile */}
            <div className="block md:hidden">
              <Swiper
                slidesPerView={1.2}
                spaceBetween={20}
                centeredSlides
                loop
                autoplay={{ delay: 2500 }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
              >
                {placements.map((p, i) => (
                  <SwiperSlide key={i}>
                    <div className="h-[380px] py-4">
                      <Card>
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#3154a6] to-[#f15a29] shadow-lg text-3xl">
                            {p.icon}
                          </div>
                          <h3 className="text-xl font-bold text-slate-800">{p.role}</h3>
                          <p className="text-slate-600">{p.company}</p>
                          <span className="mt-2 text-[#3154a6] font-semibold">{p.package}</span>
                          <p className="mt-4 text-slate-500 text-sm leading-relaxed">{p.description}</p>
                        </div>
                      </Card>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

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
            <Subtitle text="Our Esteemed Hiring Partners" />
            <div className="relative h-[420px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
              <motion.div className="flex flex-col gap-8 animate-scroll-vertical">
                {partners.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center p-4 rounded-xl bg-white/70 border border-slate-200/80 shadow-sm h-28 grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="max-h-20 object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Placement;
