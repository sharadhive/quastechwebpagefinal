import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
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
  ArrowRight,
} from "lucide-react";
import CoursesMegaMenu from "@/components/CoursesMegaMenu";
import CoursesModal from "@/components/CoursesModal";
import SidebarMenu from "@/components/SidebarMenu";
import { useDarkMode } from "@/contexts/DarkModeContext";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showCoursesMenu, setShowCoursesMenu] = useState(false);
  const [activeCourseType, setActiveCourseType] = useState<"it" | "non-it" | "eclass" | "degree" | null>(null);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);
  const [showCoursesModal, setShowCoursesModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  // Main navigation items (visible in navbar) - Empty since Placement is in sidebar menu
  const navItems: { name: string; href: string; isExternal: boolean }[] = [];

  // Sidebar menu items (Contact-Us and About-Us)
  const sidebarMenuItems = [
    { name: "Contact-Us", href: "/contact", isExternal: true },
    { name: "About-Us", href: "/about", isExternal: true },
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
      {/* Courses Modal */}
      <CoursesModal isOpen={showCoursesModal} onClose={() => setShowCoursesModal(false)} />
      
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
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-gray-50 px-3 py-1 rounded-md text-xs font-semibold transition-colors"
                  onClick={() => alert("Login functionality will be implemented")}
                >
                  Login
                </motion.button> */}
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
        className={`sticky top-0 z-50 bg-white border-b border-gray-200 shadow-lg backdrop-blur-sm ${isSidebarOpen ? 'pr-0' : ''}`}
        style={{
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
          transform: 'translateZ(0)',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)'
        }}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="flex items-center justify-between h-18 sm:h-20 md:h-24 lg:h-28">
            {/* Logo Section with Courses Button */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              {/* Main QUASTECH Logo */}
              <Link 
                to="/" 
                className="flex items-center"
                onClick={(e) => {
                  // If already on home page, scroll to top; otherwise let Link handle navigation
                  if (window.location.pathname === '/' || window.location.pathname === '') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                <img
                  src="/uploads/64f34837-4f64-4bbc-886b-305630eefd79.png"
                  alt="QUASTECH Logo"
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto cursor-pointer hover:opacity-90 transition-opacity"
                />
              </Link>
              
              {/* Courses Button - Next to Logo */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCoursesModal(true)}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
              >
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Course's</span>
              </motion.button>
            </div>


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
                  onClick={() => window.location.href = 'tel:+918422800381'}
                >
                  Speak to Counsellor
                </Button>
              </motion.div>

              {/* Burger Menu Icon - Hidden when sidebar is open */}
              {!isSidebarOpen && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSidebarOpen(true)}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 transition-colors duration-300"
                  title="Menu"
                >
                  <Menu className="w-5 h-5 text-gray-600 dark-mode:text-gray-300" />
                </motion.button>
              )}
            </div>

            {/* Animated Mobile Menu Button - Opens Sidebar Menu */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-primary/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </motion.button>
          </div>
        </div>


        {/* Right Side Sidebar Menu - Canvas Component */}
        <SidebarMenu
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          menuItems={sidebarMenuItems}
          onCoursesClick={() => setShowCoursesModal(true)}
        />
      </motion.header>
    </>
  );
};

export default Header;