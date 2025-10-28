import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CoursesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CourseTab = "it" | "non-it" | "eclass" | "degree";
type ITCategory = "st" | "fd" | "sd" | "fed" | "ds" | "bde" | "rpa";

const CoursesModal = ({ isOpen, onClose }: CoursesModalProps) => {
  const [activeTab, setActiveTab] = useState<CourseTab>("it");
  const [activeCategory, setActiveCategory] = useState<ITCategory>("st");

  // IT Course Categories with their sub-courses
  const itCourses = {
    st: {
      title: "Software Testing",
      courses: [
        { name: "Software Testing Course", icon: "📚" },
        { name: "Manual Testing", icon: "📚" },
        { name: "Selenium Automation Testing", icon: "📚" },
        { name: "ISTQB Certification", icon: "📚" }
      ]
    },
    fd: {
      title: "Fullstack Development",
      courses: [
        { name: "Full Stack Java Development", icon: "📚" },
        { name: "Full Stack Python Development", icon: "📚" },
        { name: "Full Stack Web Development", icon: "📚" },
        { name: "MERN Stack Development", icon: "📚" }
      ]
    },
    sd: {
      title: "Software Development",
      courses: [
        { name: "Java Development", icon: "📚" },
        { name: "Python Development", icon: "📚" },
        { name: "Advanced Java Programming", icon: "📚" },
        { name: "Spring Boot Development", icon: "📚" }
      ]
    },
    fed: {
      title: "Front End Development",
      courses: [
        { name: "React JS Development", icon: "📚" },
        { name: "Angular Development", icon: "📚" },
        { name: "Vue JS Development", icon: "📚" },
        { name: "Web Designing", icon: "📚" }
      ]
    },
    ds: {
      title: "Data Science With Python",
      courses: [
        { name: "Data Science Fundamentals", icon: "📚" },
        { name: "Machine Learning", icon: "📚" },
        { name: "Deep Learning", icon: "📚" },
        { name: "AI & Data Analytics", icon: "📚" }
      ]
    },
    bde: {
      title: "BIG Data Engineering",
      courses: [
        { name: "Hadoop Development", icon: "📚" },
        { name: "Apache Spark", icon: "📚" },
        { name: "Data Warehousing", icon: "📚" },
        { name: "ETL Development", icon: "📚" }
      ]
    },
    rpa: {
      title: "RPA",
      courses: [
        { name: "UiPath Development", icon: "📚" },
        { name: "Automation Anywhere", icon: "📚" },
        { name: "Blue Prism", icon: "📚" },
        { name: "RPA Architecture", icon: "📚" }
      ]
    }
  };

  // Non-IT Courses
  const nonItCourses = [
    { name: "Digital Marketing Course", link: "https://quaskills.com/digital_marketing_course.html" },
    { name: "Data Analysis & Visualization With Python Course", link: "https://quaskills.com/data_analysis_visualization_course.html" },
    { name: "Graphic Designing Course", link: "https://quaskills.com/graphic_designing_course.html" },
    { name: "Web Graphic Designing Course", link: "https://quaskills.com/web_graphic_designing_course.html" },
    { name: "Management Information System (MIS) Course", link: "https://quaskills.com/management_information_system_course.html" },
    { name: "Information Technology Programme Course", link: "https://quaskills.com/information_technology_programme_course.html" },
    { name: "Financial Accounting Course", link: "https://quaskills.com/financial_accounting_course.html" },
    { name: "Accounting Course", link: "https://quaskills.com/accounting_course.html" },
    { name: "Taxation Course", link: "https://quaskills.com/taxation_course.html" }
  ];

  // E-Class Courses
  const eclassCourses = [
    { name: "SOFTWARE TESTING TRAINING", link: "/software-testing-training" },
    { name: "FULL STACK JAVA DEVELOPMENT TRAINING", link: "/full-stack-java-Development" },
    { name: "FULL STACK PYTHON DEVELOPMENT TRAINING", link: "/full-stack-python-Development" },
    { name: "FULL STACK WEB DEVELOPMENT TRAINING", link: "/web-development-course.html" },
    { name: "JAVA DEVELOPMENT TRAINING", link: "/java-training" },
    { name: "PYTHON DEVELOPMENT TRAINING", link: "/python-training" },
    { name: "WEB DESIGNING TRAINING", link: "/web-designing-training" }
  ];

  // Degree Courses
  const degreeCourses = [
    { name: "BCA Course", link: "/bcacourse" },
    { name: "Dual Degree Program", link: "/dualdegree" }
  ];

  const tabs = [
    { id: "it" as CourseTab, label: "IT PLACEMENT COURSES" },
    { id: "non-it" as CourseTab, label: "NON IT PLACEMENT COURSES" },
    { id: "eclass" as CourseTab, label: "E Class" },
    { id: "degree" as CourseTab, label: "Degree" }
  ];

  const itCategories = [
    { id: "st" as ITCategory, label: "Software Testing" },
    { id: "fd" as ITCategory, label: "Fullstack Development" },
    { id: "sd" as ITCategory, label: "Software Development" },
    { id: "fed" as ITCategory, label: "Front End Development" },
    { id: "ds" as ITCategory, label: "Data Science With Python" },
    { id: "bde" as ITCategory, label: "BIG Data Engineering" },
    { id: "rpa" as ITCategory, label: "RPA" }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-white rounded-2xl shadow-2xl w-[95vw] max-w-4xl max-h-[85vh] overflow-hidden z-10"
        >
          {/* Modal Header with Tabs */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-xl font-bold flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Our Courses
              </h2>
              <button
                onClick={onClose}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (tab.id === "it") {
                      setActiveCategory("st"); // Reset to first category when switching to IT
                    }
                  }}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-white text-blue-600 shadow-lg"
                      : "bg-blue-500 text-white hover:bg-blue-400"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto max-h-[calc(85vh-180px)]">
            {/* IT Courses - Two Column Layout */}
            {activeTab === "it" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Left Sidebar - Categories */}
                <div className="md:col-span-5 space-y-2">
                  {itCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        activeCategory === category.id
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>

                {/* Right Side - Sub Courses */}
                <div className="md:col-span-7">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                      {itCourses[activeCategory].title}
                    </h3>
                    {itCourses[activeCategory].courses.map((course, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="group bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-md"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{course.icon}</span>
                            <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                              {course.name}
                            </span>
                          </div>
                          <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            )}

            {/* NON IT Courses - Grid Layout */}
            {activeTab === "non-it" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {nonItCourses.map((course, index) => (
                  <motion.a
                    key={index}
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-5 h-5 text-purple-600" />
                        <span className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors text-sm">
                          {course.name}
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.a>
                ))}
              </div>
            )}

            {/* E-Class Courses - Grid Layout */}
            {activeTab === "eclass" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {eclassCourses.map((course, index) => (
                  <motion.a
                    key={index}
                    href={course.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-5 h-5 text-orange-600" />
                        <span className="font-medium text-gray-800 group-hover:text-orange-600 transition-colors text-sm">
                          {course.name}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.a>
                ))}
              </div>
            )}

            {/* Degree Courses - Grid Layout */}
            {activeTab === "degree" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {degreeCourses.map((course, index) => (
                  <motion.a
                    key={index}
                    href={course.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-5 h-5 text-green-600" />
                        <span className="font-medium text-gray-800 group-hover:text-green-600 transition-colors text-sm">
                          {course.name}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-green-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Need help choosing? <span className="font-semibold text-blue-600">Call us at +91 8422800381</span>
              </p>
              <Button
                onClick={onClose}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
              >
                Close
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CoursesModal;

