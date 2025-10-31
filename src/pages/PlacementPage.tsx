import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Users, Award, Target, Star, ChevronLeft, ChevronRight, Phone, Mail, CheckCircle2, FileText, Briefcase, Code, Terminal, GitBranch } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Our placement students for banner and stories
const students = [
  {
    name: "Aditya Mistry",
    role: "Full Stack Developer at Google",
    image: "/images/Review list/1Aditya Mistry.jpeg"
  },
  {
    name: "Anurag Rajpurohit",
    role: "Data Scientist at Microsoft",
    image: "/images/Review list/2Anurag Rajpurohit.jpeg"
  },
  {
    name: "Sagar Chaudhari",
    role: "DevOps Engineer at Amazon",
    image: "/images/Review list/3Sagar Chaudhari.jpeg"
  },
  {
    name: "Sonakshi Saxena",
    role: "Mobile App Developer at Flipkart",
    image: "/images/Review list/4Sonakshi Saxena.jpeg"
  },
  {
    name: "Jesica Mistry",
    role: "Cybersecurity Analyst at TCS",
    image: "/images/Review list/5Jesica Mistry.jpeg"
  },
  {
    name: "Atish Satpute",
    role: "Software Engineer at Infosys",
    image: "/images/Review list/6Atish Satpute.jpeg"
  }
];

// Actual company logos
const companyList = [
  { name: "Accenture", logo: "/images/Logo folder/accenture.jpg" },
  { name: "TCS", logo: "/images/Logo folder/tcs.jpg" },
  { name: "Capgemini", logo: "/images/Logo folder/capgemini.jpg" },
  { name: "JustDial", logo: "/images/Logo folder/justdial.jpg" },
  { name: "Mind Gate", logo: "/images/Logo folder/mind gate.jpg" },
  { name: "Infibeam", logo: "/images/Logo folder/infibeam.jpg" },
  { name: "Ingram", logo: "/images/Logo folder/ingram.jpg" },
  { name: "AQM", logo: "/images/Logo folder/AQM_New_Logo.jpg" },
  { name: "Aurion", logo: "/images/Logo folder/Aurion logo.png" },
  { name: "Axioned", logo: "/images/Logo folder/axioned.jpg" },
  { name: "Cybertech", logo: "/images/Logo folder/cybertech.jpg" },
  { name: "GreytHR", logo: "/images/Logo folder/greytrix_logo.jpg" },
];

// Placement roles by category
const placementCategories = [
  { key: 'all', label: 'All Placements' },
  { key: 'data-analyst', label: 'Data Analyst' },
  { key: 'data-science', label: 'Data Science' },
  { key: 'web-developer', label: 'Web Developer' },
  { key: 'software-engineer', label: 'Software Engineer' }
];

// Placement data
const roleData = {
  'data-analyst': [
    {name: 'Nandesh Ringe', role: 'Data Analyst', company: {name: 'Drone Pay', logo: '/images/Logo folder/tcs.jpg'}},
    {name: 'Isha Wase', role: 'Data Analyst', company: {name: 'Hexatic Tech Ltd', logo: '/images/Logo folder/capgemini.jpg'}},
  ],
  'data-science': [
    {name: 'Aditya Mistry', role: 'Data Scientist', company: {name: 'TCS', logo: '/images/Logo folder/tcs.jpg'}},
    {name: 'Anurag Rajpurohit', role: 'Data Scientist', company: {name: 'Microsoft', logo: '/images/Logo folder/accenture.jpg'}},
  ],
  'web-developer': [
    {name: 'Sagar Chaudhari', role: 'Web Developer', company: {name: 'IBM', logo: '/images/Logo folder/mind gate.jpg'}},
    {name: 'Sonakshi Saxena', role: 'Web Developer', company: {name: 'Flipkart', logo: '/images/Logo folder/infibeam.jpg'}},
  ],
  'software-engineer': [
    {name: 'Jesica Mistry', role: 'Software Engineer', company: {name: 'Hexatic Tech Ltd', logo: '/images/Logo folder/capgemini.jpg'}},
    {name: 'Atish Satpute', role: 'Software Engineer', company: {name: 'Core6 Systems', logo: '/images/Logo folder/tcs.jpg'}},
    {name: 'Shubham Dongarwar', role: 'Software Engineer', company: {name: 'Core6 Systems', logo: '/images/Logo folder/accenture.jpg'}},
  ],
};

const getPlacements = (category) => {
  if(category === 'all') {
    let results = [];
    for (let i = 0; i < 10; i++) {
      let comp = companyList[i % companyList.length];
      results.push({
        name: students[i % students.length].name,
        role: students[i % students.length].role,
        image: students[i % students.length].image,
        company: comp,
      });
    }
    return results;
  } else {
    let length = category === 'software-engineer' ? 3 : 2;
    let results = [];
    for (let i = 0; i < length; i++) {
      let comp = companyList[(i + category.length) % companyList.length];
      results.push({
        name: students[i % students.length].name,
        role: placementCategories.find(cat => cat.key === category)?.label || '',
        image: students[i % students.length].image,
        company: comp,
      });
    }
    return results;
  }
};

// Branch images for memories/campus drives
const branchImages = [
  "/images/branches/IMG20240104153417.jpg",
  "/images/branches/IMG20240104153434.jpg",
  "/images/branches/IMG20240104153526.jpg",
];

// Testimonials data
const testimonials = [
  {
    name: "Prashant Vhatkar",
    role: "Software Engineer",
    company: "Top Company",
    image: "/images/Review list/1Aditya Mistry.jpeg",
    review: "Stuck after graduation with just theory, Quastech turned my career around. With their practical training and expert guidance, I gained the skills and confidence to crack interviews. Now, I'm placed at a top company with a great package, all thanks to Quastech's structured learning and constant support."
  },
  {
    name: "Sakshi Badwaik",
    role: "Data Analyst",
    company: "Tech Company",
    image: "/images/Review list/4Sonakshi Saxena.jpeg",
    review: "From challenges and uncertainty to success, Quastech's expert trainers and hands-on training gave me the confidence and skills to secure my dream job. Their support and real-world projects truly made all the difference."
  },
  {
    name: "Satish Gaulkar",
    role: "Software Developer",
    company: "Banking Sector",
    image: "/images/Review list/6Atish Satpute.jpeg",
    review: "After facing multiple rejections due to a career gap, Quastech helped me regain my confidence and sharpen my technical skills. From SQL to coding, I received all the support needed to restart my career successfully."
  },
  {
    name: "Baggu Vamsi",
    role: "Full Stack Developer",
    company: "IT Industry",
    image: "/images/Review list/2Anurag Rajpurohit.jpeg",
    review: "I joined Quastech's Full Stack Java Web Development course after thorough research. From mock interviews to technical training, every session helped me upskill with confidence. Thanks to Quastech's support, I successfully transitioned to a high-paying role."
  },
  {
    name: "Dhanashree Lohar",
    role: "Python Developer",
    company: "Tech Startup",
    image: "/images/Review list/3Sagar Chaudhari.jpeg",
    review: "Quastech exceeded my expectations with their well-structured curriculum and knowledgeable instructors. The instructors were not only skilled but also supportive throughout the course. Their guidance played a big role in helping me build a strong foundation in Python web development."
  },
];

// Profile building sessions
const profileSessions = [
  {
    id: 1,
    title: "Resume Preparation",
    icon: FileText,
    description: "Difference between CV & Resume. Previewing resumes of professionals working at Google, Microsoft, Facebook etc. Do's & Don't of the resumes to stand out in the market.",
    image: "/images/branches/IMG20240104153417.jpg"
  },
  {
    id: 2,
    title: "Mock Interview",
    icon: Briefcase,
    description: "Building up the confidence level of candidates through continuous mock practice. Industry-oriented technical questions are asked during mocks. Cross faculty mocks are performed to brush up the technical skills.",
    image: "/images/branches/IMG20240104153434.jpg"
  },
  {
    id: 3,
    title: "Web Portfolio Development",
    icon: Code,
    description: "A web portfolio increases your chance of getting hired by 200%. Build your web portfolio by your own in just 3 hours time. Our team of experts will guide you in adding relevant skills, project images, videos and much more.",
    image: "/images/branches/IMG20240104153526.jpg"
  },
  {
    id: 4,
    title: "Linux Training",
    icon: Terminal,
    description: "Linux is used by more than 70% of the companies. Individuals are trained with strong knowledge of the operating system during the training period. Rich knowledge in Linux increases your chance of getting hired by 200%.",
    image: "/images/branches/IMG20240104153417.jpg"
  },
  {
    id: 5,
    title: "GIT Training",
    icon: GitBranch,
    description: "GIT is used by more than 99% of companies. We deliver a rich knowledge in GIT as Learners are supposed to use the same in programming. GIT is on high demand and the training improves your chance of getting hired.",
    image: "/images/branches/IMG20240104153434.jpg"
  },
];

// Upcoming placement drives
const upcomingDrives = [
  {
    company: "Sciative Solution Pvt Ltd",
    website: "www.sciative.com",
    position: "Data Science (Full Stack Developer)",
    openings: 5
  },
  {
    company: "Lenden club",
    website: "https://www.lendenclub.com",
    position: "Data Scientist",
    openings: 4
  },
  {
    company: "Prisma.ai",
    website: "https://www.prisma.ai",
    position: "Machine Learning Engineer",
    openings: 5
  },
  {
    company: "VSL",
    website: "https://vslmarine.com",
    position: "Jr.Web Application Developer",
    openings: 3
  },
];

const PlacementPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const placementStats = [
    { icon: Users, value: "40k+", label: "Learners Trained" },
    { icon: Award, value: "800+", label: "Hiring Companies" },
    { icon: Target, value: "1,000+", label: "Placement Drives conducted" },
    { icon: Star, value: "19.5LPA", label: "Highest Salary Drawn" },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const studentImages = students.map(s=>s.image);
  const placements = getPlacements(selectedCategory).map((item,i) => ({
    ...item,
    image: studentImages[i%studentImages.length]
  }));

  const [selectedSession, setSelectedSession] = useState(1);
  const currentSession = profileSessions.find(s => s.id === selectedSession);

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <Header />
        
        {/* 1. Hero Banner Section - Croma Campus Style */}
        <section className="relative px-4 pt-20 md:pt-22 pb-6 md:pb-8 overflow-hidden flex items-center justify-center min-h-[450px] md:min-h-[520px]">
          {/* Hero Component Background Gradient - Same as ContactPage */}
          <div className="absolute inset-0 -z-1">
            {/* Main Gradient Background - Same as ContactPage */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#f97316]" />
            
            {/* Static Gradient Overlays */}
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

            {/* Animated Floating Elements */}
            <motion.div
              initial={{ y: 0, x: 0, rotate: 0 }}
              animate={{ 
                y: -20,
                x: 10,
                rotate: 8
              }}
              transition={{ 
                duration: 7, 
                repeat: Infinity,
                repeatType: 'reverse',
                ease: "easeInOut" 
              }}
              className="absolute top-16 left-8 w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ y: 0, x: 0, rotate: 0 }}
              animate={{ 
                y: 20,
                x: -10,
                rotate: -8
              }}
              transition={{ 
                duration: 9, 
                repeat: Infinity,
                repeatType: 'reverse',
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-12 right-8 w-64 h-64 md:w-72 md:h-72 bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ scale: 1, opacity: 0.3 }}
              animate={{ 
                scale: 1.15,
                opacity: 0.4
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                repeatType: 'reverse',
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[450px] md:h-[450px] bg-gradient-to-br from-blue-600/20 to-orange-500/20 rounded-full blur-3xl"
            />
          </div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10 items-start md:items-start py-2">
            {/* Left Side - Text Content */}
            <div className="flex-1 flex flex-col items-start justify-start -mt-4 md:-mt-6">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-orange-400 font-bold text-lg md:text-xl uppercase tracking-wider mb-5 md:mb-6"
              >
                STORY OF OUR SUCCESSFUL PLACEMENTS
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 md:mb-7"
              >
                <span className="bg-blue-700 text-white rounded-lg px-4 py-2 inline-block mb-2 text-base md:text-lg">Customer Stories</span>
                <br />
                <span className="text-blue-200 font-extrabold">That Inspire You</span>
              </motion.h1>
              
                  <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-3 text-white/90 font-semibold mb-6 md:mb-7"
              >
                <p className="text-base md:text-lg leading-relaxed">SUCCESS ISN'T JUST ABOUT REACHING THE GOAL.</p>
                <p className="text-base md:text-lg leading-relaxed">IT'S ABOUT THE JOURNEY, THE LESSONS, AND THE GROWTH.</p>
                <p className="text-base md:text-lg leading-relaxed font-bold text-white">BE INSPIRED BY THOSE WHO MADE IT HAPPEN!</p>
                  </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="w-full"
              >
                <p className="text-white/80 font-semibold text-base md:text-lg mb-4">Quastech Alumni Work At Top Companies</p>
                <div className="w-full overflow-x-hidden relative flex justify-start">
                  <div className="w-full pointer-events-none absolute bg-gradient-to-r from-slate-900 to-transparent left-0 top-0 h-full z-10" style={{width:'24px'}}/>
                  <div className="w-full pointer-events-none absolute bg-gradient-to-l from-slate-900 to-transparent right-0 top-0 h-full z-10" style={{width:'24px'}}/>
                  <div className="max-w-xl overflow-hidden">
                    <div className="flex gap-4 md:gap-6" style={{ animation: 'slideX 25s linear infinite' }}>
                      {companyList.slice(0, 6).map((logo, i) => (
                        <img 
                          key={logo.logo + '-' + i} 
                          src={logo.logo} 
                          alt={logo.name} 
                          title={logo.name} 
                          className="h-12 md:h-16 w-auto rounded-lg bg-white shadow-md border border-white/40 transition-transform hover:scale-110 hover:shadow-xl" 
                          style={{minWidth:'100px'}} 
                        />
                      ))}
                      {companyList.slice(0, 6).map((logo, i) => (
                        <img 
                          key={'dupe-' + logo.logo + '-' + i} 
                          src={logo.logo} 
                          alt={logo.name} 
                          title={logo.name} 
                          className="h-12 md:h-16 w-auto rounded-lg bg-white shadow-md border border-white/40 transition-transform hover:scale-110 hover:shadow-xl" 
                          style={{minWidth:'100px'}} 
                        />
                      ))}
                    </div>
                  </div>
                  <style>{`@keyframes slideX { to { transform: translateX(-50%); } }`}</style>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Circular Profile Images with Floating Animation in Grid Layout */}
            <div className="flex-1 relative min-h-[400px] md:min-h-[480px] flex items-center justify-center md:justify-end select-none pb-4 -mt-8 md:-mt-10">
              <div className="w-full max-w-[550px] h-[460px] relative">
                {/* Grid layout: 4 rows x 4 columns (16 images total) */}
                {/* Images will repeat if there are less than 16 student images */}
                {(() => {
                  const numRows = 4; // 4 rows
                  const numCols = 4; // 4 columns
                  const totalImages = numRows * numCols; // 16 images total
                  
                  // Calculate positions based on grid
                  const containerWidth = 550; // Expanded container width
                  const containerHeight = 460; // Container height - adjusted to prevent cutoff
                  const imageSize = 90; // Larger image size in pixels
                  const gap = 30; // Increased gap between images
                  
                  // Calculate starting position - shift grid upward (more space at bottom)
                  const totalWidth = (numCols * imageSize) + ((numCols - 1) * gap);
                  const totalHeight = (numRows * imageSize) + ((numRows - 1) * gap);
                  const startLeft = (containerWidth - totalWidth) / 2;
                  // Position grid higher - shifted more upward to prevent bottom cutoff
                  const startTop = Math.max(0, (containerHeight - totalHeight) / 22); // Shifted a bit more upward
                  
                  // Create array of student images that repeats if needed
                  const studentImagesForGrid = [];
                  for (let i = 0; i < totalImages; i++) {
                    studentImagesForGrid.push(students[i % students.length]);
                  }
                  
                  return studentImagesForGrid.map((student, idx) => {
                    const row = Math.floor(idx / numCols);
                    const col = idx % numCols;
                    const top = startTop + (row * (imageSize + gap));
                    const left = startLeft + (col * (imageSize + gap));
                    const delay = idx * 0.08;
                    const floatDelay = idx * 0.15;
                    
                    return (
                      <motion.div
                        key={`student-grid-${idx}-${student.name}`}
                        style={{ 
                          position: 'absolute', 
                          top: `${top}px`, 
                          left: `${left}px`, 
                          width: `${imageSize}px`, 
                          height: `${imageSize}px`, 
                          zIndex: idx + 1 
                        }}
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                        }}
                        transition={{ 
                          opacity: { duration: 0.8, delay: 0.5 + delay },
                          scale: { duration: 0.8, delay: 0.5 + delay, type: 'spring', stiffness: 100 },
                        }}
                      >
                        <motion.img
                          src={student.image}
                          alt={student.name}
                          className="w-full h-full object-cover bg-white border-3 border-white shadow-2xl rounded-full cursor-pointer"
                          style={{ transformStyle: 'preserve-3d' }}
                          initial={{ y: 0, rotateY: 0 }}
                          animate={{
                            y: -10,
                            rotateY: 10
                          }}
                          transition={{
                            y: {
                              duration: 2.5 + (idx * 0.12),
                              repeat: Infinity,
                              repeatType: 'reverse',
                              ease: 'easeInOut',
                              delay: 1.5 + delay + floatDelay
                            },
                            rotateY: {
                              duration: 4 + (idx * 0.2),
                              repeat: Infinity,
                              repeatType: 'reverse',
                              ease: 'easeInOut',
                              delay: 2 + delay + floatDelay
                            }
                          }}
                          whileHover={{
                            scale: 1.15,
                            rotateY: 15,
                            rotateX: -10,
                            zIndex: 10,
                            boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                            transition: { duration: 0.3 }
                          }}
                          title={student.name}
                        />
            </motion.div>
                    );
                  });
                })()}
              </div>
            </div>
          </div>
        </section>

        {/* 2. Stats Section with 3D Effects */}
        <section className="w-full bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 py-12 px-3">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-[#f6f8fa] rounded-xl shadow-[0_8px_30px_rgba(44,62,80,.19)] flex flex-col items-center p-8"
                style={{
                  minHeight: '188px',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  rotateX: -5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-2 shadow-md"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </motion.div>
                <motion.div
                  className="font-extrabold text-2xl md:text-[1.75rem] text-[#182041] mt-1 mb-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-[#758389] text-sm font-medium text-center">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Campus Placement's Drive Section */}
        <section className="w-full bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 py-10 md:py-16">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-[260px_1fr] gap-6 items-start">
            <div className="hidden md:flex flex-col pt-2">
              <h2 className="heading-institute text-left leading-tight">
                Campus<br />Placement's<br />Drive
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="text-gray-700">
                  <div className="heading-institute-md mb-3">Placement Drive by uvXcel</div>
                  <p className="text-gray-700 text-sm md:text-base max-w-3xl">
                    The campus placement drive is an opportunity for our Learners as well as companies to select the best & qualified candidate or company in a shorter period of time. Quastech is known in the market for providing the quality candidates and that is why 800+ companies have trusted us in hand picking the talent they require.
                  </p>
                </div>
                <a href="/contact" className="self-start md:self-auto bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white transition-colors px-5 py-2 font-bold rounded-md text-sm shadow-md whitespace-nowrap flex items-center">
                  Get a Free Counseling
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
              {/* Placement Cards Carousel */}
              <Swiper navigation={true} modules={[Navigation]} slidesPerView={1} spaceBetween={20} loop={true} className="w-full mt-6">
                {[
                  { label: "WELCOME", title: "Moment of a Warm Welcome!", image: branchImages[0] },
                  { label: "PLACEMENTS", title: "Helping Learners Achieve Their Dream IT Jobs!", image: branchImages[1] },
                  { label: "JOBS", title: "Offering Placements to Learners on the Spot", image: branchImages[2] },
                  { label: "MOCK", title: "Our Learners Appearing for Their Mock Interviews", image: branchImages[0] },
                ].map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <motion.div
                      className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-200"
                      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                      whileHover={{
                        y: -10,
                        rotateY: 5,
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <img src={item.image} alt={item.title} className="w-full h-[360px] md:h-[420px] object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 p-5 md:p-7 text-white"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <span className="uppercase text-xs tracking-widest text-blue-200 mb-2 block">{item.label}</span>
                        <h3 className="text-2xl md:text-3xl font-extrabold leading-snug max-w-3xl">{item.title}</h3>
                      </motion.div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        {/* 4. Learner Support Section */}
        <section className="w-full py-14 px-3 bg-gradient-to-br from-[#3551a6] to-[#102547] border-t border-blue-200">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 md:pr-12 min-w-[250px] text-white">
              <div className="text-xs font-semibold tracking-wider text-white/80 mb-2">FOR QUERIES, FEEDBACK OR ASSISTANCE</div>
              <div className="text-xl md:text-2xl font-extrabold mb-2">Contact Quastech Learner Support</div>
              <div className="text-sm font-medium text-white/90">Best of support with us</div>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto max-w-[380px]">
              <motion.div
                className="flex flex-col items-start"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="text-[10px] font-bold uppercase text-white/70 ml-2 mb-1">FOR VOICE SUPPORT</span>
                <motion.a
                  href="tel:+919711526942"
                  className="flex items-center gap-3 bg-white ring-1 ring-gray-200 rounded px-4 py-2 shadow-md text-[#222] font-semibold w-full md:w-auto"
                  style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                  whileHover={{
                    y: -5,
                    rotateY: 5,
                    scale: 1.05,
                    backgroundColor: '#eff6ff',
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5 text-red-500" />
                  +91-9711-526-942
                </motion.a>
              </motion.div>
              <motion.div
                className="flex flex-col items-start"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="text-[10px] font-bold uppercase text-white/70 ml-2 mb-1">FOR WHATSAPP SUPPORT</span>
                <motion.a
                  href="https://wa.me/919711526942"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white ring-1 ring-gray-200 rounded px-4 py-2 shadow-md text-[#222] font-semibold w-full md:w-auto"
                  style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                  whileHover={{
                    y: -5,
                    rotateY: 5,
                    scale: 1.05,
                    backgroundColor: '#f0fdf4',
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#19c03c" className="w-5 h-5"><path d="M16 2.001C8.271 2.001 2 8.271 2 16.001c0 2.633.686 5.217 1.983 7.487L2.021 29.98l6.623-1.927A13.91 13.91 0 0 0 16 30c7.729 0 14-6.27 14-14s-6.271-13.999-14-13.999zm7.726 20.096c-.338.95-1.973 1.828-2.717 1.948-.688.115-1.564.163-2.526-.162-.581-.19-1.326-.43-2.294-.842-4.034-1.684-6.654-5.396-6.857-5.65-.197-.253-1.632-2.174-1.632-4.149 0-1.974 1.045-2.946 1.416-3.344.37-.397.815-.497 1.087-.497.272 0 .544.002.782.013.247.012.58-.094.902.688.338.808 1.147 2.792 1.247 3.001.099.208.164.481.011.774-.153.292-.23.47-.45.732-.223.267-.47.595-.67.798-.208.212-.425.416-.184.832.242.416 1.076 1.778 2.307 2.839 1.591 1.416 2.885 1.861 3.306 2.07.421.208.669.173.922-.104.252-.273 1.02-1.107 1.294-1.489.274-.382.547-.315.918-.196.354.114 2.249 1.059 2.642 1.254.394.197.656.297.752.462.096.164.096.951-.242 1.898z" /></svg>
                  +91-9711-526-942
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. Recent Placements */}
        <section className="relative bg-white py-14 px-3">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-9">
              <h2 className="heading-institute-lg flex-1 tracking-tight">Recent Placements</h2>
              <span className="ml-3 bg-blue-50 text-blue-700 rounded-full px-4 py-1 text-xs font-bold shadow">1578+</span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              {placementCategories.map(cat => (
                <motion.button
                  key={cat.key}
                  className={`px-6 py-2 text-base rounded-full border font-bold shadow-sm ${selectedCategory === cat.key ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-700 shadow-lg' : 'bg-blue-50 text-blue-800 border-blue-100 hover:bg-blue-100 hover:text-blue-700'}`}
                  style={{minWidth:120, transformStyle: 'preserve-3d'}}
                  onClick={()=>setSelectedCategory(cat.key)}
                  whileHover={{
                    y: -5,
                    rotateY: 5,
                    scale: 1.1,
                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95, rotateY: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: cat.key === 'all' ? 0 : 0.1 }}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 32 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-6"
              >
                {placements.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30, rotateX: -10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.36, delay: 0.04 * i }}
                    className="rounded-2xl bg-white p-6 flex flex-col items-center shadow-lg border border-blue-50 group"
                    style={{
                      minHeight: 258,
                      transformStyle: 'preserve-3d',
                      perspective: '1000px'
                    }}
                    whileHover={{
                      y: -10,
                      rotateY: 8,
                      rotateX: -5,
                      scale: 1.05,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="rounded-full w-20 h-20 object-cover mb-3 border-4 border-blue-200 bg-white shadow"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="font-bold text-lg text-[#19376D] text-center mb-1">{item.name}</div>
                    <div className="text-[13px] text-blue-900 font-semibold text-center mb-2" style={{minHeight:'16px'}}>{item.role}</div>
                    <div className="flex items-center gap-2 mt-2">
                      {item.company?.logo && <img src={item.company.logo} alt={item.company.name} className="h-6 w-6 rounded bg-white border border-gray-200 shadow-sm" />}
                      <span className="text-xs text-blue-700 font-semibold">{item.company?.name}</span>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* 6. Placed Learner's Testimonials */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="heading-institute-lg text-center mb-12">Placed Learner's Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                  whileHover={{
                    y: -8,
                    rotateY: 5,
                    rotateX: -3,
                    scale: 1.03,
                    boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-200"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div>
                      <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-blue-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{testimonial.review}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Profile Building Sessions */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="heading-institute-lg text-center mb-12">Profile building sessions</h2>
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              {profileSessions.map((session) => (
                <button
                  key={session.id}
                  onClick={() => setSelectedSession(session.id)}
                  className={`px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                    selectedSession === session.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                  }`}
                >
                  {session.title} {session.id}
                </button>
              ))}
            </div>
            {currentSession && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${selectedSession === currentSession.id ? 'bg-blue-600' : 'bg-blue-100'}`}>
                        <currentSession.icon className={`w-6 h-6 ${selectedSession === currentSession.id ? 'text-white' : 'text-blue-600'}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{currentSession.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{currentSession.description}</p>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <img src={currentSession.image} alt={currentSession.title} className="w-full h-64 object-cover" />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* 8. Upcoming Placement Drives */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="heading-institute-lg text-center mb-12">Upcoming placement drives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingDrives.map((drive, i) => (
            <motion.div
                  key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-blue-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{drive.company}</h3>
                      <a href={drive.website} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">{drive.website}</a>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-700 font-semibold mb-2">Opening For Technology - {drive.position}</p>
                    <p className="text-sm text-gray-600">No. Of Open Positions: <span className="font-bold text-blue-600">{drive.openings}</span></p>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    Request a Date
                  </button>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* 9. Our Hiring Partners */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="heading-institute-lg text-center mb-4">Our Hiring Partners</h2>
            <p className="section-subtitle text-center mb-8">Organizations around the globe trusting our Learners technical skills and hiring them with good payscale</p>
            
            {/* First Row - Sliding from Right to Left */}
            <div className="overflow-hidden mb-6">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: ['0%', '-50%']
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 30,
                    ease: 'linear'
                  }
                }}
              >
                {/* Duplicate the logos for seamless loop */}
                {[...companyList.slice(0, 6), ...companyList.slice(0, 6)].map((company, i) => (
                  <div
                    key={`first-${i}`}
                    className="flex-shrink-0 w-48 md:w-56 lg:w-64"
                  >
                    <motion.div
                      className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all border border-gray-100 flex items-center justify-center h-24"
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <img src={company.logo} alt={company.name} className="max-w-full max-h-full object-contain" />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Second Row - Sliding from Left to Right */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: ['-50%', '0%']
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 30,
                    ease: 'linear'
                  }
                }}
              >
                {/* Duplicate the logos for seamless loop */}
                {[...companyList.slice(6, 12), ...companyList.slice(6, 12)].map((company, i) => (
                  <div
                    key={`second-${i}`}
                    className="flex-shrink-0 w-48 md:w-56 lg:w-64"
                  >
                    <motion.div
                      className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all border border-gray-100 flex items-center justify-center h-24"
                      whileHover={{ scale: 1.05, rotateY: -5 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <img src={company.logo} alt={company.name} className="max-w-full max-h-full object-contain" />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="mt-8 text-center">
              <div className="inline-flex gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">800+</div>
                  <div className="text-gray-600">Companies partnered with us</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">8k+</div>
                  <div className="text-gray-600">Learners already placed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </DarkModeProvider>
  );
};
export default PlacementPage;
