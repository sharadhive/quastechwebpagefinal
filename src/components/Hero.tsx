import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { User, Mail, Phone, Award, ShieldCheck, Briefcase, CreditCard } from "lucide-react";

// A simpler, more elegant background gradient.
const HeroBackground = () => (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
            backgroundImage: `linear-gradient(120deg, hsl(239, 41%, 44%) 0%, hsl(286, 31%, 49%) 50%, hsl(20, 74%, 66%) 100%)`,
        }}
    />
);

// Client logos, adapted for the new background.
const ClientLogo = ({ name }) => (
    <motion.div
        variants={itemVariants}
        className="text-gray-100 font-semibold text-xl sm:text-2xl opacity-70 hover:opacity-100 transition-opacity duration-300 drop-shadow-sm"
    >
        {name}
    </motion.div>
);

// --- Framer Motion Animation Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

// The main Hero component with a simplified design.
const Hero = () => {
    // Typing animation logic remains the same.
    const fullText = "Trusted and Renowned\nTraining Institute.";
    const [displayedText, setDisplayedText] = useState("");
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setDisplayedText((prev) => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(typingInterval);
                setIsTypingComplete(true);
            }
        }, 70);
        return () => clearInterval(typingInterval);
    }, [fullText]);

    const [cursorVisible, setCursorVisible] = useState(true);
    useEffect(() => {
        if (!isTypingComplete) return;
        const cursorBlink = setInterval(() => setCursorVisible((prev) => !prev), 500);
        return () => clearInterval(cursorBlink);
    }, [isTypingComplete]);

    const features = [
        { name: "100% Placement Assistance", icon: Briefcase },
        { name: "ISO 9001:2015 Certified", icon: ShieldCheck },
        { name: "Industry Expert Trainers", icon: Award },
        { name: "Flexible EMI Options", icon: CreditCard },
    ];

    return (
        <section id="home" className="relative w-full py-16 sm:py-24 lg:py-28 overflow-hidden">
            <HeroBackground />

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-5 gap-x-16 gap-y-12 items-center">
                    
                    {/* Left Column: No background panel, content sits directly on the gradient. */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="lg:col-span-3 text-center lg:text-left"
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight drop-shadow-md"
                        >
                            <span className="whitespace-pre-wrap">
                                {displayedText}
                                <span className={`transition-opacity duration-200 ${!isTypingComplete || cursorVisible ? 'opacity-100' : 'opacity-0'}`}>
                                    <span className="text-orange-300">|</span>
                                </span>
                            </span>
                        </motion.h1>

                        <motion.div
                            variants={containerVariants}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto lg:mx-0"
                        >
                            {features.map((feature) => (
                                <motion.div
                                    key={feature.name}
                                    variants={itemVariants}
                                    className="flex items-center gap-3 bg-white/10 rounded-lg p-3 drop-shadow-sm"
                                >
                                    <feature.icon className="w-6 h-6 text-orange-300 flex-shrink-0" />
                                    <span className="text-gray-200 font-medium text-sm sm:text-base">{feature.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2, boxShadow: '0 10px 20px -5px rgba(251, 146, 60, 0.4)' }}
                                whileTap={{ scale: 0.98 }}
                                className="group bg-orange-500 text-white font-semibold rounded-lg px-8 py-3 hover:bg-orange-600 transition-colors duration-300 shadow-lg shadow-orange-500/30"
                            >
                                Download Brochure
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="group bg-black/20 border border-white/50 text-white font-semibold rounded-lg px-8 py-3 hover:bg-black/30 transition-colors duration-300"
                            >
                                Know More
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Form also sits directly on the gradient, no panel. */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="lg:col-span-2"
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-center text-white mb-6 drop-shadow-md">Request a Callback</h3>
                            <form className="space-y-5">
                                {[
                                    { id: 'name', type: 'text', placeholder: 'Your Name', icon: User, label: 'Full Name' },
                                    { id: 'email', type: 'email', placeholder: 'e.g., name@example.com', icon: Mail, label: 'Email Address' },
                                    { id: 'mobile', type: 'tel', placeholder: '10-digit Mobile Number', icon: Phone, label: 'Mobile Number' },
                                ].map(field => (
                                    <div key={field.id}>
                                        <label htmlFor={field.id} className="block text-sm font-medium text-gray-200 mb-1.5 drop-shadow-sm">{field.label}</label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                                                <field.icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                            <input
                                                type={field.type}
                                                id={field.id}
                                                className="block w-full rounded-lg bg-black/30 border-white/20 text-gray-200 placeholder-gray-400 pl-11 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm py-3 transition-colors duration-200"
                                                placeholder={field.placeholder}
                                            />
                                        </div>
                                    </div>
                                ))}
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300"
                                >
                                    Submit
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="mt-28"
                >
                    <p className="text-center text-gray-200/80 font-semibold mb-8 drop-shadow-sm">Trusted by leading companies</p>
                    <div className="flex flex-wrap justify-center items-center gap-x-10 sm:gap-x-16 gap-y-8">
                        <ClientLogo name="AQM" />
                        <ClientLogo name="aurionpro" />
                        <ClientLogo name="CCAvenue" />
                        <ClientLogo name="CRMNEXT" />
                    </div>
                </motion.div>
            </div>
        </section>
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