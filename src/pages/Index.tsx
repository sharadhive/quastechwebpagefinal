import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
      <Courses />
      <Placement />
      <Reviews />
      <About />
      <EnquiryForm />
      <BranchSection />
      <FAQSection />
      
      <Contact />
      <Footer />
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
