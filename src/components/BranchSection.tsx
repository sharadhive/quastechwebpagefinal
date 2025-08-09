import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { MapPin, Phone, Mail, Navigation, Building2 } from "lucide-react";

const branchesData = [
  {
    id: "Thane",
    name: "Thane Branch",
    address:
      "201, Anant Laxmi Chambers, Dada Patil Marg, opp. Waman Hari Pethe Jewellers, Thane (W), Maharashtra 400602",
    phone: "+91 8422800381",
    email: "info@quastech.in",
    map: "https://g.page/Itvedant?share",
    images: [
      "/public/assets/images/branches/IMG20240104153417.jpg",
      "/public/assets/images/branches/IMG20240104153434.jpg",
      "/public/assets/images/branches/IMG20240104153417.jpg",
      "/public/assets/images/branches/IMG20240104153417.jpg"
    ]
  },
  {
    id: "Borivali",
    name: "Borivali Branch",
    address:
      "A/401, Court Chamber, Swami Vivekananda Rd, opp. Moksh Plaza, Borivali West, Maharashtra 400092",
    phone: "+91 8422800384/81",
    email: "info@quastech.in",
    map: "https://g.page/Itvedant?share",
    images: [
      "/public/assets/images/branches/IMG20240104153526.jpg",
      "/public/assets/images/branches/IMG20240104153417.jpg",
      "/public/assets/images/branches/IMG20240104153638.jpg",
      "/public/assets/images/branches/IMG20240104153417.jpg"
    ]
  },
  {
    id: "Vashi",
    name: "vashi Branch",
    address:
      "Corporate Wing, Haware Fantasia Business Park, F-185(A, behind Inorbit Mall, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
    phone: "+91 8422800384/81",
    email: "info@quastech.in",
    map: "https://g.page/Itvedant?share",
    images: [
      "/public/assets/images/branches/IMG20240104153526.jpg",
      "/public/assets/images/branches/IMG20240104153417.jpg",
      "/public/assets/images/branches/IMG20240104153638.jpg",
      "/public/assets/images/branches/IMG20240104153417.jpg"
    ]
  },
  {
    id: "Mohali",
    name: "Mohali Branch",
    address:
      "SCF 62, Third Floor, Phase 7, Sector 61, Sahibzada Ajit Singh Nagar, Punjab 160062",
    phone: "+91 72080 08461/62",
    email: "info@quastech.in",
    map: "https://g.page/Itvedant?share",
    images: [
      "/public/assets/images/branches/mohali/20240104_154224.jpg",
      "/public/assets/images/branches/mohali/20240104_154237.jpg",
      "/public/assets/images/branches/mohali/20240104_154314.jpg",
      "/public/assets/images/branches/mohali/20240104_154424.jpg"
    ]
  }
];

const BranchSection = () => {
  const [selectedBranch, setSelectedBranch] = useState("Thane");
  const [isAnimating, setIsAnimating] = useState(false);

  const currentBranch = branchesData.find((b) => b.id === selectedBranch);

  const handleBranchChange = (branchId: string) => {
    if (branchId !== selectedBranch) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedBranch(branchId);
        setIsAnimating(false);
      }, 150);
    }
  };

  return (
    <section id="branches" className="relative bg-gradient-to-br from-background via-background to-accent/5 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-brand-orange rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 p-3 bg-brand-blue/10 rounded-full">
            <Building2 className="w-6 h-6 text-brand-blue" />
            <span className="text-brand-blue font-medium text-sm uppercase tracking-wider">Our Locations</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-brand-blue mb-4 tracking-tight">
            Our Branches
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-orange mx-auto rounded-full"></div>
        </div>

        {/* Enhanced Branch Selector Tabs */}
        <div className="flex justify-center mb-12">
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-white/20">
            <div className="flex gap-2 relative">
              {branchesData.map((branch, index) => (
                <button
                  key={branch.id}
                  onClick={() => handleBranchChange(branch.id)}
                  className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-500 transform ${
                    selectedBranch === branch.id
                      ? "bg-gradient-to-r from-brand-blue to-brand-blue-light text-orange shadow-2xl scale-105 z-10"
                      : "text-muted-foreground hover:text-brand-blue hover:bg-white/50 hover:scale-102"
                  }`}
                >
                  <span className="relative z-10">{branch.id}</span>
                  {selectedBranch === branch.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-blue-light rounded-xl animate-pulse opacity-20"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Main Content */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 transition-all duration-500 ${isAnimating ? 'opacity-50 transform scale-95' : 'opacity-100 transform scale-100'}`}>
          {/* Enhanced Left Column - Branch Information */}
          <div className="space-y-8 transform transition-all duration-700 hover:scale-105">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue/20 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-blue-light rounded-2xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-brand-blue">
                  {currentBranch?.name}
                </h3>
              </div>
              
              {/* Enhanced Address */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-accent/20 rounded-2xl">
                  <MapPin className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {currentBranch?.address}
                  </p>
                </div>
              </div>

              {/* Enhanced Contact Information */}
              <div className="grid grid-cols-1 gap-4 mt-8">
                {/* Phone */}
                <a
                  href={`tel:${currentBranch?.phone}`}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-brand-blue/5 to-transparent rounded-xl hover:from-brand-blue/10 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-5 h-5 text-brand-blue group-hover:text-white" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-brand-blue font-medium">
                    {currentBranch?.phone}
                  </span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${currentBranch?.email}`}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-brand-orange/5 to-transparent rounded-xl hover:from-brand-orange/10 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-5 h-5 text-brand-orange group-hover:text-white" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-brand-orange font-medium">
                    {currentBranch?.email}
                  </span>
                </a>
              </div>

              {/* Enhanced Get Direction Link */}
              <div className="mt-8">
                <a
                  href={currentBranch?.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-blue-light text-blue rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold group"
                >
                  <Navigation className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Get Direction</span>
                  <div className="w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Right Column - Image Carousel */}
          <div className="relative transform transition-all duration-700 hover:scale-105">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
              {/* Gradient Overlay */}
              {/* <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-brand-blue/20 to-transparent z-10 pointer-events-none"></div> */}
              
              <Swiper
                pagination={{ 
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet !bg-white/50 !opacity-70 !border-2 !border-brand-blue/30',
                  bulletActiveClass: 'swiper-pagination-bullet-active !bg-brand-blue !opacity-100 !scale-125'
                }}
                modules={[Pagination, Autoplay]}
                className="branch-swiper"
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                spaceBetween={0}
                slidesPerView={1}
              >
                {currentBranch?.images.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="aspect-[4/3] w-full overflow-hidden relative group">
                      <img
                        src={src}
                        alt={`${currentBranch.name} ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      {/* Subtle overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      
                      {/* Image Counter */}
                      <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {idx + 1} / {currentBranch.images.length}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Swiper Styles */}
      <style>{`
        .branch-swiper .swiper-pagination {
          bottom: 24px !important;
          text-align: center;
        }
        .branch-swiper .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          border-radius: 50% !important;
        }
        .branch-swiper .swiper-pagination-bullet-active {
          transform: scale(1.25) !important;
          box-shadow: 0 0 20px rgba(59, 85, 162, 0.6) !important;
        }
        
        /* Custom scrollbar for webkit browsers */
        .branch-swiper::-webkit-scrollbar {
          display: none;
        }
        
        /* Hover scale animation */
        .hover-scale-102:hover {
          transform: scale(1.02);
        }
        
        /* Custom shadow classes */
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        
        /* Glassmorphism effect */
        .backdrop-blur-sm {
          backdrop-filter: blur(8px);
        }
      `}</style>
    </section>
  );
};

export default BranchSection;