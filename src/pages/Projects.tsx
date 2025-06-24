import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, MapPin } from 'lucide-react';

const Projects: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const projects = [
    {
      title: "Structured OJT Training Program at Lonza",
      description: "Designed and implemented a structured On-the-Job Training (OJT) program tailored for pharmaceutical packaging personnel. The initiative standardized SOP-driven learning, improved GMP readiness, and reduced onboarding time by over 50%, enabling faster deployment of trained associates in a highly regulated environment.",
      tools: ["cGMP", "Process Optimization", "SOP Development", "Packaging Line Training", "Knowledge Transfer", "Complaince Enablement" ],
      company: "Lonza Small Molcules",
      location: "Tampa, Florida",
      date: "May 2024 - Dec 2024",
      type: "Professional Project",
      achievements: [
        "Reduced onboarding time by 50%+ for packaging personnel",
        "Developed role-specific training documentation and visual workflows",
        "Standardized OJT delivery model across multiple packaging suites",
        "Enhanced audit readiness through structured documentation practices"
      ]
    },
    {
      title: "Influence of Paper Air Permeability on Print quality & Color Gamut Research",
      description: "Capstone research focused on understanding how paper air permeability influences color gamut reproduction and print quality in electrophotographic printing. Conducted extensive testing on gloss and silk-coated papers using Xerox iGen 150 under G7-calibrated conditions. Analyzed ICC profiles, dot gain, and print density using spectrophotometric tools and statistical modeling to quantify the effect of substrate porosity on color accuracy and print clarity.",
      tools: ["Xerox iGen 150 Press", "Icc Profiling [i1Profiler, ColorThink Pro 4]", "G7 Callibration", "Spectrophotometry [X-Rite i1Pro, GretagMacbeth SpectroScan]", "Substrate Testing [Physical and Optical properties]", "Material Science"],
      company: "Rochester Institute of Technology",
      location: "Rochester, NY",
      date: "Jan 2025 - May 2025",
      type: "Academic Research",
      achievements: [
        "Improved color accuracy by 15% by identifying optimal paper-air permeability thresholds",
        "Developed and validated a testing protocol for electrophotographic paper performance",
        "Established direct correlations between substrate porosity and ICC profile stability"
      ]
    },
    {
      title: "Toy Packaging Innovation at Aequs Force Consumer",
      description: "As part of a strategic industry partnership, contributed to the development of innovative, sustainable, and child-safe packaging for toy products at Spin Master. Worked on optimizing packaging structures to reduce material usage while maintaining compliance with international safety standards. Utilized tools like ArtiosCAD and SolidWorks for structural design, and conducted ISTA testing to validate package performance across distribution cycles.As part of a strategic industry partnership, contributed to the development of innovative, sustainable, and child-safe packaging for toy products at Spin Master. Worked on optimizing packaging structures to reduce material usage while maintaining compliance with international safety standards. Utilized tools like ArtiosCAD and SolidWorks for structural design, and conducted ISTA testing to validate package performance across distribution cycles.",
      tools: ["ArtiosCAD", "SolidWorks", "ISTA Testing", "Sustainability Analysis", "Package Design & Optimization", "Child Safety Standards", "Packaging Supply Chain", "Press Checks & Proof Approvals" ],
      company: "Aequs Force Consumer",
      location: "Belgavi, India",
      date: "2020-2021",
      type: "Industry Partnership",
      achievements: [
        "Achieved a 20% reduction in packaging material, contributing to sustainability and reduced logistics costs",
        "Improved child safety ratings by implementing enhanced material selection and tamper-resistant designs",
       
        "Streamlined package validation process through integration of ISTA protocols and CAD simulation",
        "Developed and implemented a comprehensive packaging design system that standardized packaging structures for all toy categories, reducing design time by 30% and improving compliance with global safety standards",
        "Collaborated with product, compliance, and manufacturing teams to ensure packaging met both brand and regulatory expectations."
      ]
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
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects & Research</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative packaging solutions, research initiatives, and 
            professional achievements across pharmaceutical and digital printing domains.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const expanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full mr-3">
                          {project.type}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {project.date}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {project.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Minimized or Expanded View */}
                  {!expanded ? (
                    <>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {project.description.slice(0, 120)}{project.description.length > 120 ? '...' : ''}
                      </p>
                      <button
                        className="text-blue-600 underline text-sm font-medium"
                        onClick={() => setExpandedIndex(index)}
                      >
                        See more
                      </button>
                    </>
                  ) : (
                    <>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      {/* Tools/Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Technologies & Tools:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, toolIndex) => (
                            <span
                              key={toolIndex}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Company */}
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          <strong>Organization:</strong> {project.company}
                        </p>
                      </div>
                      <button
                        className="text-blue-600 underline text-sm font-medium mt-4"
                        onClick={() => setExpandedIndex(null)}
                      >
                        See less
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, research opportunities, 
            and innovative packaging solutions. Let's connect and explore how we can work together.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-colors shadow-lg hover:shadow-xl"
          >
            <span className="font-semibold">Get In Touch</span>
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
