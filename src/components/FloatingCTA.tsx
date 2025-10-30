import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";

const FloatingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Start collapsed by default

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <AnimatePresence mode="wait">
        {isExpanded ? (
          // Expanded State - Two Separate Buttons
          <motion.div
            key="expanded"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="flex flex-col gap-4"
          >
            {/* Call Us Button */}
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: 10 }}
            >
              <motion.a
                href="tel:+918422800381"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Phone className="w-6 h-6 text-orange-500" />
              </motion.a>
              <motion.a
                href="tel:+918422800381"
                className="bg-black text-white px-4 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
              >
                Call Us Now
              </motion.a>
            </motion.div>

            {/* WhatsApp Button */}
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: 10 }}
            >
              <motion.a
                href="https://wa.me/918422800381"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle className="w-6 h-6 text-green-500" />
              </motion.a>
              <motion.a
                href="https://wa.me/918422800381"
                className="bg-black text-white px-4 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
              >
                Chat With Us
              </motion.a>
            </motion.div>

            {/* Close Button */}
            <motion.button
              onClick={handleToggle}
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow border-2 border-orange-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6 text-orange-500" />
            </motion.button>
          </motion.div>
        ) : (
          // Collapsed State - Single Combined Icon (Initial State)
          <motion.div
            key="collapsed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <motion.button
              onClick={handleToggle}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-2xl transition-shadow border-2 border-orange-500 relative overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* WhatsApp Icon - Top Right (Very close to center) */}
              <div className="absolute top-1 right-1 w-7 h-7 bg-[#25D366] rounded-full flex items-center justify-center shadow-md">
                <MessageCircle className="w-4.5 h-4.5 text-white" fill="white" />
              </div>
              
              {/* Call Icon - Bottom Left (Very close to center) */}
              <Phone className="w-7 h-7 text-orange-500 absolute bottom-1 left-1" strokeWidth={2.5} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingCTA;

