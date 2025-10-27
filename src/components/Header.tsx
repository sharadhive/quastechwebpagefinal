import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  Award,
  Globe,
  BookOpen,
  GraduationCap,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  CheckSquare,
  Eye,
  Moon,
} from "lucide-react";
import CoursesMegaMenu from "@/components/CoursesMegaMenu";
import { useDarkMode } from "@/contexts/DarkModeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showCoursesMenu, setShowCoursesMenu] = useState(false);
  const [activeCourseType, setActiveCourseType] = useState<"it" | "non-it" | "eclass" | "degree" | null>(null);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (!isHoveringDropdown) {
          setActiveDropdown(null);
          setActiveCourseType(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isHoveringDropdown]);

  const courseTypes = [
    { name: "IT PLACEMENT COURSES", type: "it", icon: BookOpen, color: "from-blue-500 to-cyan-500" },
    { name: "NON IT PLACEMENT COURSES", type: "non-it", icon: Globe, color: "from-purple-500 to-pink-500" },
    { name: "E Class", type: "eclass", icon: Award, color: "from-orange-500 to-red-500" },
    { name: "Degree", type: "degree", icon: GraduationCap, color: "from-green-500 to-emerald-500" },
  ];

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About-Us", href: "#about" },
    { name: "Placement", href: "#placement" },
    { name: "Contact-Us", href: "#contact" },
  ];

  const handleDropdownToggle = (categoryName: string) => {
    if (activeDropdown === categoryName) {
      setActiveDropdown(null);
      setActiveCourseType(null);
    } else {
      setActiveDropdown(categoryName);
    }
  };

  const handleMouseEnterDropdown = () => {
    setIsHoveringDropdown(true);
  };

  const handleMouseLeaveDropdown = () => {
    setIsHoveringDropdown(false);
    // Add a small delay before closing to allow smooth transitions
    setTimeout(() => {
      if (!isHoveringDropdown) {
        setActiveDropdown(null);
        setActiveCourseType(null);
      }
    }, 150);
  };

  return (
    <>
      {/* Top Bar - Hidden on Mobile with Continuous Sliding Animation */}
      <div className="hidden md:block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-1.5 px-3 text-xs shadow-md overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          {/* Continuous Sliding Content */}
          <motion.div
            className="flex items-center gap-8"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {/* Duplicate content for seamless loop */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-10 flex-shrink-0">
                {/* Contact Information */}
                <div className="flex items-center gap-4">
                  <motion.a 
                    href="tel:+918422800381"
                    className="flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Phone className="w-3 h-3 text-white" />
                    <span className="font-medium text-xs">+91 8422800381</span>
                  </motion.a>
                  <motion.a 
                    href="mailto:info@quastech.in"
                    className="flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Mail className="w-3 h-3 text-white" />
                    <span className="font-medium text-xs">info@quastech.in</span>
                  </motion.a>
                </div>
                
                {/* Certifications */}
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => alert("ISO 9001:2015 Certified - Quality Management System")}
                  >
                    <Award className="w-3 h-3 text-white" />
                    <span className="font-medium text-xs">ISO 9001:2015</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => alert("ISTQB Certified - International Software Testing Qualifications Board")}
                  >
                    <CheckSquare className="w-3 h-3 text-white" />
                    <span className="font-medium text-xs">ISTQB</span>
                  </motion.div>
                </div>

                {/* Additional Info */}
                <div className="flex items-center gap-5">
                  <motion.div 
                    className="flex items-center gap-1.5"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="font-medium text-xs">🎓 1000+ Students Placed</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-1.5"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="font-medium text-xs">⭐ 4.8/5 Rating</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-1.5"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="font-medium text-xs">🏆 Award Winning Institute</span>
                  </motion.div>
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center gap-2">
                  <motion.a
                    href="https://facebook.com/quastech"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="text-white hover:text-blue-200 transition-colors duration-300"
                  >
                    <Facebook className="w-3 h-3" />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/quastech"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="text-white hover:text-blue-200 transition-colors duration-300"
                  >
                    <Twitter className="w-3 h-3" />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/quastech"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="text-white hover:text-blue-200 transition-colors duration-300"
                  >
                    <Instagram className="w-3 h-3" />
                  </motion.a>
                  <motion.a
                    href="https://youtube.com/quastech"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="text-white hover:text-blue-200 transition-colors duration-300"
                  >
                    <Youtube className="w-3 h-3" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/company/quastech"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="text-white hover:text-blue-200 transition-colors duration-300"
                  >
                    <Linkedin className="w-3 h-3" />
                  </motion.a>
                </div>
                
                {/* Login Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-gray-50 px-3 py-1 rounded-md text-xs font-semibold transition-colors"
                  onClick={() => alert("Login functionality will be implemented")}
                >
                  Login
                </motion.button>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Clean Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-lg backdrop-blur-sm"
        style={{
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
          transform: 'translateZ(0)',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)'
        }}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="flex items-center justify-between h-18 sm:h-20 md:h-24 lg:h-28">
            {/* Logo Section - Responsive */}
            <div className="flex items-center gap-0.5 sm:gap-1">
              {/* Main QUASTECH Logo */}
              <div className="flex items-center -ml-6 sm:-ml-6 md:-ml-4">
                <img
                  src="/uploads/64f34837-4f64-4bbc-886b-305630eefd79.png"
                  alt="QUASTECH Logo"
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
                />
              </div>
              
              {/* Partner Logos - Hidden on small mobile */}
              <div className="hidden sm:flex items-center gap-1 sm:gap-2 ml-1 sm:ml-2">
                <img
                  src="/uploads/nsdeimg01.png"
                  alt="NSDC Logo"
                  className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto"
                />
                <img
                  src="/uploads/skillindia--.jpg"
                  alt="Skill India Logo"
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
                />
              </div>
            </div>

            {/* Center Course Button with Dropdown */}
            <div className="hidden lg:flex items-center relative" ref={dropdownRef}>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDropdownToggle("Courses")}
                onMouseEnter={() => {
                  setActiveDropdown("Courses");
                  setIsHoveringDropdown(true);
                }}
                onMouseLeave={() => setIsHoveringDropdown(false)}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Course's
                <motion.div
                  animate={{ rotate: activeDropdown === "Courses" ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>

              {/* Course Dropdown */}
              <AnimatePresence>
                {activeDropdown === "Courses" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 pt-2 z-50 max-w-[95vw]"
                    onMouseEnter={handleMouseEnterDropdown}
                    onMouseLeave={handleMouseLeaveDropdown}
                  >
                    <div className="flex flex-col lg:flex-row gap-4 max-w-full">
                      {/* Course Types Card */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="w-80 max-w-[45vw] lg:max-w-[45vw] w-full lg:w-80 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-xl shadow-2xl p-6"
                      >
                        <h3 className="text-lg font-bold mb-4 text-blue-600">Select Course Category</h3>
                        <div className="flex flex-col gap-3">
                          {courseTypes.map((course) => (
                            <motion.div
                              key={course.type}
                              whileHover={{ scale: 1.02, x: 4 }}
                              onMouseEnter={() => setActiveCourseType(course.type as "it" | "non-it" | "eclass" | "degree")}
                              className={`relative p-4 rounded-lg cursor-pointer transition-all duration-300 flex items-center gap-4 ${
                                activeCourseType === course.type 
                                  ? 'bg-blue-50 border-2 border-blue-500 shadow-lg scale-[1.02]' 
                                  : 'bg-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-md'
                              }`}
                            >
                              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center shrink-0`}>
                                <course.icon className="w-6 h-6 text-white" />
                              </div>
                              <h4 className="font-semibold text-sm text-gray-800">{course.name}</h4>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Course Details Panel */}
                      <AnimatePresence>
                        {activeCourseType && (
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="w-[500px] max-w-[50vw] lg:max-w-[50vw] w-full lg:w-[500px] max-h-[80vh] bg-white/95 backdrop-blur-xl border border-gray-200 rounded-xl shadow-2xl overflow-hidden"
                          >
                            <CoursesMegaMenu 
                              type={activeCourseType} 
                              onClose={() => {
                                setActiveCourseType(null);
                                setActiveDropdown(null);
                              }} 
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Animated Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={item.href}
                    onClick={(e) => {
                      if (item.name === "Home") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-700 hover:text-primary font-medium transition-all duration-300 flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-primary/5 relative overflow-hidden group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-lg"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                </div>
              ))}
            </nav>

            {/* Animated Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Eye Care / Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 transition-colors duration-300"
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode (Eye Care)"}
              >
                <motion.div
                  animate={{ rotate: isDarkMode ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDarkMode ? (
                    <Eye className="w-4 h-4 text-gray-600 dark-mode:text-gray-300" />
                  ) : (
                    <Moon className="w-4 h-4 text-gray-600 dark-mode:text-gray-300" />
                  )}
                </motion.div>
              </motion.button>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Register Now
                </Button>
              </motion.div>
            </div>

            {/* Animated Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-primary/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-gray-600" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-background border-t border-border overflow-hidden"
            >
              <div className="container mx-auto px-4 py-3 space-y-1">
                {/* Mobile Logo Section - Compact */}
                <div className="flex items-center justify-center gap-3 py-3 border-b border-border/50">
                  <img
                    src="/uploads/64f34837-4f64-4bbc-886b-305630eefd79.png"
                    alt="QUASTECH Logo"
                    className="h-10 w-auto"
                  />
                    <img
                      src="/uploads/nsdeimg01.png"
                      alt="NSDC Logo"
                      className="h-12 w-auto"
                    />
                    <img
                      src="/uploads/skillindia--.jpg"
                      alt="Skill India Logo"
                      className="h-8 w-auto"
                    />
                </div>
                
                {/* Nav Items - Compact */}
                {navItems.map((item) => (
                    <div key={item.name} className="space-y-1">
                    <a
                      href={item.href}
                        className="block py-2 px-3 text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors duration-200 text-sm"
                      onClick={(e) => {
                        if (item.name === "Home") {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
                
                <div className="pt-3 border-t border-border space-y-2">
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={toggleDarkMode}
                      className="flex-1 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      {isDarkMode ? (
                        <Eye className="w-4 h-4 text-gray-600 dark-mode:text-gray-300" />
                      ) : (
                        <Moon className="w-4 h-4 text-gray-600 dark-mode:text-gray-300" />
                      )}
                      <span className="text-xs font-medium text-gray-600 dark-mode:text-gray-300">
                        {isDarkMode ? "Light" : "Dark"}
                      </span>
                    </motion.button>
                    <Button variant="hero" size="sm" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                      Register Now
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;