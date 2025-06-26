import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, Loader2, Star } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [likeCount, setLikeCount] = useState(() => Number(localStorage.getItem('likeCount')) || 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Note: You'll need to configure EmailJS with your service ID, template ID, and user ID
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_USER_ID'
      );
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again or contact directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLike = () => {
    const newCount = likeCount + 1;
    setLikeCount(newCount);
    localStorage.setItem('likeCount', String(newCount));
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "kk1178@rit.edu",
      link: "mailto:kk1178@rit.edu"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      content: "+1 (585) 993-4692",
      link: "tel:+15859934692"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      content: "Rochester, New York, USA",
      link: null
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      content: "linkedin.com/in/karankaradennavar",
      link: "https://www.linkedin.com/in/karan-karadennavar-b12917b6/"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, 
            and innovative packaging solutions. Let's connect and explore how we can work together.
          </p>
        </motion.div>

        {/* Actively Looking For Opportunities Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-base"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <span className="mr-2">🔍</span> Actively Looking For Opportunities In:
          </h2>
          <div className="mb-3 flex flex-col md:flex-row md:space-x-12">
            <div className="flex-1 mb-3 md:mb-0">
              <span className="font-semibold">Roles:</span>
              <ul className="list-disc ml-6 mt-1">
                <li>Packaging Engineer</li>
                <li>Packaging Validation Specialist</li>
                <li>Print & Color Quality Analyst</li>
                <li>Process Improvement Engineer</li>
                <li>Packaging Development Associate</li>
              </ul>
            </div>
            <div className="flex-1">
              <span className="font-semibold">Industries of Interest:</span>
              <ul className="list-none mt-1">
                <li>📦 Pharmaceutical & Life Sciences</li>
                <li>🛍️ Consumer Goods & Retail Packaging</li>
                <li>🌿 Sustainable Packaging & Materials</li>
                <li>🖨️ Digital Printing & Color Management</li>
                <li>🍽️ Food & Beverage Packaging</li>
                <li>🚚 Logistics & Supply Chain Packaging</li>
              </ul>
            </div>
          </div>
          <div className="mb-3">
            <span className="font-semibold">What I Bring:</span>
            <ul className="list-disc ml-6 mt-1 mb-3 text-gray-700 dark:text-gray-300">
              <li>Strong foundation in FDA & GMP-compliant packaging validation</li>
              <li>Hands-on experience with digital printing workflows and ICC profiling</li>
              <li>Expertise in cold chain packaging, sustainable design, and process optimization</li>
              <li>Proven track record of reducing costs, improving compliance, and enhancing packaging performance</li>
            </ul>
          </div>
          <div>
            <span className="font-semibold">📬 Get in Touch:</span>
            <p className="mt-1 text-gray-700 dark:text-gray-300">I'm available via email or phone, and I typically respond within 24 hours.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div className="flex-1 rounded-xl transition-all cursor-pointer hover:-translate-y-1 hover:text-blue-600 dark:hover:text-blue-400 p-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-bold mb-4">Send a Message</h2>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-4"
                >
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                      placeholder="Tell me more about your project or opportunity..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Thank You Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 rounded-2xl p-8 text-center mt-12"
        >
          <h3 className="text-2xl font-bold mb-4">Thanks for stopping by!</h3>
          <p className="text-lg text-gray-200 mb-6">If you found something interesting, feel free to leave a like.</p>
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={handleLike}
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow transition-colors"
            >
              <Star size={24} className="text-white" fill="currentColor" />
              Like {likeCount > 0 && <span>({likeCount})</span>}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
