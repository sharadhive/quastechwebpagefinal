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
  // --- SPEED CHANGE HERE ---
  // Reduced duration values for a faster animation loop.
  const duration =
    speed === "slow" ? 45 : speed === "fast" ? 12 : 25;

  const marqueeVariants = {
    animate: {
      x: direction === "left" ? "-50%" : "0%",
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        },
      },
    },
  };

  const duplicatedChildren = React.useMemo(() => [children, children], [children]);

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex"
        variants={marqueeVariants}
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate="animate"
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
  const achievements = [
    { icon: Users, value: "5000+", label: "Students Trained", color: "from-blue-500 to-cyan-500" },
    { icon: Award, value: "95%", label: "Placement Rate", color: "from-emerald-500 to-teal-500" },
    { icon: Globe, value: "500+", label: "Company Partners", color: "from-purple-500 to-pink-500" },
    { icon: BookOpen, value: "20+", label: "Courses Offered", color: "from-orange-500 to-red-500" }
  ];
  const milestones = [
    { year: "2015", event: "QUASTECH Founded", description: "Started with a vision to transform IT education", icon: Star },
    { year: "2017", event: "ISO 9001:2015 Certified", description: "Achieved international quality standards", icon: Shield },
    { year: "2019", event: "First 1000 Placements", description: "Reached the milestone of 1000 successful placements", icon: Trophy },
    { year: "2021", event: "Online Learning Platform", description: "Launched comprehensive online learning platform", icon: Monitor },
    { year: "2023", event: "AI-Powered Courses", description: "Introduced cutting-edge AI and ML courses", icon: Zap },
    { year: "2024", event: "5000+ Alumni Network", description: "Built a strong network of successful professionals", icon: TrendingUp },
  ];
  const techCards = [
    { icon: Cpu, label: "Core Java" },
    { icon: Database, label: "SQL" },
    { icon: Layers, label: "Spring Boot" },
    { icon: Server, label: "Microservices" },
    { icon: Cloud, label: "Cloud AWS" },
    { icon: ShieldCheck, label: "Cyber Security" },
    { icon: GitBranch, label: "DevOps" },
    { icon: Code, label: "Web UI" },
  ];
  const topRow = techCards.slice(0, 4);
  const bottomRow = techCards.slice(4, 8);

  // --- Reusable Components (unchanged) ---
  const Card = ({
    children, className = "", ...props
  }: {
    children: React.ReactNode; className?: string; [key: string]: any;
  }) => (
    <motion.div
      whileHover={{ y: -12, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`relative rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-md shadow-xl overflow-hidden group ${className}`}
      {...props}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-slate-100/40 group-hover:via-white/10 group-hover:to-slate-200/40 transition-all duration-500"></div>
      {children}
    </motion.div>
  );

  const CardContent = ({ children }: { children: React.ReactNode }) => (
    <div className="p-6 md:p-8 relative z-10 flex flex-col h-full">{children}</div>
  );
  
  // --- Animation Variants (unchanged) ---
  const whyUsCardVariants = {
    hidden: (index: number) => ({ opacity: 0, x: index % 2 === 0 ? -100 : 100 }),
    visible: (index: number) => ({ opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, delay: index * 0.1 } }),
  };
  const achievementCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: (index: number) => ({ opacity: 1, scale: 1, y: 0, transition: { type: "spring", delay: index * 0.15 } })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <section id="about" className="relative py-16 md:py-20 overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* --- Sections are now responsive --- */}

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
             <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full mb-6 md:mb-8 shadow-2xl"
              >
                <Award className="w-5 h-5" />
                <span className="text-xs md:text-sm font-semibold tracking-wide">ABOUT QUASTECH</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent leading-tight"
              >
                Leading the Future of
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">IT Education</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
              >
                Since 2015, QUASTECH has been at the forefront of IT education, transforming lives and careers through innovative learning experiences.
              </motion.p>
          </motion.div>

          {/* Why Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="mb-16 md:mb-24"
          >
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Why Choose Us
              </h2>
              <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto">
                Discover what makes QUASTECH the preferred choice for ambitious professionals
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {whyUsFeatures.map((feature, index) => (
                <Card key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={whyUsCardVariants}>
                  <CardContent>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                      className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-xl`}
                    >
                      <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900 text-center">{feature.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed text-center flex-grow">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-24">
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
          </div>
          
          {/* --- RESPONSIVE Infinite Looping Cards Section --- */}
          <div className="py-16 md:py-24">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Technologies We Master
              </h2>
              <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto">
                Our curriculum is built on the most in-demand technologies in the industry.
              </p>
            </div>
            <div className="flex flex-col gap-6 md:gap-8">
              <Marquee speed="normal" direction="left">
                {topRow.map((card, index) => (
                  <div key={`top-${index}`} className="flex-shrink-0 w-48 sm:w-56 lg:w-64 mx-2 sm:mx-3 lg:mx-4">
                    <Card>
                      <CardContent>
                        <div className="flex flex-col items-center text-center">
                          <card.icon className="w-10 h-10 md:w-12 md:h-12 mb-4 text-blue-600" />
                          <h3 className="text-base md:text-lg font-bold text-slate-800">{card.label}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </Marquee>
              <Marquee speed="normal" direction="right">
                {bottomRow.map((card, index) => (
                  <div key={`bottom-${index}`} className="flex-shrink-0 w-48 sm:w-56 lg:w-64 mx-2 sm:mx-3 lg:mx-4">
                    <Card>
                      <CardContent>
                        <div className="flex flex-col items-center text-center">
                          <card.icon className="w-10 h-10 md:w-12 md:h-12 mb-4 text-purple-600" />
                          <h3 className="text-base md:text-lg font-bold text-slate-800">{card.label}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>

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