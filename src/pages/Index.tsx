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
import { DarkModeProvider } from "@/contexts/DarkModeContext";
const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        
        <Header />
        <Hero />
        <Courses />
        <About />
        <Reviews />
        <JourneySection />
        {/* <RobotScene /> */}
         <Placement />
         <Contact />
        <EnquiryForm />
        <BranchSection />
        <FAQSection />
      <Footer />
        
        {/* Fixed Google Rating Element - Desktop */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            whileHover={{ scale: 1.05, x: -5 }}
            className="cursor-pointer"
            onClick={() => window.open('https://www.google.com/search?q=quastech+reviews', '_blank')}
          >
            <div 
              className="bg-blue-600 rounded-lg shadow-xl flex items-center justify-center"
              style={{ 
                transform: 'rotate(-90deg)',
                width: '160px',
                height: '50px',
                padding: '5px'
              }}
            >
              <img
                src="/images/rating.gif"
                alt="Google Rating"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Fixed Google Rating Element - Mobile & Tablet */}
        <div className="fixed bottom-6 right-4 z-50 block lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => window.open('https://www.google.com/search?q=quastech+reviews', '_blank')}
          >
            <div 
              className="bg-blue-600 rounded-lg shadow-xl flex items-center justify-center"
              style={{ 
                transform: 'rotate(90deg)',
                width: '80px',
                height: '160px',
                padding: '8px'
              }}
            >
              <img
                src="/images/rating.gif"
                alt="Google Rating"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
        
        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
        />
      </div>
    </DarkModeProvider>
  );
};

export default Index;
