import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Send, User, BookOpen, MessageCircle, Users, Building, Clock, Award } from "lucide-react";
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
      action: "Start Chat",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Book Demo",
      description: "Schedule a free demo class",
      action: "Book Now",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Building,
      title: "Campus Visit",
      description: "Visit our campus",
      action: "Schedule Visit",
      color: "from-blue-600 to-blue-700"
    }
  ];

  return (
    <section id="enquiry" className="py-8 md:py-12 relative bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 shadow text-white text-sm font-bold uppercase">
            <MessageCircle className="w-5 h-5 text-white drop-shadow" />
            GET IN TOUCH
          </div>
          <h2 className="heading-institute-lg mb-6">
            Ready to Start Your
            <span className="block text-gradient-institute">Career Journey?</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Get personalized guidance and detailed information about our courses. Our experts are here to help you choose the right path.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-start">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Card */}
            <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div 
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100/50 border border-blue-200/50"
                  whileHover={{ scale: 1.02, y: -1 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Call Us</p>
                    <p className="text-gray-600 text-sm">+91 8422800381</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100/50 border border-orange-200/50"
                  whileHover={{ scale: 1.02, y: -1 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-sm">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Email Us</p>
                    <p className="text-gray-600 text-sm">info@quastech.in</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100/50 border border-blue-200/50"
                  whileHover={{ scale: 1.02, y: -1 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Visit Us</p>
                    <p className="text-gray-600 text-sm">Tech Hub, Innovation Center<br />Mumbai, Maharashtra</p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.title}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100/50 border border-gray-200/50 hover:border-blue-300/50 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`w-8 h-8 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center shadow-sm`}>
                      <action.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-sm">{action.title}</p>
                      <p className="text-xs text-gray-600">{action.description}</p>
                    </div>
                    <Button 
                      size="sm" 
                      className={`bg-gradient-to-r ${action.color} hover:opacity-90 text-white border-0 text-xs px-3 py-1 h-7`}
                    >
                      {action.action}
                    </Button>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-xl h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                  Send Enquiry
                </CardTitle>
                <p className="text-gray-600 text-sm mt-1">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div whileFocus={{ scale: 1.01 }} className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Full Name <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                          <User className="w-3 h-3 text-white" />
                        </div>
                        <Input
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="h-11 pl-11 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300 font-medium text-sm"
                        />
                      </div>
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.01 }} className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Email Address <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                          <Mail className="w-3 h-3 text-white" />
                        </div>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="h-11 pl-11 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300 font-medium text-sm"
                        />
                      </div>
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div whileFocus={{ scale: 1.01 }} className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Phone Number <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                          <Phone className="w-3 h-3 text-white" />
                        </div>
                        <Input
                          type="tel"
                          placeholder="Enter mobile number"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                          className="h-11 pl-11 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300 font-medium text-sm"
                        />
                      </div>
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.01 }} className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Course Interest
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center z-10">
                          <BookOpen className="w-3 h-3 text-white" />
                        </div>
                        <Select onValueChange={(value) => handleChange("course", value)}>
                          <SelectTrigger className="h-11 pl-11 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300 font-medium text-sm">
                            <SelectValue placeholder="Select a course" />
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

                  <motion.div whileFocus={{ scale: 1.01 }} className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your career goals and any specific questions..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={3}
                      className="resize-none bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300 font-medium text-sm"
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit" 
                      className="w-full h-12 text-base font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 hover:from-orange-600 hover:via-orange-700 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Enquiry
                    </Button>
                  </motion.div>

                  {/* Partner Logos Section */}
                  <motion.div 
                    className="pt-10 border-t border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="text-center mb-8">
                      <p className="text-lg font-bold text-gray-700 mb-8">Certified & Recognized By</p>
                      <div className="flex items-center justify-center gap-16">
                        <motion.div
                          className="flex items-center gap-4"
                          whileHover={{ scale: 1.1 }}
                        >
                          <img
                            src="/uploads/nsdeimg01.png"
                            alt="NSDC Logo"
                            className="h-24 w-auto opacity-95 hover:opacity-100 transition-all duration-300"
                          />
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-4"
                          whileHover={{ scale: 1.1 }}
                        >
                          <img
                            src="/uploads/skillindia--.jpg"
                            alt="Skill India Logo"
                            className="h-24 w-auto opacity-95 hover:opacity-100 transition-all duration-300"
                          />
                        </motion.div>
                      </div>
                    </div>
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