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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const courseCategories = [
    {
      name: "IT Placement Courses",
      icon: <BookOpen className="w-5 h-5" />,
      courses: [
        { name: "Software Testing", href: "#software-testing" },
        { name: "Fullstack Development", href: "#fullstack" },
        { name: "Software Development", href: "#software-dev" },
        { name: "Front End Development", href: "#frontend" },
        { name: "Data Science With Python", href: "#data-science" },
        { name: "BIG Data Engineering", href: "#big-data" },
        { name: "RPA", href: "#rpa" },
      ],
      featured: [
        { name: "Software Testing Course", href: "#software-testing-course", icon: "📘" },
        { name: "Manual Testing", href: "#manual-testing", icon: "📗" },
        { name: "Selenium Automation Testing", href: "#selenium", icon: "📙" },
        { name: "ISTQB Certification", href: "#istqb", icon: "🏆" },
      ],
    },
    {
      name: "Non-IT Placement Courses",
      icon: <Globe className="w-5 h-5" />,
      courses: [
        { name: "Digital Marketing", href: "#digital-marketing" },
        { name: "Content Writing", href: "#content-writing" },
        { name: "Graphic Design", href: "#graphic-design" },
        { name: "HR Management", href: "#hr-management" },
        { name: "Business Analytics", href: "#business-analytics" },
      ],
      featured: [
        { name: "Digital Marketing Mastery", href: "#digital-marketing-course", icon: "📈" },
        { name: "SEO Specialist", href: "#seo-course", icon: "🔍" },
      ],
    },
    {
      name: "E-Classes",
      icon: <Award className="w-5 h-5" />,
      courses: [
        { name: "Live Online Classes", href: "#live-classes" },
        { name: "Recorded Sessions", href: "#recorded-sessions" },
      ],
      featured: [
        { name: "Virtual Lab Access", href: "#virtual-lab", icon: "💻" },
        { name: "24/7 Learning Platform", href: "#learning-platform", icon: "🕐" },
      ],
    },
    {
      name: "Degree",
      icon: <GraduationCap className="w-5 h-5" />,
      courses: [
        { name: "B.Tech Computer Science", href: "#btech-cs" },
        { name: "BCA", href: "#bca" },
        { name: "MCA", href: "#mca" },
      ],
      featured: [
        { name: "Online Degree Programs", href: "#online-degree", icon: "🎓" },
        { name: "Part-Time Courses", href: "#part-time", icon: "⏰" },
      ],
    },
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

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white border-b border-border/50 shadow-xl"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.08 }} 
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="relative">
                <img
                  src="/uploads/64f34837-4f64-4bbc-886b-305630eefd79.png"
                  alt="QUASTECH Logo"
                  className="h-14 w-auto drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-lg blur-xl -z-10"></div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item, index) =>
                item.hasDropdown ? (
                  <div
                    key={item.name}
                    className="relative group"
                    ref={dropdownRef}
                  >
                   <motion.button
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleDropdownToggle(courseCategories[0].name)} // ✅ Only click
                      className="text-foreground hover:text-primary font-semibold text-lg flex items-center gap-2 transition-all duration-300 relative group py-2"
                    >
                      {item.name}
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeDropdown ? 'rotate-180' : ''}`} />
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary-glow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </motion.button>

                    <AnimatePresence>
                      {activeDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.9 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[1100px] max-w-[95vw] bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8 z-50 overflow-hidden"
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-2xl"></div>
                          
                          {/* Category Tabs */}
                          <div className="relative flex flex-wrap gap-3 mb-8">
                            {courseCategories.map((cat) => (
                              <motion.button
                                key={cat.name}
                                onMouseEnter={() => setActiveDropdown(cat.name)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-3 rounded-xl text-sm font-bold border-2 transition-all duration-300 shadow-lg ${
                                  activeDropdown === cat.name
                                    ? "bg-gradient-to-r from-primary to-primary-glow text-white border-primary shadow-primary/25"
                                    : "bg-dropdown-hover text-dropdown-foreground border-dropdown-border hover:border-primary/50 hover:shadow-md"
                                }`}
                              >
                                {cat.name.toUpperCase()}
                              </motion.button>
                            ))}
                          </div>

                          {/* Category Content */}
                          {courseCategories
                            .filter((cat) => cat.name === activeDropdown)
                            .map((cat) => (
                              <motion.div 
                                key={cat.name} 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                                className="relative grid grid-cols-1 md:grid-cols-2 gap-8"
                              >
                                <div className="space-y-3">
                                  <h3 className="font-bold text-xl text-dropdown-foreground mb-5 flex items-center gap-3 pb-2 border-b border-dropdown-border/30">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                      {cat.icon}
                                    </div>
                                    All {cat.name}
                                  </h3>
                                  <div className="space-y-2">
                                    {cat.courses.map((course, i) => (
                                      <motion.a
                                        key={course.name}
                                        href={course.href}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="dropdown-item text-dropdown-foreground group"
                                      >
                                        <div className="flex items-center gap-3">
                                          <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                                          {course.name}
                                        </div>
                                      </motion.a>
                                    ))}
                                  </div>
                                </div>
                                <div className="space-y-4">
                                  <h3 className="font-bold text-xl text-dropdown-foreground mb-5 flex items-center gap-3 pb-2 border-b border-dropdown-border/30">
                                    <div className="p-2 bg-primary-glow/10 rounded-lg">
                                      ⭐
                                    </div>
                                    Featured Courses
                                  </h3>
                                  <div className="space-y-3">
                                    {cat.featured?.map((featured, i) => (
                                      <motion.a
                                        key={featured.name}
                                        href={featured.href}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="dropdown-featured-item text-dropdown-foreground group"
                                      >
                                        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-xl border border-dropdown-border/30 group-hover:border-primary/30 transition-all duration-300">
                                          <span className="text-2xl group-hover:scale-110 transition-transform">{featured.icon}</span>
                                          <div>
                                            <span className="font-semibold text-dropdown-foreground group-hover:text-primary transition-colors">{featured.name}</span>
                                            <div className="text-xs text-muted-foreground mt-1">Featured Course</div>
                                          </div>
                                        </div>
                                      </motion.a>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-foreground hover:text-primary font-semibold text-lg transition-all duration-300 relative group py-2"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary-glow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </motion.a>
                )
              )}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="font-semibold border-2 hover:shadow-lg transition-all duration-300">
                  Login
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" size="lg" className="font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  Register Now
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
                {navItems.map((item) =>
                  item.hasDropdown ? (
                    <div key={item.name} className="space-y-1">
                      <button
                        onClick={() => handleDropdownToggle("mobile-courses")}
                        className="mobile-menu-item w-full flex items-center justify-between"
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === "mobile-courses" ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === "mobile-courses" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-accent/50 rounded-md overflow-hidden"
                          >
                            {courseCategories.map((category) => (
                              <div key={category.name} className="p-3 border-b border-border last:border-b-0">
                                <h4 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-2">
                                  {category.icon}
                                  {category.name}
                                </h4>
                                <div className="space-y-1 ml-7">
                                  {category.courses.slice(0, 3).map((course) => (
                                    <a
                                      key={course.name}
                                      href={course.href}
                                      className="block text-sm text-muted-foreground hover:text-foreground py-1"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {course.name}
                                    </a>
                                  ))}
                                  {category.courses.length > 3 && (
                                    <a
                                      href="#courses"
                                      className="block text-sm text-primary hover:underline py-1"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      View all {category.courses.length} courses →
                                    </a>
                                  )}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="mobile-menu-item"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )
                )}
                
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