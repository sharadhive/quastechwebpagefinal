import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";

// Branch data
const branchesData = [
  {
    id: "Thane",
    name: "Thane Branch",
    address: "201, Anant Laxmi Chambers, Dada Patil Marg, opp. Waman Hari Pethe Jewellers, Thane (W), Maharashtra 400602",
    phone: "+91 8422800381",
    email: "info@quastech.in",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.9488881234!2d72.97089!3d19.19178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDExJzMwLjQiTiA3MsKwNTgnMTUuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
  },
  {
    id: "Borivali",
    name: "Borivali Branch",
    address: "A/401, Court Chamber, Swami Vivekananda Rd, opp. Moksh Plaza, Borivali West, Maharashtra 400092",
    phone: "+91 8422800384",
    email: "info@quastech.in",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.9488881234!2d72.85581!3d19.23083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzUxLjAiTiA3MsKwNTEnMjAuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
  },
  {
    id: "Vashi",
    name: "Vashi Branch",
    address: "Corporate Wing, Haware Fantasia Business Park, F-185(A, behind Inorbit Mall, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
    phone: "+91 8422800381",
    email: "info@quastech.in",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d73.00787!3d19.07618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzM0LjIiTiA3M8KwMDAnMjguMyJF!5e0!3m2!1sen!2sin!4v1234567890"
  },
  {
    id: "Mohali",
    name: "Mohali Branch",
    address: "SCF 62, Third Floor, Phase 7, Sector 61, Sahibzada Ajit Singh Nagar, Punjab 160062",
    phone: "+91 7208008461",
    email: "info@quastech.in",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5!2d76.69124!3d30.70332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzEyLjAiTiA3NsKwNDEnMjguNSJF!5e0!3m2!1sen!2sin!4v1234567890"
  }
];

const ContactPage = () => {
  const [selectedBranch, setSelectedBranch] = useState("Thane");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const currentBranch = branchesData.find((b) => b.id === selectedBranch);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Banner Section with Quastech Brand Gradient */}
      <section className="relative h-[450px] md:h-[550px] overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#f97316]">
        {/* Animated Background Patterns */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(249, 115, 22, 0.5) 0%, transparent 50%)',
          }} />
        </div>

        {/* Animated Mesh Gradient Overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.4) 0%, transparent 50%), 
                           linear-gradient(225deg, rgba(249, 115, 22, 0.4) 0%, transparent 50%),
                           linear-gradient(45deg, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
        }} />

        {/* Animated Floating Elements - Quastech Colors */}
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            x: [0, 15, 0],
            rotate: [0, 8, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 25, 0],
            x: [0, -15, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/20 to-orange-500/20 rounded-full blur-3xl"
        />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 border-l-4 border-orange-500 pl-4"
              style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                letterSpacing: '0.02em'
              }}
            >
              GET IN TOUCH
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                We Accelerate
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Customer Experiences
              </h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl"
            >
              In this competitive world where each industry demands more, we help you in transforming your skill base that drives measurable impact on your Professional Life.
            </motion.p>
          </motion.div>

          {/* Contact Us Illustration - Adjusted Position */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <img
                src="/assets/contact_imges/Contact_us-01-removebg-preview.png"
                alt="Contact Us Illustration"
                className="w-72 xl:w-96 h-auto drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))'
                }}
              />
            </motion.div>
            
            {/* Decorative Circle Behind Image - Quastech Colors */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-500/25 to-orange-500/25 rounded-full blur-2xl -z-10"
            />
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Info Bar */}
      <section className="bg-gradient-to-r from-blue-600 to-orange-500 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="bg-white/20 p-3 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm opacity-90">Phone (For Voice Call)</p>
                <a href="tel:+918422800381" className="text-lg font-bold hover:text-orange-200">
                  +91-8422800381
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="bg-white/20 p-3 rounded-full">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm opacity-90">WhatsApp (For Call & Chat)</p>
                <a href="https://wa.me/918422800381" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-orange-200">
                  +91-8422800381
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="bg-white/20 p-3 rounded-full">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm opacity-90">Email Us</p>
                <a href="mailto:info@quastech.in" className="text-lg font-bold hover:text-orange-200">
                  info@quastech.in
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Enquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <img src="/images/phone.png" alt="Contact" className="w-12 h-12" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Send Us A Message</h3>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Course Interested In
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a course</option>
                    <option value="software-testing">Software Testing</option>
                    <option value="fullstack">Full Stack Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-semibold py-6 rounded-lg text-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Enquiry
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Working Hours */}
              <div className="bg-gradient-to-br from-blue-600 to-orange-500 rounded-2xl shadow-xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Working Hours</h3>
                </div>
                <div className="space-y-3 text-lg">
                  <div className="flex justify-between">
                    <span className="font-semibold">Monday - Friday:</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Saturday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Sunday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Contact Us?</h3>
                <ul className="space-y-4">
                  {[
                    "Get personalized course recommendations",
                    "Schedule a free demo class",
                    "Learn about placement assistance",
                    "Discuss flexible payment options",
                    "Talk to our career counselors",
                    "Visit our training centers"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Visit Our Branches
            </h2>
            <p className="text-lg text-gray-600">Choose your nearest location</p>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full mt-4" />
          </div>

          {/* Branch Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {branchesData.map((branch) => (
              <button
                key={branch.id}
                onClick={() => setSelectedBranch(branch.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedBranch === branch.id
                    ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {branch.name}
              </button>
            ))}
          </div>

          {/* Branch Details and Map */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Branch Info */}
            <motion.div
              key={selectedBranch}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">{currentBranch?.name}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">{currentBranch?.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <a href={`tel:${currentBranch?.phone}`} className="text-blue-600 hover:underline">
                      {currentBranch?.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <a href={`mailto:${currentBranch?.email}`} className="text-blue-600 hover:underline">
                      {currentBranch?.email}
                    </a>
                  </div>
                </div>

                <Button
                  onClick={() => window.open(currentBranch?.map, '_blank')}
                  className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-semibold py-6 rounded-lg"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions
                </Button>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div
              key={`${selectedBranch}-map`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-lg h-[500px]"
            >
              <iframe
                src={currentBranch?.map}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${currentBranch?.name} Location`}
              />
            </motion.div>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default ContactPage;

