import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { User, Mail, Phone, Send, Star, Award, Users, TrendingUp, Download, ArrowRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import BrochureModal from "./BrochureModal";

const HeroBackground = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
    {/* Professional Hero Gradient */}
    <div className="absolute inset-0 bg-gradient-hero" />
    
    {/* Professional Mesh Overlay */}
    <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
    
    {/* Subtle Grid Pattern */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
    
    {/* Professional Floating Elements */}
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  </div>
);

// Dark Professional Floating Elements Component
const FloatingElements = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Dark Professional Geometric Shapes */}
    <motion.div
      className="absolute top-20 left-10 w-10 h-10 border border-purple-400/40 rounded-lg"
      animate={{
        rotate: [0, 360],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    
    <motion.div
      className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full"
      animate={{
        y: [0, -15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    
    <motion.div
      className="absolute bottom-40 left-20 w-12 h-12 border border-orange-400/30 rounded-full"
      animate={{
        rotate: [0, -360],
        scale: [1, 0.9, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    
    {/* Subtle Glowing Lines */}
    <motion.div
      className="absolute top-60 right-40 w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
      animate={{
        scaleX: [0, 1, 0],
        opacity: [0, 0.8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: 1,
      }}
    />
    
    <motion.div
      className="absolute bottom-60 left-40 w-20 h-0.5 bg-gradient-to-r from-transparent via-orange-400/40 to-transparent"
      animate={{
        scaleX: [0, 1, 0],
        opacity: [0, 0.8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: 2,
      }}
    />
  </div>
);

// Company Logos Component with Auto-sliding Animation
const CompanyLogos = () => {
  const companies = [
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

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mb-6 sm:mb-8 w-full"
      >
        <div className="overflow-hidden w-full">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              },
            }}
            className="flex gap-4 sm:gap-6 lg:gap-8 w-max"
          >
            {[...companies, ...companies].map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                className="flex items-center justify-center rounded-lg sm:rounded-xl lg:rounded-2xl bg-white border border-gray-200 hover:border-orange-400/50 transition-all duration-700 min-w-[100px] sm:min-w-[120px] lg:min-w-[150px] h-14 sm:h-16 lg:h-20 px-3 sm:px-4 lg:px-6 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 flex-shrink-0"
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="max-h-10 sm:max-h-12 lg:max-h-16 max-w-[80px] sm:max-w-[100px] lg:max-w-[130px] object-contain transition-all duration-700 filter hover:brightness-110"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your info has been sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden text-white"
    >
      <HeroBackground />
      <FloatingElements />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-center min-h-[75vh]">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-1 w-full"
            >
              <div className="mb-4">
                <h1 className="heading-institute mb-3 text-white leading-tight">
                  <TypeAnimation
                    sequence={[
                      'Trusted and Renowned Training Institute',
                      2000,
                      'Launch Your Tech Career',
                      2000,
                      'Build Your Future',
                      2000,
                      'Transform Your Life',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    deletionSpeed={30}
                    repeat={Infinity}
                    className="block"
                    cursor={true}
                    preRenderFirstString={true}
                  />
                </h1>
                <div className="text-sm sm:text-base max-w-lg mx-auto lg:mx-0 font-medium text-white/90 min-h-[40px] sm:min-h-[45px] flex items-center justify-center lg:justify-start">
                  <TypeAnimation
                    sequence={[
                      'Learn, build, and grow with guidance from industry experts.',
                      3000,
                      'We help you gain confidence, skills, and your dream job!',
                      3000,
                      'Transform your career with industry-ready skills.',
                      3000,
                      'Join thousands of successful graduates.',
                      3000,
                    ]}
                    wrapper="span"
                    speed={60}
                    deletionSpeed={40}
                    repeat={Infinity}
                    className="block text-center lg:text-left"
                    cursor={true}
                    preRenderFirstString={true}
                  />
                </div>
              </div>

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { title: "Placement", icon: Users, color: "from-blue-500 to-cyan-500" },
                  { title: "ISO Certified", icon: Award, color: "from-orange-500 to-red-500" },
                  { title: "Industrial Based Training", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
                  { title: "EMI Option", icon: Star, color: "from-purple-500 to-pink-500" },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-3 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                        <feature.icon className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-xs font-semibold text-white">{feature.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsModalOpen(true)}
                  className="relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all text-white font-semibold rounded-xl px-6 py-3 shadow-lg hover:shadow-xl text-base overflow-hidden group flex items-center justify-center gap-2"
              >
                  <Download className="w-5 h-5" />
                  <span className="relative z-10">Download</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all text-white font-semibold rounded-xl px-6 py-3 shadow-lg hover:shadow-xl text-base overflow-hidden group flex items-center justify-center gap-2"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span className="relative z-10">Know More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </motion.button>
              </div>

            </motion.div>

            {/* RIGHT SIDE — PROFESSIONAL FORM CARD */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex flex-col items-center justify-center order-1 lg:order-2 w-full"
            >
              {/* Professional Form Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="w-full max-w-md bg-white/95 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl overflow-hidden"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Form Header */}
                <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500 p-6 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">Get Started</h3>
                    <p className="text-white/90 text-sm">
                      Fill the form to get started
                </p>
              </motion.div>
                </div>

                {/* Form Content */}
                <div className="p-6 bg-white">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {[
                      { id: "phone", type: "tel", placeholder: "Enter 10-digit Mobile Number", icon: Phone, label: "Mobile Number" },
                      { id: "name", type: "text", placeholder: "Your Full Name", icon: User, label: "Full Name" },
                      { id: "email", type: "email", placeholder: "yourname@gmail.com", icon: Mail, label: "Email Address" },
                ].map((field, index) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="space-y-2"
                      >
                        <label className="block text-gray-700 text-sm font-semibold">
                          {field.label} <span className="text-orange-500">*</span>
                        </label>
                        <div className="relative group">
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center shadow-sm">
                            <field.icon className="w-3 h-3 text-white" />
                        </div>
                        <input
                          type={field.type}
                          id={field.id}
                          value={formData[field.id]}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, [field.id]: e.target.value }))
                          }
                          required
                          placeholder={field.placeholder}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 font-medium"
                        />
                    </div>
                  </motion.div>
                ))}

                    {/* Professional Submit Button */}
                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 hover:from-orange-600 hover:via-orange-700 hover:to-red-600 font-bold text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative"
                    >
                      <Send className="w-5 h-5" />
                      <span>Get Started Now</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </motion.button>
              </form>

                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Company Logos at Bottom of Hero Section */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <CompanyLogos />
        </div>
      </div>


      <BrochureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        brochureUrl="/Quastech-Course-Brochure.pdf"
        brochureImageUrl="/images/brochure-preview.jpg"
        whatsappNumber="+919876543210"
      />
    </section>
  );
}
