import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Next.js", level: 80 },
      { name: "GSAP / Framer Motion", level: 75 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "Python / Django", level: 80 },
      { name: "Java", level: 80 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL / MongoDB", level: 75 }
    ]
  },
  {
    title: "AI & Tools",
    skills: [
      { name: "TensorFlow / PyTorch", level: 70 },
      { name: "Machine Learning", level: 75 },
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 65 }
    ]
  }
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const bars = sectionRef.current.querySelectorAll('.progress-bar');

    bars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      gsap.fromTo(bar,
        { width: 0 },
        {
          width: `${width}%`,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
          }
        }
      );
    });
  }, []);

  return (
    <section id="skills" className="py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-heading text-center mb-16">
          My <span className="text-secondary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full progress-bar shadow-[0_0_10px_rgba(124,58,237,0.5)]"
                        data-width={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Marquee */}
        <div className="mt-20 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
          <div className="flex whitespace-nowrap animate-marquee opacity-50 text-4xl font-heading font-bold text-transparent bg-clip-text bg-white/20">
            <span className="mx-8">REACT</span>
            <span className="mx-8">PYTHON</span>
            <span className="mx-8">TAILWIND</span>
            <span className="mx-8">NODE.JS</span>
            <span className="mx-8">TENSORFLOW</span>
            <span className="mx-8">NEXT.JS</span>
            <span className="mx-8">DOCKER</span>
            <span className="mx-8">MONGODB</span>
            <span className="mx-8">REACT</span>
            <span className="mx-8">PYTHON</span>                                     
            <span className="mx-8">TAILWIND</span>
            <span className="mx-8">NODE.JS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
