import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight,
  MapPin,
  Calendar,
  DollarSign
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const Placement = () => {
  const companies = [
    { name: "Google", logo: "🔵", openings: "25+" },
    { name: "Microsoft", logo: "🟦", openings: "18+" },
    { name: "Amazon", logo: "🟧", openings: "30+" },
    { name: "TCS", logo: "🔷", openings: "50+" },
    { name: "Infosys", logo: "🟣", openings: "40+" },
    { name: "Wipro", logo: "🔶", openings: "35+" },
    { name: "Accenture", logo: "🟢", openings: "28+" },
    { name: "IBM", logo: "🔴", openings: "20+" },
  ];

  const placements = [
    {
      name: "Rahul Sharma",
      role: "Full Stack Developer",
      company: "Google",
      package: "₹24 LPA",
      course: "MERN Stack",
      image: "👨‍💻",
      location: "Bangalore"
    },
    {
      name: "Priya Patel",
      role: "Data Scientist",
      company: "Microsoft",
      package: "₹28 LPA",
      course: "Data Science",
      image: "👩‍💻",
      location: "Hyderabad"
    },
    {
      name: "Arjun Singh",
      role: "ML Engineer",
      company: "Amazon",
      package: "₹32 LPA",
      course: "AI/ML",
      image: "👨‍💼",
      location: "Mumbai"
    },
    {
      name: "Sneha Reddy",
      role: "DevOps Engineer",
      company: "TCS",
      package: "₹18 LPA",
      course: "DevOps",
      image: "👩‍💼",
      location: "Chennai"
    },
    {
      name: "Vikram Kumar",
      role: "Frontend Developer",
      company: "Infosys",
      package: "₹20 LPA",
      course: "React.js",
      image: "👨‍💻",
      location: "Pune"
    },
    {
      name: "Anjali Sharma",
      role: "Backend Developer",
      company: "Wipro",
      package: "₹22 LPA",
      course: "Node.js",
      image: "👩‍💻",
      location: "Delhi"
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "95%",
      label: "Placement Rate",
      color: "text-green-500"
    },
    {
      icon: DollarSign,
      value: "₹8.5L",
      label: "Average Package",
      color: "text-blue-500"
    },
    {
      icon: Building2,
      value: "500+",
      label: "Partner Companies",
      color: "text-purple-500"
    },
    {
      icon: Users,
      value: "5000+",
      label: "Students Placed",
      color: "text-orange-500"
    }
  ];

  const services = [
    "Resume Building & Optimization",
    "Mock Interviews & Feedback",
    "Technical Interview Preparation",
    "Soft Skills Development",
    "Industry Project Experience",
    "1-on-1 Career Counseling",
    "LinkedIn Profile Optimization",
    "Salary Negotiation Training"
  ];

  return (
    <section id="placement" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">100% Placement Assistance</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Your Dream Job
            <span className="block text-secondary">Awaits You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our dedicated placement cell has helped thousands of students land their dream jobs 
            in top companies worldwide with attractive packages.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Recent Placements - Enhanced Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Recent Success Stories</h3>
          
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ 
                clickable: true,
                dynamicBullets: true 
              }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                }
              }}
              className="!pb-16"
            >
              {placements.map((placement, index) => (
                <SwiperSlide key={placement.name} className="!w-80">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="h-full"
                  >
                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                      <div className="bg-gradient-primary p-6 text-center relative overflow-hidden">
                        <motion.div 
                          className="absolute inset-0 opacity-20"
                          animate={{ 
                            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] 
                          }}
                          transition={{ 
                            duration: 8, 
                            repeat: Infinity, 
                            ease: "linear" 
                          }}
                          style={{
                            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                            backgroundSize: '200% 200%'
                          }}
                        />
                        <div className="text-5xl mb-3 relative z-10">{placement.image}</div>
                        <div className="text-white font-bold text-lg relative z-10">{placement.name}</div>
                        <motion.div 
                          className="absolute top-2 right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                          <span className="text-sm">⭐</span>
                        </motion.div>
                      </div>
                      <CardContent className="p-6 flex-1">
                        <div className="space-y-3">
                          <div className="font-bold text-lg text-foreground text-center border-b pb-2">
                            {placement.role}
                          </div>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <Building2 className="w-4 h-4 text-blue-500" />
                            <span className="font-medium">{placement.company}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 text-green-500" />
                            <span>{placement.location}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 text-purple-500" />
                            <span>{placement.course}</span>
                          </div>
                          <motion.div 
                            className="text-2xl font-bold text-center pt-3 bg-gradient-primary bg-clip-text text-transparent"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {placement.package}
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gradient-primary hover:text-white transition-all duration-300 group">
              <ArrowRight className="w-5 h-5 rotate-180 group-hover:scale-110 transition-transform" />
            </div>
            <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gradient-primary hover:text-white transition-all duration-300 group">
              <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </motion.div>

        {/* Our Hiring Partners */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Our Hiring Partners</h3>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="!px-2"
          >
            {/* Group 1 */}
            <SwiperSlide>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {companies.slice(0, 4).map((company, index) => (
                  <motion.div 
                    key={company.name} 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-card border rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                      <div className="text-3xl mb-2">{company.logo}</div>
                      <div className="font-semibold text-sm">{company.name}</div>
                      <div className="text-xs text-muted-foreground">{company.openings} openings</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </SwiperSlide>

            {/* Group 2 */}
            <SwiperSlide>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {companies.slice(4, 8).map((company, index) => (
                  <motion.div 
                    key={company.name} 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-card border rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                      <div className="text-3xl mb-2">{company.logo}</div>
                      <div className="font-semibold text-sm">{company.name}</div>
                      <div className="text-xs text-muted-foreground">{company.openings} openings</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>

        {/* Placement Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Comprehensive Placement Support
            </h3>
            <p className="text-muted-foreground mb-6">
              From resume building to salary negotiation, we provide end-to-end placement 
              assistance to ensure you land your dream job with confidence.
            </p>
            <div className="grid gap-3">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{service}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <Button variant="hero" size="lg">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          <motion.div
            animate={{ 
              rotateY: [0, 15, 0, -15, 0],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <div className="relative bg-gradient-hero rounded-3xl p-8 text-white">
              <div className="text-center">
                <Award className="w-16 h-16 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-4">100% Placement Guarantee</h4>
                <p className="mb-6">
                  We're so confident in our training that we guarantee placement for all 
                  our students who complete the course successfully.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">₹32L</div>
                    <div className="text-sm opacity-90">Highest Package</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm opacity-90">Success Rate</div>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center"
              >
                <span className="text-2xl">🎯</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Placement;