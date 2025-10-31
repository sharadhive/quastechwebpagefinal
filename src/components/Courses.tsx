import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Brain,
  Shield,
  Clock,
  Users,
  Star,
  ArrowRight,
  Download,
  MoreHorizontal,
  Calendar
} from "lucide-react";

const Courses = () => {
  const courses = [
    {
      icon: Database,
      title: "Data Science & Analytics with AI",
      duration: "8-10 Months",
      trainingType: "Classroom & Online Training",
      batchTypes: "Weekday and Weekend Batches",
      // seatsLeft: 2,
      // countdown: "47 hrs : 59 mins : 44 sec",
      features: [
        "/coursesicons/bootstrap.jpg",
        "/coursesicons/css.jpg",
        "/coursesicons/django.jpg",
        "/coursesicons/html.jpg",
        "/coursesicons/jquery.jpg",
        "/coursesicons/mysql.jpg"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Code,
      title: "Python Full Stack Development",
      duration: "6-8 Months",
      trainingType: "Classroom & Online Training",
      batchTypes: "Weekday and Weekend Batches",
      // seatsLeft: 3,
      // countdown: "23 hrs : 15 mins : 32 sec",
      features: [
        "/coursesicons/python.jpg",
        "/coursesicons/django.jpg",
        "/coursesicons/mysql.jpg",
        "/coursesicons/html.jpg",
        "/coursesicons/css.jpg",
        "/coursesicons/bootstrap.jpg"
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Globe,
      title: "Java Full Stack Development",
      duration: "7-9 Months",
      trainingType: "Classroom & Online Training",
      batchTypes: "Weekday and Weekend Batches",
      // seatsLeft: 1,
      // countdown: "12 hrs : 30 mins : 15 sec",
      features: [
        "/coursesicons/bootstrap.jpg",
        "/coursesicons/css.jpg",
        "/coursesicons/jquery.jpg",
        "/coursesicons/html.jpg",
        "/coursesicons/mysql.jpg",
        "/coursesicons/django.jpg"
      ],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      duration: "5-7 Months",
      trainingType: "Classroom & Online Training",
      batchTypes: "Weekday and Weekend Batches",
      // seatsLeft: 4,
      // countdown: "18 hrs : 45 mins : 22 sec",
      features: [
        "/coursesicons/html.jpg",
        "/coursesicons/css.jpg",
        "/coursesicons/jquery.jpg",
        "/coursesicons/bootstrap.jpg",
        "/coursesicons/python.jpg",
        "/coursesicons/mysql.jpg"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      duration: "10-12 Months",
      trainingType: "Classroom & Online Training",
      batchTypes: "Weekday and Weekend Batches",
      // seatsLeft: 2,
      // countdown: "35 hrs : 20 mins : 18 sec",
      features: [
        "/coursesicons/python.jpg",
        "/coursesicons/django.jpg",
        "/coursesicons/mysql.jpg",
        "/coursesicons/html.jpg",
        "/coursesicons/css.jpg",
        "/coursesicons/bootstrap.jpg"
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      duration: "6-8 Months",
      trainingType: "Classroom & Online Training",
      batchTypes: "Weekday and Weekend Batches",
      // seatsLeft: 3,
      // countdown: "28 hrs : 12 mins : 45 sec",
      features: [
        "/coursesicons/html.jpg",
        "/coursesicons/css.jpg",
        "/coursesicons/jquery.jpg",
        "/coursesicons/bootstrap.jpg",
        "/coursesicons/python.jpg",
        "/coursesicons/mysql.jpg"
      ],
      color: "from-red-500 to-orange-600"
    }
  ];

  return (
    <section id="courses" className="section-padding bg-gradient-mesh overflow-hidden">
      <div className="container mx-auto container-padding overflow-hidden">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 shadow text-white text-base font-semibold">
            <Code className="w-6 h-6 mr-1 text-white" />
            COURSES
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-3">
            <span className="bg-gradient-to-r from-[#6B5B95] via-[#9B6B8F] to-[#8B5A5A] bg-clip-text text-transparent">
              Transform Your Career
            </span>
          </h2>
          <div className="h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 mb-6" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed by industry experts 
            with hands-on projects and guaranteed placement assistance.
          </p>
        </motion.div>

        {/* Courses Slider with Professional Cards */}
        <div className="relative overflow-hidden">
          {/* Mobile: Vertical Stack */}
          <div className="block md:hidden space-y-3 sm:space-y-4 py-2 sm:py-4">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
              className="group"
            >
                <Card className="w-full h-[350px] sm:h-[380px] overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 bg-white transform-gpu">
                  {/* Compact Header - Countdown and Seats Side by Side */}
                  {/* <div className="flex items-center justify-between p-2 sm:p-3 bg-gradient-to-r from-blue-50 to-orange-50">
                    <div className="flex items-center gap-2">
                      <Timer className="w-3 h-3 text-institute-blue" />
                      <div>
                        <div className="text-xs text-gray-600">Next batch starts in</div>
                        <div className="text-sm font-bold text-institute-blue">{course.countdown}</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {course.seatsLeft} seats left
                    </div>
                  </div> */}

                  <CardContent className="p-2 sm:p-3 flex flex-col h-full">
                    {/* Main Content - Course Icon Left, Details Right */}
                    <div className="flex gap-2 sm:gap-3 mb-2 sm:mb-3">
                      {/* Course Icon - Left Side */}
                      <motion.div 
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <course.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </motion.div>
                      
                      {/* Course Details - Right Side */}
                      <div className="flex-1">
                        <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 leading-tight">
                          {course.title}
                        </h3>
                        <div className="flex items-center gap-1 mb-1">
                          <Clock className="w-3 h-3 text-institute-blue" />
                          <span className="text-xs text-gray-600">{course.duration} {course.trainingType}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-institute-orange" />
                          <span className="text-xs text-gray-600">{course.batchTypes}</span>
                        </div>
                      </div>
                    </div>

                    {/* Technology Logos - Consistent Size */}
                    <div className="mb-2 sm:mb-3">
                      <div className="flex justify-center gap-1.5 sm:gap-2 flex-wrap">
                        {course.features.slice(0, 6).map((imgSrc, idx) => (
                          <motion.div 
                            key={idx} 
                            className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center shadow-md border border-gray-200"
                            whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <img
                              src={imgSrc}
                              alt="Tech"
                              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Feature Labels - Consistent Spacing */}
                    <div className="mb-4">
                      <div className="flex gap-1 justify-center">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-2 py-1 rounded-full text-xs font-bold">
                          UNLIMITED INTERVIEWS
                        </div>
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                          INTEGRATED INTERNSHIP
                        </div>
                      </div>
                    </div>

                    {/* Bottom Buttons - Compact */}
                    <div className="mt-auto space-y-2 pb-3">
                      <div className="flex gap-1">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 text-xs transition-all duration-300 font-semibold"
                        >
                          <Download className="w-3 h-3 mr-1" />
                          <span className="relative z-10">Download</span>
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs"
                        >
                          <MoreHorizontal className="w-3 h-3 mr-1" />
                          Know More
                        </Button>
                      </div>
                      
                      {/* Enroll Now Button */}
                      <motion.div
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          alert(`Enrolling in ${course.title}! We'll contact you soon.`);
                        }}
                        className="cursor-pointer"
                      >
                        <Button
                          variant="default"
                          size="sm"
                          className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group text-xs border-0"
                        >
                          <motion.span 
                            className="relative z-10 flex items-center justify-center gap-1"
                            whileHover={{ x: 1 }}
                          >
                            <span>Enroll Now</span>
                            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                          </motion.span>
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Horizontal Slider */}
          <motion.div
            className="hidden md:flex gap-3 md:gap-4 lg:gap-6 xl:gap-8 py-4"
            animate={{ x: [0, -2000] }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 35,
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {[...courses, ...courses].map((course, index) => (
              <motion.div
                key={`${course.title}-${index}`}
                className="flex-shrink-0 w-72 md:w-80"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-[400px] md:h-[420px] w-72 md:w-80 overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 bg-white transform-gpu">
                  <CardContent className="p-4 flex flex-col h-full">
                    {/* Main Content - Course Icon Left, Details Right */}
                    <div className="flex gap-4 mb-4">
                      {/* Course Icon - Left Side */}
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <course.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      {/* Course Details - Right Side */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                          {course.title}
                        </h3>
                        <div className="flex items-center gap-1 mb-1">
                          <Clock className="w-3 h-3 text-institute-blue" />
                          <span className="text-xs text-gray-600">{course.duration} {course.trainingType}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-institute-orange" />
                          <span className="text-xs text-gray-600">{course.batchTypes}</span>
                        </div>
                      </div>
                    </div>

                    {/* Technology Logos - Consistent Size */}
                    <div className="mb-4">
                      <div className="flex justify-center gap-3 flex-wrap">
                        {course.features.slice(0, 6).map((imgSrc, idx) => (
                          <motion.div 
                            key={idx} 
                            className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md border border-gray-200"
                            whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <img
                              src={imgSrc}
                              alt="Tech"
                              className="w-8 h-8 object-contain"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Feature Labels - Consistent Spacing */}
                    <div className="mb-5">
                      <div className="flex gap-2 justify-center">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-xs font-bold">
                          UNLIMITED INTERVIEWS
                        </div>
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          INTEGRATED INTERNSHIP
                        </div>
                      </div>
                    </div>

                    {/* Bottom Buttons - Compact */}
                    <div className="mt-auto space-y-2 pb-4">
                      <div className="flex gap-1">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 text-xs transition-all duration-300 font-semibold"
                        >
                          <Download className="w-3 h-3 mr-1" />
                          <span className="relative z-10">Download</span>
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs"
                        >
                          <MoreHorizontal className="w-3 h-3 mr-1" />
                          Know More
                        </Button>
                      </div>
                      
                      {/* Enroll Now Button */}
                      <motion.div
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          alert(`Enrolling in ${course.title}! We'll contact you soon.`);
                        }}
                        className="cursor-pointer"
                      >
                    <Button
                      variant="default"
                          size="sm"
                          className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500 hover:from-blue-700 hover:via-blue-800 hover:to-orange-600 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group text-sm border-0"
                        >
                          <motion.span 
                            className="relative z-10 flex items-center justify-center gap-2"
                            whileHover={{ x: 1 }}
                          >
                            <span>Enroll Now</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </motion.span>
                    </Button>
                      </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8"
        >
          <div className="bg-gradient-hero rounded-3xl p-12 lg:p-16 text-white shadow-xl">
            <h3 className="heading-md mb-6">
              Not sure which course is right for you?
            </h3>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
              Talk to our career counselors and get personalized course recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="glass" size="xl" className="text-lg font-bold">
                Free Career Counseling
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
