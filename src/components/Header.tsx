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
} from "lucide-react";
import CoursesMegaMenu from "@/components/CoursesMegaMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showCoursesMenu, setShowCoursesMenu] = useState(false);
  const [activeCourseType, setActiveCourseType] = useState<"it" | "non-it" | "eclass" | "degree" | null>(null);

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
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const courseTypes = [
    { name: "IT Courses", type: "it", icon: BookOpen, color: "from-blue-500 to-cyan-500" },
    { name: "Non-IT Courses", type: "non-it", icon: Globe, color: "from-purple-500 to-pink-500" },
    { name: "E-Class", type: "eclass", icon: Award, color: "from-orange-500 to-red-500" },
    { name: "Degree", type: "degree", icon: GraduationCap, color: "from-green-500 to-emerald-500" },
  ];

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Courses", href: "#courses", hasDropdown: true },
    { name: "Placement", href: "#placement" },
    { name: "Reviews", href: "#reviews" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleDropdownToggle = (categoryName: string) => {
    setActiveDropdown(activeDropdown === categoryName ? null : categoryName);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary via-primary-glow to-primary text-white py-3 px-4 text-sm shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <motion.div 
              className="flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4 text-yellow-300" />
              <span className="hidden sm:inline font-medium">+91 98765 43210</span>
              <span className="sm:hidden font-medium">Call Us</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-4 h-4 text-yellow-300" />
              <span className="hidden sm:inline font-medium">info@quastech.com</span>
              <span className="sm:hidden font-medium">Email</span>
            </motion.div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Award className="w-4 h-4 text-yellow-300" />
            <span className="font-semibold">ISO 9001:2015 Certified Institute</span>
          </div>
        </div>
      </div>

      {/* Clean Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-4">
              {/* Main QUASTECH Logo */}
              <div className="flex items-center gap-3">
                <img
                  src="/uploads/64f34837-4f64-4bbc-886b-305630eefd79.png"
                  alt="QUASTECH Logo"
                  className="h-12 w-auto"
                />
                <div className="text-sm text-gray-600">
                  <div className="font-semibold">ISO 9001:2015</div>
                  <div>FUTURE through Innovations</div>
                </div>
              </div>
              
              {/* Partner Logos */}
              <div className="flex items-center gap-3 ml-8">
                <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
                  <img
                    src="/uploads/nsdeimg01.png"
                    alt="NSDC Logo"
                    className="h-8 w-auto"
                  />
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
                  <img
                    src="/uploads/skillindia--.jpg"
                    alt="Skill India Logo"
                    className="h-8 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Animated Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    href={item.href}
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                    className="text-gray-700 hover:text-primary font-medium transition-all duration-300 flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-primary/5"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <motion.div
                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    )}
                  </motion.a>

                  {/* Dropdown Container */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-0 pt-2 z-50 max-w-[95vw]"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => {
                        setActiveDropdown(null);
                        setActiveCourseType(null);
                      }}
                    >
                      <div className="flex flex-col lg:flex-row gap-4 max-w-full">
                        {/* Course Types Card */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="w-80 max-w-[45vw] lg:max-w-[45vw] w-full lg:w-80 bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl p-6 bg-gradient-to-br from-background to-muted/20"
                        >
                          <h3 className="text-lg font-bold mb-4 text-primary">Select Course Category</h3>
                          <div className="flex flex-col gap-3">
                            {courseTypes.map((course) => (
                              <motion.div
                                key={course.type}
                                whileHover={{ scale: 1.02, x: 4 }}
                                onMouseEnter={() => setActiveCourseType(course.type as "it" | "non-it" | "eclass" | "degree")}
                                className={`relative p-4 rounded-lg cursor-pointer transition-all duration-300 flex items-center gap-4 ${
                                  activeCourseType === course.type 
                                    ? 'bg-gradient-to-r from-primary/20 to-primary-glow/20 border-2 border-primary shadow-lg scale-[1.02]' 
                                    : 'bg-gradient-to-r from-primary/5 to-primary-glow/5 border border-border/50 hover:border-primary/50 hover:shadow-md'
                                }`}
                              >
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center shrink-0`}>
                                  <course.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="font-semibold text-sm">{course.name}</h4>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Course Details Panel */}
                        {activeCourseType && (
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="w-[500px] max-w-[50vw] lg:max-w-[50vw] w-full lg:w-[500px] max-h-[80vh] bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl overflow-hidden bg-gradient-to-br from-background to-muted/20"
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
                      </div>
                  </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Animated Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary text-primary hover:bg-primary/5 font-semibold transition-all duration-300"
                >
                  Login
                </Button>
              </motion.div>
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
              <div className="container mx-auto px-4 py-4 space-y-1">
                {/* Mobile Logo Section */}
                <div className="flex items-center justify-center gap-2 py-4 border-b border-border/50">
                  <img
                    src="/uploads/64f34837-4f64-4bbc-886b-305630eefd79.png"
                    alt="QUASTECH Logo"
                    className="h-10 w-auto"
                  />
                  <div className="bg-white rounded p-2 shadow-sm">
                    <img
                      src="/uploads/nsdeimg01.png"
                      alt="NSDC Logo"
                      className="h-10 w-auto"
                    />
                  </div>
                  <div className="bg-white rounded p-2 shadow-sm">
                    <img
                      src="/uploads/skillindia--.jpg"
                      alt="Skill India Logo"
                      className="h-10 w-auto"
                    />
                  </div>
                </div>
                
                {/* Nav Items */}
                {navItems.map((item) => (
                    <div key={item.name} className="space-y-1">
                    {item.hasDropdown ? (
                      <>
                      <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="w-full flex items-center justify-between py-3 px-4 text-left hover:bg-accent/50 rounded-md transition-colors duration-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                          {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-accent/50 rounded-md overflow-hidden"
                          >
                              {/* Course Type Cards */}
                              <div className="grid grid-cols-2 gap-2 p-3">
                                {courseTypes.map((course) => (
                                  <button
                                    key={course.type}
                                    onClick={() => setActiveCourseType(
                                      activeCourseType === course.type ? null : course.type as "it" | "non-it" | "eclass" | "degree"
                                    )}
                                    className={`p-3 rounded-lg border transition-all text-left ${
                                      activeCourseType === course.type
                                        ? 'bg-gradient-to-r from-primary/20 to-primary-glow/20 border-primary shadow-md'
                                        : 'bg-background border-border hover:border-primary hover:shadow-sm'
                                    }`}
                                  >
                                    <course.icon className="w-6 h-6 text-primary mb-1" />
                                    <div className="text-xs font-semibold">{course.name}</div>
                                  </button>
                                ))}
                              </div>
                              
                              {/* Course Details */}
                              {activeCourseType && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="border-t border-border p-3 bg-gradient-to-r from-background/50 to-muted/30 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent"
                                >
                                  <CoursesMegaMenu 
                                    type={activeCourseType} 
                                    onClose={() => {
                                      setIsMenuOpen(false);
                                      setActiveCourseType(null);
                                      setActiveDropdown(null);
                                    }} 
                                  />
                                </motion.div>
                              )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                      </>
                  ) : (
                    <a
                      href={item.href}
                        className="block py-3 px-4 text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-border space-y-3">
                  <Button variant="outline" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Button>
                  <Button variant="hero" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    Register Now
                  </Button>
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