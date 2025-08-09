import { motion } from "framer-motion";
import { 
  Award, 
  Users, 
  Globe, 
  Target,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Heart,
  Trophy,
  Lightbulb,
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
  Zap
} from "lucide-react";

const About = () => {
  const whyUsFeatures = [
    {
      icon: GraduationCap,
      title: "Industry Requirement",
      description: "Quastech provides an industry-relevant syllabus tailored to meet the dynamic demands of the IT sector. Their curriculum emphasizes on Practical approach, covering essential skills and the latest technologies.",
      color: "from-blue-600 via-blue-700 to-indigo-800",
      hoverColor: "hover:from-blue-700 hover:via-blue-800 hover:to-indigo-900"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Our institute thrives on cost-effectiveness, boasting experienced trainers without compromising quality. Despite our lower costs, our content remains on par with Industry requirements, delivering exceptional value and high-quality education",
      color: "from-emerald-600 via-green-700 to-teal-800",
      hoverColor: "hover:from-emerald-700 hover:via-green-800 hover:to-teal-900"
    },
    {
      icon: Monitor,
      title: "Online/Offline Training",
      description: "Quastech offers comprehensive online and offline training programs, empowering individuals with cutting-edge skills in IT and software development. With expert instructors and hands-on learning experiences.",
      color: "from-orange-600 via-red-600 to-pink-700",
      hoverColor: "hover:from-orange-700 hover:via-red-700 hover:to-pink-800"
    },
    {
      icon: UserCheck,
      title: "Expert Trainer",
      description: "Quastech boasts a team of highly skilled trainers, each an expert in their respective fields. With a commitment to delivering quality education, Quastech ensures that students receive comprehensive and industry-relevant training under the guidance of experienced professionals.",
      color: "from-purple-600 via-violet-700 to-purple-800",
      hoverColor: "hover:from-purple-700 hover:via-violet-800 hover:to-purple-900"
    },
    {
      icon: FolderOpen,
      title: "Projects & Assessment",
      description: "We engage students in projects tailored for industry-level exposure, fostering practical skills and real-world experience. These projects bridge academic learning with industry demands, preparing students with invaluable hands-on knowledge essential for professional success",
      color: "from-cyan-600 via-sky-700 to-blue-800",
      hoverColor: "hover:from-cyan-700 hover:via-sky-800 hover:to-blue-900"
    },
    {
      icon: Presentation,
      title: "Guest Lecture",
      description: "Quastech conducts guest lectures as part of its educational programs. These lectures feature experts and professionals from various industries who share their knowledge and experiences and case studies with students, providing valuable insights and real-world perspectives in their respective fields",
      color: "from-indigo-600 via-purple-700 to-pink-800",
      hoverColor: "hover:from-indigo-700 hover:via-purple-800 hover:to-pink-900"
    },
    {
      icon: Briefcase,
      title: "Placement",
      description: "Quastech offers a promising placement, coupling it with insightful HR sessions. They go beyond, aiding candidates in crafting polished resumes, empowering them for the competitive job market. With Quastech's comprehensive approach, securing employment becomes a guided journey towards success.",
      color: "from-emerald-600 via-teal-700 to-cyan-800",
      hoverColor: "hover:from-emerald-700 hover:via-teal-800 hover:to-cyan-900"
    },
    {
      icon: HeadphonesIcon,
      title: "Continuous Support",
      description: "Quastech is a leading IT training institute that stands out for its commitment to providing continuous support to its students. With a dedicated team of experienced instructors and a robust support system, Quastech ensures that learners receive ongoing assistance, guidance, and resources to excel in their chosen IT field and Quastech's unwavering commitment extends beyond placement, offering continuous support even after, ensuring long-term career success for its candidates.",
      color: "from-rose-600 via-pink-700 to-red-800",
      hoverColor: "hover:from-rose-700 hover:via-pink-800 hover:to-red-900"
    }
  ];

  const achievements = [
    { icon: Users, value: "5000+", label: "Students Trained", color: "from-blue-500 to-cyan-500" },
    { icon: Award, value: "95%", label: "Placement Rate", color: "from-emerald-500 to-teal-500" },
    { icon: Globe, value: "500+", label: "Company Partners", color: "from-purple-500 to-pink-500" },
    { icon: BookOpen, value: "20+", label: "Courses Offered", color: "from-orange-500 to-red-500" }
  ];

  const milestones = [
    { 
      year: "2015", 
      event: "QUASTECH Founded", 
      description: "Started with a vision to transform IT education",
      icon: Star
    },
    { 
      year: "2017", 
      event: "ISO 9001:2015 Certified", 
      description: "Achieved international quality standards",
      icon: Shield
    },
    { 
      year: "2019", 
      event: "First 1000 Placements", 
      description: "Reached the milestone of 1000 successful placements",
      icon: Trophy
    },
    { 
      year: "2021", 
      event: "Online Learning Platform", 
      description: "Launched comprehensive online learning platform",
      icon: Monitor
    },
    { 
      year: "2023", 
      event: "AI-Powered Courses", 
      description: "Introduced cutting-edge AI and ML courses",
      icon: Zap
    },
    { 
      year: "2024", 
      event: "5000+ Alumni Network", 
      description: "Built a strong network of successful professionals",
      icon: TrendingUp
    }
  ];

  const features = [
    "Industry-experienced faculty with 10+ years expertise",
    "Hands-on projects with real-world applications",
    "24/7 doubt clearing and mentorship support",
    "Regular industry workshops and guest lectures"
  ];

  // Professional Button Component
  const Button = ({ 
    children, 
    variant = "default", 
    size = "default", 
    className = "",
    ...props 
  }: {
    children: React.ReactNode;
    variant?: "default" | "hero" | "outline";
    size?: "default" | "lg";
    className?: string;
    onClick?: () => void;
  }) => {
    const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 active:scale-95";
    
    const variantClasses = {
      default: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl",
      hero: "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 shadow-2xl hover:shadow-blue-500/25",
      outline: "border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white"
    };
    
    const sizeClasses = {
      default: "h-12 px-6 py-3",
      lg: "h-14 px-8 py-4 text-base"
    };
    
    return (
      <button 
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };

  // Professional Card Component
  const Card = ({ 
    children, 
    className = "",
    hover = false,
    ...props 
  }: {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
  }) => {
    return (
      <div 
        className={`rounded-2xl border border-gray-200 bg-white backdrop-blur-sm shadow-xl ${hover ? 'hover:shadow-2xl hover:-translate-y-2' : ''} transition-all duration-300 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  };

  const CardContent = ({ 
    children, 
    className = "",
    ...props 
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={`p-8 ${className}`} {...props}>
        {children}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <section id="about" className="relative py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full mb-8 shadow-2xl"
            >
              <Award className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wide">ABOUT QUASTECH</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent leading-tight"
            >
              Leading the Future of
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                IT Education
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            >
              Since 2015, QUASTECH has been at the forefront of IT education, 
              transforming lives and careers through innovative learning experiences.
            </motion.p>
          </motion.div>

          {/* Main Content Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Empowering Dreams Through 
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Technology
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  QUASTECH was founded with a simple yet powerful vision: to bridge the gap between 
                  academic knowledge and industry requirements. We believe that quality education 
                  should be accessible to everyone, regardless of their background.
                </p>
                <p>
                  Our comprehensive approach combines theoretical knowledge with practical experience, 
                  ensuring our students are not just job-ready, but industry-leading professionals 
                  who can adapt and thrive in the ever-evolving tech landscape.
                </p>
              </div>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <Button variant="hero" size="lg" className="group">
                Discover Our Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Visual Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  rotateY: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 1, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                  />
                  
                  <div className="relative z-10 text-center">
                    <motion.div 
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-32 h-32 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                    >
                      <Award className="w-16 h-16 text-white" />
                    </motion.div>
                    
                    <h3 className="text-3xl font-bold mb-4">ISO 9001:2015 Certified</h3>
                    <p className="text-white/90 mb-8 text-lg">
                      International standard for quality management systems
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="text-center bg-white/10 rounded-2xl p-4 backdrop-blur-sm"
                      >
                        <div className="text-4xl font-bold mb-1">9+</div>
                        <div className="text-sm opacity-90">Years Experience</div>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="text-center bg-white/10 rounded-2xl p-4 backdrop-blur-sm"
                      >
                        <div className="text-4xl font-bold mb-1">A+</div>
                        <div className="text-sm opacity-90">Industry Rating</div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card hover className="text-center overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${achievement.color} group-hover:h-3 transition-all duration-300`} />
                  <CardContent className="relative">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${achievement.color} p-4 mx-auto mb-6 shadow-lg`}
                    >
                      <achievement.icon className="w-full h-full text-white" />
                    </motion.div>
                    <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                      {achievement.value}
                    </div>
                    <div className="text-slate-600 font-medium">{achievement.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Why Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Why Choose Us
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Discover what makes QUASTECH the preferred choice for ambitious professionals
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyUsFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -12 }}
                  className="group h-full"
                >
                  <Card hover className="h-full overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${feature.color} group-hover:h-3 transition-all duration-500`} />
                    <CardContent className="text-center h-full flex flex-col">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.6 }}
                        className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${feature.color} ${feature.hoverColor} p-5 mx-auto mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500`}
                      >
                        <feature.icon className="w-full h-full text-white" />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      
                      <p className="text-slate-600 text-sm leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Our Journey
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Milestones that shaped our path to excellence
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-indigo-600 shadow-lg"></div>
                
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`relative flex items-center mb-12 ${
                      index % 2 === 0 ? "justify-end pr-12" : "justify-start pl-12"
                    }`}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className={`w-full max-w-md ${index % 2 === 0 ? "text-right" : "text-left"}`}
                    >
                      <Card hover className="overflow-hidden">
                        <CardContent className="relative">
                          <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg ${index % 2 === 0 ? "order-2" : ""}`}>
                              <milestone.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {milestone.year}
                            </div>
                          </div>
                          
                          <h4 className="text-xl font-bold mb-3 text-slate-900">{milestone.event}</h4>
                          <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;