import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  Award,
  Users,
  Target,
  Eye,
  Heart,
  TrendingUp,
  Shield,
  Star,
  Zap,
  Globe,
  BookOpen,
  Trophy,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Rocket,
  Lightbulb,
  HandHeart,
  Clock,
  Code,
  Building2
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "We've been a trusted name in IT education for over 15 years, consistently delivering quality training and outstanding placement results. Our track record speaks for itself with 40,000+ successful career transformations."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously evolve our curriculum to match industry demands, incorporating cutting-edge technologies and real-world projects. Our teaching methods combine traditional excellence with modern digital learning platforms."
    },
    {
      icon: Heart,
      title: "Student Success",
      description: "Every student matters. We provide personalized attention, dedicated mentorship, and comprehensive support throughout their learning journey. Our 95% placement rate reflects our commitment to student success."
    },
    {
      icon: Target,
      title: "Industry Alignment",
      description: "Our courses are designed in collaboration with industry experts and leading tech companies. We ensure our curriculum stays relevant, practical, and aligned with current market requirements and emerging technologies."
    }
  ];

  const achievements = [
    { icon: Users, value: "40,000+", label: "Students Trained", description: "Successfully trained and placed" },
    { icon: Building2, value: "800+", label: "Hiring Partners", description: "Trusted companies" },
    { icon: Trophy, value: "95%", label: "Placement Rate", description: "Career success rate" },
    { icon: Clock, value: "15+", label: "Years of Excellence", description: "Industry experience" },
    { icon: Award, value: "19.5 LPA", label: "Highest Package", description: "Top placement offer" },
    { icon: Globe, value: "5", label: "Cities", description: "Pan-India presence" }
  ];

  const whyChooseUs = [
    { icon: BookOpen, title: "Industry-Relevant Curriculum", description: "Updated courses aligned with current market demands and emerging technologies" },
    { icon: Users, title: "Expert Trainers", description: "Learn from industry professionals with 10+ years of real-world experience" },
    { icon: Briefcase, title: "100% Placement Support", description: "Dedicated placement cell with strong connections to top IT companies" },
    { icon: Code, title: "Hands-on Projects", description: "Real-world projects to build your portfolio and gain practical experience" },
    { icon: CheckCircle2, title: "Flexible Learning", description: "Online and offline modes to suit your schedule and learning preference" },
    { icon: Star, title: "Lifetime Support", description: "Continuous mentorship and career guidance even after course completion" }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Foundation",
      description: "QUASTECH was founded with a vision to revolutionize IT education in India, bridging the gap between academic learning and industry requirements.",
      icon: Rocket
    },
    {
      year: "2015",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2015 certification for quality management, establishing our commitment to excellence in education delivery.",
      icon: Shield
    },
    {
      year: "2018",
      title: "Expansion",
      description: "Expanded to multiple cities with state-of-the-art training centers, bringing quality IT education closer to students across India.",
      icon: Globe
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched comprehensive online learning platform during pandemic, ensuring uninterrupted quality education for thousands of students.",
      icon: Zap
    },
    {
      year: "2022",
      title: "10K Students Milestone",
      description: "Celebrated training over 10,000 students, with many securing positions in top-tier companies including Google, Microsoft, Amazon, and TCS.",
      icon: GraduationCap
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as one of India's leading IT training institutes with 40,000+ successful placements and 800+ hiring partners.",
      icon: Star
    }
  ];

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <Header />

        {/* Hero Banner with Gradient - Matching Website Theme */}
        <section className="relative px-4 pt-20 md:pt-24 pb-12 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Clean Professional Hero Gradient - Same as Hero Component */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
            {/* Subtle Overlay for Better Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-orange-900/20" />
            {/* Professional Mesh Overlay - Reduced Opacity */}
            <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
            {/* Subtle Grid Pattern - Reduced Opacity */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>
          <div className="relative z-10 w-full max-w-6xl mx-auto text-center py-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white">
                About Quastech
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed mb-4">
                Empowering Careers Through Excellence in IT Education
              </p>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Since 2010, we've been committed to transforming lives through quality education, industry-relevant training, and unwavering support for student success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Us Section - Left Text, Right Image */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-[#19376D]">
                About us
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                QUASTECH (Future Through Innovations) is a leading IT training institute established with the mission "To Provide excellent & smart working professionals to IT industry." We specialize in delivering unique and professional training for graduates and postgraduates, focusing on real-time industry training with domain knowledge.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Our training approach is well-organized, systematized, and standardized, ensuring every student receives quality education that prepares them for successful careers in the IT sector. We believe in the overall growth of candidates, combining technical expertise with professional development.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                With specialized and certified faculty for each course, our training is 100% based on current industry requirements and real-time projects. We take pride in our 95% placement rate and strong connections with 800+ hiring companies, helping over 40,000 students achieve their career goals.
              </p>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/about_asset/images/AboutUs_iamge.jpg"
                  alt="Quastech Team"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/images/branches/IMG20240104153417.jpg";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-[#19376D]">
                Our Story
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                QUASTECH was founded in 2010 with a simple yet powerful vision: to bridge the gap between academic learning and industry requirements. We recognized that traditional education often falls short in preparing students for real-world challenges in the rapidly evolving IT landscape.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Over the years, we've evolved from a small training center to one of India's most trusted IT education institutes. Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep understanding of industry needs.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Today, we take pride in our alumni network of over <span className="text-blue-600 font-bold">40,000+ professionals</span> working in leading companies worldwide. Their success is a testament to our dedication and the quality of education we provide. From fresh graduates to career switchers, we've been the catalyst for thousands of successful career transformations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Values Section - Left Values, Right Image */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-[#19376D]">
                Our Values
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column - Values Grid */}
              <div className="grid grid-cols-1 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-blue-50 rounded-xl p-6 border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#19376D] mb-3">{value.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Column - Angular Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative transform rotate-3 md:rotate-6 border-2 border-blue-600 rounded-lg overflow-hidden shadow-2xl p-2 bg-gradient-to-br from-blue-50 to-transparent">
                  <img
                    src="/assets/about_asset/images/Main_About.jpg"
                    alt="Quastech Values"
                    className="w-full h-auto object-cover rounded"
                    onError={(e) => {
                      e.currentTarget.src = "/images/branches/IMG20240104153434.jpg";
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-[#19376D]">
                Why Choose Quastech?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                What makes us stand out from the rest
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#19376D] mb-3">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Grid */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-[#19376D]">
                Our Achievements
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#f6f8fa] rounded-xl p-6 text-center border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-extrabold text-[#19376D] mb-2">{achievement.value}</div>
                  <div className="text-sm font-bold text-gray-700 mb-1">{achievement.label}</div>
                  <div className="text-xs text-gray-600">{achievement.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-[#19376D]">
                Our Journey
              </h2>
              <p className="text-lg md:text-xl text-gray-700">Key milestones that shaped our success</p>
            </motion.div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1 bg-white rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0">
                        <milestone.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-[#19376D]">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-orange-900/20"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of successful professionals who started their journey with QUASTECH
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Enroll Now
                </motion.a>
                <motion.a
                  href="/placement"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
                >
                  View Placements
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default AboutPage;
