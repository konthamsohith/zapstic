import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative text-black overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.15, pointerEvents: 'none' }}
      >
        <source src="/videos/thunder-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay to tint the video */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ backgroundColor: '#F5F5F5', opacity: 0.7 }}
      />
      <div className="w-full py-20 px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1450px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="./src/assets/Zapstic.png"
                alt="Zapstic Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold tracking-tight">Zapstic</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6 max-w-xs">
              Transforming businesses through advanced AI automation and intelligent solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/zapstic-zapstic-831805369/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/10 rounded-full hover:bg-black/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-black" />
              </a>
              <a
                href="https://x.com/zapsticai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/10 rounded-full hover:bg-black/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-black" />
              </a>
              <a
                href="https://www.instagram.com/zapsticai/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/10 rounded-full hover:bg-black/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-black" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-700 hover:text-black transition">Home</a>
              </li>
              <li>
                <a href="#ourservices" className="text-gray-700 hover:text-black transition">Services</a>
              </li>
              <li>
                <a href="#features" className="text-gray-700 hover:text-black transition">Why Choose Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-700 hover:text-black transition">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 hover:text-black transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wide">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="text-gray-700 hover:text-black transition">Workflow Automation</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-black transition">Sales & Marketing</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-black transition">Customer Support</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-black transition">Data Analytics</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-black transition">Content Creation</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-black transition">Security & Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 mt-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Zapstic. All rights reserved.</p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-black transition"
              onClick={e => e.preventDefault()}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-black transition"
              onClick={e => e.preventDefault()}
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-black transition"
              onClick={e => e.preventDefault()}
            >
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
