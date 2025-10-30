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
  HandHeart
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const achievements = [
    { icon: Users, value: "10,000+", label: "Happy Students", color: "from-blue-500 to-cyan-500" },
    { icon: Award, value: "95%", label: "Placement Rate", color: "from-green-500 to-emerald-500" },
    { icon: Globe, value: "800+", label: "Hiring Partners", color: "from-purple-500 to-pink-500" },
    { icon: Trophy, value: "15+", label: "Years of Excellence", color: "from-orange-500 to-red-500" }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from course content to student support.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Our students are at the heart of everything. We ensure personalized attention and support.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously innovate our teaching methods to stay ahead in the tech education landscape.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: HandHeart,
      title: "Integrity",
      description: "We maintain the highest standards of integrity and transparency in all our operations.",
      color: "from-green-500 to-emerald-600"
    }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Foundation",
      description: "QUASTECH was founded with a vision to revolutionize IT education in India.",
      icon: Rocket
    },
    {
      year: "2015",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2015 certification for quality management.",
      icon: Shield
    },
    {
      year: "2018",
      title: "Expansion",
      description: "Expanded to multiple cities with state-of-the-art training centers.",
      icon: Globe
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched comprehensive online learning platform during pandemic.",
      icon: Zap
    },
    {
      year: "2022",
      title: "10K Students",
      description: "Celebrated the milestone of training over 10,000 students.",
      icon: GraduationCap
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as one of India's leading IT training institutes.",
      icon: Star
    }
  ];

  const whyChooseUs = [
    { icon: BookOpen, title: "Industry-Relevant Curriculum", description: "Updated courses aligned with current market demands" },
    { icon: Users, title: "Expert Trainers", description: "Learn from industry professionals with years of experience" },
    { icon: Briefcase, title: "100% Placement Support", description: "Dedicated placement cell with strong industry connections" },
    { icon: Trophy, title: "Hands-on Projects", description: "Real-world projects to build your portfolio" },
    { icon: CheckCircle2, title: "Flexible Learning", description: "Online and offline modes to suit your schedule" },
    { icon: Star, title: "Lifetime Support", description: "Continuous mentorship even after course completion" }
  ];

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white">
        <Header />

        {/* UNIFIED HERO BANNER SECTION */}
        <section className="hero-section">
          <div className="absolute inset-0">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src="/assets/about_asset/images/Main_About.jpg"
              alt="About QUASTECH"
              className="w-full h-full object-cover"
            />
            <div className="hero-overlay" />
          </div>

          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="hero-badge"
              >
                <Award className="w-5 h-5" />
                <span>ABOUT QUASTECH</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="hero-title"
              >
                Transforming Lives Through
                <span className="block text-gradient-institute-alt">
                  Quality Education
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="hero-subtitle"
              >
                Since 2010, we've been committed to empowering individuals with cutting-edge skills and knowledge to excel in the tech industry.
              </motion.p>
            </motion.div>
          </div>

          {/* Floating Animation Elements */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-pink-400/30 rounded-full blur-2xl"
          />
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {achievement.value}
                    </div>
                    <div className="text-gray-600 font-medium">{achievement.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src="/assets/about_asset/images/AboutUs_iamge.jpg"
                    alt="Our Story"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-2xl shadow-xl"
                >
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">Years of Excellence</div>
                </motion.div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                  Our Story
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 mt-4 rounded-full" />
                </h2>

                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    <strong className="text-gray-800">QUASTECH</strong> was founded in 2010 with a simple yet powerful vision: to bridge the gap between academic learning and industry requirements. We recognized that traditional education often falls short in preparing students for real-world challenges.
                  </p>
                  <p>
                    Over the years, we've evolved from a small training center to one of India's most trusted IT education institutes. Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep understanding of industry needs.
                  </p>
                  <p>
                    Today, we take pride in our alumni network of over <strong className="text-blue-600">10,000+ professionals</strong> working in leading companies worldwide. Their success is a testament to our dedication and the quality of education we provide.
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg cursor-pointer"
                >
                  <Rocket className="w-5 h-5" />
                  Join Our Success Story
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white relative overflow-hidden">
          {/* Animated Background Circles */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  To be the most preferred IT education institute globally, recognized for transforming individuals into industry-ready professionals through innovative teaching methods and cutting-edge technology.
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  To provide world-class IT training that empowers individuals with practical skills, industry knowledge, and the confidence to excel in their careers, while maintaining the highest standards of quality and ethics.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -15, rotateY: 5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline/Milestones Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our Journey</h2>
              <p className="text-xl text-gray-600">Key milestones that shaped our success</p>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mt-4 rounded-full" />
            </div>

            <div className="max-w-5xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1 text-right">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                    >
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </motion.div>
                  </div>

                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <milestone.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    {index < milestones.length - 1 && (
                      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-blue-600 to-purple-600" />
                    )}
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Why Choose QUASTECH?</h2>
              <p className="text-xl text-gray-600">What makes us stand out from the rest</p>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of successful professionals who started their journey with QUASTECH
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Enroll Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
                >
                  Talk to Counselor
                </motion.button>
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

