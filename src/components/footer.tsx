"use client";

import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaCode, FaMobileAlt, FaLayerGroup, FaRegHeart } from "react-icons/fa";
import { BsArrowUpShort } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f8f7f1] pt-16 pb-8 border-t border-[#e8e6dc] relative z-10">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand & About */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden shadow-sm flex items-center justify-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="Gaurab Pandey Logo"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-[22px] font-black text-[#152d1b] leading-tight">Gaurab</h3>
                <p className="text-[#3a6645] font-bold text-[14px]">Software Developer</p>
              </div>
            </div>
            <p className="text-[#525252] text-[15px] leading-[1.6] mb-8">
              I design, build and deliver digital solutions that are fast, user-friendly and impactful. Let&apos;s create something amazing together.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://github.com/gaurabpandey798" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="w-[44px] h-[44px] bg-white rounded-[14px] border border-[#e8e6dc] shadow-sm flex items-center justify-center text-[#152d1b] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/gaurabpandey-dev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="w-[44px] h-[44px] bg-white rounded-[14px] border border-[#e8e6dc] shadow-sm flex items-center justify-center text-[#152d1b] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <FaLinkedinIn size={16} />
              </a>
              <a href="https://www.instagram.com/gaurabpandey798/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="w-[44px] h-[44px] bg-white rounded-[14px] border border-[#e8e6dc] shadow-sm flex items-center justify-center text-[#152d1b] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <FaInstagram size={16} />
              </a>
              <a href="mailto:info.gaurabpandey@gmail.com" aria-label="Email Me" className="w-[44px] h-[44px] bg-white rounded-[14px] border border-[#e8e6dc] shadow-sm flex items-center justify-center text-[#3a6645] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <FaEnvelope size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col lg:pl-8">
            <h4 className="text-[#3a6645] font-bold text-[16px] mb-6">Quick Links</h4>
            <div className="flex flex-col gap-4">
              {['Home', 'About', 'Projects', 'Journey', 'Contact'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="flex items-center gap-3 text-[#525252] font-medium hover:text-[#152d1b] transition-colors group w-max">
                  <FiChevronRight className="text-[#a4c0a9] group-hover:translate-x-1 transition-transform" />
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: What I Do */}
          <div className="flex flex-col">
            <h4 className="text-[#3a6645] font-bold text-[16px] mb-6">What I Do</h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-[48px] h-[48px] bg-[#eaf2e5] text-[#3a6645] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <FaCode size={18} />
                </div>
                <span className="text-[#152d1b] font-semibold text-[15px]">Web Development</span>
              </div>
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-[48px] h-[48px] bg-[#eaf2e5] text-[#3a6645] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <FaMobileAlt size={18} />
                </div>
                <span className="text-[#152d1b] font-semibold text-[15px]">Mobile Development</span>
              </div>
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-[48px] h-[48px] bg-[#eaf2e5] text-[#3a6645] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <FaLayerGroup size={18} />
                </div>
                <span className="text-[#152d1b] font-semibold text-[15px]">Full Stack Development</span>
              </div>
            </div>
          </div>

          {/* Column 4: Let's Connect */}
          <div className="flex flex-col">
            <h4 className="text-[#3a6645] font-bold text-[16px] mb-6">Let&apos;s Connect</h4>
            <p className="text-[#525252] text-[15px] leading-[1.6] mb-8">
              Have a project in mind or just want to say hi? Feel free to reach out!
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-[48px] h-[48px] bg-[#eaf2e5] text-[#3a6645] rounded-full flex items-center justify-center shrink-0">
                  <FaEnvelope size={16} />
                </div>
                <span className="text-[#525252] text-[14px] font-medium">info.gaurabpandey@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[48px] h-[48px] bg-[#eaf2e5] text-[#3a6645] rounded-full flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt size={18} />
                </div>
                <span className="text-[#525252] text-[14px] font-medium">Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#e8e6dc] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#525252] text-[14px] font-medium">
            © 2025 Gaurab. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#525252] hover:text-[#152d1b] text-[14px] font-bold transition-colors group"
          >
            Back to Top
            <BsArrowUpShort size={24} className="text-[#3a6645] group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}