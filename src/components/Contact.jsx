import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:karanp825103@gmail.com?subject=${encodeURIComponent(subject || 'Project Inquiry')}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  useEffect(() => {
    gsap.fromTo(formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/10 blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-heading text-center mb-16">
          Get In <span className="text-secondary">Touch</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="glass p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                <FiMail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Email</h4>
                <p className="text-gray-400">karanp825103@gmail.com</p>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                <FiMapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Location</h4>
                <p className="text-gray-400">Indore</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3" ref={formRef}>
            <form className="glass p-8 rounded-3xl" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Project Inquiry" />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea rows="4" name="message" value={formData.message} onChange={handleChange} required className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Hello..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-xl font-bold tracking-wide transition-opacity shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
