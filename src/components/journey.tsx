"use client";

import { useState } from "react";
import { FaGraduationCap, FaGlobe, FaDatabase, FaReact, FaJava, FaLeaf, FaMapMarkerAlt, FaSearch, FaCheckCircle } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { BiBookBookmark } from "react-icons/bi";
import { PiCertificateFill } from "react-icons/pi";
import { LuSchool } from "react-icons/lu";
import { MdTimeline } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";

const devJourney = [
  {
    year: "2020",
    title: "First understanding web concepts and started learning HTML & CSS",
    desc: "Began my journey by understanding how the web works and building my first simple websites using HTML and CSS.",
    leftIcon: <FaGlobe size={24} />,
    rightIcon: <span className="font-mono font-black text-[20px]">{"</>"}</span>,
  },
  {
    year: "2021",
    title: "Learned about CRUD operations using PHP & MySQL",
    desc: "Explored server-side programming and databases by building complete CRUD applications using PHP and MySQL.",
    leftIcon: <FaDatabase size={22} />,
    rightIcon: <span className="font-bold text-[18px]">php</span>,
  },
  {
    year: "2021 - 2023",
    title: "Explored JavaScript, gained concepts of frameworks & APIs",
    desc: "Deepened my JavaScript knowledge and explored modern frameworks and APIs to build dynamic and interactive web applications.",
    leftIcon: <div className="font-bold text-[18px]">JS</div>,
    rightIcon: <FaReact size={30} />,
  },
  {
    year: "2023",
    title: "Began specializing in SEO and website optimization",
    desc: "Focused on technical & on-page SEO, Google Search Console, and boosting performance metrics such as Core Web Vitals.",
    leftIcon: <FaSearch size={20} />,
    rightIcon: <FaSearch size={26} />,
  },
  {
    year: "2024",
    title: "Started exploring other programming languages like Java, .NET",
    desc: "Expanded my skills by learning backend-oriented languages to strengthen my problem-solving abilities.",
    leftIcon: <FaJava size={24} />,
    rightIcon: <span className="font-mono font-black text-[24px]">{"{}"}</span>,
  },
  {
    year: "2024",
    title: "Integrated Quality Assurance & Software Testing standard practices",
    desc: "Mastered manual testing, functional and regression workflows, API testing, and bug tracking methodologies for robust releases.",
    leftIcon: <FaCheckCircle size={22} />,
    rightIcon: <FaCheckCircle size={28} />,
  },
  {
    year: "2025",
    title: "Gained interest towards mobile development, moving through Dart & Flutter",
    desc: "Discovered the world of mobile apps and started building beautiful, cross-platform applications using Dart & Flutter.",
    leftIcon: <SiFlutter size={24} />,
    rightIcon: <SiFlutter size={30} />,
  },
  {
    year: "2026",
    title: "Exploring full stack mobile development with Spring Boot as the backbone",
    desc: "Working towards building powerful, scalable full stack mobile apps using Spring Boot, modern APIs and Flutter.",
    leftIcon: <FaLeaf size={24} />,
    rightIcon: <FaLeaf size={30} />,
  }
];

const eduJourney = [
  {
    year: "2020",
    title: "Secondary Education Examination",
    desc: "Vinayak Shanti Niketan School, Thapathali, Kathmandu",
    leftIcon: <BiBookBookmark size={26} />,
    rightIcon: <LuSchool size={30} />,
  },
  {
    year: "2022",
    title: "School Leaving Certificate",
    desc: "The Times International College, Dillibazar, Kathmandu",
    leftIcon: <FaGraduationCap size={26} />,
    rightIcon: <PiCertificateFill size={32} />,
  },
  {
    year: "2024 - 2026",
    title: "Bachelor in Computer Application",
    desc: "Madan Bhandari Memorial College, Anamnagar, Kathmandu",
    leftIcon: <PiCertificateFill size={26} />,
    rightIcon: <IoMdSchool size={32} />,
  }
];

export default function Journey() {
  const [activeTab, setActiveTab] = useState<"dev" | "edu">("dev");

  const currentJourney = activeTab === "dev" ? devJourney : eduJourney;

  return (
    <section id="journey" className="pt-8 pb-8 bg-[#f8f7f1] relative z-10 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-[#3a6645]" />
            <h3 className="text-[#3a6645] font-bold tracking-[2px] uppercase text-[12px]">
              My Journey <span className="sr-only">- Gaurab Pandey Milestones</span>
            </h3>
          </div>
          <h2 className="text-[40px] md:text-[48px] font-black text-[#152d1b] leading-[1.1] tracking-tight mb-3 transition-all duration-300">
            {activeTab === "dev" ? "My Growth Timeline" : "My Educational Journey"}
            <span className="sr-only"> — Gaurab Pandey's Profile</span>
          </h2>
          <p className="text-[#525252] text-[15px] max-w-[500px] leading-[1.5]">
            {activeTab === "dev" 
              ? "A timeline of my development journey and key milestones." 
              : "A timeline of my academic background and educational milestones."}
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab("dev")}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-full text-[14px] font-bold transition-all duration-300 ${
                activeTab === "dev"
                  ? "bg-[#152d1b] text-white shadow-[0_8px_20px_-8px_rgba(21,45,27,0.5)]"
                  : "bg-white text-[#152d1b] border border-[#e8e6dc] hover:bg-[#f4f2ed]"
              }`}
            >
              <MdTimeline size={20} className={activeTab === "dev" ? "text-[#8cb893]" : "text-[#525252]"} />
              Development Journey
            </button>
            <button
              onClick={() => setActiveTab("edu")}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-full text-[14px] font-bold transition-all duration-300 ${
                activeTab === "edu"
                  ? "bg-[#152d1b] text-white shadow-[0_8px_20px_-8px_rgba(21,45,27,0.5)]"
                  : "bg-white text-[#152d1b] border border-[#e8e6dc] hover:bg-[#f4f2ed]"
              }`}
            >
              <IoMdSchool size={20} className={activeTab === "edu" ? "text-[#8cb893]" : "text-[#525252]"} />
              Education
            </button>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative mt-8">
          
          {/* Vertical Line */}
          <div className="absolute left-[30px] md:left-[160px] top-4 bottom-4 w-[2px] bg-[#3a6645] opacity-50" />

          <div className="space-y-6 md:space-y-4 relative z-10">
            {currentJourney.map((item, index) => (
              <div key={index} className="relative flex flex-col md:flex-row md:items-center">
                
                {/* Left Side: Year Box (Desktop) */}
                <div className="hidden md:flex w-[160px] justify-start">
                  <div className="flex flex-col items-center justify-center w-[100px] h-[90px] bg-[#eaf2e5] rounded-[20px] shadow-sm shrink-0 hover:scale-105 transition-transform duration-300">
                    <span className="text-[15px] font-black text-[#152d1b] mb-1.5">{item.year}</span>
                    <span className="text-[#3a6645] scale-90">{item.leftIcon}</span>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-[24px] md:left-[153px] top-[32px] md:top-1/2 md:-translate-y-1/2 w-[14px] h-[14px] rounded-full bg-[#152d1b] ring-[6px] ring-[#f8f7f1] z-20" />

                {/* Mobile Year Box */}
                <div className="md:hidden flex items-center mb-4 pl-[64px]">
                  <div className="flex flex-col items-center justify-center px-6 py-4 bg-[#eaf2e5] rounded-[20px] shadow-sm shrink-0">
                    <span className="text-[15px] font-black text-[#152d1b] mb-1">{item.year}</span>
                    <span className="text-[#3a6645] scale-90">{item.leftIcon}</span>
                  </div>
                </div>

                {/* Card */}
                <div className="ml-[64px] md:ml-12 flex-1 bg-white rounded-[20px] p-5 md:p-6 border border-[#e8e6dc] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 md:gap-6 relative group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  
                  {/* Notch (Desktop) */}
                  <div className="hidden md:block absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-l border-b border-[#e8e6dc] rotate-45 rounded-[2px]" />

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-[16px] md:text-[17px] font-black text-[#152d1b] mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <div className="text-[#525252] text-[14px] leading-[1.6] font-medium flex items-start gap-2">
                      {activeTab === "edu" && <FaMapMarkerAlt className="text-[#a4c0a9] shrink-0 mt-1" />}
                      <span className={activeTab === "edu" ? "text-[#7a7a7a]" : ""}>{item.desc}</span>
                    </div>
                  </div>

                  {/* Right Icon */}
                  <div className="hidden sm:flex w-[54px] h-[54px] rounded-2xl bg-[#f4f2ed] items-center justify-center shrink-0 text-[#3a6645] group-hover:scale-110 transition-transform duration-300">
                    <span className="scale-90 flex items-center justify-center">{item.rightIcon}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}