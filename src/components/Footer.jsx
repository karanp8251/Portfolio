import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10 py-12 mt-20">
      <div className="container mx-auto px-6 text-center">
        <a href="#home" className="text-3xl font-bold font-heading text-white inline-block mb-6">
          KP<span className="text-primary">.</span>
        </a>

        <div className="flex items-center justify-center gap-6 mb-8">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
            <FaGithub />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#0A66C2] hover:text-white transition-all transform hover:-translate-y-1">
            <FaLinkedin />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#1DA1F2] hover:text-white transition-all transform hover:-translate-y-1">
            <FaTwitter />
          </a>
        </div>

        <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
          Made with <FaHeart className="text-red-500" /> by Karan Patel &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
