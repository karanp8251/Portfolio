import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "AI Engineering Intern",
    company: "TechNova Solutions",
    period: "June 2023 - Present",
    description: "Developing machine learning models for predictive analytics. Improved model accuracy by 15%."
  },
  {
    role: "Full Stack Developer Intern",
    company: "StartUp Inc.",
    period: "Jan 2023 - May 2023",
    description: "Built scalable APIs with Node.js and interactive dashboards using React and Tailwind CSS."
  },
  {
    role: "Open Source Contributor",
    company: "Various Projects",
    period: "2022 - Present",
    description: "Active contributor to several React and Python open source repositories on GitHub."
  }
];

const Experience = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const items = timelineRef.current.querySelectorAll('.timeline-item');

    items.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-heading text-center mb-16">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="relative max-w-4xl mx-auto" ref={timelineRef}>
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/10 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item flex flex-col md:flex-row items-center mb-12 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

              {/* Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background z-10 shadow-[0_0_10px_rgba(124,58,237,0.8)]"></div>

              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-colors">
                  <span className="text-secondary text-sm font-semibold tracking-wider uppercase mb-2 block">{exp.period}</span>
                  <h3 className="text-2xl font-bold font-heading mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-primary mb-4">{exp.company}</h4>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
