
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import emailjs from 'emailjs-com';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    emailjs.init("7ZUQd9T5SNeeziM5J");
  }, []);
  
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({
    type: "",
    text: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const result = await emailjs.send(
        'service_v9mln5m',
        'template_cas860r',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString()
        },
        
        '7ZUQd9T5SNeeziM5J'
      );
      console.log(result)
  
      setSubmitMessage({ type: "success", text: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitMessage({ type: "error", text: "Failed to send message." });
      console.log(error)
    }
  
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "jay91451@gmail.com",
      link: "mailto:jay91451@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91-7046249240",
      link: "tel:+917046249240"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "github.com/JayP2006",
      link: "https://github.com/JayP2006"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/pjaykumar",
      link: "https://linkedin.com/in/pjaykumar"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 order-2 lg:order-1"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-accent focus:bg-white dark:focus:bg-gray-800 focus:ring-0 text-gray-900 dark:text-white"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-accent focus:bg-white dark:focus:bg-gray-800 focus:ring-0 text-gray-900 dark:text-white"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-accent focus:bg-white dark:focus:bg-gray-800 focus:ring-0 text-gray-900 dark:text-white"
                  required
                ></textarea>
              </div>
              
              {submitMessage.text && (
                <div className={`mb-6 p-3 rounded-lg ${
                  submitMessage.type === "success" 
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" 
                    : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                }`}>
                  {submitMessage.text}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium ${
                  isSubmitting 
                    ? "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 cursor-not-allowed" 
                    : "bg-accent text-white hover:shadow-lg hover:shadow-accent/50 transition-all"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 order-1 lg:order-2"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-accent/10 text-accent rounded-lg">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {info.label}
                    </h4>
                    <a 
                      href={info.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-gray-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Find me on social media
              </h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/JayP2006" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/pjaykumar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:bg-[#0077B5] hover:text-white dark:hover:bg-[#0077B5] dark:hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
