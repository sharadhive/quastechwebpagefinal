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
    <section id="courses" className="section-padding bg-gradient-mesh">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-6">
            <Code className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Premium Courses</span>
          </div>
          <h2 className="heading-lg mb-6">
            Transform Your Career with
            <span className="block text-gradient-primary">Industry-Ready Skills</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
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
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 card-professional hover-lift">
                <div className={`h-3 bg-gradient-to-r ${course.color}`} />

                <CardContent className="p-8">
                  {/* Icon & Title */}
                  <div className="mb-8">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${course.color} p-5 mb-6 shadow-lg`}>
                      <course.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="heading-sm mb-3 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-3 rounded-lg bg-muted/50">
                      <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-sm font-semibold">{course.duration}</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-muted/50">
                      <Users className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-sm font-semibold">{course.students}</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-muted/50">
                      <Star className="w-5 h-5 text-yellow-500 mx-auto mb-2" />
                      <div className="text-sm font-semibold">{course.rating}</div>
                    </div>
                  </div>

                  {/* Features as logos */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-4 text-foreground">What you'll learn:</h4>
                    <div className="grid grid-cols-4 gap-3 items-center">
                      {course.features.map((imgSrc, idx) => (
                        <img
                          key={idx}
                          src={imgSrc}
                          alt="Feature"
                          className="w-12 h-12 object-contain mx-auto hover:scale-110 transition-transform rounded-lg bg-muted/30 p-2"
                        />
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-center pt-6 border-t border-border">
                    <Button
                      variant="default"
                      size="lg"
                      className="group-hover:scale-105 transition-transform w-full"
                    >
                      Enroll Now
                      <ArrowRight className="w-5 h-5 ml-2" />
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
          className="text-center mt-20"
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
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white hover:text-primary text-lg font-bold">
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
