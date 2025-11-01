import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Clock,
  Users,
  Award,
  BookOpen,
  Code,
  Target,
  TrendingUp,
  Star,
  Phone,
  Mail,
  MessageCircle,
  X,
  Briefcase,
  Download,
  FileText,
  ChevronRight,
  Home,
  Plus,
  Minus,
  Database,
  Wrench,
  Calendar,
  MapPin,
  Laptop,
  MessageSquare,
  GraduationCap,
  HelpCircle,
  Lightbulb,
  Monitor,
  UserCheck,
  CheckCircle,
  ClipboardList,
  Trophy,
  PresentationChartLine,
  FolderOpen,
  Certificate,
  ArrowUp,
  UserCircle,
  BadgeCheck,
  Rocket
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import BranchSection from "@/components/BranchSection";

const FullStackPythonDevelopment = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  // Hiring Partners logos from Placement component
  const partners = [
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

  const courseHighlights = [
    {
      title: "Pan India Placements",
      icon: MapPin,
      description: "Access to placement opportunities across India.",
    },
    {
      title: "80% Practical Training",
      icon: Laptop,
      secondaryIcon: Lightbulb,
      description: "Hands-on experience with real-world projects.",
    },
    {
      title: "2 Global Certifications",
      icon: Award,
      description: "Earn industry-recognized global certifications.",
    },
    {
      title: "Personalised Career Coach",
      icon: Users,
      secondaryIcon: Star,
      description: "Dedicated guidance for your career path.",
    },
    {
      title: "Instant Doubt Solving",
      icon: MessageSquare,
      secondaryIcon: Monitor,
      description: "Get your queries resolved instantly by experts.",
    },
    {
      title: "Alumni Network",
      icon: GraduationCap,
      secondaryIcon: Users,
      description: "Connect with a vast network of successful alumni.",
    },
    {
      title: "Multi-Domain Interviews",
      icon: Users,
      secondaryIcon: HelpCircle,
      description: "Prepare for interviews across various domains.",
    },
    {
      title: "Profile Building Session",
      icon: FileText,
      secondaryIcon: UserCheck,
      description: "Enhance your professional profile for better opportunities.",
    },
  ];

  // Full Stack Python Development Curriculum Modules
  const curriculumModules = [
    {
      id: "module-1",
      title: "Python Fundamentals",
      category: "#Programming",
      duration: "4 Weeks",
      topics: [
        "Python Basics & Syntax",
        "Data Types and Variables",
        "Control Flow (if/else, loops)",
        "Functions and Modules",
        "Object-Oriented Programming",
        "Exception Handling",
        "File I/O Operations",
        "List Comprehensions",
        "Generators and Iterators",
        "Decorators"
      ]
    },
    {
      id: "module-2",
      title: "Advanced Python",
      category: "#Programming",
      duration: "3 Weeks",
      topics: [
        "Advanced Data Structures",
        "Regular Expressions",
        "Working with APIs",
        "Multithreading and Multiprocessing",
        "Database Connectivity (SQLite, MySQL)",
        "Python Packages and Virtual Environments"
      ]
    },
    {
      id: "module-3",
      title: "Django Framework",
      category: "#Framework",
      duration: "5 Weeks",
      topics: [
        "Django Fundamentals",
        "Models and ORM",
        "Views and Templates",
        "Forms and Admin Panel",
        "Django REST Framework",
        "Authentication & Authorization",
        "Deployment",
        "Testing with Django"
      ]
    },
    {
      id: "module-4",
      title: "Flask Framework",
      category: "#Framework",
      duration: "3 Weeks",
      topics: [
        "Flask Basics",
        "Routing and Views",
        "Jinja2 Templates",
        "Flask-SQLAlchemy",
        "RESTful APIs with Flask",
        "Flask Security",
        "Deployment"
      ]
    },
    {
      id: "module-5",
      title: "Frontend Integration",
      category: "#Frontend",
      duration: "4 Weeks",
      topics: [
        "HTML5 and CSS3",
        "JavaScript ES6+",
        "React.js Fundamentals",
        "React Hooks and State Management",
        "API Integration",
        "Build Tools (Webpack, Babel)"
      ]
    },
    {
      id: "module-6",
      title: "Database & Cloud",
      category: "#Database",
      duration: "3 Weeks",
      topics: [
        "PostgreSQL and MySQL",
        "MongoDB (NoSQL)",
        "Database Design",
        "AWS Deployment",
        "Docker Containerization",
        "CI/CD Pipeline"
      ]
    },
    {
      id: "module-7",
      title: "FastAPI & DevOps",
      category: "#DevOps",
      duration: "2 Weeks",
      topics: [
        "FastAPI Framework",
        "Async Programming",
        "Git Version Control",
        "Docker and Kubernetes",
        "Testing (pytest)",
        "Logging and Monitoring"
      ]
    }
  ];

  const careerOpportunities = [
    "Full Stack Python Developer",
    "Python Backend Developer",
    "Django Developer",
    "Flask Developer",
    "Python Web Developer",
    "Software Engineer"
  ];

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <Header />
        
        {/* Hero Banner Section - Rectangular Banner */}
        <section 
          className="relative w-full h-[600px] flex items-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #f97316 100%)'
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="relative z-10 w-full container mx-auto px-4 py-4">
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-center h-full">
              {/* Left Content Section */}
              <div className="relative z-10 flex flex-col space-y-5 md:space-y-7">
                {/* Breadcrumbs */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-white/90 text-sm -mt-2 mb-5 md:mb-7"
                >
                  <Link to="/" className="hover:text-white flex items-center gap-1">
                    <Home className="w-4 h-4" />
                    Home
                  </Link>
                  <ChevronRight className="w-4 h-4" />
                  <span>IT Courses</span>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white font-semibold">Full Stack Python Development</span>
                </motion.div>

                {/* Course Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-2"
                >
                  Full Stack Python Development Program
                </motion.h1>

                {/* Course Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-base md:text-lg text-white/90 max-w-2xl mb-5"
                >
                  Master Python from fundamentals to full-stack development. Build web applications with Django, Flask, React, and modern Python frameworks.
                </motion.p>

                {/* Ratings Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-3 mb-2"
                >
                  {/* Main Rating Row */}
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-white font-semibold text-base">4.8 out of 5</span>
                    <span className="text-white/80 text-sm">based on 18647 votes</span>
                  </div>
                  {/* Platform Ratings Row */}
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    {[
                      { icon: "G", label: "Google", rating: "4.2/5" },
                      { icon: "⭐", label: "", rating: "4.8/5" },
                      { icon: "P", label: "", rating: "4.6/5" },
                      { icon: "Jd", label: "Justdial", rating: "4.3/5" },
                      { icon: "f", label: "Facebook", rating: "4.5/5" }
                    ].map((platform, idx) => (
                      <motion.button
                        key={idx}
                        className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 cursor-pointer hover:bg-white/30 hover:shadow-lg transition-all duration-300 border border-white/10 hover:border-white/20"
                        whileHover={{ 
                          scale: 1.05,
                          y: -2,
                          transition: { duration: 0.2, ease: "easeOut" }
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          console.log(`${platform.label || platform.icon} rating clicked: ${platform.rating}`);
                          // Add your click functionality here - you can navigate to reviews or show more details
                        }}
                      >
                        <span className="text-white font-bold text-xs">{platform.icon}</span>
                        {platform.label && <span className="text-white/90 text-xs">{platform.label}</span>}
                        <span className="text-yellow-400 font-semibold text-xs">{platform.rating}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Course Details Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4 mb-4"
                >
                  {/* Course Details Box */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 grid grid-cols-3 gap-3 border border-white/20">
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">60 Hrs.</div>
                      <div className="text-white/80 text-xs mt-1">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">Online/Offline</div>
                      <div className="text-white/80 text-xs mt-1">Format</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">LMS</div>
                      <div className="text-white/80 text-xs mt-1">Life Time Access</div>
                    </div>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4 pt-3"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm"
                  >
                    <Briefcase className="w-4 h-4" />
                    PLACEMENT REPORT
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-5 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm"
                  >
                    <Download className="w-4 h-4" />
                    DOWNLOAD CURRICULUM
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-5 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm"
                  >
                    <FileText className="w-4 h-4" />
                    INTERVIEW QUESTIONS
                  </motion.button>
                </motion.div>
              </div>

              {/* Right Side - Counselling Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative h-full flex items-center"
              >
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full">
                  {/* Form Header - Blue Section */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-5 relative">
                    <Briefcase className="w-12 h-12 text-white/20 absolute top-3 right-3" />
                    <div className="relative z-10">
                      <p className="text-white/90 text-xs mb-1">Book A Free</p>
                      <h2 className="text-2xl font-bold text-white mb-1">Counselling Session</h2>
                      <p className="text-white/80 text-xs">we train you to get hired.</p>
                    </div>
                  </div>

                  {/* Form Content */}
                  <form onSubmit={handleFormSubmit} className="p-5 space-y-3">
                    <div>
                      <Input
                        type="text"
                        placeholder="Full Name*"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full h-11 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address*"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full h-11 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                          <span className="text-lg">🇮🇳</span>
                          <span className="text-gray-600 font-medium text-sm">(+91)</span>
                          <ChevronRight className="w-3 h-3 text-gray-400" />
                        </div>
                        <Input
                          type="tel"
                          placeholder="Phone No*"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="w-full h-11 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-all pl-20 text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <Textarea
                        placeholder="Message Details"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-all resize-none text-sm"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-11 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
                    >
                      SUBMIT
                    </Button>
                  </form>
                </div>
            </motion.div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                  Course Overview
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Our Full Stack Python Development program covers Python fundamentals, web frameworks, database integration, frontend technologies, and deployment for complete full-stack expertise.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Code, title: "Python Backend", desc: "Django, Flask, FastAPI, REST APIs" },
                { icon: Target, title: "Frontend Development", desc: "React.js, HTML, CSS, JavaScript" },
                { icon: TrendingUp, title: "Database Integration", desc: "PostgreSQL, MySQL, MongoDB" },
                { icon: Star, title: "Real-World Projects", desc: "Industry-grade applications" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Section - Industry Oriented Design */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                  Full Stack Python Development Curriculum
                </span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-[350px_1fr] gap-8 max-w-7xl mx-auto">
              {/* Left Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-8 text-white h-fit sticky top-24 shadow-xl"
              >
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Industry Oriented Curriculum</h3>
                <p className="text-white/90 mb-8 leading-relaxed text-sm">
                  Explore each topic in-depth through interactive sessions, real-world use cases, and tool-based learning. You'll not only understand the theory but also build practical skills that matter in actual roles.
                </p>

                {/* Stats Cards */}
                <div className="space-y-4 mb-8">
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">30+</div>
                        <div className="text-sm text-gray-600 font-medium">Case Studies & Projects</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Wrench className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">10+</div>
                        <div className="text-sm text-gray-600 font-medium">Languages & Tools</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">280+</div>
                        <div className="text-sm text-gray-600 font-medium">Live Sessions Hours</div>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Brochure
                </motion.button>
              </motion.div>

              {/* Main Curriculum Content */}
              <div className="relative">
                {/* Vertical Timeline Line - Dashed */}
                <div 
                  className="absolute left-6 top-0 bottom-0 w-0.5 hidden lg:block"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 8px, #3b82f6 8px, #3b82f6 16px)'
                  }}
                />
                
                <div className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    {curriculumModules.map((module, index) => (
                      <AccordionItem
                        key={module.id}
                        value={module.id}
                        className="border border-blue-200 rounded-lg mb-4 bg-white shadow-sm hover:shadow-lg transition-shadow overflow-hidden relative"
                      >
                        <AccordionTrigger className="px-6 py-5 hover:no-underline">
                          <div className="flex items-center justify-between w-full pr-4">
                            <div className="flex items-center gap-4 flex-1">
                              {/* Timeline Dot */}
                              <div className="relative z-10 flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 border-2 border-white shadow-lg" />
                              </div>
                              
                              <div className="flex-1 text-left">
                                <div className="flex items-center gap-3 mb-2 flex-wrap">
                                  <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
                                  <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs font-semibold border border-blue-200">
                                    {module.category}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <Clock className="w-4 h-4 text-blue-600" />
                                  <span>{module.duration}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                          <div className="ml-14 grid md:grid-cols-2 gap-4 pt-2">
                            {module.topics.map((topic, topicIndex) => (
                              <motion.div
                                key={topicIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: topicIndex * 0.05 }}
                                className="flex items-start gap-2"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{topic}</span>
                              </motion.div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                  Key Highlights in Full Stack Python Development
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
                Every Feature Empowers The Career You've Always Wanted
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {courseHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-gray-100 group"
                >
                  <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 via-purple-100 to-orange-100 mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                    <highlight.icon className="w-10 h-10 text-blue-600 group-hover:text-blue-700 transition-colors" strokeWidth={1.5} />
                    {highlight.secondaryIcon && (
                      <highlight.secondaryIcon className="absolute -bottom-1 -right-1 w-6 h-6 text-orange-500 bg-white rounded-full p-1 shadow-sm group-hover:scale-110 transition-transform" strokeWidth={2} />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Technologies Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                  Tools & Technologies You'll Master in Full Stack Python Development
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Master industry-standard tools and technologies used by top companies worldwide
              </p>
            </motion.div>

            {/* Sliding Technology Logos */}
            <div className="relative overflow-hidden py-8">
              {/* Gradient overlay for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 via-blue-50 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 via-blue-50 to-transparent z-10 pointer-events-none" />
              
              <motion.div
                className="flex gap-8 md:gap-12"
                animate={{ 
                  x: [0, -1200] 
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    duration: 25,
                    ease: "linear",
                    repeatType: "loop"
                  }
                }}
                style={{ width: "max-content" }}
              >
                {/* Full Stack Python Tools */}
                {[
                  { name: "Python", logo: "/coursesicons/python.jpg", color: "from-blue-500 to-blue-600" },
                  { name: "Django", logo: "/coursesicons/django.jpg", color: "from-green-500 to-green-600" },
                  { name: "Flask", logo: "/coursesicons/flask.jpg", color: "from-red-500 to-red-600" },
                  { name: "React", logo: "/coursesicons/react.jpg", color: "from-blue-400 to-blue-500" },
                  { name: "PostgreSQL", logo: "/coursesicons/postgresql.jpg", color: "from-indigo-500 to-indigo-600" },
                  { name: "MongoDB", logo: "/coursesicons/mongodb.jpg", color: "from-green-600 to-green-700" },
                  { name: "Git", logo: "/coursesicons/git.jpg", color: "from-red-500 to-red-600" },
                  { name: "Docker", logo: "/coursesicons/docker.jpg", color: "from-blue-400 to-blue-500" },
                  { name: "AWS", logo: "/coursesicons/aws.jpg", color: "from-orange-500 to-orange-600" },
                  { name: "FastAPI", logo: "/coursesicons/fastapi.jpg", color: "from-purple-500 to-purple-600" },
                  { name: "REST API", logo: "/coursesicons/api.jpg", color: "from-orange-500 to-orange-600" },
                  { name: "Kubernetes", logo: "/coursesicons/k8s.jpg", color: "from-blue-500 to-blue-600" },
                ].map((tool, index) => (
                  <motion.div
                    key={`tool-${index}`}
                    className="flex-shrink-0 w-24 sm:w-28 lg:w-32"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-full h-24 sm:h-28 lg:h-32 rounded-xl bg-gradient-to-r ${tool.color} flex flex-col items-center justify-center shadow-lg hover:shadow-2xl relative overflow-hidden group cursor-pointer transition-all duration-300 border border-white/20`}>
                      <img 
                        src={tool.logo} 
                        alt={tool.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      />
                      <div className="relative z-10 text-center px-2">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                          <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">{tool.name.charAt(0)}</span>
                        </div>
                        <span className="text-white text-xs sm:text-sm font-semibold drop-shadow-lg">{tool.name}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {[
                  { name: "Python", logo: "/coursesicons/python.jpg", color: "from-blue-500 to-blue-600" },
                  { name: "Django", logo: "/coursesicons/django.jpg", color: "from-green-500 to-green-600" },
                  { name: "Flask", logo: "/coursesicons/flask.jpg", color: "from-red-500 to-red-600" },
                  { name: "React", logo: "/coursesicons/react.jpg", color: "from-blue-400 to-blue-500" },
                  { name: "PostgreSQL", logo: "/coursesicons/postgresql.jpg", color: "from-indigo-500 to-indigo-600" },
                  { name: "MongoDB", logo: "/coursesicons/mongodb.jpg", color: "from-green-600 to-green-700" },
                  { name: "Git", logo: "/coursesicons/git.jpg", color: "from-red-500 to-red-600" },
                  { name: "Docker", logo: "/coursesicons/docker.jpg", color: "from-blue-400 to-blue-500" },
                  { name: "AWS", logo: "/coursesicons/aws.jpg", color: "from-orange-500 to-orange-600" },
                  { name: "FastAPI", logo: "/coursesicons/fastapi.jpg", color: "from-purple-500 to-purple-600" },
                  { name: "REST API", logo: "/coursesicons/api.jpg", color: "from-orange-500 to-orange-600" },
                  { name: "Kubernetes", logo: "/coursesicons/k8s.jpg", color: "from-blue-500 to-blue-600" },
                ].map((tool, index) => (
                  <motion.div
                    key={`tool-duplicate-${index}`}
                    className="flex-shrink-0 w-24 sm:w-28 lg:w-32"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-full h-24 sm:h-28 lg:h-32 rounded-xl bg-gradient-to-r ${tool.color} flex flex-col items-center justify-center shadow-lg hover:shadow-2xl relative overflow-hidden group cursor-pointer transition-all duration-300 border border-white/20`}>
                      <img 
                        src={tool.logo} 
                        alt={tool.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      />
                      <div className="relative z-10 text-center px-2">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                          <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">{tool.name.charAt(0)}</span>
                        </div>
                        <span className="text-white text-xs sm:text-sm font-semibold drop-shadow-lg">{tool.name}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Third set for extra smoothness */}
                {[
                  { name: "Python", logo: "/coursesicons/python.jpg", color: "from-blue-500 to-blue-600" },
                  { name: "Django", logo: "/coursesicons/django.jpg", color: "from-green-500 to-green-600" },
                  { name: "Flask", logo: "/coursesicons/flask.jpg", color: "from-red-500 to-red-600" },
                  { name: "React", logo: "/coursesicons/react.jpg", color: "from-blue-400 to-blue-500" },
                  { name: "PostgreSQL", logo: "/coursesicons/postgresql.jpg", color: "from-indigo-500 to-indigo-600" },
                  { name: "MongoDB", logo: "/coursesicons/mongodb.jpg", color: "from-green-600 to-green-700" },
                  { name: "Git", logo: "/coursesicons/git.jpg", color: "from-red-500 to-red-600" },
                  { name: "Docker", logo: "/coursesicons/docker.jpg", color: "from-blue-400 to-blue-500" },
                  { name: "AWS", logo: "/coursesicons/aws.jpg", color: "from-orange-500 to-orange-600" },
                  { name: "FastAPI", logo: "/coursesicons/fastapi.jpg", color: "from-purple-500 to-purple-600" },
                  { name: "REST API", logo: "/coursesicons/api.jpg", color: "from-orange-500 to-orange-600" },
                  { name: "Kubernetes", logo: "/coursesicons/k8s.jpg", color: "from-blue-500 to-blue-600" },
                ].map((tool, index) => (
                  <motion.div
                    key={`tool-triple-${index}`}
                    className="flex-shrink-0 w-24 sm:w-28 lg:w-32"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-full h-24 sm:h-28 lg:h-32 rounded-xl bg-gradient-to-r ${tool.color} flex flex-col items-center justify-center shadow-lg hover:shadow-2xl relative overflow-hidden group cursor-pointer transition-all duration-300 border border-white/20`}>
                      <img 
                        src={tool.logo} 
                        alt={tool.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      />
                      <div className="relative z-10 text-center px-2">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                          <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">{tool.name.charAt(0)}</span>
                        </div>
                        <span className="text-white text-xs sm:text-sm font-semibold drop-shadow-lg">{tool.name}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Career Resources Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Heading Left (on desktop) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-[360px] lg:w-[420px] flex-shrink-0 text-center md:text-left mb-2 md:mb-0"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3 md:mb-0">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                    Get exclusive access to career resources upon completion
                  </span>
                </h2>
              </motion.div>
              {/* Cards Right (on desktop) */}
              <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
                {/* Mock Session Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group text-center md:text-left w-full md:w-[270px]"
                >
                  <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <MessageSquare className="w-10 h-10 text-blue-600 group-hover:text-blue-700 transition-colors" strokeWidth={1.5} />
                      <HelpCircle className="w-6 h-6 text-blue-600 -ml-3 -mt-2 group-hover:scale-110 transition-transform" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">Mock Session</h3>
                  <p className="text-gray-600 leading-relaxed">You will get certificate after completion of program.</p>
                </motion.div>
                {/* LMS Learning Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.18 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group text-center md:text-left w-full md:w-[270px]"
                >
                  <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <Monitor className="w-10 h-10 text-orange-500 group-hover:text-orange-600 transition-colors" strokeWidth={1.5} />
                      <BadgeCheck className="w-6 h-6 text-orange-500 -ml-3 -mt-2 group-hover:scale-110 transition-transform" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-orange-500 transition-colors">LMS Learning</h3>
                  <p className="text-gray-600 leading-relaxed">You will get certificate after completion of program.</p>
                </motion.div>
                {/* Career Support Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group text-center md:text-left w-full md:w-[270px]"
                >
                  <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <UserCheck className="w-10 h-10 text-blue-500 group-hover:text-blue-600 transition-colors" strokeWidth={1.5} />
                      <Star className="w-6 h-6 text-blue-400 -ml-3 -mt-2 group-hover:scale-110 transition-transform" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-500 transition-colors">Career Support</h3>
                  <p className="text-gray-600 leading-relaxed">You will get certificate after completion of program.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Mock Interviews Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Left Column - Mock Interviews Content */}
              <div>
                {/* Mock Interviews Title */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-6 relative">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                      Mock Interviews
                    </span>
                    <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                  </h2>
                </motion.div>

                {/* Bullet Points */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-6 mb-12"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <p className="text-gray-700 leading-relaxed">
                      Prepare & Practice for real-life job interviews by joining the Mock Interviews drive at Quastech and learn to perform with confidence with our expert team.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <p className="text-gray-700 leading-relaxed">
                      Not sure of Interview environments? Don't worry, our team will familiarize you and help you in giving your best shot even under heavy pressures.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <p className="text-gray-700 leading-relaxed">
                      Our Mock Interviews are conducted by trailblazing industry-experts having years of experience and they will surely help you to improve your chances of getting hired in real.
                    </p>
                  </div>
                </motion.div>

                {/* How Mock Interview Works - Circular Process Diagram */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-8 text-center">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                      How Quastech Mock Interview Works?
                    </span>
                  </h3>
                  
                  {/* Circular Process Diagram */}
                  <div className="relative w-full max-w-md mx-auto">
                    <div className="relative w-full aspect-square">
                      {/* Outer Circle Container */}
                      <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Step 1: Program - Light Blue (Top) */}
                        <g transform="rotate(-90 200 200)">
                          <path
                            d="M 200 200 L 200 50 A 150 150 0 0 1 350 200 Z"
                            fill="#60a5fa"
                            className="hover:opacity-90 transition-opacity"
                          />
                          <text
                            x="270"
                            y="130"
                            transform="rotate(45 270 130)"
                            fill="white"
                            fontSize="14"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            1 Program
                          </text>
                        </g>

                        {/* Step 2: Experts Mentors - Dark Blue (Right) */}
                        <g transform="rotate(30 200 200)">
                          <path
                            d="M 200 200 L 350 200 A 150 150 0 0 1 350 350 L 200 200 Z"
                            fill="#2563eb"
                            className="hover:opacity-90 transition-opacity"
                          />
                          <text
                            x="330"
                            y="280"
                            transform="rotate(105 330 280)"
                            fill="white"
                            fontSize="13"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            Experts Mentors
                          </text>
                        </g>

                        {/* Step 3: Project Preparation - Teal/Green (Bottom-Right) */}
                        <g transform="rotate(90 200 200)">
                          <path
                            d="M 200 200 L 350 350 A 150 150 0 0 1 200 350 Z"
                            fill="#14b8a6"
                            className="hover:opacity-90 transition-opacity"
                          />
                          <text
                            x="330"
                            y="380"
                            transform="rotate(165 330 380)"
                            fill="white"
                            fontSize="12"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            Project Preparation
                          </text>
                        </g>

                        {/* Step 4: Assignment Process - Orange (Bottom-Left) */}
                        <g transform="rotate(150 200 200)">
                          <path
                            d="M 200 200 L 200 350 A 150 150 0 0 1 50 350 L 200 200 Z"
                            fill="#f97316"
                            className="hover:opacity-90 transition-opacity"
                          />
                          <text
                            x="70"
                            y="380"
                            transform="rotate(225 70 380)"
                            fill="white"
                            fontSize="12"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            STEP 4 Process
                          </text>
                        </g>

                        {/* Step 5: Grooming Session - Pink/Magenta (Left) */}
                        <g transform="rotate(210 200 200)">
                          <path
                            d="M 200 200 L 50 350 A 150 150 0 0 1 50 200 L 200 200 Z"
                            fill="#ec4899"
                            className="hover:opacity-90 transition-opacity"
                          />
                          <text
                            x="70"
                            y="280"
                            transform="rotate(285 70 280)"
                            fill="white"
                            fontSize="12"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            STEP 5
                          </text>
                          <text
                            x="70"
                            y="300"
                            transform="rotate(285 70 300)"
                            fill="white"
                            fontSize="12"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            Grooming Session
                          </text>
                        </g>

                        {/* Step 6: STUDENT PLACED - Green (Top-Left, Larger segment) */}
                        <g transform="rotate(270 200 200)">
                          <path
                            d="M 200 200 L 50 200 A 150 150 0 0 1 200 50 L 200 200 Z"
                            fill="#10b981"
                            className="hover:opacity-90 transition-opacity"
                          />
                          <text
                            x="130"
                            y="120"
                            transform="rotate(315 130 120)"
                            fill="white"
                            fontSize="14"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            STEP 6
                          </text>
                          <text
                            x="130"
                            y="145"
                            transform="rotate(315 130 145)"
                            fill="white"
                            fontSize="16"
                            fontWeight="extrabold"
                            textAnchor="middle"
                          >
                            STUDENT PLACED
                          </text>
                        </g>

                        {/* Center Circle */}
                        <circle cx="200" cy="200" r="80" fill="white" className="shadow-xl" />
                        <text
                          x="200"
                          y="200"
                          transform="rotate(-90 200 200)"
                          fill="#1f2937"
                          fontSize="14"
                          fontWeight="bold"
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          PROCESS
                        </text>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Banner, Form, Contact Info */}
              <div className="space-y-8">
                {/* Banner */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 flex items-center justify-between shadow-lg"
                >
                  <div className="text-white">
                    <p className="text-xl font-bold">Not just learning</p>
                    <p className="text-xl font-bold">we train you to get hired.</p>
                  </div>
                  <Briefcase className="w-16 h-16 text-white opacity-80" />
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
                >
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Inquiry Form</h3>
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone No <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50">
                          <span className="text-sm font-semibold">🇮🇳</span>
                          <span className="text-sm font-semibold">(+91)</span>
                        </div>
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="flex-1"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message Details
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full min-h-[100px]"
                        placeholder="Enter your message"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      SUBMIT
                    </Button>
                  </form>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600">Phone (For Voice Call):</p>
                        <p className="text-lg font-bold text-gray-800">+91-971 152 6942</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600">WhatsApp (For Call & Chat):</p>
                        <p className="text-lg font-bold text-gray-800">+91-971 152 6942</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Projects Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                    Projects
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-full"></div>
                </h2>
                {/* Introductory Paragraph */}
                <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
                  The belief at Quastech is in the practical application of theoretical knowledge. There is how our students participate in a dynamic learning process, and create projects based on the concepts.
                </p>
              </motion.div>

              {/* 3D Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    text: "Students immerse themselves into practical projects, transferring theoretical knowledge to real-life situations thus promoting a better understanding of the topics covered.",
                    icon: Code
                  },
                  {
                    text: "Teamwork encouraged, students work together on projects that reflect the collaborative nature of their professional work environment",
                    icon: Users
                  },
                  {
                    text: "Projects act as a reflection of real life issues which prepare student for the rigors and responsibilities that their future careers will demand.",
                    icon: Target
                  },
                  {
                    text: "Mentorship and advice from industry experts will ensure that our students' projects meet current workplace benchmarks",
                    icon: Award
                  },
                  {
                    text: "Students are making use of the most recent tools and technologies while working on projects that are both educational, but also engage with current trends in industry.",
                    icon: Rocket
                  },
                  {
                    text: "Through repeated design processes, students adjust and improve their projects learning valuable skills about project management as well as optimization.",
                    icon: TrendingUp
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -12, 
                      scale: 1.02,
                      rotateY: 5,
                      rotateX: 5
                    }}
                    className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                    style={{ 
                      transformStyle: 'preserve-3d',
                      perspective: '1000px'
                    }}
                  >
                    {/* 3D Effect Background Gradient */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                    
                    {/* Card Content */}
                    <div className="relative z-10">
                      {/* Icon with Q badge */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="relative flex-shrink-0">
                          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-500 shadow-md group-hover:shadow-lg transition-shadow">
                            <item.icon className="w-6 h-6 text-white" strokeWidth={2} />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm border-2 border-white">
                            <span className="text-white font-bold text-xs">Q</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Description Text */}
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        {item.text}
                      </p>
                    </div>
                    
                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Training Features Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                  TRAINING FEATURES
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-full"></div>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Expert Trainers */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4">
                  <UserCheck className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Expert Trainers:</h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn from Industry experts who provide you with moving knowledge about what is going-on in the industry now.
                </p>
              </motion.div>

              {/* Projects */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4">
                  <FolderOpen className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Projects:</h3>
                <p className="text-gray-600 leading-relaxed">
                  Submerge yourself in practical projects bridging the gap between theory and practice. Put this knowledge in practical terms and practice it hands-on, learning from your mistakes
                </p>
              </motion.div>

              {/* Certification */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4 relative">
                  <FileText className="w-7 h-7 text-blue-600" />
                  <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Certification:</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete your training and earn industry-recognized certifications. Now validate your skills in the competitive job market and bolster credibility.
                </p>
              </motion.div>

              {/* 100% Placements */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center mb-4 relative">
                  <Briefcase className="w-7 h-7 text-amber-700" />
                  <ArrowUp className="w-4 h-4 text-orange-500 absolute -top-1 -right-1" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">100% Placements:</h3>
                <p className="text-gray-600 leading-relaxed">
                  100% placement support is available with an unwavering commitment to your success. Use our strategic alliances and career placement services to launch your new job immediately
                </p>
              </motion.div>

              {/* HR Session */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4 relative">
                  <FileText className="w-7 h-7 text-blue-600" />
                  <UserCircle className="w-5 h-5 text-amber-700 absolute bottom-0 right-0" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">HR Session:</h3>
                <p className="text-gray-600 leading-relaxed">
                  In addition, participate in customized HR sessions that reveal industry expectations and give tips on resume building as well as successful job hunting strategies.
                </p>
              </motion.div>

              {/* Mock Interviews */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center mb-4 relative">
                  <Users className="w-6 h-6 text-amber-700" />
                  <MessageSquare className="w-5 h-5 text-blue-600 absolute top-1 right-1" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Mock Interviews:</h3>
                <p className="text-gray-600 leading-relaxed">
                  Participate in realistic mock interviews conducted by professionals from the industry to improve your interview skills. Get specific feedback aimed at improving your performance and increasing self-confidence.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hiring Partners Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[2fr_1fr] gap-12 max-w-7xl mx-auto">
              {/* Left Column - Animated Company Logos */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                      Hiring Partners
                    </span>
                  </h2>
                </motion.div>

                {/* Three Columns with Different Scroll Speeds */}
                <div className="grid grid-cols-3 gap-4 relative overflow-hidden">
                  {/* Column 1 - Fastest Speed */}
                  <div className="relative overflow-hidden h-[600px]">
                    <motion.div
                      className="flex flex-col gap-4"
                      animate={{ y: [0, -800] }}
                      transition={{
                        y: {
                          repeat: Infinity,
                          duration: 20,
                          ease: "linear",
                        },
                      }}
                    >
                      {/* Duplicate logos for seamless loop */}
                      {[
                        ...partners,
                        ...partners,
                        ...partners,
                        ...partners
                      ].map((partner, index) => (
                        <div
                          key={`col1-${index}`}
                          className="flex-shrink-0 h-32 bg-white border border-gray-200 rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="max-h-20 max-w-full object-contain transition-all duration-300"
                          />
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Column 2 - Medium Speed */}
                  <div className="relative overflow-hidden h-[600px]">
                    <motion.div
                      className="flex flex-col gap-4"
                      animate={{ y: [0, -800] }}
                      transition={{
                        y: {
                          repeat: Infinity,
                          duration: 30,
                          ease: "linear",
                        },
                      }}
                    >
                      {/* Duplicate logos for seamless loop */}
                      {[
                        ...partners.slice(1),
                        ...partners,
                        ...partners,
                        ...partners,
                        ...partners.slice(0, 1)
                      ].map((partner, index) => (
                        <div
                          key={`col2-${index}`}
                          className="flex-shrink-0 h-32 bg-white border border-gray-200 rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="max-h-20 max-w-full object-contain transition-all duration-300"
                          />
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Column 3 - Slowest Speed */}
                  <div className="relative overflow-hidden h-[600px]">
                    <motion.div
                      className="flex flex-col gap-4"
                      animate={{ y: [0, -800] }}
                      transition={{
                        y: {
                          repeat: Infinity,
                          duration: 40,
                          ease: "linear",
                        },
                      }}
                    >
                      {/* Duplicate logos for seamless loop */}
                      {[
                        ...partners.slice(2),
                        ...partners,
                        ...partners,
                        ...partners,
                        ...partners.slice(0, 2)
                      ].map((partner, index) => (
                        <div
                          key={`col3-${index}`}
                          className="flex-shrink-0 h-32 bg-white border border-gray-200 rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="max-h-20 max-w-full object-contain transition-all duration-300"
                          />
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Right Column - Statistics */}
              <div className="flex flex-col justify-center space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center lg:text-left"
                >
                  <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent mb-2">
                    800+
                  </div>
                  <div className="text-xl font-semibold text-gray-800">
                    Hiring companies
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center lg:text-left"
                >
                  <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent mb-2">
                    10k+
                  </div>
                  <div className="text-xl font-semibold text-gray-800">
                    Learners already placed
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificate Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 max-w-7xl mx-auto items-center">
              {/* Left Panel - Text and Logos */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Main Title */}
                <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                    Showcase your Course Completion Certificate to Recruiters
                  </span>
                </h2>

                {/* Key Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Training Certificate is Govern By 12 Global Associations.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Training Certificate is Powered by "Wipro DICE ID"
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Training Certificate is Powered by "Verifiable Skill Credentials"
                    </p>
                  </div>
                </div>

                {/* Collaboration Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">in Collaboration with</h3>
                  <div className="h-px bg-gray-300 mb-6"></div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { name: "NSDC", logo: "/uploads/nsdeimg01.png" },
                      { name: "Skill India", logo: "/uploads/skillindia--.jpg" },
                      { name: "IBM", logo: "/uploads/ibm.png" }
                    ].map((partner, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white border-2 border-blue-200 rounded-lg p-4 flex items-center justify-center h-24 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-h-16 max-w-full object-contain transition-all duration-300"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get In Touch
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50"
                  >
                    Get a Sample Certificate
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Panel - Certificate Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/certificate.jpg"
                    alt="Certificate Of Achievement"
                    className="w-full h-auto object-contain"
                  />
                  {/* Sample Watermark Overlay (optional) */}
                  <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-lg shadow-lg">
                    <span className="text-blue-600 font-bold text-sm">SAMPLE</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                  Career Opportunities
                </span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {careerOpportunities.map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl text-center hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{role}</h3>
                    <p className="text-gray-600 text-sm">High demand role in IT industry</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section - Professional */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-blue-100 shadow-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span className="text-xs font-semibold text-blue-700 tracking-widest">FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                  Everything you need to know
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Clear, concise answers about our Full Stack Python Development program—curriculum, format, placement, and more.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto items-center">
              {/* Left - Illustration Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200/40 via-purple-200/40 to-orange-200/40 rounded-3xl blur-2xl" aria-hidden></div>
                <img
                  src="/uploads/FAQ-vector-design-concept.jpg"
                  alt="Frequently Asked Questions"
                  className="relative w-full h-auto rounded-3xl ring-1 ring-blue-100 shadow-xl"
                />
              </motion.div>

              {/* Right - FAQ Accordions */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1" className="group bg-white border border-blue-100 rounded-2xl mb-4 shadow-sm hover:shadow-lg transition-shadow">
                    <AccordionTrigger className="px-6 py-5 text-left font-semibold hover:no-underline">
                      <span className="text-gray-900">What is included in the Full Stack Python Development Program?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed">
                      The program covers Python fundamentals, Django and Flask frameworks, frontend technologies (React.js), database integration (PostgreSQL, MySQL, MongoDB), RESTful APIs, cloud deployment, DevOps tools, and real-world full-stack projects.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-2" className="group bg-white border border-blue-100 rounded-2xl mb-4 shadow-sm hover:shadow-lg transition-shadow">
                    <AccordionTrigger className="px-6 py-5 text-left font-semibold hover:no-underline">
                      <span className="text-gray-900">Do you provide placement assistance?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed">
                      Yes. You get resume polishing, mock interviews, HR preparation, and interview opportunities through our hiring partners. Many learners secure offers within weeks of completion.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-3" className="group bg-white border border-blue-100 rounded-2xl mb-4 shadow-sm hover:shadow-lg transition-shadow">
                    <AccordionTrigger className="px-6 py-5 text-left font-semibold hover:no-underline">
                      <span className="text-gray-900">Is the training available online and offline? Do I get LMS access?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed">
                      The course is offered in both formats. You also receive lifetime LMS access to recordings, notes, code repositories, and assignments.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-4" className="group bg-white border border-blue-100 rounded-2xl mb-4 shadow-sm hover:shadow-lg transition-shadow">
                    <AccordionTrigger className="px-6 py-5 text-left font-semibold hover:no-underline">
                      <span className="text-gray-900">What is the course duration and weekly schedule?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed">
                      Typical duration is 10–14 weeks depending on the track. Sessions are planned on weekdays/weekends with additional practice and doubt-clearing support.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-5" className="group bg-white border border-blue-100 rounded-2xl mb-1 shadow-sm hover:shadow-lg transition-shadow">
                    <AccordionTrigger className="px-6 py-5 text-left font-semibold hover:no-underline">
                      <span className="text-gray-900">Who can join—do I need prior programming experience?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed">
                      Basic programming knowledge is helpful but not mandatory. Python is beginner-friendly, and we start from fundamentals, gradually building to advanced concepts. Extra support is provided for those new to programming.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-12 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Ready to Start Your Full Stack Python Development Journey?
              </h2>
              <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of successful students who have transformed their careers with our Full Stack Python Development program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+918422800381"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2 justify-center"
                >
                  <Phone className="w-5 h-5" />
                  Call +91 8422800381
                </motion.a>
                <motion.a
                  href="https://wa.me/918422800381"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-500 text-white font-bold py-3 px-8 rounded-xl hover:bg-green-600 transition-colors flex items-center gap-2 justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        <BranchSection />

        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default FullStackPythonDevelopment;

