import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { User, Mail, Phone, Award, ShieldCheck, Briefcase, CreditCard } from "lucide-react";
import BrochureModal from "./BrochureModal"; // 👈 IMPORT THE MODAL

// A professional background with a futuristic grid overlay.
const HeroBackground = () => (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
    >
        {/* The original gradient background */}
        <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(120deg, hsl(239, 41%, 44%) 0%, hsl(286, 31%, 49%) 50%, hsl(20, 74%, 66%) 100%)`,
        }} />

        {/* FUTURISTIC TOUCH: Subtle grid overlay for a high-tech feel */}
        <div 
             className="absolute inset-0 opacity-20"
             style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, white 40%, transparent 100%)'
             }}
        />
    </div>
);


// Updated Client Logo for the new theme
const ClientLogo = ({ name }) => (
    <motion.div
        variants={itemVariants}
        className="text-gray-200 font-semibold text-xl sm:text-2xl opacity-70 hover:opacity-100 transition-opacity duration-300"
    >
        {name}
    </motion.div>
);

// --- Framer Motion Animation Variants ---
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } } };

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // --- CONFIGURATION ---
    const BROCHURE_FILE_PATH = "/Quastech-Course-Brochure.pdf";
    const BROCHURE_IMAGE_URL = "/course-promo-image.png"; 
    const WHATSAPP_NUMBER = "919373922206";
    
    // --- Looping Typing Effect ---
    const typingTexts = [
        "Trusted and Renowned Training Institute.",
        "Future Through Innovations.",
        "Launch Your Dream IT Career.",
        "Master In-Demand Tech Skills.",
        "100% Placement Assistance.",
    ];
    const [textIndex, setTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const handleTypingLoop = () => {
            const currentText = typingTexts[textIndex];
            
            const updatedText = isDeleting
                ? currentText.slice(0, charIndex - 1)
                : currentText.slice(0, charIndex + 1);

            setDisplayedText(updatedText);
            setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

            if (!isDeleting && updatedText === currentText) {
                setTimeout(() => setIsDeleting(true), 2500);
            } else if (isDeleting && updatedText === "") {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % typingTexts.length);
                setCharIndex(0);
            }
        };

        const typingSpeed = isDeleting ? 60 : 120;
        const timeout = setTimeout(handleTypingLoop, typingSpeed);
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, typingTexts]);

    const [cursorVisible, setCursorVisible] = useState(true);
    useEffect(() => {
        const cursorBlink = setInterval(() => setCursorVisible((prev) => !prev), 500);
        return () => clearInterval(cursorBlink);
    }, []);

    const features = [
        { name: "100% Placement Assistance", icon: Briefcase },
        { name: "ISO 9001:2015 Certified", icon: ShieldCheck },
        { name: "Industry Expert Trainers", icon: Award },
        { name: "Flexible EMI Options", icon: CreditCard },
    ];

    return (
        <>
            {/* ADJUSTED PADDING FOR BETTER ALIGNMENT */}
            <section id="home" className="relative w-full py-20 lg:py-24 overflow-hidden text-white">
                <HeroBackground />
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-x-16 gap-y-12 items-center">
                        {/* Left Column */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            className="lg:col-span-3 text-center lg:text-left"
                        >
                            {/* ADJUSTED MARGINS AND HEIGHT */}
                            <motion.h1
                                variants={itemVariants}
                                className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight min-h-[140px] sm:min-h-[160px] md:min-h-[192px]"
                            >
                                <span className="whitespace-pre-wrap">
                                    {displayedText}
                                    <span className={`transition-opacity duration-150 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>
                                        <span className="text-orange-400">|</span>
                                    </span>
                                </span>
                            </motion.h1>
                            
                            <motion.p
                                variants={itemVariants}
                                className="text-gray-200 text-base sm:text-lg max-w-xl lg:max-w-2xl mb-6 mx-auto lg:mx-0"
                            >
                                Be job-ready faster with expert mentors, real-world projects, and dedicated placement assistance.
                            </motion.p>
                            
                            <motion.div
                                variants={containerVariants}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto lg:mx-0"
                            >
                                {features.map((feature) => (
                                    <motion.div
                                        key={feature.name}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
                                        className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 transition-all duration-300 cursor-pointer shadow-lg"
                                    >
                                        <feature.icon className="w-6 h-6 text-orange-400 flex-shrink-0" />
                                        <span className="text-gray-200 font-medium text-sm sm:text-base">{feature.name}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                            
                            <motion.div
                                variants={itemVariants}
                                className="flex justify-center lg:justify-start"
                            >
                                <motion.button
                                    onClick={() => setIsModalOpen(true)}
                                    whileHover={{ scale: 1.05, y: -2, boxShadow: '0 10px 20px -5px rgba(251, 146, 60, 0.4)' }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-orange-500 text-white font-semibold rounded-lg px-8 py-3.5 hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/30"
                                >
                                    Download Brochure
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Right Column: Form with futuristic glass effect */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-black/20 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-2xl">
                                <h3 className="text-2xl font-bold text-center text-white mb-6">Request a Callback</h3>
                                <form className="space-y-4">
                                    {[
                                        { id: 'name-hero', type: 'text', placeholder: 'Your Name', icon: User, label: 'Full Name' },
                                        { id: 'email-hero', type: 'email', placeholder: 'your.email@example.com', icon: Mail, label: 'Email Address' },
                                        { id: 'mobile-hero', type: 'tel', placeholder: '10-digit Mobile Number', icon: Phone, label: 'Mobile Number' },
                                    ].map(field => (
                                        <div key={field.id}>
                                            <label htmlFor={field.id} className="block text-sm font-medium text-gray-300 mb-1.5">{field.label}</label>
                                            <div className="relative">
                                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                                                    <field.icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </div>
                                                <input
                                                    type={field.type}
                                                    id={field.id}
                                                    className="block w-full rounded-lg bg-white/5 border-white/10 text-gray-200 placeholder-gray-400 pl-11 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 focus:bg-white/10 sm:text-sm py-2.5 transition duration-300"
                                                    placeholder={field.placeholder}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-orange-500 transition-all"
                                    >
                                        Submit
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </div>

                    {/* ADJUSTED MARGIN */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="mt-20 text-center"
                    >
                        <p className="text-center text-gray-300 font-semibold mb-6">Trusted by leading companies</p>
                        <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 gap-y-6">
                            <ClientLogo name="TechMahindra" />
                            <ClientLogo name="Capgemini" />
                            <ClientLogo name="Infosys" />
                            <ClientLogo name="Wipro" />
                        </div>
                    </motion.div>
                </div>
            </section>
            
            <BrochureModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                brochureUrl={BROCHURE_FILE_PATH}
                brochureImageUrl={BROCHURE_IMAGE_URL}
                whatsappNumber={WHATSAPP_NUMBER}
            />
        </>
    );
};

// Main App component to render the page
const App = () => {
    return (
        <main className="font-sans antialiased bg-gray-900">
            <Hero />
        </main>
    );
}

export default App;
