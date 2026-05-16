import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiDownload } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const el = aboutRef.current;
    gsap.fromTo(el,
      { opacity: 0, y: 100 },
      {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6" ref={aboutRef}>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transform skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl opacity-30 blur-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Working"
                className="relative rounded-3xl shadow-2xl object-cover h-[400px] w-full border border-white/10"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold font-heading mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="glass p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
              <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                Hi, I'm Karan patel, a 3rd year B.Tech student with a profound passion for technology and innovation. I specialize in building robust full-stack web applications and intelligent AI solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                My journey in tech is driven by curiosity and a desire to solve real-world problems. Whether it's crafting beautiful user interfaces with React and Tailwind, or engineering machine learning models, I love every aspect of software development.
              </p>

              <div className="flex gap-4">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-primary font-heading">3+</span>
                  <span className="text-sm text-gray-400">Years Coding</span>
                </div>
                <div className="w-px bg-white/10 mx-2"></div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-secondary font-heading">7+</span>
                  <span className="text-sm text-gray-400">Projects</span>
                </div>
                <div className="w-px bg-white/10 mx-2"></div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-accent font-heading">9+</span>
                  <span className="text-sm text-gray-400">Hackathons</span>
                </div>
              </div>

              <a href="KARAN_CLG_RESUME outside.docx" download="Karan_Patel_Resume.docx" className="mt-8 flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-medium transition-all text-white w-max group">
                <FiDownload className="group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
