import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  ArrowRight,
  BookOpen,
  Award,
  GraduationCap,
  Globe,
  Phone
} from "lucide-react";

interface CoursesMegaMenuProps {
  type: "it" | "non-it" | "eclass" | "degree";
  onClose: () => void;
}

const CoursesMegaMenu = ({ type, onClose }: CoursesMegaMenuProps) => {
  const courseData = {
    it: {
      title: "IT Courses",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      courses: [
        {
          title: "Data Science and Analytics with AI",
          duration: "8-10 Months"
        },
        {
          title: "Python Full Stack Development",
          duration: "6-8 Months"
        },
        {
          title: "Java Full Stack Development",
          duration: "6-8 Months"
        },
        {
          title: "DevOps with AWS",
          duration: "4-6 Months"
        },
        {
          title: "Digital Marketing with AI",
          duration: "4-6 Months"
        },
        {
          title: "Investment Banking with AI",
          duration: "4-6 Months"
        },
        {
          title: "Software Testing With AI",
          duration: "4-6 Months"
        }
      ]
    },
    "non-it": {
      title: "Non-IT Courses",
      icon: Globe,
      color: "from-purple-500 to-pink-500",
      courses: [
        {
          title: "Digital Marketing",
          duration: "4-6 Months"
        },
        {
          title: "Business Analytics",
          duration: "4-6 Months"
        },
        {
          title: "Project Management",
          duration: "3-4 Months"
        },
        {
          title: "Financial Analysis",
          duration: "4-6 Months"
        },
        {
          title: "Human Resources",
          duration: "3-4 Months"
        }
      ]
    },
    eclass: {
      title: "E-Class Courses",
      icon: Award,
      color: "from-orange-500 to-red-500",
      courses: [
        {
          title: "Online Full Stack Development",
          duration: "6-8 Months"
        },
        {
          title: "Online Data Science",
          duration: "8-10 Months"
        },
        {
          title: "Online Digital Marketing",
          duration: "4-6 Months"
        },
        {
          title: "Online Business Analytics",
          duration: "4-6 Months"
        }
      ]
    },
    degree: {
      title: "Degree Programs",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-500",
      courses: [
        {
          title: "B.Tech Computer Science",
          duration: "4 Years"
        },
        {
          title: "MCA (Master of Computer Applications)",
          duration: "2 Years"
        },
        {
          title: "BBA (Bachelor of Business Administration)",
          duration: "3 Years"
        },
        {
          title: "MBA (Master of Business Administration)",
          duration: "2 Years"
        }
      ]
    }
  };

  const currentData = courseData[type];

  return (
    <div className="w-full">
      {/* Course Category Tabs */}
      <div className="flex gap-2 mb-6">
        {Object.entries(courseData).map(([key, data]) => (
          <motion.button
            key={key}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              // Handle category selection if needed
            }}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
              type === key
                ? 'bg-white text-blue-600 border-2 border-blue-600'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {key === 'it' ? 'IT PLACEMENT COURSES' :
             key === 'non-it' ? 'NON IT PLACEMENT COURSES' :
             key === 'eclass' ? 'E Class' :
             'Degree'}
          </motion.button>
        ))}
      </div>

      {/* Course Cards - Two Column Layout for IT Courses */}
      <div className="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent">
        {type === 'it' ? (
          <div className="grid grid-cols-2 gap-4">
            {/* Left Column - General IT Courses */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-600 mb-3">General IT Courses</h4>
              {[
                "Software Testing",
                "Fullstack Development", 
                "Software Development",
                "Front End Development",
                "Data Science With Python",
                "BIG Data Engineering",
                "RPA"
              ].map((courseName, index) => (
                <motion.div
                  key={courseName}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <Card className="border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {courseName}
                        </h4>
                        <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Right Column - Software Testing Specialized Courses */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-600 mb-3">Software Testing Specialized</h4>
              {[
                "Software Testing Course",
                "Manual Testing",
                "Selenium Automation Testing", 
                "ISTQB Certification"
              ].map((courseName, index) => (
                <motion.div
                  key={courseName}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index + 7) * 0.05 }}
                  className="group"
                >
                  <Card className="border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-sm"></div>
                          </div>
                          <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {courseName}
                          </h4>
                        </div>
                        <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          /* Single Column Layout for Other Categories */
          <div className="space-y-3">
            {currentData.courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <Card className="border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-lg cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-1">
                          {course.title}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span>Duration: {course.duration}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-3">
            Looking for Guidance ?
          </p>
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            onClick={onClose}
          >
            <Phone className="w-4 h-4" />
            Request A Call Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoursesMegaMenu;
