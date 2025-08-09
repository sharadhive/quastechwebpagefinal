import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "ISO How long are your training programs?",
    answer: "Our training programs vary in duration depending on the specific course. Typically, they range from a few weeks to a few months. For detailed information, please check the course details on our website or contact our support team."
  },
  {
    id: 2,
    question: "Are there any hands-on projects or real-world applications in the training?",
    answer: "Yes, our training programs emphasize practical learning with hands-on projects and real-world applications. We believe in providing a comprehensive and practical understanding of the subject matter to better prepare our students for the industry."
  },
  {
    id: 3,
    question: "Is there any EMI option available?",
    answer: "Yes, we offer EMI (Equated Monthly Installment) options for our courses. You can contact our finance department or check our website for more information on the available payment plans."
  },
  {
    id: 4,
    question: "Certified and Experienced Faculty How can I contact the support team if I have questions or issues?",
    answer: "You can reach our support team through enquiry@quastech.in or by calling 84228 00381. Additionally, we have a live chat option on our website where you can get instant assistance during business hours."
  },
  {
    id: 5,
    question: "Is there a dedicated mentor or advisor for students?",
    answer: "Yes, we provide dedicated mentors or advisors for our students. They are there to guide you throughout the course, answer your questions, and provide support to ensure a smooth learning experience. You can schedule one-on-one sessions with your mentor as needed."
  }
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([1]); // First item open by default like in original

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto animate-fade-in">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-foreground mb-16 tracking-tight">
          Frequently asked questions
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* FAQ Accordion - Right side on mobile, left on desktop */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="space-y-3">
              {faqData.map((item, index) => (
                <div
                  key={item.id}
                  className="animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-card border border-faq-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-faq-primary/20 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-start gap-4">
                          <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-faq-primary to-faq-secondary text-blue font-bold text-sm rounded-lg shadow-md flex-shrink-0">
                            {item.id.toString().padStart(2, '0')}
                          </span>
                          <h3 className="text-lg font-semibold text-foreground leading-relaxed">
                            {item.question}
                          </h3>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          {openItems.includes(item.id) ? (
                            <ChevronUp className="w-6 h-6 text-faq-primary" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${
                      openItems.includes(item.id) ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}>
                      <div className="px-6">
                        <div className="ml-14">
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section - Left side on mobile, right on desktop */}
          <div className="order-1 lg:order-2 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div 
              className="h-full min-h-[400px] lg:min-h-[600px] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg"
              style={{ backgroundImage: 'url("public/assets/images/faq.png")' }}
            >
              {/* Fallback content in case image doesn't load */}
              <div className="h-full w-full bg-gradient-to-br from-faq-primary/10 via-faq-secondary/10 to-faq-accent/10 rounded-2xl border border-faq-border flex items-center justify-center ">
                <div className="text-center p-8 opacity-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-faq-primary to-faq-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <span className="text-3xl">❓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">FAQ Image</h3>
                  <p className="text-muted-foreground">Frequently Asked Questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;