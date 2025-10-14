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
  ArrowRight
} from "lucide-react";

const Courses = () => {
  const courses = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Master MERN, Django, and modern web technologies",
      duration: "6 months",
      students: "500+",
      rating: 4.9,
      price: "₹45,000",
      features: [
        "/coursesicons/bootstrap.jpg",
        "/coursesicons/css.jpg",
        "/coursesicons/django.jpg",
        "/coursesicons/html.jpg",
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Database,
      title: "Data Science & AI",
      description: "Python, Machine Learning, Deep Learning & Analytics",
      duration: "8 months",
      students: "300+",
      rating: 4.8,
      price: "₹55,000",
      features: [
        "/coursesicons/python.jpg",
        "/coursesicons/mysql.jpg",
        "/coursesicons/django.jpg",
        "/coursesicons/html.jpg"
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "SEO, SEM, Social Media & Content Marketing",
      duration: "4 months",
      students: "800+",
      rating: 4.7,
      price: "₹25,000",
      features: [
        "/coursesicons/html.jpg",
        "/coursesicons/css.jpg",
        "/coursesicons/jquery.jpg",
        "/coursesicons/bootstrap.jpg"
      ],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "iOS, Android & Cross-platform development",
      duration: "5 months",
      students: "400+",
      rating: 4.9,
      price: "₹40,000",
      features: [
        "/coursesicons/html.jpg",
        "/coursesicons/css.jpg",
        "/coursesicons/jquery.jpg",
        "/coursesicons/bootstrap.jpg"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "AI, ML, NLP & Computer Vision technologies",
      duration: "10 months",
      students: "200+",
      rating: 4.9,
      price: "₹65,000",
      features: [
        "/coursesicons/python.jpg",
        "/coursesicons/django.jpg",
        "/coursesicons/mysql.jpg",
        "/coursesicons/html.jpg"
      ],
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Ethical Hacking, Network Security & Penetration Testing",
      duration: "6 months",
      students: "350+",
      rating: 4.8,
      price: "₹50,000",
      features: [
        "/coursesicons/html.jpg",
        "/coursesicons/css.jpg",
        "/coursesicons/jquery.jpg",
        "/coursesicons/bootstrap.jpg"
      ],
      color: "from-red-500 to-orange-600"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Premium Courses</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transform Your Career with
            <span className="block text-primary">Industry-Ready Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed by industry experts 
            with hands-on projects and guaranteed placement assistance.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <div className={`h-2 bg-gradient-to-r ${course.color}`} />

                <CardContent className="p-6">
                  {/* Icon & Title */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${course.color} p-4 mb-4`}>
                      <course.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {course.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                      <div className="text-sm font-medium">{course.duration}</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                      <div className="text-sm font-medium">{course.students}</div>
                    </div>
                    <div className="text-center">
                      <Star className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
                      <div className="text-sm font-medium">{course.rating}</div>
                    </div>
                  </div>

                  {/* Features as logos */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">What you'll learn:</h4>
                    <div className="grid grid-cols-4 gap-4 items-center">
                      {course.features.map((imgSrc, idx) => (
                        <img
                          key={idx}
                          src={imgSrc}
                          alt="Feature"
                          className="w-10 h-10 object-contain mx-auto hover:scale-110 transition-transform"
                        />
                      ))}
                    </div>
                  </div>

                  {/* CTA only (price removed per requirement) */}
                  <div className="flex items-center justify-end pt-4 border-t">
                    <Button
                      variant="default"
                      size="sm"
                      className="group-hover:scale-105 transition-transform"
                    >
                      Enroll Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-primary rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Not sure which course is right for you?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Talk to our career counselors and get personalized course recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg">
                Free Career Counseling
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary">
                Download Brochure
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
