import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "AI Medical Assistant",
    description: "A machine learning based medical assistant that analyzes symptoms and suggests possible diagnoses. Built with Python, TensorFlow, and React.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tech: ["React", "Python", "TensorFlow", "FastAPI"],
    github: "#",
    live: "#"
  },
  {
    title: "Smart Traffic Control",
    description: "An intelligent traffic management system prioritizing ambulances using computer vision and edge computing.",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tech: ["OpenCV", "Python", "React", "Node.js"],
    github: "#",
    live: "#"
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with Stripe integration, Redux state management, and an admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tech: ["Next.js", "MongoDB", "Stripe", "Tailwind"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.project-card');

    gsap.fromTo(cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-heading text-center mb-16">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={containerRef}>
          {projects.map((project, index) => (
            <div key={index} className="project-card glass rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 font-heading">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 h-20 overflow-hidden">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs font-medium px-2 py-1 rounded bg-white/10 text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a href={project.github} className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.live} className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
