import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Security Engineer',
      company: 'ShyftLabs',
      duration: 'March 2025 - Present',
      location: 'Remote',
      responsibilities: [
        'Conducting VAPT for Web Applications, APIs and performing Secure Code Review activities for Web applications, APIs, & Servers',
        'Collaborating cross-functionally with engineering teams to resolve security issues and conducting sessions to strengthen the organization\'s security posture.',
        'Performing CIS Benchmarking on AWS security metrics and parallely performing design reviews.'
      ]
    },
    {
      title: 'Security Engineer',
      company: 'WebEngage',
      duration: 'April 2024 - March 2025',
      location: 'Mumbai, India',
      responsibilities: [
        'Conducted VAPT/Red Teaming and Code Review activities for Mobile, Web applications, APIs, & Servers with managing external vendors and supporting internal bug bounty programs.',
        'Collaborated cross-functionally with engineering teams to resolve security issues and conducting sessions to strengthen the organization\'s security posture.',
        'Implemented security metrics to uphold ISMS policies while ensuring compliance with ISO 27001 and parallely addressing client Infosec queries.',
        'Managed client due diligence, TPRM activities, vendor security evaluations, and coordinating internal audits, ensuring timely closure of all ISO CAPA points.'
      ]
    },
    {
      title: 'Security Engineer',
      company: 'Grab',
      duration: 'Feb 2022 - April 2024',
      location: 'Singapore',
      responsibilities: [
        'Grab is a super-app for ride-hailing, food delivery, and digital payment services in SouthEast Asia.',
        'Partnered multiple tech-families for VAPT, SCR, SAST, Threat Modelling for Mobile and Web Applications, APIs, providing code level remedies to mitigate the identified vulnerabilities.',
        'Managed Bug Bounty Program and performed ticket handling, saving 1000+ man hours with delivering Annual Report to higher management for identified vulnerabilities & their closures.',
        'Handling Certificate Management via Mastercard Portal for timely renewal of certificates.',
        'Created Pentest Checklists, Tech Trainings for new joinees based on global security standards such as OWASP ASVS, MASVS, MSTG & WSTG.',
        'Proficient in working with microservices, AWS, secure SDLC, IAM, SSO, OAuth, RBAC, risk-based authentication.'
      ]
    },
    {
      title: 'Information Security Engineer',
      company: 'Zeta',
      duration: 'June 2021 - Feb 2022',
      location: 'Bangalore, India',
      responsibilities: [
        'Gained hands-on experience working in a product-based environment with active engagment with cross cross-functional teams, including engineering, to address security requirements.',
        'Developed workflows, documentation, and checklists to streamline VAPT reporting & testing processes.',
        'Collaborated with the compliance team to uphold ISO 27001 standards and conducted third-party risk assessments.'
      ]
    },
    {
      title: 'Security Analyst',
      company: 'Safe Security',
      duration: 'Jan 2019 - June 2021',
      location: 'Gurgaon, India',
      responsibilities: [
        'Conducted VAPT/Red Teaming, DAST, and SAST testing on Mobile & Web Apps, APIs, Networks, and Servers, identifying risks based on CVSS standards.',
        'Performed Security Code Reviews (SCR) for mobile applications and Java-based web applications.',
        'Enhanced the Unified Control List (Pentest Checklist) by integrating & updating pentest controls, leveraging the MITRE ATT&CK framework.',
        'Proficient in Python & Shell scripting for automating redundant tasks and simulating attack scenarios.',
        'Designed and implemented onboarding technical training on Trello for new hires, streamlining the induction process'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;