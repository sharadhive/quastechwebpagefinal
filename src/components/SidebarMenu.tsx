import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, ArrowRight, BookOpen, Home, Briefcase } from "lucide-react";
import { createPortal } from "react-dom";

interface SidebarMenuItem {
  name: string;
  href: string;
  isExternal: boolean;
}

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: SidebarMenuItem[];
  onCoursesClick?: () => void;
}

const SidebarMenu = ({ isOpen, onClose, menuItems, onCoursesClick }: SidebarMenuProps) => {
  const sidebarContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            style={{ zIndex: 99998 }}
          />
          
          {/* Sidebar Canvas */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-[85vw] sm:w-[320px] md:w-[380px] bg-white shadow-2xl overflow-y-auto"
            style={{ zIndex: 99999 }}
          >
            {/* Sidebar Header */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 px-5 py-4 md:py-5 flex items-center justify-between border-b border-white/20 sticky top-0 z-10">
              <h2 className="text-white text-lg md:text-xl font-bold">Menu</h2>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-white hover:bg-white/20 rounded-full p-1.5 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Sidebar Menu Items */}
            <div className="py-4">
              {/* Main Navigation Items */}
              <div className="px-4 mb-2">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
                  Navigation
                </div>
                
                {/* Home Link */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05, duration: 0.25 }}
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      onClose();
                    }}
                    className="block px-4 py-3.5 rounded-lg text-gray-800 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 font-medium transition-all duration-200 group border-l-4 border-transparent hover:border-blue-500 active:bg-blue-100"
                  >
                    <div className="flex items-center gap-3">
                      <Home className="w-4 h-4 text-gray-500 group-hover:text-blue-600" />
                      <span className="text-base">Home</span>
                    </div>
                  </a>
                </motion.div>

                {/* Placement Link */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.25 }}
                  className="mt-2"
                >
                  <Link
                    to="/placement"
                    onClick={onClose}
                    className="block px-4 py-3.5 rounded-lg text-gray-800 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 font-medium transition-all duration-200 group border-l-4 border-transparent hover:border-blue-500 active:bg-blue-100"
                  >
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-4 h-4 text-gray-500 group-hover:text-blue-600" />
                      <span className="text-base">Placement</span>
                    </div>
                  </Link>
                </motion.div>
              </div>

              {/* Courses Button */}
              {onCoursesClick && (
                <div className="px-4 mb-4">
                  <motion.button
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15, duration: 0.25 }}
                    onClick={() => {
                      onCoursesClick();
                      onClose();
                    }}
                    className="w-full px-4 py-3.5 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md active:scale-95"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Course's</span>
                  </motion.button>
                </div>
              )}

              {/* Divider */}
              <div className="px-4 my-4">
                <div className="border-t border-gray-200"></div>
              </div>

              {/* Additional Menu Items Section */}
              <div className="px-4">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
                  More Pages
                </div>
                
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.08, duration: 0.25 }}
                    className="mb-2"
                  >
                    {item.isExternal ? (
                      <Link
                        to={item.href}
                        onClick={onClose}
                        className="block px-4 py-3.5 rounded-lg text-gray-800 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 font-medium transition-all duration-200 group border-l-4 border-transparent hover:border-blue-500 active:bg-blue-100"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-base">{item.name}</span>
                          <motion.div
                            initial={{ x: -5, opacity: 0 }}
                            whileHover={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="text-blue-600"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={onClose}
                        className="block px-4 py-3.5 rounded-lg text-gray-800 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 font-medium transition-all duration-200 group border-l-4 border-transparent hover:border-blue-500 active:bg-blue-100"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-base">{item.name}</span>
                          <motion.div
                            initial={{ x: -5, opacity: 0 }}
                            whileHover={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="text-blue-600"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Divider for future menu sections */}
              <div className="px-4 mt-6 mb-4">
                <div className="border-t border-gray-200"></div>
              </div>
              
              {/* Placeholder for future menu items */}
              <div className="px-4 text-xs text-gray-400 italic text-center">
                More options coming soon...
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  // Render sidebar using portal at document body level to avoid stacking context issues
  if (typeof document !== 'undefined') {
    return createPortal(sidebarContent, document.body);
  }
  
  return sidebarContent;
};

export default SidebarMenu;

