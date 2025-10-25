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
  BookOpen,
  Award,
  GraduationCap,
  ExternalLink
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
          title: "Full Stack Development",
          description: "Master MERN, Django, and modern web technologies",
          duration: "6 months",
          students: "500+",
          rating: 4.9,
          features: ["React", "Node.js", "MongoDB", "Express"],
          color: "from-blue-500 to-purple-600"
        },
        {
          title: "Data Science & AI",
          description: "Python, Machine Learning, Deep Learning & Analytics",
          duration: "8 months",
          students: "300+",
          rating: 4.8,
          features: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
          color: "from-green-500 to-teal-600"
        },
        {
          title: "Mobile App Development",
          description: "iOS, Android & Cross-platform development",
          duration: "5 months",
          students: "400+",
          rating: 4.9,
          features: ["React Native", "Flutter", "Swift", "Kotlin"],
          color: "from-purple-500 to-pink-600"
        },
        {
          title: "Cybersecurity",
          description: "Ethical Hacking, Network Security & Penetration Testing",
          duration: "6 months",
          students: "350+",
          rating: 4.8,
          features: ["Ethical Hacking", "Network Security", "Penetration Testing", "Forensics"],
          color: "from-red-500 to-orange-600"
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
          description: "SEO, SEM, Social Media & Content Marketing",
          duration: "4 months",
          students: "800+",
          rating: 4.7,
          features: ["SEO", "Google Ads", "Social Media", "Analytics"],
          color: "from-orange-500 to-red-600"
        },
        {
          title: "Business Analytics",
          description: "Data Analysis, Visualization & Business Intelligence",
          duration: "5 months",
          students: "250+",
          rating: 4.6,
          features: ["Excel", "Power BI", "Tableau", "SQL"],
          color: "from-indigo-500 to-blue-600"
        },
        {
          title: "Project Management",
          description: "PMP, Agile, Scrum & Project Leadership",
          duration: "3 months",
          students: "400+",
          rating: 4.8,
          features: ["PMP", "Agile", "Scrum", "Leadership"],
          color: "from-green-500 to-emerald-600"
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
          description: "Live online classes with industry experts",
          duration: "6 months",
          students: "200+",
          rating: 4.9,
          features: ["Live Sessions", "Recordings", "Projects", "Mentorship"],
          color: "from-blue-500 to-purple-600"
        },
        {
          title: "Online Data Science",
          description: "Interactive online learning with real-world projects",
          duration: "8 months",
          students: "150+",
          rating: 4.8,
          features: ["Live Coding", "Projects", "Certification", "Placement"],
          color: "from-green-500 to-teal-600"
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
          description: "4-year degree program with industry exposure",
          duration: "4 years",
          students: "100+",
          rating: 4.9,
          features: ["University Degree", "Industry Projects", "Internships", "Placement"],
          color: "from-blue-500 to-purple-600"
        },
        {
          title: "MCA (Master of Computer Applications)",
          description: "2-year postgraduate program",
          duration: "2 years",
          students: "80+",
          rating: 4.8,
          features: ["Master's Degree", "Advanced Programming", "Research", "Placement"],
          color: "from-indigo-500 to-blue-600"
        }
      ]
    }
  };

  const currentData = courseData[type];

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentData.color} flex items-center justify-center`}>
          <currentData.icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">{currentData.title}</h3>
          <p className="text-sm text-muted-foreground">Choose your specialization</p>
        </div>
      </div>

      <div className="space-y-4 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
        {currentData.courses.map((course, index) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <Card className="border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {course.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-2 rounded-lg bg-muted/50">
                    <Clock className="w-4 h-4 text-primary mx-auto mb-1" />
                    <div className="text-xs font-semibold">{course.duration}</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-muted/50">
                    <Users className="w-4 h-4 text-primary mx-auto mb-1" />
                    <div className="text-xs font-semibold">{course.students}</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-muted/50">
                    <Star className="w-4 h-4 text-yellow-500 mx-auto mb-1" />
                    <div className="text-xs font-semibold">{course.rating}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-foreground mb-2">What you'll learn:</h5>
                  <div className="flex flex-wrap gap-2">
                    {course.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 group-hover:scale-105 transition-transform"
                    onClick={onClose}
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:scale-105 transition-transform"
                    onClick={onClose}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Need help choosing the right course?
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            className="w-full"
          >
            Get Free Career Counseling
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoursesMegaMenu;
