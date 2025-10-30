import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Users, Award, Target, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import BranchSection from "@/components/BranchSection";
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
const companyLogos = [
  { src: "/images/company-logos/microsoft.png", alt: "Microsoft" },
  { src: "/images/company-logos/accenture.png", alt: "Accenture" },
  { src: "/images/company-logos/tcs.png", alt: "TCS" },
  { src: "/images/company-logos/ibm.png", alt: "IBM" },
  { src: "/images/company-logos/deloitte.png", alt: "Deloitte" },
  { src: "/images/company-logos/flipkart.png", alt: "Flipkart" },
];

// Placement roles by category for filtering
const placementCategories = [
  { key: 'all', label: 'All Placements' },
  { key: 'data-analyst', label: 'Data Analyst' },
  { key: 'data-science', label: 'Data Science' },
  { key: 'web-developer', label: 'Web Developer' },
  { key: 'software-engineer', label: 'Software Engineer' }
];

// Mapping for category filter -- cycles through available data
const roleData = {
  'data-analyst': [
    {name: 'Nandesh Ringe', role: 'Data Analyst', company: {name: 'Drone Pay', logo: '/images/company-logos/dronepay.png'}},
    {name: 'Isha Wase', role: 'Data Analyst', company: {name: 'Hexatic Tech Ltd', logo: '/images/company-logos/hexatic.png'}},
  ],
  'data-science': [
    {name: 'Aditya Mistry', role: 'Data Scientist', company: {name: 'TCS', logo: '/images/company-logos/tcs.png'}},
    {name: 'Anurag Rajpurohit', role: 'Data Scientist', company: {name: 'Microsoft', logo: '/images/company-logos/microsoft.png'}},
  ],
  'web-developer': [
    {name: 'Sagar Chaudhari', role: 'Web Developer', company: {name: 'IBM', logo: '/images/company-logos/ibm.png'}},
    {name: 'Sonakshi Saxena', role: 'Web Developer', company: {name: 'Flipkart', logo: '/images/company-logos/flipkart.png'}},
  ],
  'software-engineer': [
    {name: 'Jesica Mistry', role: 'Software Engineer', company: {name: 'Hexatic Tech Ltd', logo: '/images/company-logos/hexatic.png'}},
    {name: 'Atish Satpute', role: 'Software Engineer', company: {name: 'Core6 Systems', logo: '/images/company-logos/core6.png'}},
    {name: 'Shubham Dongarwar', role: 'Software Engineer', company: {name: 'Core6 Systems', logo: '/images/company-logos/core6.png'}},
    {name: 'Vivekanand Biradar', role: 'Software Engineer', company: {name: 'Hexatic Tech Ltd', logo: '/images/company-logos/hexatic.png'}},
    {name: 'Rushikesh Deshmukh', role: 'Software Engineer', company: {name: 'Hexatic Tech Ltd', logo: '/images/company-logos/hexatic.png'}},
  ],
};

// Actual company logos provided by user
const companyList = [
  { name: "Accenture", logo: "/images/Logo folder/accenture.jpg" },
  { name: "AQM", logo: "/images/Logo folder/AQM_New_Logo.jpg" },
  { name: "Aurion", logo: "/images/Logo folder/Aurion logo.png" },
  { name: "Axioned", logo: "/images/Logo folder/axioned.jpg" },
  { name: "Capgemini", logo: "/images/Logo folder/capgemini.jpg" },
  { name: "CC Avenue", logo: "/images/Logo folder/cc avenue-payment-module.png" },
  { name: "Circux", logo: "/images/Logo folder/circux.jpg" },
  { name: "CRM Next", logo: "/images/Logo folder/crm next.webp" },
  { name: "Cyber Tech", logo: "/images/Logo folder/Cyber Tech-Logo.png" },
  { name: "Cybertech", logo: "/images/Logo folder/cybertech.jpg" },
  { name: "GreytHR", logo: "/images/Logo folder/greytrix_logo.jpg" },
  { name: "Infibeam", logo: "/images/Logo folder/infibeam.jpg" },
  { name: "Infosos", logo: "/images/Logo folder/infosos.jpg" },
  { name: "Ingram", logo: "/images/Logo folder/ingram.jpg" },
  { name: "JustDial", logo: "/images/Logo folder/justdial.jpg" },
  { name: "Mind Gate", logo: "/images/Logo folder/mind gate.jpg" },
  { name: "Mr", logo: "/images/Logo folder/mr.jpg" },
  { name: "Nisco", logo: "/images/Logo folder/nisco.jpg" },
  { name: "Planit", logo: "/images/Logo folder/planit.jpg" },
  { name: "Proteus", logo: "/images/Logo folder/proteus.jpg" },
  { name: "Quality Tech", logo: "/images/Logo folder/qualitytech.jpg" },
  { name: "Shawman", logo: "/images/Logo folder/shawman.png" },
  { name: "SurePR", logo: "/images/Logo folder/surepr.jpg" },
  { name: "SWQA India", logo: "/images/Logo folder/swqa_india_logo.jpg" },
  { name: "SWQA", logo: "/images/Logo folder/swqa.jpg" },
  { name: "TCS", logo: "/images/Logo folder/tcs.jpg" },
];

// Now for Recent Placement Cards, always use above logos
const getPlacements = (category) => {
  let companies = companyList;
  if(category === 'all') {
    // 10 mixed with real companies cycling logos
    let results = [];
    for (let i = 0; i < 10; i++) {
      let comp = companies[i % companies.length];
      results.push({
        name: students[i % students.length].name,
        role: students[i % students.length].role,
        image: students[i % students.length].image,
        company: comp,
      });
    }
    return results;
  } else {
    // 2 or 3, also cycle companies
    let length = category === 'software-engineer' ? 3 : 2;
    let results = [];
    for (let i = 0; i < length; i++) {
      let comp = companies[(i + category.length) % companies.length];
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

// Placement Gallery Section Images
const placementGalleryImages = [
  "/images/branches/IMG20240104153417.jpg",
  "/images/branches/IMG20240104153434.jpg",
  "/images/branches/IMG20240104153417.jpg",
  "/images/branches/IMG20240104153417.jpg",
];
const galleryTabs = [
  { key: 'career-transition', label: 'Career Transition' },
  { key: 'career-gap', label: 'Career Gap' },
  { key: 'placement-activities', label: 'Placement Activities' },
  { key: 'placement-drives', label: 'Placement Drives' },
  { key: 'latest-hiring', label: 'Latest Hiring' },
];

const branchesData = [
  // Only basic data needed for slider
  {
    name: "Thane Branch",
    img: "/images/branches/IMG20240104153417.jpg",
  },{
    name: "Borivali Branch",
    img: "/images/branches/IMG20240104153526.jpg",
  },{
    name: "Vashi Branch",
    img: "/images/branches/IMG20240104153526.jpg",
  },{
    name: "Mohali Branch",
    img: "/public/images/branches/mohali/20240104_154224.jpg",
  }
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

  const [galleryTab, setGalleryTab] = useState(galleryTabs[0].key);

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex flex-col">
        <Header />
        {/* 1. Banner: headline left, animated logo slider below, animated student circles right */}
        <section className="relative px-4 pt-20 md:pt-28 pb-8 overflow-hidden flex items-center justify-center min-h-[499px]">
          {/* Main BG gradient */}
          <div className="absolute inset-0 -z-1">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-orange-900/20" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left md:gap-8">
            {/* LEFT: Headline + Logo Row */}
            <div className="flex-1 min-w-[280px] md:pr-6 pt-4 md:pt-16 max-w-2xl mx-auto flex flex-col items-center md:items-start justify-center">
              <span className="text-green-400 font-bold text-lg pb-1 block">MEET OUR CUSTOMERS</span>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-white leading-tight">
                <span className="bg-blue-700 text-white rounded px-2 mr-2">Customer Stories</span><br />
                <span className="text-blue-200">That Inspire You</span>
              </h1>
              <span className="mt-6 mb-1 font-bold text-white/90 text-xs md:text-base block w-full">SUCCESS ISN'T JUST ABOUT REACHING THE GOAL.</span>
              <p className="text-white/80 text-sm md:text-base mb-3 font-semibold max-w-lg mx-auto md:mx-0">
                IT'S ABOUT THE JOURNEY, THE LESSONS, AND THE GROWTH.<br />BE INSPIRED BY THOSE WHO MADE IT HAPPEN!
              </p>
              {/* LOGO SLIDER */}
              <div className="w-full mt-6 mb-2 overflow-x-hidden relative flex justify-start">
                <div className="w-full pointer-events-none absolute bg-gradient-to-r from-slate-900 to-transparent left-0 top-0 h-full z-10" style={{width:'24px'}}/>
                <div className="w-full pointer-events-none absolute bg-gradient-to-l from-slate-900 to-transparent right-0 top-0 h-full z-10" style={{width:'24px'}}/>
                <div className="max-w-xl mx-auto overflow-hidden">
                  <div
                    className="flex gap-6 animate-slide-x hover:[animation-play-state:paused]"
                    style={{ animation: 'slideX 21s linear infinite' }}
                  >
                    {[
                      {name: "Accenture", logo: "/images/Logo folder/accenture.jpg"},
                      {name: "TCS", logo: "/images/Logo folder/tcs.jpg"},
                      {name: "Capgemini", logo: "/images/Logo folder/capgemini.jpg"},
                      {name: "JustDial", logo: "/images/Logo folder/justdial.jpg"},
                      {name: "Mind Gate", logo: "/images/Logo folder/mind gate.jpg"},
                      {name: "Infibeam", logo: "/images/Logo folder/infibeam.jpg"},
                      {name: "Ingram", logo: "/images/Logo folder/ingram.jpg"},
                      {name: "TCS", logo: "/images/Logo folder/tcs.jpg"},
                    ].map((logo, i) => (
                      <img key={logo.logo + '-' + i} src={logo.logo} alt={logo.name} title={logo.name} className="h-12 md:h-14 w-auto rounded bg-white shadow border border-white/40 transition-transform hover:scale-110 hover:shadow-xl" style={{minWidth:'110px'}} />
                    ))}
                    {/* duplicate for infinite loop effect */}
                    {[
                      {name: "Accenture", logo: "/images/Logo folder/accenture.jpg"},
                      {name: "TCS", logo: "/images/Logo folder/tcs.jpg"},
                      {name: "Capgemini", logo: "/images/Logo folder/capgemini.jpg"},
                      {name: "JustDial", logo: "/images/Logo folder/justdial.jpg"},
                      {name: "Mind Gate", logo: "/images/Logo folder/mind gate.jpg"},
                      {name: "Infibeam", logo: "/images/Logo folder/infibeam.jpg"},
                      {name: "Ingram", logo: "/images/Logo folder/ingram.jpg"},
                      {name: "TCS", logo: "/images/Logo folder/tcs.jpg"},
                    ].map((logo, i) => (
                      <img key={'dupe-' + logo.logo + '-' + i} src={logo.logo} alt={logo.name} title={logo.name} className="h-12 md:h-14 w-auto rounded bg-white shadow border border-white/40 transition-transform hover:scale-110 hover:shadow-xl" style={{minWidth:'110px'}} />
                    ))}
                  </div>
                </div>
                {/* Keyframes for sliding logo row */}
                <style>{`@keyframes slideX { to { transform: translateX(-50%); } }`}</style>
              </div>
              {/* End LOGO SLIDER */}
            </div>
            {/* RIGHT: Animated Student Circles (never remove!) */}
            <div className="flex-1 relative min-h-[390px] flex items-center justify-center md:justify-start md:pl-20 select-none">
              <div className="w-[350px] h-[370px] relative">
                {[
                  {top: '7%', left: '40%', delay: 0},
                  {top: '23%', left: '13%', delay: 0.14},
                  {top: '23%', left: '67%', delay: 0.28},
                  {top: '54%', left: '6%', delay: 0.42},
                  {top: '62%', left: '40%', delay: 0.56},
                  {top: '54%', left: '74%', delay: 0.7},
                ].map((pos, idx) => (
                  <motion.img
                    key={students[idx % students.length].name}
                    src={students[idx % students.length].image}
                    alt={students[idx % students.length].name}
                    style={{ position: 'absolute', ...pos, width: '88px', height: '88px', zIndex: 2 }}
                    className="object-cover bg-white border-4 border-blue-200 shadow-xl rounded-full"
                    initial={{ opacity: 0, scale: 0.7, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -15] }}
                    transition={{ delay: 0.4 + pos.delay, duration: 0.8, type: 'spring', repeat: Infinity, repeatType: 'reverse', repeatDelay: 2 + idx/10 }}
                    title={students[idx%students.length].name}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Place after the hero/banner (before stats) */}
        <section className="w-full bg-[#232323] py-10 md:py-20 flex flex-col md:flex-row items-stretch relative">
          <div className="flex-shrink-0 w-full md:w-[250px] bg-[#232323] flex items-center md:items-start md:flex-col justify-center md:justify-start pb-8 md:pb-0 px-4 md:px-0">
            <h2 className="text-2xl font-extrabold text-white text-left md:text-left md:pt-8" style={{letterSpacing:'0.01em', minWidth:'180px'}}>
              Memories<br />& Awards
            </h2>
          </div>
          <div className="flex-1 flex flex-col gap-5 px-4">
            <div className="flex flex-col gap-2 md:gap-5 pt-2 md:pt-0">
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">Memories & Awards</div>
              <div className="text-gray-200 text-base md:text-lg mb-2 max-w-2xl">
                A glimpse of our proud moments—ceremonies, drives, and award recognitions.<br />These snapshots capture the spirit of our community and the milestones along the way. (Images below are placeholders and will be replaced with your official gallery soon.)
              </div>
            </div>
            <Swiper navigation={true} modules={[Navigation]} slidesPerView={1} spaceBetween={32} loop={true} className="w-full max-w-xl mx-auto md:mt-2">
              {branchesData.map((branch, idx) => (
                <SwiperSlide key={branch.img + '-' + idx}>
                  <div className="bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-3 py-6 md:py-8 min-h-[320px]">
                    <img src={branch.img} alt="Memories & Awards" className="rounded-xl max-h-72 object-cover mb-1 shadow-md border-2 border-blue-100" style={{background:'#f6f8fa'}} />
                    {/* No name below! */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <hr className="w-full border-t-4 border-blue-100 my-12 shadow" />
        <section className="py-10 px-4 bg-gradient-to-r from-blue-50 via-white to-blue-50">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#19376D] text-center mb-3 tracking-tight">Placement Success Stories</h2>
        </section>
        {/* 2. Placement stats */}
        <section className="w-full bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 py-12 px-3">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-[#f6f8fa] rounded-xl shadow-[0_8px_30px_rgba(44,62,80,.19)] flex flex-col items-center p-8 transition-transform hover:-translate-y-1.5 duration-300" style={{minHeight:'188px'}}>
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-2 shadow-md">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <div className="font-extrabold text-2xl md:text-[1.75rem] text-[#182041] mt-1 mb-1" style={{letterSpacing:'0.5px'}}>40k+</div>
              <div className="text-[#758389] text-sm font-medium">Learners Trained</div>
            </div>
            <div className="bg-[#f6f8fa] rounded-xl shadow-[0_8px_30px_rgba(44,62,80,.19)] flex flex-col items-center p-8 transition-transform hover:-translate-y-1.5 duration-300" style={{minHeight:'188px'}}>
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-2 shadow-md">
                <Award className="w-8 h-8 text-blue-400" />
              </div>
              <div className="font-extrabold text-2xl md:text-[1.75rem] text-[#182041] mt-1 mb-1">800+</div>
              <div className="text-[#758389] text-sm font-medium">Hiring Companies</div>
            </div>
            <div className="bg-[#f6f8fa] rounded-xl shadow-[0_8px_30px_rgba(44,62,80,.19)] flex flex-col items-center p-8 transition-transform hover:-translate-y-1.5 duration-300" style={{minHeight:'188px'}}>
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-2 shadow-md">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <div className="font-extrabold text-2xl md:text-[1.75rem] text-[#182041] mt-1 mb-1">1,000+</div>
              <div className="text-[#758389] text-sm font-medium leading-tight text-center">Placement Drives<br/>conducted</div>
            </div>
            <div className="bg-[#f6f8fa] rounded-xl shadow-[0_8px_30px_rgba(44,62,80,.19)] flex flex-col items-center p-8 transition-transform hover:-translate-y-1.5 duration-300" style={{minHeight:'188px'}}>
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-2 shadow-md">
                <Star className="w-8 h-8 text-blue-400" />
              </div>
              <div className="font-extrabold text-2xl md:text-[1.75rem] text-[#182041] mt-1 mb-1">19.5LPA</div>
              <div className="text-[#758389] text-sm font-medium">Highest Salary Drawn</div>
            </div>
          </div>
        </section>

        {/* 3. Learner Support/Contact (moved above Recent Placements) */}
        <section className="w-full py-14 px-3 bg-gradient-to-br from-[#3551a6] to-[#102547] border-t border-blue-200">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left text */}
            <div className="flex-1 md:pr-12 min-w-[250px] text-white">
              <div className="text-xs font-semibold tracking-wider text-white/80 mb-2">FOR QUERIES, FEEDBACK OR ASSISTANCE</div>
              <div className="text-xl md:text-2xl font-extrabold mb-2">Contact Quastech Learner Support</div>
              <div className="text-sm font-medium text-white/90">Best of support with us</div>
            </div>
            {/* Support Buttons */}
            <div className="flex flex-col gap-4 w-full md:w-auto max-w-[380px]">
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold uppercase text-white/70 ml-2 mb-1">FOR VOICE SUPPORT</span>
                <a href="tel:+919711526942" className="flex items-center gap-3 bg-white ring-1 ring-gray-200 rounded px-4 py-2 shadow-md text-[#222] font-semibold hover:bg-blue-50 transition w-full md:w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#e64036" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.61 10.79a15.05 15.05 0 006.6 6.6l2.2-2.2a1 1 0 011.06-.24c1.16.38 2.4.59 3.53.59a1 1 0 011 1V20a1 1 0 01-1 1C6.5 21 3 13.92 3 5a1 1 0 011-1h3.11a1 1 0 011 1c0 1.13.2 2.37.59 3.53a1 1 0 01-.24 1.06l-2.2 2.2z" /></svg>
                  +91-9711-526-942
                </a>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold uppercase text-white/70 ml-2 mb-1">FOR WHATSAPP SUPPORT</span>
                <a href="https://wa.me/919711526942" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white ring-1 ring-gray-200 rounded px-4 py-2 shadow-md text-[#222] font-semibold hover:bg-green-50 transition w-full md:w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#19c03c" className="w-5 h-5"><path d="M16 2.001C8.271 2.001 2 8.271 2 16.001c0 2.633.686 5.217 1.983 7.487L2.021 29.98l6.623-1.927A13.91 13.91 0 0 0 16 30c7.729 0 14-6.27 14-14s-6.271-13.999-14-13.999zm7.726 20.096c-.338.95-1.973 1.828-2.717 1.948-.688.115-1.564.163-2.526-.162-.581-.19-1.326-.43-2.294-.842-4.034-1.684-6.654-5.396-6.857-5.65-.197-.253-1.632-2.174-1.632-4.149 0-1.974 1.045-2.946 1.416-3.344.37-.397.815-.497 1.087-.497.272 0 .544.002.782.013.247.012.58-.094.902.688.338.808 1.147 2.792 1.247 3.001.099.208.164.481.011.774-.153.292-.23.47-.45.732-.223.267-.47.595-.67.798-.208.212-.425.416-.184.832.242.416 1.076 1.778 2.307 2.839 1.591 1.416 2.885 1.861 3.306 2.07.421.208.669.173.922-.104.252-.273 1.02-1.107 1.294-1.489.274-.382.547-.315.918-.196.354.114 2.249 1.059 2.642 1.254.394.197.656.297.752.462.096.164.096.951-.242 1.898z" /></svg>
                  +91-9711-526-942
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Recent Placements (tabs) */}
        <section className="relative bg-white py-14 px-3 border-t border-b border-blue-100">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-9">
              <h2 className="text-center text-3xl font-extrabold text-[#19376D] flex-1 tracking-tight">Recent Placements</h2>
              <span className="ml-3 bg-blue-50 text-blue-700 rounded-full px-4 py-1 text-xs font-bold shadow">1578+</span>
            </div>
            {/* Pills (tabs) */}
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              {placementCategories.map(cat => (
                <button
                  key={cat.key}
                  className={`px-6 py-2 text-base rounded-full border font-bold shadow-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-blue-200 ${selectedCategory === cat.key ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-700 shadow-lg' : 'bg-blue-50 text-blue-800 border-blue-100 hover:bg-blue-100 hover:text-blue-700'}`}
                  style={{minWidth:120}}
                  onClick={()=>setSelectedCategory(cat.key)}
                >
                  {cat.label}
                </button>
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
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.36, delay: 0.04 * i }}
                  className="rounded-2xl bg-white p-6 flex flex-col items-center shadow-lg border border-blue-50 group hover:shadow-xl transition-all duration-400"
                  style={{minHeight:258}}
                >
                  <img src={item.image} alt={item.name} className="rounded-full w-20 h-20 object-cover mb-3 border-4 border-blue-200 bg-white shadow" />
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
        {/* 5. Gallery (placement activities, etc) */}
        <section className="max-w-6xl mx-auto w-full py-14 px-4">
          <div className="border-b border-blue-100 mb-8 flex items-center gap-2 overflow-x-auto">
            {galleryTabs.map((tab, idx) => (
              <button
                key={tab.key}
                onClick={() => setGalleryTab(tab.key)}
                className={`text-sm md:text-[15px] font-bold px-5 py-2 border-b-4 tracking-wide transition bg-transparent outline-none focus:ring-2 rounded-t-xl mr-2 whitespace-nowrap ${galleryTab === tab.key ? 'border-blue-600 text-blue-700 bg-white drop-shadow-sm' : 'border-transparent text-blue-700/70 hover:border-blue-200'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={galleryTab}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 32 }}
              transition={{ duration: 0.39, ease: 'easeInOut' }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8"
            >
              {Array.from({length: 6}).map((_, i) => (
                <div key={i} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-md flex items-center justify-center border border-blue-100">
                  <img
                    src={placementGalleryImages[i % placementGalleryImages.length]}
                    alt={`Placement Gallery ${i+1}`}
                    className="object-cover w-full h-64"
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
        {/* 6. Footer (must be at very end) */}
        <Footer />
      </div>
    </DarkModeProvider>
  );
};
export default PlacementPage;



