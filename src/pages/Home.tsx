import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import ParticleBackground from '../components/ParticleBackground';
import IconScroller from '../components/IconScroller';
import { HashRouter } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <HashRouter>
      <div className="relative min-h-screen">
        <ParticleBackground />
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center min-h-[70vh] w-full pt-12 md:pt-16">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-7xl font-bold mb-1 h-24 md:h-32">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                    Karan Karadennavar
                  </span>
                </h1>
              
                <p className="mt-6 text-2xl md:text-3xl text-gray-600 dark:text-gray-300 text-center max-w-5xl mx-auto">
                  Packaging Engineer | RIT Graduate | Delivering Scalable, Compliant & Innovative Packaging Across Industries
                </p>
                <p className="mt-4 text-lg md:text-md text-gray-600 dark:text-gray-300 text-center max-w-5xl mx-auto font-light">
                  Open to full-time Packaging Engineering roles starting June 2025 - with interests in Pharma, FMCG, Industrial, and Sustainable Packaging sectors.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                  <Link
                    to="/experience"
                    className="group flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span className="font-semibold">Experience</span>
                    <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <a
                    href={`${import.meta.env.BASE_URL}resume.pdf`}
                    download="resume.pdf"
                    className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Download size={20} />
                    <span className="font-semibold">Download Full Resume</span>
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              >
                <div className="animate-bounce">
                  <ArrowDown size={24} className="text-gray-400" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Icon Scroller Section */}
          <section className="py-11 bg-gray-50 dark:bg-gray-800/50">
            <IconScroller/>
          </section>
          
          {/* Quick Overview Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Expertise & Innovation
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  {`Bridging the gap between packaging science and real-world execution, with a focus on regulatory compliance,
                  user-centric design, and innovative technology across pharmaceutical, consumer goods, food, 
                  and toy packaging industries.`}
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
                {[
                  {
                    title: "Packaging Compliance & Validation",
                    description: "Expertise in GMP standards, FDA regulations, and packaging validation protocols. Experienced in authoring SOPs, conducting process validations, and ensuring packaging meets quality and compliance standards across regulated industries.",
                    icon: "⚙️"
                  },
                  {
                    title: "Sustainable Packaging Development",
                    description: "Hands-on experience developing innovative, cost-effective, and eco-conscious packaging solutions. Led material sourcing, supplier engagement, and prototype development for food, consumer goods, and toy packaging sectors. Advanced proficiency in digital printing workflows, color management, and process optimization.",
                    icon: "🌱"
                  },
                  {
                    title: "Printing & Color Science",
                    description: "G7 Expert Certified with advanced knowledge in digital and offset printing, ICC profiling, and color calibration workflows. Managed press checks, color matching, and print quality control across substrates, ensuring visual consistency, brand integrity, and adherence to international print standards.",
                    icon: "🖨️"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative group cursor-pointer"
                    style={{ position: 'relative' }}
                  >
                    <div className="transition-all duration-300 rounded-2xl p-[2px] hover:scale-105 hover:shadow-2xl h-full"
                      style={{
                        background: 'white',
                        backgroundClip: 'padding-box',
                        boxShadow: '0 2px 16px 0 rgba(0,0,0,0.04)'
                      }}
                    >
                      <div className="relative rounded-2xl p-8 bg-white dark:bg-gray-900 z-10 min-h-[400px] h-full flex flex-col">
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                      <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" style={{background: 'linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #14b8a6 100%)', padding: 0, WebkitMaskImage: '-webkit-radial-gradient(white, black)'}}></span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </HashRouter>
  );
};

export default Home;
