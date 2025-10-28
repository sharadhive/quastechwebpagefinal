import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Quote, 
  ThumbsUp, 
  MessageCircle,
  Play,
  ArrowLeft,
  ArrowRight 
} from "lucide-react";
import { useState } from "react";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Aditya Mistry",
      role: "Full Stack Developer at Google",
      course: "MERN Stack Development",
      rating: 5,
      image: "/images/Review list/1Aditya Mistry.jpeg",
      review: "QUASTECH completely transformed my career. The instructors are industry experts, and the hands-on projects gave me real-world experience. Within 3 months of completing the course, I landed my dream job at Google!",
      videoUrl: "#"
    },
    {
      name: "Anurag Rajpurohit",
      role: "Data Scientist at Microsoft",
      course: "Data Science & AI",
      rating: 5,
      image: "/images/Review list/2Anurag Rajpurohit.jpeg",
      review: "The Data Science course at QUASTECH is exceptional. The curriculum is up-to-date with industry standards, and the placement assistance is phenomenal. I highly recommend QUASTECH to anyone looking to break into tech.",
      videoUrl: "#"
    },
    {
      name: "Sagar Chaudhari",
      role: "DevOps Engineer at Amazon",
      course: "DevOps & Cloud Computing",
      rating: 5,
      image: "/images/Review list/3Sagar Chaudhari.jpeg",
      review: "The practical approach and live projects at QUASTECH made all the difference. The mentorship and career guidance helped me transition from a non-tech background to landing a role at Amazon.",
      videoUrl: "#"
    },
    {
      name: "Sonakshi Saxena",
      role: "Mobile App Developer at Flipkart",
      course: "Mobile App Development",
      rating: 5,
      image: "/images/Review list/4Sonakshi Saxena.jpeg",
      review: "QUASTECH's mobile development course is comprehensive and practical. The instructors provide personal attention, and the placement cell worked tirelessly to help me secure my position at Flipkart.",
      videoUrl: "#"
    },
    {
      name: "Jesica Mistry",
      role: "Cybersecurity Analyst at TCS",
      course: "Cybersecurity",
      rating: 5,
      image: "/images/Review list/5Jesica Mistry.jpeg",
      review: "The cybersecurity program at QUASTECH is world-class. Real-world scenarios, hands-on labs, and expert mentorship prepared me for the challenges in the industry. Grateful for the excellent placement support!",
      videoUrl: "#"
    },
    {
      name: "Atish Satpute",
      role: "Software Engineer at Infosys",
      course: "Full Stack Development",
      rating: 5,
      image: "/images/Review list/6Atish Satpute.jpeg",
      review: "QUASTECH provided me with the perfect foundation for my tech career. The comprehensive curriculum and practical projects helped me develop strong technical skills. The placement support was outstanding!",
      videoUrl: "#"
    },
    {
      name: "Rajiv Jangam",
      role: "Cloud Solutions Architect at Wipro",
      course: "Cloud Computing & DevOps",
      rating: 5,
      image: "/images/Review list/7Rajiv Jangam.jpeg",
      review: "The cloud computing course at QUASTECH exceeded my expectations. The hands-on labs and real-world projects prepared me perfectly for my role. The instructors are knowledgeable and supportive throughout the journey.",
      videoUrl: "#"
    }
  ];

  const stats = [
    { value: "4.9/5", label: "Average Rating", icon: Star },
    { value: "2500+", label: "Reviews", icon: MessageCircle },
    { value: "95%", label: "Recommend Us", icon: ThumbsUp }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-8 md:py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-yellow-600" />
            <span className="text-sm font-medium text-yellow-600">Student Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our Students
            <span className="block text-primary">Say About Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our successful alumni who have transformed their careers and 
            achieved their dream jobs after completing our courses.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <stat.icon className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Review */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <Card className="max-w-4xl mx-auto border-0 shadow-2xl overflow-hidden">
            <div className="bg-gradient-primary p-8 text-white relative">
              <Quote className="absolute top-4 right-4 w-12 h-12 opacity-30" />
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20">
                  <img 
                    src={reviews[currentReview].image} 
                    alt={reviews[currentReview].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{reviews[currentReview].name}</h3>
                  <p className="text-white/90">{reviews[currentReview].role}</p>
                  <p className="text-white/80 text-sm">{reviews[currentReview].course}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex">
                      {[...Array(reviews[currentReview].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm">({reviews[currentReview].rating}.0)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <CardContent className="p-8">
              <blockquote className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "{reviews[currentReview].review}"
              </blockquote>
              
              <div className="flex items-center justify-end gap-4">
                <Button variant="outline" size="sm">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Video
                </Button>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevReview}
                    className="w-10 h-10 p-0"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextReview}
                    className="w-10 h-10 p-0"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* All Reviews Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">More Success Stories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                        <img 
                          src={review.image} 
                          alt={review.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.role}</p>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <blockquote className="text-sm text-muted-foreground mb-4 line-clamp-4">
                      "{review.review.substring(0, 120)}..."
                    </blockquote>
                    
                    <div className="flex items-center justify-end pt-4 border-t">
                      <Button variant="ghost" size="sm">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of successful professionals who transformed their careers with QUASTECH
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg">
                Start Your Journey Today
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary">
                Placement
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;