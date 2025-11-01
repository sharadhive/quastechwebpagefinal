import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  ArrowRight
} from "lucide-react";

// Helper component for list items
const FooterLink = ({ href, name }) => {
  // Check if it's an internal link (starts with /) or external link
  const isInternalLink = href.startsWith('/');
  
  if (isInternalLink) {
    return (
      <li>
        <Link
          to={href}
          onClick={(e) => {
            if (name === "Home") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center text-gray-300 hover:text-white transition-colors text-sm group"
        >
          <ArrowRight className="w-3 h-3 mr-2 text-blue-400 group-hover:text-white transition-colors" />
          {name}
        </Link>
      </li>
    );
  }
  
  return (
    <li>
      <a
        href={href}
        onClick={(e) => {
          if (name === "Home") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (name === "Faq's") {
            e.preventDefault();
            // Navigate to home page first, then scroll to FAQ section
            window.location.href = '/#faq';
          }
        }}
        className="flex items-center text-gray-300 hover:text-white transition-colors text-sm group"
      >
        <ArrowRight className="w-3 h-3 mr-2 text-blue-400 group-hover:text-white transition-colors" />
        {name}
      </a>
    </li>
  );
};

// Helper component for section titles
const FooterTitle = ({ title }) => (
  <h4 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">
    {title}
  </h4>
);

const Footer = () => {
  const itTrainingLinks = [
    { name: "Software Testing Training", href: "/software-testing-training" },
    { name: "Full Stack Java Development", href: "/full-stack-java-development" },
    { name: "Full Stack Python Development", href: "/full-stack-python-development" },
    { name: "Full Stack Web Development", href: "/web-development-course" },
    { name: "Data Science With Python", href: "/python-data-science" },
    { name: "Java Development Training", href: "/java-training" },
    { name: "Python Development Training", href: "/python-training" },
    { name: "Web Designing Training", href: "/web-designing-training" },
    { name: "React Training", href: "/react-course" },
    { name: "Angular Training", href: "/angular-course" },
    { name: "RPA Training", href: "/rpa" }
  ];

  const dualDegreeLinks = [
    { name: "BCA", href: "/bca" },
    { name: "Quastech Degree Program", href: "/quastech-degree-program" }
  ];
  
  const onlineLinks = [
    { name: "Software Testing Training", href: "/software-testing-training" },
    { name: "Full Stack Java Development", href: "/full-stack-java-development" },
    { name: "Full Stack Python Development", href: "/full-stack-python-development" },
    { name: "Full Stack Web Development", href: "/web-development-course" },
    { name: "Data Science With Python", href: "/python-data-science" },
    { name: "Java Development Training", href: "/java-training" },
    { name: "Python Development Training", href: "/python-training" },
    { name: "Web Designing Training", href: "/web-designing-training" },
    { name: "React Training", href: "/react-course" },
    { name: "Angular Training", href: "/angular-course" },
    { name: "Digital Marketing", href: "/digital-marketing" }
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "/about" },
    { name: "Placement", href: "/placement" },
    { name: "Contact Us", href: "/contact" },
    { name: "Certificate Download", href: "#" },
    { name: "Payment Methods", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Faq's", href: "#" }
  ];

  const nonItTrainingLinks = [
    { name: "Digital Marketing", href: "/digital-marketing" },
    { name: "Data Analysis & Visualization With Python", href: "/data-analysis-visualization" },
    { name: "Graphic Designing", href: "/graphic-designing" },
    { name: "Web Graphic Designing", href: "/web-graphic-designing" },
    { name: "Management Information Systems (MIS)", href: "/management-information-systems" },
    { name: "Information Technology Programme", href: "/information-technology-programme" },
    { name: "Financial Accounting", href: "/financial-accounting" },
    { name: "Accounting", href: "/accounting" },
    { name: "Taxation", href: "/taxation" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/QuasTech", color: "hover:text-blue-500" },
    { icon: Twitter, href: "https://twitter.com/quastech", color: "hover:text-sky-400" },
    { icon: Instagram, href: "https://www.instagram.com/quastech.in/", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/quastech-in/", color: "hover:text-blue-400" },
    { icon: Youtube, href: "https://www.youtube.com/c/QuasTech", color: "hover:text-red-500" }
  ];

  return (
    // Changed to dark blue background and white text
    <footer className="bg-blue-950 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Changed to 5 columns to accommodate all content */}
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          
          {/* Column 1: Company Info (From Code) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              {/* Using the logo path from your code */}
              <img
                src="/uploads/64f34837-4f64-4bbc-886b-305630eefd79.png"
                alt="QUASTECH Logo"
                className="h-10 w-auto mb-4 brightness-0 invert" // Kept invert filter to make logo white
              />
              <p className="text-gray-300 leading-relaxed text-sm">
                Leading IT education institute with ISO 9001:2015 certification. 
                Transforming careers through innovative technology training.
              </p>
            </div>
            
            {/* Contact Info (From Code) */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-300">
                  123 Tech Street, IT Hub, Bangalore 560001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">info@quastech.com</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: IT TRAINING & DUAL DEGREE (From Image) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FooterTitle title="IT TRAINING" />
            <ul className="space-y-3">
              {itTrainingLinks.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>

            <FooterTitle title="DUAL DEGREE" />
            <ul className="space-y-3">
              {dualDegreeLinks.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>
          </motion.div>

          {/* Column 3: ONLINE & QUICK LINKS (From Image) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FooterTitle title="ONLINE" />
            <ul className="space-y-3">
              {onlineLinks.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>

            <FooterTitle title="QUICK LINKS" />
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>
          </motion.div>

          {/* Column 4: NON IT TRAINING (From Image) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FooterTitle title="NON IT TRAINING" />
            <ul className="space-y-3">
              {nonItTrainingLinks.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>
          </motion.div>
          
          {/* Column 5: Connect with us (From Image) & Socials (From Code) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FooterTitle title="Connect with us" />
            <form className="space-y-4 mb-6">
              <div>
                <label htmlFor="footer-mobile" className="sr-only">Mobile Number</label>
                <Input
                  id="footer-mobile"
                  type="tel"
                  placeholder="Enter 10-digit Mobile Number"
                  className="bg-blue-900 border-blue-700 text-white placeholder:text-gray-400 focus:border-white focus:ring-white"
                />
              </div>
              <div>
                <label htmlFor="footer-name" className="sr-only">Full Name</label>
                <Input
                  id="footer-name"
                  type="text"
                  placeholder="Your Name"
                  className="bg-blue-900 border-blue-700 text-white placeholder:text-gray-400 focus:border-white focus:ring-white"
                />
              </div>
              <div>
                <label htmlFor="footer-email" className="sr-only">Email</label>
                <Input
                  id="footer-email"
                  type="email"
                  placeholder="e.g. yourname@gmail.com"
                  className="bg-blue-900 border-blue-700 text-white placeholder:text-gray-400 focus:border-white focus:ring-white"
                />
              </div>
              <Button type="submit" className="w-full bg-white text-blue-950 hover:bg-gray-200">
                Submit
              </Button>
            </form>
            
            {/* Social Links (From Code) */}
            <div>
              <h5 className="font-semibold mb-4 text-white">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-colors border border-blue-700`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar (From Code) */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left">
              © 2024 QUASTECH. All rights reserved. | ISO 9001:2015 Certified
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
