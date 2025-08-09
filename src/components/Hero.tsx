import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award, BookOpen } from "lucide-react";
import MediaSlider from "./MediaSlider";

const Hero = () => {
  const floatingIcons = [
    { icon: BookOpen, delay: 0, position: "top-20 left-10" },
    { icon: Users, delay: 0.5, position: "top-32 right-20" },
    { icon: Award, delay: 1, position: "bottom-32 left-20" },
    { icon: Star, delay: 1.5, position: "bottom-20 right-10" },
  ];
 
  // Typing animation logic
  const fullText = "Future Through Innovation";
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

useEffect(() => {
  let index = 0;

  const typingInterval = setInterval(() => {
    setDisplayedText((prev) => {
      const nextChar = fullText.charAt(index);
      index++;

      if (index > fullText.length) {
        clearInterval(typingInterval);
        return prev;
      }

      return prev + nextChar;
    });
  }, 100);

  return () => clearInterval(typingInterval);
}, []);


  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-gradient-mesh" />

      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: item.delay, duration: 0.8 }}
          className={`absolute ${item.position} hidden lg:block`}
        >
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 4, repeat: Infinity, delay: item.delay }}
            className="p-4 bg-white/10 backdrop-blur-sm rounded-full"
          >
            <item.icon className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">ISO 9001:2015 Certified</span>
            </motion.div>

           <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-snug sm:leading-tight break-words min-h-[5.5rem] sm:min-h-[6.5rem] md:min-h-[7.5rem]"
>
  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 whitespace-pre-wrap break-words">                 
    {displayedText}
    <span className="ml-1">{cursorVisible ? "|" : " "}</span>
  </span>
</motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl mb-8 text-white/90 leading-relaxed"
            >
              Transform your career with cutting-edge IT courses and guaranteed placement programs.
              Join thousands of successful professionals who started their journey with QUASTECH.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button variant="glass" size="lg" className="group">
                Explore Courses
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary">
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">5000+</div>
                <div className="text-sm text-white/80">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">50+</div>
                <div className="text-sm text-white/80">Expert Trainers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">95%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <MediaSlider />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
