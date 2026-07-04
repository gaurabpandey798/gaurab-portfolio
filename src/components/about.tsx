"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar, FaJava } from "react-icons/fa";
import { SiDart, SiFlutter, SiSpringboot, SiFirebase, SiMysql } from "react-icons/si";
import { BiCalendar, BiBriefcase, BiTrophy } from "react-icons/bi";
import { Smartphone, Server, Globe, Search, ShieldCheck, Wrench } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative pt-8 pb-8 bg-[#f8f7f1] overflow-hidden"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10 relative">

        {/* LEFT SIDE */}
        <div className="max-w-[540px]">

          {/* Subtitle */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-[#3a6645]" />
            <h3 className="text-[#3a6645] font-bold tracking-[2px] uppercase text-[12px]">
              About Me <span className="sr-only">- Gaurab Pandey Background</span>
            </h3>
          </div>

          {/* Heading */}
          <h2 className="text-[48px] md:text-[64px] leading-[1.1] font-black text-[#152d1b] mb-8 tracking-tight">
            Who I am &amp;<br />what <span className="text-[#3a6645]">I do</span><span className="sr-only"> as a Flutter Developer &amp; Designer in Nepal</span>
          </h2>

          {/* Description */}
          <div className="space-y-6 text-[#525252] text-[16px] md:text-[18px] leading-[1.6] font-medium">
            <p>
              I&apos;m a passionate Full Stack Software Developer specializing in Flutter, Spring Boot, REST APIs, SEO, and Quality Assurance.
            </p>
            <p>
              I build high-performance web and mobile applications that not only look great but are also robust, search-optimized, and thoroughly tested.
            </p>
          </div>

          {/* Button and Scribble */}
          <div className="flex items-center gap-6 mt-6">
            <a href="/#contact" className="bg-[#152d1b] hover:bg-[#0e2013] text-white px-8 py-4 rounded-xl text-[16px] font-semibold transition-all duration-300 flex items-center gap-3 shadow-[0_10px_20px_-10px_rgba(21,45,27,0.5)] w-fit">
              Let&apos;s Connect
              <span className="font-light text-xl">→</span>
            </a>
            <svg
              width="120"
              height="40"
              viewBox="0 0 120 40"
              fill="none"
              className="text-[#8cb893] opacity-80"
            >
              <path
                d="M10 30 Q 40 10, 80 15 T 110 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M30 35 Q 60 15, 90 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* 4 Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { icon: <BiCalendar className="w-6 h-6" />, title: "1+", desc: "Years of\nExperience" },
              { icon: <BiBriefcase className="w-6 h-6" />, title: "10+", desc: "Projects\nCompleted" },
              { icon: <BiTrophy className="w-6 h-6" />, title: "10+", desc: "Happy\nClients" },
              { icon: <span className="text-xl font-black font-mono">{"</>"}</span>, title: "100%", desc: "Dedication" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#fcfbf7] border border-[#e8e6dc] rounded-[24px] p-5 shadow-sm flex flex-col items-start transition-transform hover:-translate-y-1">
                <div className="text-[#3a6645] mb-4 h-6 flex items-center justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-[26px] font-black text-[#152d1b] leading-none mb-2">{stat.title}</h3>
                <p className="text-[13px] text-[#525252] font-medium leading-snug whitespace-pre-line">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex flex-col items-center lg:items-end mt-16 lg:mt-0">

          <div className="relative w-full max-w-[500px]">
            {/* Main Image */}
            <div className="relative z-10 flex justify-center px-8 pb-0 items-end min-h-[500px]">
              <Image
                src="/gaurab-pandey-about.png"
                alt="Gaurab Pandey — Full Stack Software Developer, SEO Specialist, and QA Engineer in Kathmandu, Nepal"
                width={480}
                height={600}
                className="object-cover rounded-[32px] drop-shadow-2xl"
                loading="lazy"
              />
            </div>


          </div>

          {/* Tech Stack */}
          <div className="w-full max-w-[500px] mt-5">
            <p className="text-[14px] font-bold text-[#152d1b] mb-4 pl-[5%]">Tech Stack</p>
            <div className="flex gap-4 flex-wrap pl-[5%]">
              {[
                { icon: <SiDart className="w-[28px] h-[28px] text-[#0175C2]" /> },
                { icon: <SiFlutter className="w-[28px] h-[28px] text-[#02569B]" /> },
                { icon: <FaJava className="w-[32px] h-[32px] text-[#007396]" /> },
                { icon: <SiSpringboot className="w-[28px] h-[28px] text-[#6DB33F]" /> },
                { icon: <SiFirebase className="w-[28px] h-[28px] text-[#FFCA28]" /> },
                { icon: <SiMysql className="w-[32px] h-[32px] text-[#4479A1]" /> },
              ].map((tech, i) => (
                <div key={i} className="w-[64px] h-[64px] bg-white rounded-[20px] flex items-center justify-center shadow-sm border border-[#e8e6dc] hover:-translate-y-1.5 transition-transform duration-300">
                  {tech.icon}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* ── Skills & Expertise Section ── */}
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12 mt-20 pt-16 border-t border-[#e8e6dc]/60 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#3a6645]" />
          <h3 className="text-[#3a6645] font-bold tracking-[2px] uppercase text-[12px]">
            Skills &amp; Expertise <span className="sr-only">- Gaurab Pandey Technical Competencies</span>
          </h3>
        </div>
        <h2 className="text-[40px] md:text-[48px] font-black text-[#152d1b] leading-[1.1] tracking-tight mb-8">
          My Technical <span className="text-[#3a6645]">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white border border-[#e8e6dc] p-8 rounded-[32px] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(21,45,27,0.08)] transition-all duration-300 hover:-translate-y-1.5 group flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-[16px] bg-[#eaf2e5] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <category.icon className="text-[#3a6645] w-5 h-5" />
                </div>
                <h4 className="text-[20px] font-black text-[#152d1b] tracking-tight">
                  {category.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-[#f4f2ed] text-[#525252] text-[13px] font-bold rounded-xl border border-transparent hover:border-[#a4c0a9] hover:bg-[#eaf2e5]/30 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

const skillsCategories = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["Flutter", "Dart"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Spring Boot", "Java", "REST APIs", "MySQL"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "SEO Expertise",
    icon: Search,
    skills: [
      "Technical SEO",
      "On-Page SEO",
      "Keyword Research",
      "Google Search Console",
      "Performance Optimization",
      "Core Web Vitals",
      "SEO Audits",
    ],
  },
  {
    title: "Quality Assurance",
    icon: ShieldCheck,
    skills: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "API Testing",
      "Test Case Design",
      "Bug Reporting",
      "Usability Testing",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "Android Studio", "IntelliJ IDEA", "Postman", "Figma", "VS Code"],
  },
];