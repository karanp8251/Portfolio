import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profileImg from '../assets/K_Photo.jpeg';

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const chars = textRef.current.children;
    gsap.fromTo(chars,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.05, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-secondary mb-4 text-lg font-medium tracking-wide" ref={textRef}>
            <span className="inline-block">H</span>
            <span className="inline-block">e</span>
            <span className="inline-block">l</span>
            <span className="inline-block">l</span>
            <span className="inline-block">o</span>
            <span className="inline-block">,</span>
            <span className="inline-block">&nbsp;</span>
            <span className="inline-block">I</span>
            <span className="inline-block">'</span>
            <span className="inline-block">m</span>
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
            Karan Patel
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gradient">
            AI Engineer & Full Stack Developer
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto md:mx-0">
            I am a 3rd year B.Tech student passionate about building scalable web applications and intelligent AI solutions. Let's create something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 bg-primary hover:bg-accent text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.5)]">
              View Projects
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-secondary text-secondary hover:bg-secondary/10 rounded-full font-medium transition-all transform hover:scale-105">
              Contact Me
            </button>
          </div>

          <div className="flex items-center gap-6 mt-12 justify-center md:justify-start">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl hover:scale-110 transform duration-200">
              <FaGithub />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#0A66C2] transition-colors text-2xl hover:scale-110 transform duration-200">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#1DA1F2] transition-colors text-2xl hover:scale-110 transform duration-200">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative w-30 h-30 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-r from-primary to-secondary shadow-[0_0_40px_rgba(124,58,237,0.4)] animate-pulse">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden border-4 border-background">
              {/* Profile image */}
              <img src={""} alt="Karan Patel" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
