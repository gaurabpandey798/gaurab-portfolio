"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Terminal, GitBranch, Cpu, Code2 } from "lucide-react";

const fadeLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const fadeScale = {
  initial: { opacity: 0, scale: 0.93 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

// Animation config for floating glass cards
const floatAnimation = {
  initial: { y: 0 },
  animate: { y: [-10, 10, -10] },
  transition: { repeat: Infinity, duration: 6, ease: "easeInOut" as const },
};
const floatAnimation2 = {
  initial: { y: 0 },
  animate: { y: [10, -10, 10] },
  transition: { repeat: Infinity, duration: 8, ease: "easeInOut" as const },
};
const floatAnimation3 = {
  initial: { y: 0 },
  animate: { y: [-8, 12, -8] },
  transition: { repeat: Infinity, duration: 7, ease: "easeInOut" as const },
};

const socials = [
  { icon: <FaGithub size={22} />, key: "g", href: "https://github.com/gaurabpandey", label: "Gaurab Pandey GitHub Profile" },
  { icon: <FaLinkedin size={22} />, key: "l", href: "https://linkedin.com/in/gaurabpandey", label: "Gaurab Pandey LinkedIn Profile" },
  { icon: <MdEmail size={24} />, key: "m", href: "mailto:info.gaurabpandey@gmail.com", label: "Gaurab Pandey Email Address" },
  { icon: <FaTwitter size={22} />, key: "t", href: "https://twitter.com/gaurabpandey", label: "Gaurab Pandey Twitter Profile" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f9f8f3] h-[100dvh] min-h-[750px] w-full pt-20 lg:pt-0"
    >
      {/* ── Background Grid & Texture (Premium Paper Texture) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(140, 184, 147, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(140, 184, 147, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f9f8f3]/60 to-[#f9f8f3] pointer-events-none" />
      </div>

      {/* ── Complex Background Composition (Abstract Geometric Pattern) ── */}
      <div className="absolute top-[-10%] right-[-5%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full border-[1.5px] border-[#d6e0cc]/60 opacity-60 pointer-events-none z-0" />
      <div className="absolute top-[0%] right-[0%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full border-[1.5px] border-[#d6e0cc]/40 opacity-50 pointer-events-none z-0" />

      {/* Opaque and Translucent shapes */}
      <div className="absolute top-[5%] right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-br from-[#ebe9db]/90 to-[#f2f1e8]/40 backdrop-blur-sm pointer-events-none z-0 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]" />
      <div className="absolute top-[25%] right-[20%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] rounded-full bg-gradient-to-tl from-[#d6e0cc]/70 to-[#ebe9db]/40 backdrop-blur-md pointer-events-none z-0 shadow-lg" />
      <div className="absolute top-[45%] right-[5%] w-[25vw] h-[25vw] max-w-[300px] max-h-[300px] rounded-full bg-[#c2d1b8]/50 backdrop-blur-lg pointer-events-none z-0" />

      {/* Embedded Circuit Board Traces (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-[0.35]" xmlns="http://www.w3.org/2000/svg">
        <path d="M 55%,15% L 65%,15% L 75%,25% L 90%,25%" stroke="#5c8a66" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <circle cx="55%" cy="15%" r="3" fill="#5c8a66" />
        <circle cx="90%" cy="25%" r="3" fill="#5c8a66" />

        <path d="M 50%,40% L 60%,50% L 75%,50%" stroke="#5c8a66" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <circle cx="50%" cy="40%" r="3" fill="#5c8a66" />
        <circle cx="75%" cy="50%" r="3" fill="#5c8a66" />

        <path d="M 65%,65% L 75%,55% L 95%,55%" stroke="#5c8a66" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <circle cx="65%" cy="65%" r="3" fill="#5c8a66" />
        <circle cx="95%" cy="55%" r="3" fill="#5c8a66" />
      </svg>

      {/* ── Floating Code Elements (Glass Cards) ── */}
      <motion.div {...floatAnimation} className="absolute backdrop-blur-md bg-white/70 border border-white/50 rounded-xl shadow-[0_12px_40px_0_rgba(31,38,135,0.08)] p-4 text-[10px] sm:text-xs font-mono text-gray-800 pointer-events-none select-none top-[12%] right-[28%] -rotate-6 z-0 hidden lg:block">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
        </div>
        <pre>
          <span className="text-[#8959a8]">class</span> <span className="text-[#4271ae]">Hero</span> <span className="text-[#8959a8]">extends</span> <span className="text-[#4271ae]">StatelessWidget</span> {"{"}<br />
          &nbsp;&nbsp;<span className="text-[#8959a8]">@override</span><br />
          &nbsp;&nbsp;<span className="text-[#4271ae]">Widget</span> build(<span className="text-[#4271ae]">BuildContext</span> context) {"{"}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#8959a8]">return</span> <span className="text-[#eab700]">Container</span>(<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;child: <span className="text-[#eab700]">Text</span>(<span className="text-[#718c00]">{"'Hello World'"}</span>),<br />
          &nbsp;&nbsp;&nbsp;&nbsp;);<br />
          &nbsp;&nbsp;{"}"}<br />
          {"}"}
        </pre>
      </motion.div>

      <motion.div {...floatAnimation2} className="absolute backdrop-blur-md bg-[#0f2818]/85 border border-white/10 rounded-xl shadow-[0_12px_40px_0_rgba(31,38,135,0.2)] p-4 text-[10px] sm:text-xs font-mono text-gray-200 pointer-events-none select-none top-[45%] right-[6%] rotate-3 z-0 hidden lg:block">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
        </div>
        <pre>
          <span className="text-[#8cb893]">@RestController</span><br />
          <span className="text-[#a89f91]">public class</span> <span className="text-[#8cb893]">Api</span> {"{"}<br />
          &nbsp;&nbsp;<span className="text-[#8cb893]">@GetMapping</span>(<span className="text-[#eab700]">{"\"/data\""}</span>)<br />
          &nbsp;&nbsp;<span className="text-[#a89f91]">public</span> <span className="text-[#8cb893]">Response</span> get() {"{"}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a89f91]">return new</span> <span className="text-[#8cb893]">Response</span>();<br />
          &nbsp;&nbsp;{"}"}<br />
          {"}"}
        </pre>
      </motion.div>

      <motion.div {...floatAnimation3} className="absolute backdrop-blur-md bg-[#c2d1b8]/80 border border-white/40 rounded-xl shadow-[0_12px_40px_0_rgba(31,38,135,0.08)] p-4 text-[10px] sm:text-xs font-mono text-[#0f2818] pointer-events-none select-none bottom-[45%] right-[42%] -rotate-3 z-0 hidden lg:block">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#0f2818]/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#0f2818]/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#0f2818]/20"></div>
        </div>
        <pre>
          <span className="text-[#4a7256]">@keyframes</span> <span className="text-[#2b4c34]">float</span> {"{"}<br />
          &nbsp;&nbsp;<span className="text-[#4a7256]">0%</span> {"{ transform: translateY(0); }"}<br />
          &nbsp;&nbsp;<span className="text-[#4a7256]">50%</span> {"{ transform: translateY(-10px); }"}<br />
          &nbsp;&nbsp;<span className="text-[#4a7256]">100%</span> {"{ transform: translateY(0); }"}<br />
          {"}"}
        </pre>
      </motion.div>

      {/* ── Accent Patterning (Left Side) ── */}
      <div className="absolute top-[20%] left-[5%] opacity-[0.08] pointer-events-none hidden lg:block z-0">
        <Terminal size={120} strokeWidth={1} className="text-[#0f2818] -rotate-12" />
      </div>
      <div className="absolute top-[60%] left-[8%] opacity-[0.08] pointer-events-none hidden lg:block z-0">
        <GitBranch size={100} strokeWidth={1} className="text-[#0f2818] rotate-12" />
      </div>
      <div className="absolute top-[80%] left-[25%] opacity-[0.08] pointer-events-none hidden lg:block z-0">
        <Cpu size={80} strokeWidth={1} className="text-[#0f2818] -rotate-6" />
      </div>
      <div className="absolute top-[30%] left-[30%] opacity-[0.04] pointer-events-none hidden lg:block z-0">
        <Code2 size={180} strokeWidth={0.5} className="text-[#0f2818] rotate-6" />
      </div>

      {/* ══ Main Container ══ */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 md:px-10 lg:px-16 flex flex-col lg:flex-row h-full">

        {/* ─── LEFT TEXT CONTENT (approx 45%) ─── */}
        <motion.div {...fadeLeft} className="w-full lg:w-[45%] flex flex-col justify-center h-full relative z-20 pt-16 lg:pt-[100px] pb-4">

          {/* Greeting */}
          <p className="font-medium text-[#4a4a4a] mb-2 md:mb-3 tracking-wide" style={{ fontSize: "clamp(1.2rem, 1.5vw, 1.5rem)" }}>
            Hi, I&apos;m
          </p>

          {/* Name */}
          <h1
            className="font-black text-[#0f2818] leading-[0.95] tracking-tight select-none drop-shadow-sm"
            style={{ fontSize: "clamp(3.5rem, 8vw, 7.5rem)" }}
          >
            Gaurab<span className="sr-only"> Pandey — Premium Flutter Developer, UI/UX Designer &amp; Web Developer from Nepal</span>
          </h1>

          {/* Role + underline */}
          <div className="mt-2 md:mt-3 mb-6 md:mb-8 inline-block relative w-fit">
            <h2
              className="font-bold text-[#5c8a66] leading-tight relative z-10"
              style={{ fontSize: "clamp(1.75rem, 3vw, 3rem)" }}
            >
              Software Developer <span className="sr-only">| Flutter Specialist &amp; Designer Kathmandu</span>
            </h2>
            {/* Hand-drawn double underline */}
            <svg
              viewBox="0 0 320 14"
              fill="none"
              className="absolute -bottom-2 md:-bottom-3 left-0 w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M4 9 C90 5, 220 5, 316 9"
                stroke="#8cb893"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M30 12.5 C100 9.5, 230 9.5, 300 12.5"
                stroke="#8cb893"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.55"
              />
            </svg>
          </div>

          {/* Description */}
          <div
            className="mb-10 space-y-1.5 font-medium text-[#525252]"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", lineHeight: "1.6" }}
          >
            <p>I design, build and deliver digital solutions.</p>
            <p>From stunning websites to powerful web apps</p>
            <p>and cross-platform mobile applications.</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="group bg-[#0f2818] text-white px-8 md:px-9 py-3.5 md:py-4 rounded-xl text-[16px] md:text-[17px] font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1">
              View My Work
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
            <a
              href="/Gaurab-Pandey-CV.pdf"
              download="Gaurab_Pandey_CV.pdf"
              className="group border-[1.5px] border-[#0f2818] text-[#0f2818] hover:bg-[#0f2818] hover:text-white px-8 md:px-9 py-3.5 md:py-4 rounded-xl text-[16px] md:text-[17px] font-semibold transition-all duration-300 flex items-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              Download CV
              <span className="transition-transform duration-300 group-hover:translate-y-1.5">↓</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-2">
            <p className="text-[15px] font-bold text-[#0f2818] mb-4 tracking-wide">
              Let&apos;s connect
            </p>
            <div className="flex items-center gap-4">
              {socials.map(({ icon, key, href, label }) => (
                <a
                  key={key}
                  href={href}
                  aria-label={label}
                  className="w-[52px] h-[52px] rounded-xl bg-white text-[#0f2818] flex items-center justify-center hover:-translate-y-1.5 hover:text-[#5c8a66] hover:border-[#5c8a66] border border-transparent shadow-[0_4px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_25px_rgba(44,78,53,0.15)] transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ─── RIGHT IMAGE COMPOSITION (approx 55%) ─── */}
        <motion.div
          {...fadeScale}
          className="w-full lg:w-[55%] flex-1 lg:flex-none flex justify-center lg:justify-end items-end h-full relative"
        >
          <div className="relative w-full max-w-[900px] h-[95%] lg:h-[100%] flex justify-center lg:justify-start items-end">
            <Image
              src="/gaurab-pandey-flutter-developer.png"
              alt="Gaurab Pandey — Premium Flutter Developer, UI/UX Designer, and Web App Developer from Kathmandu, Nepal"
              fill
              priority
              quality={100}
              className="object-contain object-bottom origin-bottom lg:scale-[1.15] lg:-translate-x-[5%] lg:-translate-y-[5px]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}