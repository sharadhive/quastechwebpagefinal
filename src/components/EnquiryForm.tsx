import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Send, User, BookOpen, MessageCircle, Users, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

 const quickActions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our counselors",
      action: "Start Chat"
    },
    {
      icon: Users,
      title: "Book Demo",
      description: "Schedule a free demo class",
      action: "Book Now"
    },
    {
      icon: Building,
      title: "Campus Visit",
      description: "Visit our campus",
      action: "Schedule Visit"
    }
  ];


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  return (










    
    <section id="enquiry" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get personalized guidance and detailed information about our courses. Our experts are here to help you choose the right path.
          </p> */}
        </motion.div>

        {/* Journey Banner */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full mb-16"
        >
          <img 
            src="/images/careerpath.jpg" 
            alt="Your Journey With Us" 
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
          />
        </motion.div> */}

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-lg bg-white/50 backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-lg bg-white/50 backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-muted-foreground">info@quastech.edu</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-lg bg-white/50 backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-muted-foreground">Tech Hub, Innovation Center<br />Mumbai, Maharashtra</p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-card via-card/50 to-card border-border shadow-primary">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send Enquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Name: *
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-muted/30 rounded-full flex items-center justify-center">
                          <User className="w-3 h-3 text-muted-foreground" />
                        </div>
                        <Input
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="h-12 pl-12 bg-muted/20 border-muted/30 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        E-mail: *
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-muted/30 rounded-full flex items-center justify-center">
                          <Mail className="w-3 h-3 text-muted-foreground" />
                        </div>
                        <Input
                          type="email"
                          placeholder="Email address"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="h-12 pl-12 bg-muted/20 border-muted/30 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Phone: *
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-muted/30 rounded-full flex items-center justify-center">
                          <Phone className="w-3 h-3 text-muted-foreground" />
                        </div>
                        <Input
                          type="tel"
                          placeholder="Mobile number"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                          className="h-12 pl-12 bg-muted/20 border-muted/30 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Course:
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-muted/30 rounded-full flex items-center justify-center">
                          <BookOpen className="w-3 h-3 text-muted-foreground" />
                        </div>
                        <Select onValueChange={(value) => handleChange("course", value)}>
                          <SelectTrigger className="h-12 pl-12 bg-muted/20 border-muted/30 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary">
                            <SelectValue placeholder="Select Course" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web-development">Full Stack Web Development</SelectItem>
                            <SelectItem value="data-science">Data Science & Analytics</SelectItem>
                            <SelectItem value="mobile-development">Mobile App Development</SelectItem>
                            <SelectItem value="cloud-computing">Cloud Computing & DevOps</SelectItem>
                            <SelectItem value="artificial-intelligence">Artificial Intelligence & ML</SelectItem>
                            <SelectItem value="cybersecurity">Cybersecurity & Ethical Hacking</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Message:
                    </label>
                    <Textarea
                      placeholder="Tell us about your career goals and any specific questions..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={4}
                      className="resize-none bg-muted/20 border-muted/30 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit" 
                      className="w-full h-12 text-lg font-bold bg-gradient-primary hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Enquiry
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;