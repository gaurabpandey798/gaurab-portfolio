"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar, FaJava } from "react-icons/fa";
import { SiDart, SiFlutter, SiSpringboot, SiFirebase, SiMysql } from "react-icons/si";
import { BiCalendar, BiBriefcase, BiTrophy } from "react-icons/bi";

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
              I&apos;m a passionate software developer who loves turning ideas into clean, efficient and user-focused digital solutions.
            </p>
            <p>
              I enjoy building websites, web applications and mobile applications that not only look great but also solve real-world problems.
            </p>
          </div>

          {/* Button and Scribble */}
          <div className="flex items-center gap-6 mt-6">
            <button className="bg-[#152d1b] hover:bg-[#0e2013] text-white px-8 py-4 rounded-xl text-[16px] font-semibold transition-all duration-300 flex items-center gap-3 shadow-[0_10px_20px_-10px_rgba(21,45,27,0.5)]">
              Let&apos;s Connect
              <span className="font-light text-xl">→</span>
            </button>
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
              { icon: <BiBriefcase className="w-6 h-6" />, title: "20+", desc: "Projects\nCompleted" },
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
                alt="Gaurab Pandey — Premium Flutter Developer and UI/UX Designer from Kathmandu, Nepal"
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
    </section>
  );
}