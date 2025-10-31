import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  Award,
  Users,
  Target,
  Eye,
  Heart,
  TrendingUp,
  Shield,
  Star,
  Zap,
  Globe,
  BookOpen,
  Trophy,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Rocket,
  Lightbulb,
  HandHeart,
  Clock,
  Code,
  Building2
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BranchSection from "@/components/BranchSection";
import { DarkModeProvider } from "@/contexts/DarkModeContext";

// Company logos for sliding effect
const companyList = [
  { name: "Accenture", logo: "/images/Logo folder/accenture.jpg" },
  { name: "TCS", logo: "/images/Logo folder/tcs.jpg" },
  { name: "Capgemini", logo: "/images/Logo folder/capgemini.jpg" },
  { name: "JustDial", logo: "/images/Logo folder/justdial.jpg" },
  { name: "Mind Gate", logo: "/images/Logo folder/mind gate.jpg" },
  { name: "Infibeam", logo: "/images/Logo folder/infibeam.jpg" },
  { name: "Ingram", logo: "/images/Logo folder/ingram.jpg" },
  { name: "AQM", logo: "/images/Logo folder/AQM_New_Logo.jpg" },
  { name: "Aurion", logo: "/images/Logo folder/Aurion logo.png" },
  { name: "Axioned", logo: "/images/Logo folder/axioned.jpg" },
  { name: "Cybertech", logo: "/images/Logo folder/cybertech.jpg" },
  { name: "GreytHR", logo: "/images/Logo folder/greytrix_logo.jpg" },
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "We've been a trusted name in IT education for over 15 years, consistently delivering quality training and outstanding placement results. Our track record speaks for itself with 40,000+ successful career transformations."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously evolve our curriculum to match industry demands, incorporating cutting-edge technologies and real-world projects. Our teaching methods combine traditional excellence with modern digital learning platforms."
    },
    {
      icon: Heart,
      title: "Student Success",
      description: "Every student matters. We provide personalized attention, dedicated mentorship, and comprehensive support throughout their learning journey. Our 95% placement rate reflects our commitment to student success."
    },
    {
      icon: Target,
      title: "Industry Alignment",
      description: "Our courses are designed in collaboration with industry experts and leading tech companies. We ensure our curriculum stays relevant, practical, and aligned with current market requirements and emerging technologies."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards of educational quality through ISO 9001:2015 certification, continuous improvement processes, and rigorous quality assurance measures. Our commitment to excellence ensures every student receives world-class training."
    }
  ];

  const achievements = [
    { icon: Users, value: "40,000+", label: "Students Trained", description: "Successfully trained and placed" },
    { icon: Building2, value: "800+", label: "Hiring Partners", description: "Trusted companies" },
    { icon: Trophy, value: "95%", label: "Placement Rate", description: "Career success rate" },
    { icon: Clock, value: "15+", label: "Years of Excellence", description: "Industry experience" },
    { icon: Award, value: "19.5 LPA", label: "Highest Package", description: "Top placement offer" },
    { icon: Globe, value: "5", label: "Cities", description: "Pan-India presence" }
  ];

  const whyChooseUs = [
    { icon: BookOpen, title: "Industry-Relevant Curriculum", description: "Updated courses aligned with current market demands and emerging technologies" },
    { icon: Users, title: "Expert Trainers", description: "Learn from industry professionals with 10+ years of real-world experience" },
    { icon: Briefcase, title: "100% Placement Support", description: "Dedicated placement cell with strong connections to top IT companies" },
    { icon: Code, title: "Hands-on Projects", description: "Real-world projects to build your portfolio and gain practical experience" },
    { icon: CheckCircle2, title: "Flexible Learning", description: "Online and offline modes to suit your schedule and learning preference" },
    { icon: Star, title: "Lifetime Support", description: "Continuous mentorship and career guidance even after course completion" }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Foundation",
      description: "QUASTECH was founded with a vision to revolutionize IT education in India, bridging the gap between academic learning and industry requirements.",
      icon: Rocket
    },
    {
      year: "2015",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2015 certification for quality management, establishing our commitment to excellence in education delivery.",
      icon: Shield
    },
    {
      year: "2018",
      title: "Expansion",
      description: "Expanded to multiple cities with state-of-the-art training centers, bringing quality IT education closer to students across India.",
      icon: Globe
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched comprehensive online learning platform during pandemic, ensuring uninterrupted quality education for thousands of students.",
      icon: Zap
    },
    {
      year: "2022",
      title: "10K Students Milestone",
      description: "Celebrated training over 10,000 students, with many securing positions in top-tier companies including Google, Microsoft, Amazon, and TCS.",
      icon: GraduationCap
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as one of India's leading IT training institutes with 40,000+ successful placements and 800+ hiring partners.",
      icon: Star
    }
  ];

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <Header />

        {/* Hero Banner with Gradient Background - Same as ContactPage */}
        <section className="relative px-4 pt-20 md:pt-24 pb-4 md:pb-6 overflow-hidden min-h-[350px] md:min-h-[420px] flex items-center">
          <div className="absolute inset-0 z-0">
            {/* Main Gradient Background - Same as ContactPage */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#f97316]" />
            
            {/* Static Gradient Overlays */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(249, 115, 22, 0.5) 0%, transparent 50%)',
              }} />
            </div>

            {/* Animated Mesh Gradient Overlay */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.4) 0%, transparent 50%), 
                               linear-gradient(225deg, rgba(249, 115, 22, 0.4) 0%, transparent 50%),
                               linear-gradient(45deg, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
            }} />

            {/* Animated Floating Elements */}
            <motion.div
              initial={{ y: 0, x: 0, rotate: 0 }}
              animate={{ 
                y: -20,
                x: 10,
                rotate: 8
              }}
              transition={{ 
                duration: 7, 
                repeat: Infinity,
                repeatType: 'reverse',
                ease: "easeInOut" 
              }}
              className="absolute top-16 left-8 w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ y: 0, x: 0, rotate: 0 }}
              animate={{ 
                y: 20,
                x: -10,
                rotate: -8
              }}
              transition={{ 
                duration: 9, 
                repeat: Infinity,
                repeatType: 'reverse',
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-12 right-8 w-64 h-64 md:w-72 md:h-72 bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ scale: 1, opacity: 0.3 }}
              animate={{ 
                scale: 1.15,
                opacity: 0.4
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                repeatType: 'reverse',
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[450px] md:h-[450px] bg-gradient-to-br from-blue-600/20 to-orange-500/20 rounded-full blur-3xl"
            />
          </div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-4 md:gap-6 items-center py-2">
            {/* Left Side - Text Content with 3D Effects */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              className="space-y-2 md:space-y-3"
            >
              <motion.h1
                className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-2xl mb-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                About Quastech
              </motion.h1>
              
              <motion.p
                className="text-base md:text-lg text-blue-200 leading-snug drop-shadow-lg mb-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Empowering Careers Through Excellence in IT Education
              </motion.p>
              
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-sm md:text-base text-white/90 leading-snug">
                  Since 2010, we've been committed to transforming lives through quality education, industry-relevant training, and unwavering support for student success.
                </p>
                <p className="text-xs md:text-sm text-white/80 leading-snug">
                  QUASTECH (Future Through Innovations) is a leading IT training institute established with the mission "To Provide excellent & smart working professionals to IT industry."
                </p>
              </motion.div>

              {/* Stats Quick View */}
              <motion.div
                className="grid grid-cols-2 gap-2 pt-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {[
                  { value: "40,000+", label: "Students" },
                  { value: "800+", label: "Companies" },
                  { value: "95%", label: "Placement" },
                  { value: "15+", label: "Years" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-2.5 border border-white/20"
                    style={{ transformStyle: 'preserve-3d' }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: -3,
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      transition: { duration: 0.3 }
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                  >
                    <div className="text-lg md:text-xl font-extrabold text-white mb-0.5">{stat.value}</div>
                    <div className="text-xs text-blue-200 font-semibold">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Image with 3D Effects */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <motion.div
                className="relative w-full max-w-md"
                whileHover={{
                  rotateY: -10,
                  rotateX: 5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                animate={{
                  y: -10
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                  }
                }}
              >
                <div className="relative transform rotate-3 border-2 border-blue-400/50 rounded-xl overflow-hidden shadow-xl p-2 bg-gradient-to-br from-blue-500/20 to-transparent backdrop-blur-sm">
                  <img
                    src="/images/big-data-enegenering--training.png"
                    alt="Big Data Engineering Training"
                    className="w-full h-auto object-contain rounded-md max-h-[280px] md:max-h-[320px]"
                    onError={(e) => {
                      e.currentTarget.src = "/images/branches/IMG20240104153417.jpg";
                    }}
                  />
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-blue-600/20 pointer-events-none rounded-md" />
                </div>
                {/* Floating Particles Effect */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-blue-400/40 rounded-full"
                    style={{
                      left: `${20 + i * 20}%`,
                      top: `${15 + (i % 2) * 30}%`,
                    }}
                    animate={{
                      y: -15,
                      opacity: 0.8,
                      scale: 1.3
                    }}
                    transition={{
                      y: {
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        delay: i * 0.2
                      },
                      opacity: {
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        delay: i * 0.2
                      },
                      scale: {
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        delay: i * 0.2
                      }
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Us Section - Left Text, Right Image */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-institute text-center md:text-left">
                About us
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                QUASTECH (Future Through Innovations) is a leading IT training institute established with the mission "To Provide excellent & smart working professionals to IT industry." We specialize in delivering unique and professional training for graduates and postgraduates, focusing on real-time industry training with domain knowledge.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Our training approach is well-organized, systematized, and standardized, ensuring every student receives quality education that prepares them for successful careers in the IT sector. We believe in the overall growth of candidates, combining technical expertise with professional development.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                With specialized and certified faculty for each course, our training is 100% based on current industry requirements and real-time projects. We take pride in our 95% placement rate and strong connections with 800+ hiring companies, helping over 40,000 students achieve their career goals.
              </p>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/about_asset/images/AboutUs_iamge.jpg"
                  alt="Quastech Team"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/images/branches/IMG20240104153417.jpg";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-institute">
                Our Story
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                QUASTECH was founded in 2010 with a simple yet powerful vision: to bridge the gap between academic learning and industry requirements. We recognized that traditional education often falls short in preparing students for real-world challenges in the rapidly evolving IT landscape.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Over the years, we've evolved from a small training center to one of India's most trusted IT education institutes. Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep understanding of industry needs.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Today, we take pride in our alumni network of over <span className="text-blue-600 font-bold">40,000+ professionals</span> working in leading companies worldwide. Their success is a testament to our dedication and the quality of education we provide. From fresh graduates to career switchers, we've been the catalyst for thousands of successful career transformations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Values Section - Reorganized Layout */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="heading-institute mb-4">
                Our Values
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column - Values Grid (First 3 cards) */}
              <div className="grid grid-cols-1 gap-8">
                {values.slice(0, 3).map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-blue-50 rounded-xl p-6 border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#19376D] mb-3">{value.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Column - Image at Top, Cards Below */}
              <div className="space-y-8">
                {/* Top Image */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="relative transform rotate-3 md:rotate-6 border-2 border-blue-600 rounded-lg overflow-hidden shadow-2xl p-2 bg-gradient-to-br from-blue-50 to-transparent">
                    <img
                      src="/assets/about_asset/images/Main_About.jpg"
                      alt="Quastech Values"
                      className="w-full h-auto object-cover rounded"
                      onError={(e) => {
                        e.currentTarget.src = "/images/branches/IMG20240104153434.jpg";
                      }}
                    />
                  </div>
                </motion.div>

                {/* Remaining Value Cards Below Image (2 cards) */}
                <div className="grid grid-cols-1 gap-8">
                  {values.slice(3, 5).map((value, index) => (
                    <motion.div
                      key={index + 3}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index + 3) * 0.1, duration: 0.6 }}
                      className="bg-blue-50 rounded-xl p-6 border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0">
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-[#19376D] mb-3">{value.title}</h3>
                          <p className="text-gray-700 leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="heading-institute mb-4">
                Why Choose Quastech?
              </h2>
              <p className="section-subtitle">
                What makes us stand out from the rest
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#19376D] mb-3">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Grid */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="heading-institute mb-4">
                Our Achievements
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#f6f8fa] rounded-xl p-6 text-center border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-extrabold text-[#19376D] mb-2">{achievement.value}</div>
                  <div className="text-sm font-bold text-gray-700 mb-1">{achievement.label}</div>
                  <div className="text-xs text-gray-600">{achievement.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="heading-institute mb-4">
                Our Journey
              </h2>
              <p className="section-subtitle">Key milestones that shaped our success</p>
            </motion.div>

            <div className="relative max-w-5xl mx-auto pl-4 md:pl-0">
              {/* Vertical Timeline Line with Gentle Curve */}
              <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1">
                <svg className="w-full h-full" viewBox="0 0 4 1200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="journeyTimelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#60A5FA" />
                    </linearGradient>
                  </defs>
                  {/* Gentle S-curve path */}
                  <path
                    d="M 2 0 Q 4 150 2 300 T 2 600 T 2 900 T 2 1200"
                    stroke="url(#journeyTimelineGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Timeline Items */}
              <div className="space-y-12 md:space-y-16 relative">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="relative flex items-start gap-6 md:gap-8"
                  >
                    {/* Timeline Node (Circle) */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-4 border-blue-500 shadow-lg flex items-center justify-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                          <milestone.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                      </div>
                      {/* Year Badge */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap">
                        {milestone.year}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-white rounded-xl p-6 md:p-8 border border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all mt-2">
                      <h3 className="text-xl md:text-2xl font-bold text-[#19376D] mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Hiring Partners - Sliding Company Logos */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="heading-institute-lg mb-4">Our Hiring Partners</h2>
              <p className="section-subtitle text-center">Organizations around the globe trusting our Learners technical skills and hiring them with good payscale</p>
            </motion.div>
            
            {/* First Row - Sliding from Right to Left */}
            <div className="overflow-hidden mb-6">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: ['0%', '-50%']
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 30,
                    ease: 'linear'
                  }
                }}
              >
                {/* Duplicate the logos for seamless loop */}
                {[...companyList.slice(0, 6), ...companyList.slice(0, 6)].map((company, i) => (
                  <div
                    key={`first-${i}`}
                    className="flex-shrink-0 w-48 md:w-56 lg:w-64"
                  >
                    <motion.div
                      className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all border border-gray-100 flex items-center justify-center h-24"
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <img src={company.logo} alt={company.name} className="max-w-full max-h-full object-contain" />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Second Row - Sliding from Left to Right */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: ['-50%', '0%']
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 30,
                    ease: 'linear'
                  }
                }}
              >
                {/* Duplicate the logos for seamless loop */}
                {[...companyList.slice(6, 12), ...companyList.slice(6, 12)].map((company, i) => (
                  <div
                    key={`second-${i}`}
                    className="flex-shrink-0 w-48 md:w-56 lg:w-64"
                  >
                    <motion.div
                      className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all border border-gray-100 flex items-center justify-center h-24"
                      whileHover={{ scale: 1.05, rotateY: -5 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <img src={company.logo} alt={company.name} className="max-w-full max-h-full object-contain" />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 text-center"
            >
              <div className="inline-flex gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">800+</div>
                  <div className="text-gray-600">Companies partnered with us</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">8k+</div>
                  <div className="text-gray-600">Learners already placed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-orange-900/20"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of successful professionals who started their journey with QUASTECH
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Enroll Now
                </motion.a>
                <motion.a
                  href="/placement"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
                >
                  View Placements
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Branches Section */}
        <BranchSection />

        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default AboutPage;
