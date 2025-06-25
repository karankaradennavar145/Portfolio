import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const experiences = [
    {
      company: "Lonza Small Molecules",
      position: "Packaging operations Intern",
      location: "Tampa, Florida",
      period: "May 2024 - Dec 2024",
      type: "Full-time /  Internship",
      logo: `${import.meta.env.BASE_URL}skills/lonza.png`,
      iconContainerClass: "w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg",
      iconImgClass: "w-12 h-12 object-contain",
      description: "Designed and implemented a structured OJT (On-the-Job Training) program, reducing packaging personnel onboarding time by over 50%.",
      achievements: [
        "Standardized packaging SOPs across departments, improving training efficiency and audit readiness.",
        "Supported serialization implementation for regulatory traceability in primary packaging operations.",
        "Utilized ERP systems to manage packaging master data and track compliance documentation.",
        "Collaborated with QA and regulatory teams during packaging deviation investigations and CAPAs.",
        "Assisted in packaging equipment qualification (IQ/OQ/PQ) and protocol documentation."
      ],
      technologies: ["GMP", "FDA Validation", "ERP", "Packaging Validation", "Packaging SOPs Development", "Packaging Equipment Validation / Qualification [ IQ/OQ/PQ ]", "Serialization Compliance"]
    },
    {
      company: "RIT The Hub Print Postal",
      position: "Co-op",
      location: "Rochester, NY",
      period: "2020 - 2021",
      type: "Full-time /  Internship",
      logo: `${import.meta.env.BASE_URL}skills/rit.png`,
      iconContainerClass: "w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow",
      iconImgClass: "w-14 h-14 object-contain",
      description: "Blended digital printing technology, color science, and hands-on prototyping to support high-precision print workflows and packaging development.",
      achievements: [
        "Operated and maintained Xerox iGen 5 Press, ensuring digital print accuracy with G7-calibrated workflows.",
        "Developed ICC color profiles and implemented GRACoL 2013 standards to improve color consistency.",
        "Created packaging prototypes using Zünd digital cutting systems with modular tooling.",
        "Managed print quality checks using GMG ColorProof for prepress color accuracy.",
        "Trained 15+ students on advanced printing technologies",
        "Conducted tone value increase (TVI) analysis and verified compliance with ISO 12647 standards."
      ],
      technologies: ["G7 Calibration", "ICC Profiling", "GRACol 2013", "Digital Printing", "Zund Precision Cutter", "Roland UV Inkjet Printer", "Xerox iGen 5 Press"]
    },
    {
      company: "Rochester Institute of Technology",
      position: "Graduate Research Assistant",
      location: "Rochester, NY",
      period: "2021 - 2023",
      type: "Academic",
      logo: `${import.meta.env.BASE_URL}skills/rit.png`,
      iconContainerClass: "w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg",
      iconImgClass: "w-14 h-14 object-contain",
      description: "Conducted advanced research in digital print media with focus on material properties, Researched the influence of paper surface texture and coating on tactile perception combining material science with haptic property evaluation.",
      achievements: [
        "Conducted advanced research on digital print technology and  media.",
        "Analyzed how paper surface properties affect tactile feel and visual output in printed materials.",
        "Developed novel testing methodologies for print media",
        "Contributed to developing evaluation frameworks that measure tactile performance using surface roughness, gloss, and print interaction metrics.",
        
      ],
      technologies: ["Paper Surface Analysis", "Surface Properties testing", "Print Substrate Interaction"]
    },
    {
      company: "Vegrow Agritech",
      position: "Packaging and Procurement Engineer",
      location: "Bengaluru, India",
      period: "Jan 2022 - May 2022",
      type: "Full-time",
      logo: `${import.meta.env.BASE_URL}skills/vegrow.png`,
      iconContainerClass: "w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg",
      iconImgClass: "w-14 h-14 object-contain",
      description: "Developed cost-effective and sustainable packaging solutions for fresh produce, collaborating closely with suppliers to enhance durability, reduce material costs, and align with cold-chain logistics. Focused on optimizing packaging formats, testing performance under real-world distribution conditions, and driving innovation in eco-friendly materials.",
      achievements: [
        "Collaborated with suppliers to innovate cost-effective and sustainable packaging for fresh produce supply chains.",
        "Conducted packaging material testing under variable conditions (shock, vibration, humidity, and temperature) to ensure durability during cold-chain logistics.",
        "Developed supplier partnerships that improved raw material consistency and reduced packaging material costs by 15-20%.",
        "Researched biodegradable and recyclable alternatives to conventional packaging, aligning with the company's sustainability goals.",
        "Optimized primary and secondary packaging formats for improved shelf life, handling, and consumer appeal.",
        "Contributed to packaging standardization initiatives that enhanced operational efficiency across procurement and warehousing."
      ],
      technologies: ["Packaging for Perishables", "Supply Chain Collaboration", "Vendor Development", "Packaging Testing [ISTA]", "Strategic Sourcing", "Cost Optimization", "Cold Chain Packaging" ],
    },
    {
      company: "Aequs Force Consumer",
      position: "Packaging Development Engineer",
      location: "Belgavi, India",
      period: "Nov 2021 - Sep 2021",
      type: "Full-time",
      logo: <img src={`${import.meta.env.BASE_URL}skills/fda.png`} alt="FDA Logo" className="w-16 h-16" />
      iconContainerClass: "w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg",
      iconImgClass: "w-14 h-14 object-contain",
      description: "Led packaging and print development for globally recognized toy brands like Hasbro and Spin Master, ensuring brand integrity, cost efficiency, and print accuracy across large-scale production. Worked closely with major print vendors to conduct press checks, approve proofs, and optimize packaging structures, achieving notable cost savings and enhanced visual consistency..",
      achievements: [
        "Spearheaded print and packaging development for global toy brands including Hasbro and Spin Master, aligning designs with international brand standards.",
        "Coordinated with top-tier vendors like Parksons Packaging, TCPL, and International Paper to execute high-volume production with consistent color accuracy.",
        "Led on-site press checks and proof approvals to ensure accurate color reproduction across multiple substrates.",
        "Performed print quality control and color matching, using industry standards to maintain visual consistency across SKUs.",
        "GAchieved 8–10% cost reduction by optimizing carton designs and maximizing print plate efficiency.",
        "IStreamlined packaging processes through structural layout improvements and vendor communication."
      ],
      technologies: ["Print & Packaging Development", "Color Matching & Print QC", "Vendor Coordination", "Cost Optimization", "Child Safety Standards", "Brand Consistency", "Toy Packaging Standards", "Packaging Supply Chain", "Press Checks & Proof Approvals"  ]
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey through End-to-End packaging Development, digital printing innovation, 
            and academic research Experiences.
          </p>
        </motion.div>

        {/* Career Highlights - now at the top */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row items-center justify-center gap-8 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 rounded-3xl shadow-xl p-8"
        >
          <div className="flex-1 text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-2">3+</div>
            <div className="text-gray-200 text-lg font-medium">Years Experience</div>
          </div>
          <div className="flex-1 text-center">
            <div className="text-4xl md:text-4xl font-extrabold text-blue-400 mb-2">15+</div>
            <div className="text-gray-200 text-lg font-medium">15+ Projects Led Across 4 Packaging Sectors</div>
          </div>
          <div className="flex-1 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-green-400 mb-2">cGMP<br/>Compliance</div>
            <div className="text-gray-200 text-base font-medium">Executed pharma packaging operations in full alignment with cGMP and FDA standards.</div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line (restored to run full height) */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
          {experiences.map((exp, index) => {
            const expanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 ml-20"
                onMouseEnter={() => !isMobile && setExpandedIndex(index)}
                onMouseLeave={() => !isMobile && setExpandedIndex(null)}
              >
                {/* Timeline icon */}
                <div className={`absolute -left-20 top-0 ${exp.iconContainerClass || 'w-20 h-20 bg-gray-100 flex items-center justify-center text-lg shadow-lg rounded-full'}`}> 
                  {exp.logo && (
                    <img src={exp.logo} alt={exp.company + ' logo'} className={exp.iconImgClass || 'w-16 h-16 object-contain'} />
                  )}
                </div>

                {/* Minimized Card */}
                {!expanded && (
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-all duration-300 p-8 cursor-pointer flex items-center min-h-[100px]" onClick={() => setExpandedIndex(index)}>
                    <div>
                      <h2 className="text-xl font-bold mb-2">{exp.position}</h2>
                      <h3 className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</h3>
                    </div>
                    <div className="ml-auto">
                      {isMobile && (
                        <button className="text-blue-600 underline text-sm" onClick={e => { e.stopPropagation(); setExpandedIndex(index); }}>
                          See more
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Expanded Card */}
                {expanded && (
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h2 className="text-2xl font-bold">{exp.position}</h2>
                        <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-3">
                        {exp.company}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {isMobile && (
                      <div className="mt-4 text-right">
                        <button className="text-blue-600 underline text-sm" onClick={() => setExpandedIndex(null)}>
                          See less
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Industry Sectors Highlight */}
      <div className="text-center my-12">
        <h3 className="text-xl font-bold mb-4 text-blue-600">Industry Sectors</h3>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold">Pharmaceutical</span>
          <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold">Food & Agritech</span>
          <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full font-semibold">Consumer Goods</span>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold">Toys</span>
          <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-semibold">Digital Printing</span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
