import { motion } from "framer-motion";
import React from "react"; // Import React for useMemo
import {
  Award,
  Users,
  Globe,
  BookOpen,
  Trophy,
  GraduationCap,
  DollarSign,
  Monitor,
  UserCheck,
  FolderOpen,
  Presentation,
  Briefcase,
  HeadphonesIcon,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Cpu,
  Server,
  Database,
  Cloud,
  Code,
  ShieldCheck,
  GitBranch,
  Layers,
  Sparkles,
} from "lucide-react";

// --- Reusable Marquee Component (animation speed is now faster) ---

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: "normal" | "slow" | "fast";
}

const Marquee = ({
  children,
  direction = "left",
  speed = "normal",
}: MarqueeProps) => {
  const duration =
    speed === "slow" ? 45 : speed === "fast" ? 12 : 25;

  // Create enough duplicates to ensure seamless loop - more duplicates for smoother animation
  const duplicatedChildren = React.useMemo(() => [
    children, children, children, children, children, children, children, children, children, children
  ], [children]);

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex"
        animate={{
          x: direction === "left" ? [0, "-100%"] : [0, "100%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
      >
        {duplicatedChildren.map((child, index) => (
          <React.Fragment key={index}>{child}</React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};


// --- Main About Component ---

const About = () => {
  // --- Data Arrays (unchanged) ---
  const whyUsFeatures = [
    { icon: GraduationCap, title: "Industry Requirement", description: "Industry-focused syllabus with practical approach and latest technologies.", color: "from-blue-500 to-indigo-600" },
    { icon: DollarSign, title: "Cost Effective", description: "Affordable fees with high-quality training and industry-relevant content.", color: "from-green-500 to-teal-600" },
    { icon: Monitor, title: "Online/Offline Training", description: "Flexible learning options with expert instructors and hands-on projects.", color: "from-orange-500 to-pink-600" },
    { icon: UserCheck, title: "Expert Trainer", description: "Experienced mentors guiding students with real industry insights.", color: "from-purple-500 to-fuchsia-600" },
    { icon: FolderOpen, title: "Projects & Assessment", description: "Real-world projects & assessments to sharpen skills and build portfolios.", color: "from-cyan-500 to-blue-600" },
    { icon: Presentation, title: "Guest Lecture", description: "Sessions by industry professionals sharing valuable insights & case studies.", color: "from-indigo-500 to-pink-500" },
    { icon: Briefcase, title: "Placement", description: "Strong placement support with resume building & HR interview prep.", color: "from-emerald-500 to-cyan-600" },
    { icon: HeadphonesIcon, title: "Continuous Support", description: "Lifetime support, mentorship, and guidance even after placement.", color: "from-rose-500 to-red-600" },
  ];
  // const achievements = [
  //   { icon: Users, value: "5000+", label: "Students Trained", color: "from-blue-500 to-cyan-500" },
  //   { icon: Award, value: "95%", label: "Placement Rate", color: "from-emerald-500 to-teal-500" },
  //   { icon: Globe, value: "500+", label: "Company Partners", color: "from-purple-500 to-pink-500" },
  //   { icon: BookOpen, value: "20+", label: "Courses Offered", color: "from-orange-500 to-red-500" }
  // ];
  const milestones = [
    { year: "2015", event: "QUASTECH Founded", description: "Started with a vision to transform IT education", icon: Star },
    { year: "2017", event: "ISO 9001:2015 Certified", description: "Achieved international quality standards", icon: Shield },
    { year: "2019", event: "First 1000 Placements", description: "Reached the milestone of 1000 successful placements", icon: Trophy },
    { year: "2021", event: "Online Learning Platform", description: "Launched comprehensive online learning platform", icon: Monitor },
    { year: "2023", event: "AI-Powered Courses", description: "Introduced cutting-edge AI and ML courses", icon: Zap },
    { year: "2024", event: "5000+ Alumni Network", description: "Built a strong network of successful professionals", icon: TrendingUp },
  ];
  const techCards = [
    { 
      icon: Cpu, 
      label: "Core Java", 
      logo: "/coursesicons/html.jpg", 
      color: "from-orange-500 to-orange-600",
      description: "Object-oriented programming"
    },
    { 
      icon: Database, 
      label: "SQL", 
      logo: "/coursesicons/mysql.jpg", 
      color: "from-blue-500 to-blue-600",
      description: "Database management"
    },
    { 
      icon: Layers, 
      label: "Spring Boot", 
      logo: "/coursesicons/django.jpg", 
      color: "from-green-500 to-green-600",
      description: "Enterprise applications"
    },
    { 
      icon: Server, 
      label: "Microservices", 
      logo: "/coursesicons/bootstrap.jpg", 
      color: "from-purple-500 to-purple-600",
      description: "Scalable architecture"
    },
    { 
      icon: Cloud, 
      label: "Cloud AWS", 
      logo: "/coursesicons/css.jpg", 
      color: "from-yellow-500 to-orange-500",
      description: "Cloud computing"
    },
    { 
      icon: ShieldCheck, 
      label: "Cyber Security", 
      logo: "/coursesicons/jquery.jpg", 
      color: "from-red-500 to-red-600",
      description: "Security protocols"
    },
    { 
      icon: GitBranch, 
      label: "DevOps", 
      logo: "/coursesicons/python.jpg", 
      color: "from-indigo-500 to-indigo-600",
      description: "Development operations"
    },
    { 
      icon: Code, 
      label: "Web UI", 
      logo: "/coursesicons/html.jpg", 
      color: "from-cyan-500 to-cyan-600",
      description: "User interface design"
    },
  ];
  const topRow = techCards.slice(0, 4);
  const bottomRow = techCards.slice(4, 8);

  // --- Enhanced Reusable Components ---
  const Card = ({
    children, className = "", ...props
  }: {
    children: React.ReactNode; className?: string; [key: string]: any;
  }) => (
    <motion.div
      whileHover={{ 
        y: -15, 
        scale: 1.02,
        rotateX: 5,
        rotateY: 2,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 25,
          duration: 0.4
        }
      }}
      whileTap={{ scale: 0.98 }}
      className={`relative rounded-2xl border border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl overflow-hidden group transition-all duration-500 ${className}`}
      {...props}
    >
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/5 to-slate-100/20 group-hover:from-blue-50/30 group-hover:via-white/20 group-hover:to-orange-50/30 transition-all duration-700"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            delay: 0.5 
          }}
        />
        <motion.div
          className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-orange-400 rounded-full"
          animate={{ 
            y: [0, -8, 0],
            opacity: [0, 1, 0],
            scale: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            delay: 1 
          }}
        />
      </div>
      
      {children}
    </motion.div>
  );

  const CardContent = ({ children }: { children: React.ReactNode }) => (
    <div className="p-6 md:p-8 relative z-10 flex flex-col h-full">{children}</div>
  );
  
  // --- Simple Animation Variants for Single Line Animation ---
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.0, 
        ease: "easeOut",
        staggerChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut"
      } 
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <section id="about" className="relative py-8 md:py-12 overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* --- Sections are now responsive --- */}

          {/* UNIFIED HERO SECTION */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="section-header"
          >
             <motion.div
                variants={itemVariants}
                className="hero-badge"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Award className="w-5 h-5" />
                </motion.div>
                <span>ABOUT QUASTECH</span>
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="heading-institute"
              >
                Leading the Future of IT Education
              </motion.h1>
              <div className="section-divider" />
              <motion.p
                variants={itemVariants}
                className="section-subtitle"
              >
                Since 2015, QUASTECH has been at the forefront of IT education, transforming lives and careers through innovative learning experiences.
              </motion.p>
          </motion.div>

          {/* About Quastech - Image and Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="/images/Why US.png"
                    alt="Why Choose Quastech"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
                </motion.div>
              </motion.div>

              {/* Right Side - Description */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-[#6B5B95] via-[#9B6B8F] to-[#8B5A5A] bg-clip-text text-transparent">
                      About QUASTECH
                    </span>
                  </h2>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mb-6" />
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    <strong className="text-blue-600">Quastech (Future Through Innovations)</strong> established by <strong>Mrs. Navdeep Kaur</strong> with the motive <em className="text-orange-600">"To Provide excellent & smart working professional to IT industry"</em> Candidate who has an excellent command of Software Technology.
                  </p>

                  <p className="text-lg">
                    Quastech conducts unique and professional training for graduates and postgraduates, we are specialized in real-time industry training with the added advantage of domain knowledge. We believe in well-organized, Systematized and Standardized training.
                  </p>

                  <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 mt-6">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Award className="w-6 h-6 text-blue-600" />
                      <span className="bg-gradient-to-r from-[#6B5B95] via-[#9B6B8F] to-[#8B5A5A] bg-clip-text text-transparent">
                        SPECIALITY
                      </span>
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="text-gray-700">Specialized and certified Faculty for each course.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="text-gray-700">Training is 100% based on current industry requirements and real-time projects.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="text-gray-700">Apart from technical knowledge, Quastech believes in the overall growth of the candidates.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* UNIFIED WHY US SECTION */}
          <div className="section-unified">
            <div className="section-header">
              <div className="hero-badge">
                <Sparkles className="w-5 h-5" />
                <span>WHY CHOOSE US</span>
              </div>
              <h2 className="heading-institute">
                Why Choose QUASTECH
              </h2>
              <div className="section-divider" />
              <p className="section-subtitle">
                Discover what makes QUASTECH the preferred choice for ambitious professionals
              </p>
            </div>
            {/* UNIFIED GRID LAYOUT - Why Choose Us */}
            <div className="grid-features">
              {whyUsFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group cursor-pointer"
                  whileHover={{ 
                    y: -10,
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 2,
                    transition: { 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20,
                      duration: 0.3
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="card-unified hover-lift">
                    <div className="card-content h-full flex flex-col items-center text-center">
                      <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      
                      <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300">
                        {feature.description}
                      </p>
                      
                      <div className="w-0 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mt-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-24">
            {achievements.map((achievement, index) => (
              <Card key={achievement.label} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={achievementCardVariants}>
                <CardContent className="text-center">
                  <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }} className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${achievement.color} p-3 md:p-4 mx-auto mb-4 md:mb-6 shadow-lg`}>
                    <achievement.icon className="w-full h-full text-white" />
                  </motion.div>
                  <div className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    {achievement.value}
                  </div>
                  <div className="text-sm md:text-base text-slate-600 font-medium">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div> */}
          
          {/* Enhanced Technologies Section */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-8 md:py-12"
          >
            <motion.div variants={itemVariants} className="section-header">
              <h2 className="heading-institute-lg">
                Technologies We Master
              </h2>
              <p className="section-subtitle">
                Our curriculum is built on the most in-demand technologies in the industry.
              </p>
            </motion.div>
            
            {/* Continuous Advertisement-Style Animation */}
            <div className="relative overflow-hidden py-4">
              <motion.div
                className="flex gap-4 md:gap-6 lg:gap-8"
                animate={{ 
                  x: [0, -1000] 
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                    repeatType: "loop"
                  }
                }}
                style={{ width: "max-content" }}
              >
                {/* First set of cards */}
                {techCards.map((card, index) => (
                  <div
                    key={`set1-${index}`}
                    className="flex-shrink-0 w-24 sm:w-28 lg:w-32"
                  >
                    <div className={`w-full h-20 sm:h-24 lg:h-28 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center shadow-lg hover:shadow-2xl relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105`}>
                      <img 
                        src={card.logo} 
                        alt={card.label}
                        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                      />
                      <card.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white relative z-10 drop-shadow-lg" />
                    </div>
            </div>
                ))}
                
                {/* Second set of cards for seamless loop */}
                {techCards.map((card, index) => (
                  <div
                    key={`set2-${index}`}
                    className="flex-shrink-0 w-24 sm:w-28 lg:w-32"
                  >
                    <div className={`w-full h-20 sm:h-24 lg:h-28 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center shadow-lg hover:shadow-2xl relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105`}>
                      <img 
                        src={card.logo} 
                        alt={card.label}
                        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                      />
                      <card.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white relative z-10 drop-shadow-lg" />
                    </div>
                  </div>
                ))}
                
                {/* Third set for extra smoothness */}
                {techCards.map((card, index) => (
                  <div
                    key={`set3-${index}`}
                    className="flex-shrink-0 w-24 sm:w-28 lg:w-32"
                  >
                    <div className={`w-full h-20 sm:h-24 lg:h-28 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center shadow-lg hover:shadow-2xl relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105`}>
                      <img 
                        src={card.logo} 
                        alt={card.label}
                        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                      />
                      <card.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white relative z-10 drop-shadow-lg" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline Section (already responsive) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          >
            {/* ... Your original Timeline content ... */}
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default About;