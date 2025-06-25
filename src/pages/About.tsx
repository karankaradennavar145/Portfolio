import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, GraduationCap, Award } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    'SAP', 'SolidWorks', 'ArtiosCAD', 'Adobe Creative Suite',
    'DOE (Design of Experiments)', 'ISTA Testing', 'GMP Compliance',
    'FDA Regulations', 'ICH Guidelines', 'Process Validation',
    'Digital Printing', 'Color Management', 'Xerox iGen 5',
    'Zünd Cutting Systems', 'Pharmaceutical Packaging'
  ];

  const skillIcons = [
    {
      name: 'SAP',
      icon: <img src={`${import.meta.env.BASE_URL}skills/sap.png`} alt="SAP Logo" className="w-20 h-20" />,
    },
    {
      name: 'SolidWorks',
      icon: <img src={`${import.meta.env.BASE_URL}skills/solidworks.png`} alt="SolidWorks Logo" className="w-16 h-16" />,
    },
    {
      name: 'ArtiosCAD',
      icon: <img src={`${import.meta.env.BASE_URL}skills/artioscad.png`} alt="ArtiosCAD Logo" className="w-16 h-16" />,
    },
    {
      name: 'Adobe Creative Suite',
      icon: <img src={`${import.meta.env.BASE_URL}skills/adobe.png`} alt="Adobe Creative Suite" className="w-20 h-20" />,
    },
    {
      name: 'ISTA',
      icon: <img src={`${import.meta.env.BASE_URL}skills/ista.png`} alt="ISTA Logo" className="w-18 h-18" />,
    },
    {
      name: 'ASTM',
      icon: <img src={`${import.meta.env.BASE_URL}skills/astm.png`} alt="ASTM Logo" className="w-20 h-20" />,
    },
    {
      name: 'FDA',
      icon: <img src={`${import.meta.env.BASE_URL}skills/fda.png`} alt="FDA Logo" className="w-18 h-18" />,
    },
    {
      name: 'Xerox',
      icon: <img src={`${import.meta.env.BASE_URL}skills/xerox.png`} alt="Xerox Logo" className="w-18 h-18" />,
    },
    {
      name: 'ZÜND',
      icon: <img src={`${import.meta.env.BASE_URL}skills/zund.png`} alt="ZÜND Logo" className="w-20 h-20" />,
    },
    {
      name: 'G7 Color Certified',
      icon: <img src={`${import.meta.env.BASE_URL}skills/g7.png`} alt="G7 Logo" className="w-16 h-16" />,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center mb-16"
        >
          <div className="w-48 h-48 bg-gray-300 dark:bg-gray-700 rounded-full mr-8 flex-shrink-0 overflow-hidden">
            <img 
              src={`${import.meta.env.BASE_URL}/skills/profile.jpg`}
              alt="Karan Karadennavar" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Passionate about creating innovative packaging solutions that meet 
              the highest standards of quality, compliance, and sustainability.
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-6">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="mr-3 text-blue-600" />
                Professional Background
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  As a Packaging Engineer with a Master's degree in Packaging and Graphic Meida Science from the Rochester Institute of Technology (RIT),
                  I bring a strong foundation in packaging development, compliance, and innovation. My expertise spans regulated and 
                  commercial sectors, including pharmaceutical, consumer goods, food, and toy industries, Where I have contributed to 
                  high-impact projects from concept to commercialization.
                </p>
                <p>
                  I have hands-on experience in end-to-end packaging processes, including process validation, FDA/GMP compliance, 
                  and packaging design optimization. My work has included developing SOPs, managing packaging line documentation, 
                  conducting ISTA/ASTM testing, and implementing sustainable packaging solutions.
                </p>
                <p>
                  In addition to my packaging expertise, I hold a G7 Expert Certification and have led digital printing and 
                  color management workflows, ensuring brand integrity and visual consistency across packaging formats. 
                  I am skilled at bridging technical requirements with creative packaging solutions to enhance both functionality
                  and user experience.
                </p>
                <p>
                  I'm driven by a passion for innovation, sustainability, and continuous improvement. I aim to deliver packaging 
                  solutions that are not only regulatory-compliant but also aligned with emerging technologies and evolving market needs.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="mr-3 text-blue-600" />
                Location & Availability
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Currently based in <strong>Rochester, New York</strong> available for 
                on-site and remote opportunities throughout the United States.
              </p>
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="mr-3 text-blue-600" />
                Education
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4 mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">MS in Packaging and Graphic Media</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-normal ml-4">May 2025</span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400">Rochester Institute of Technology (RIT), Rochester, NY</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">B.Tech in Print, Media & Packaging</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-normal ml-4">May 2020</span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400">Manipal Institute of Technology, India</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Achievements</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Meritorious Student of the Year 2017, Pune Vidyarthi Griha | August 2017
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  PMMI Scholarship in Memorial of Claude S. Breeden, Glenn Davis, and Art Schaefe - Recipient. | 2023-2024
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  PGSF Scholarship - Recipient. 2023-2024
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg mb-8 mt-8"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Technical Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skillIcons.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-100 dark:bg-gray-300 text-blue-700 dark:text-blue-700 px-4 py-2 rounded-xl text-center text-sm font-medium transition-all duration-300 cursor-pointer flex flex-col items-center justify-center hover:scale-105 hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-400"
              >
                {skill.icon}
                <span className="mt-2">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <button
            onClick={() => window.open('/resume.pdf', '_blank')}
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Download size={20} />
            <span className="font-semibold">Download Full Resume</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
