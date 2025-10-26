import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JourneySection from "@/components/JourneySection";
import Courses from "@/components/Courses";
import Placement from "@/components/Placement";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import EnquiryForm from "@/components/EnquiryForm";
import BranchSection from "@/components/BranchSection";
import FAQSection from "@/components/FAQSection";
const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      
      <Header />
      <Hero />
      <JourneySection />
      {/* <RobotScene /> */}
      <Courses />
      <Reviews />
      <Placement />
      <About />
       <Contact />
      <EnquiryForm />
      <BranchSection />
      <FAQSection />
    <Footer />
      
      {/* Fixed Google Rating Element - Desktop */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:block"
      >
        <motion.div
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
          onClick={() => window.open('https://www.google.com/search?q=quastech+reviews', '_blank')}
        >
          <div className="w-24 h-32">
            <img
              src="/images/rating.gif"
              alt="Google Rating"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Fixed Google Rating Element - Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="fixed right-0 bottom-4 z-40 block sm:hidden"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
          onClick={() => window.open('https://www.google.com/search?q=quastech+reviews', '_blank')}
        >
          <div className="w-20 h-24">
            <img
              src="/images/rating.gif"
              alt="Google Rating"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
