"use client";

import { useState } from "react";
import { FaGithub, FaGlobe, FaCode, FaMobileAlt, FaThLarge, FaLock, FaFingerprint, FaMapMarkerAlt, FaChargingStation, FaShoppingCart, FaMusic, FaPlay, FaUtensils, FaUserMd } from "react-icons/fa";

const allProjects = [
  {
    title: "Vault",
    type: "Mobile Apps",
    description: "A secured password manager that helps you manage your passwords securely with your biometrics.",
    tech: ["Flutter", "Dart", "Biometrics", "Hive"],
    link: "#",
    github: "#",
    bg: "bg-[#eaf2e5]",
    visual: (
      <div className="absolute right-[-10%] bottom-[-20%] w-[80%] h-[120%] bg-white rounded-[24px] shadow-2xl p-4 flex flex-col gap-3 transform rotate-[-5deg] border border-[#e8e6dc]">
        <div className="flex justify-between items-center pb-2 border-b border-[#f4f2ed]">
          <div className="w-12 h-2.5 bg-[#152d1b]/60 rounded-full" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#3a6645] flex items-center justify-center">
            <FaLock className="text-white text-[8px]" />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-2 py-2">
          <div className="w-12 h-12 rounded-full bg-[#eaf2e5] flex items-center justify-center text-[#3a6645]">
            <FaFingerprint size={24} />
          </div>
          <span className="text-[10px] font-bold text-[#3a6645] tracking-wider uppercase">Scan Biometrics</span>
        </div>
        <div className="w-full h-8 bg-[#f4f2ed] rounded-xl flex items-center px-3 justify-between">
          <div className="w-16 h-2 bg-[#152d1b]/40 rounded-full" />
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#152d1b]/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#152d1b]/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#152d1b]/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#152d1b]/60" />
          </div>
        </div>
      </div>
    )
  },
  {
    title: "EV Smart Charge",
    type: "Mobile Apps",
    description: "An online charger booking app that helps you analyze the queue in real-time, and uses algorithms to find the nearest station from your current location.",
    tech: ["Flutter", "Dart", "OpenStreetMap", "Spring Boot", "REST API"],
    link: "#",
    github: "#",
    bg: "bg-[#e3f2fd]",
    visual: (
      <div className="absolute right-[-10%] bottom-[-20%] w-[80%] h-[120%] bg-white rounded-[24px] shadow-2xl p-3 flex flex-col gap-2.5 transform rotate-[4deg] border border-[#e8e6dc]">
        <div className="flex items-center justify-between pb-1.5 border-b border-[#f4f2ed]">
          <span className="text-[9px] font-black text-blue-900 uppercase tracking-wider">EV Find</span>
          <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-[8px] font-bold rounded-full">Active</span>
        </div>
        <div className="flex-1 bg-[#e3f2fd] rounded-xl relative overflow-hidden flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full text-blue-200/50" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M 0 30 L 120 30 M 40 0 L 40 120 M 80 0 L 80 120" />
          </svg>
          <div className="absolute left-[40px] top-[30px] -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 bg-blue-600 rounded-full flex items-center justify-center border border-white">
              <div className="absolute -inset-1 bg-blue-400 rounded-full animate-ping opacity-60" />
            </div>
          </div>
          <div className="absolute left-[80px] top-[70px] -translate-x-1/2 -translate-y-1/2 text-green-600">
            <FaMapMarkerAlt size={16} className="drop-shadow-md" />
          </div>
        </div>
        <div className="bg-[#f8f9fa] p-1.5 rounded-lg border border-[#e8e6dc] flex justify-between items-center">
          <div>
            <div className="text-[9px] font-bold text-blue-950">Supercharge St.</div>
            <div className="text-[7px] text-gray-500">Queue: 1 min • 0.8 km</div>
          </div>
          <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center text-white">
            <FaChargingStation size={10} />
          </div>
        </div>
      </div>
    )
  },
  {
    title: "M-Commerce",
    type: "Mobile Apps",
    description: "A mobile commerce app that allows you to perform buying and selling from your devices.",
    tech: ["Flutter", "Dart", "Spring Boot", "MySQL", "REST API"],
    link: "#",
    github: "#",
    bg: "bg-[#fff3e0]",
    visual: (
      <div className="absolute right-[-10%] bottom-[-20%] w-[80%] h-[120%] bg-white rounded-[24px] shadow-2xl p-3 flex flex-col gap-2.5 transform rotate-[-3deg] border border-[#e8e6dc]">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-black text-amber-900">M-Shop</span>
          <FaShoppingCart size={11} className="text-amber-700" />
        </div>
        <div className="grid grid-cols-2 gap-2 flex-1">
          <div className="bg-[#fff3e0]/50 rounded-xl p-1.5 flex flex-col gap-1 border border-amber-100">
            <div className="bg-white rounded-lg aspect-square flex items-center justify-center text-amber-800 text-[10px] font-black">
              👟
            </div>
            <div className="w-3/4 h-1.5 bg-amber-900/30 rounded-full" />
            <div className="w-1/2 h-1.5 bg-amber-900/20 rounded-full" />
          </div>
          <div className="bg-[#fff3e0]/50 rounded-xl p-1.5 flex flex-col gap-1 border border-amber-100">
            <div className="bg-white rounded-lg aspect-square flex items-center justify-center text-amber-800 text-[10px] font-black">
              🕶️
            </div>
            <div className="w-3/4 h-1.5 bg-amber-900/30 rounded-full" />
            <div className="w-1/2 h-1.5 bg-amber-900/20 rounded-full" />
          </div>
        </div>
        <div className="w-full py-1 bg-amber-700 text-white rounded-xl text-center text-[9px] font-bold shadow-md hover:bg-amber-800">
          Checkout Now
        </div>
      </div>
    )
  },
  {
    title: "Portfolio",
    type: "Websites",
    description: "Personal portfolio website with smooth animations and dynamic content.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    link: "#",
    github: "#",
    bg: "bg-[#eaf2e5]",
    visual: (
      <div className="absolute inset-[10%] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden border border-[#e8e6dc]">
        <div className="w-full h-full p-4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="w-1/3 h-3 bg-[#3a6645] rounded-full" />
            <div className="w-8 h-3 bg-[#e8e6dc] rounded-full" />
          </div>
          <div className="w-full h-20 bg-[#f8f7f1] rounded-lg" />
        </div>
      </div>
    )
  },
  {
    title: "Pacific Hiphop",
    type: "Websites",
    description: "A dynamic website for a professional music studio in Nepal.",
    tech: ["Next.js", "React", "Framer Motion", "TailwindCSS"],
    link: "#",
    github: "#",
    bg: "bg-[#f3e5f5]",
    visual: (
      <div className="absolute inset-[10%] bg-zinc-950 rounded-xl shadow-xl flex flex-col overflow-hidden border border-zinc-800">
        <div className="w-full h-4 bg-zinc-900 flex items-center px-2 gap-1 border-b border-zinc-800">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
        </div>
        <div className="p-3 flex-1 flex flex-col justify-between text-white">
          <div className="flex justify-between items-center">
            <div className="text-[9px] font-black tracking-widest text-purple-400">PACIFIC.HIPHOP</div>
            <FaMusic size={9} className="text-purple-400" />
          </div>
          <div className="flex items-end justify-center gap-1 h-12 my-1">
            <div className="w-1.5 h-6 bg-purple-500 rounded-full animate-pulse" />
            <div className="w-1.5 h-10 bg-pink-500 rounded-full animate-pulse" />
            <div className="w-1.5 h-8 bg-purple-400 rounded-full animate-pulse" />
            <div className="w-1.5 h-12 bg-pink-400 rounded-full animate-pulse" />
            <div className="w-1.5 h-5 bg-purple-500 rounded-full animate-pulse" />
          </div>
          <div className="bg-zinc-900 p-1.5 rounded-lg flex items-center justify-between border border-zinc-800">
            <div className="w-3.5 h-3.5 rounded-full bg-purple-500 flex items-center justify-center cursor-pointer">
              <FaPlay className="text-[6px] text-white ml-[1px]" />
            </div>
            <div className="flex-1 mx-2 h-1 bg-zinc-700 rounded-full overflow-hidden">
              <div className="w-3/5 h-full bg-gradient-to-r from-purple-500 to-pink-500" />
            </div>
            <span className="text-[7px] text-zinc-400 font-mono">01:45</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "PeakPulse Adventure",
    type: "Websites",
    description: "A website for a tourism company showcasing trek and tour packages.",
    tech: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
    link: "#",
    github: "#",
    bg: "bg-[#e8f5e9]",
    visual: (
      <div className="absolute inset-[10%] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden border border-[#e8e6dc]">
        <div className="w-full h-4 bg-[#f4f2ed] flex items-center px-2 gap-1 border-b border-[#e8e6dc]">
          <div className="w-1 h-1 bg-gray-300 rounded-full" />
          <div className="w-12 h-1.5 bg-gray-200 rounded-full" />
        </div>
        <div className="p-3 flex-1 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#e8f5e9] to-white">
          <div className="flex justify-between items-center z-10">
            <span className="text-[8px] font-black text-emerald-950 uppercase tracking-widest">PeakPulse</span>
            <span className="text-[7px] px-2 py-0.5 bg-emerald-800 text-white rounded-full font-bold">Book Trip</span>
          </div>
          <div className="absolute bottom-0 inset-x-0 h-16 flex items-end">
            <svg className="w-full h-full text-emerald-800/20" viewBox="0 0 100 40" preserveAspectRatio="none">
              <polygon points="0,40 25,10 50,25 75,5 100,40" fill="currentColor" />
              <polygon points="0,40 35,20 65,30 100,15 100,40" fill="currentColor" opacity="0.5" />
            </svg>
          </div>
          <div className="z-10 mt-1">
            <div className="text-[12px] font-black text-emerald-950 leading-tight">Explore the<br />Himalayas</div>
            <div className="w-12 h-1.5 bg-emerald-600 rounded-full mt-1.5" />
          </div>
        </div>
      </div>
    )
  },
  {
    title: "ShopEasy",
    type: "Web Apps",
    description: "A modern e-commerce platform featuring product browsing, shopping cart, and checkout functionalities.",
    tech: ["PHP", "MySQL", "HTML/CSS", "CRUD"],
    link: "#",
    github: "#",
    bg: "bg-[#f4f2ed]",
    visual: (
      <div className="absolute inset-[10%] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden border border-[#e8e6dc]">
        <div className="w-full h-4 bg-[#f4f2ed] flex items-center px-2 gap-1 border-b border-[#e8e6dc]">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
        </div>
        <div className="p-3 flex-1 flex flex-col gap-2 items-center justify-center">
          <div className="w-16 h-12 bg-[#eaf2e5] rounded-lg mb-1 flex items-center justify-center text-xl">🛍️</div>
          <div className="w-3/4 h-2 bg-[#f4f2ed] rounded-full" />
          <div className="w-1/2 h-2 bg-[#f4f2ed] rounded-full" />
        </div>
      </div>
    )
  },
  {
    title: "Canteen Order Management",
    type: "Web Apps",
    description: "A canteen order management system simplifying food ordering, queue tracking, and kitchen workflows.",
    tech: ["PHP", "MySQL", "HTML/CSS", "CRUD"],
    link: "#",
    github: "#",
    bg: "bg-[#fcfbf7]",
    visual: (
      <div className="absolute inset-[10%] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden border border-[#e8e6dc]">
        <div className="w-full h-4 bg-[#f4f2ed] flex items-center px-2 gap-1 border-b border-[#e8e6dc]">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
        </div>
        <div className="p-3 flex-1 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="text-[9px] font-black text-[#152d1b] tracking-tight">Canteen System</span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#eaf2e5] flex items-center justify-center text-[#3a6645]">
              <FaUtensils size={7} />
            </span>
          </div>
          <div className="flex items-center gap-2 bg-[#f8f7f1] p-1.5 rounded-xl border border-[#e8e6dc]">
            <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-sm">🍔</div>
            <div className="flex-1">
              <div className="text-[8px] font-black text-[#152d1b]">Cheese Burger</div>
              <div className="text-[7px] text-[#3a6645] font-bold">$4.99</div>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-1.5 py-0.5 rounded-lg border border-[#e8e6dc]">
              <span className="text-[7px] font-bold text-gray-400">-</span>
              <span className="text-[8px] font-black text-[#152d1b]">1</span>
              <span className="text-[7px] font-bold text-[#3a6645]">+</span>
            </div>
          </div>
          <div className="w-full py-1 bg-[#152d1b] text-white rounded-lg text-center text-[8px] font-bold">
            Place Order • $4.99
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Restaurant Management",
    type: "Web Apps",
    description: "An all-in-one restaurant management system for order tracking, table booking, and kitchen workflows.",
    tech: ["PHP", "MySQL", "HTML/CSS", "CRUD"],
    link: "#",
    github: "#",
    bg: "bg-[#ffebee]",
    visual: (
      <div className="absolute inset-[10%] bg-zinc-900 rounded-xl shadow-xl flex flex-col overflow-hidden border border-zinc-800">
        <div className="w-full h-4 bg-zinc-950 flex items-center px-2 gap-1 border-b border-zinc-800">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          <div className="w-12 h-1.5 bg-zinc-800 rounded-full" />
        </div>
        <div className="p-3 flex-1 flex flex-col justify-between text-white">
          <div className="flex justify-between items-center border-b border-zinc-800 pb-1">
            <span className="text-[8px] font-black tracking-wider text-red-400 uppercase">Kitchen Dashboard</span>
            <span className="text-[7px] px-1 bg-red-950 text-red-400 rounded border border-red-900">4 Active</span>
          </div>
          <div className="flex flex-col gap-1.5 my-1.5">
            <div className="flex justify-between items-center bg-zinc-850 p-1 rounded border-l-2 border-green-500">
              <span className="text-[7px] font-bold">Table 5 - Pizza</span>
              <span className="text-[6px] text-zinc-400 font-mono">Ready</span>
            </div>
            <div className="flex justify-between items-center bg-zinc-850 p-1 rounded border-l-2 border-amber-500">
              <span className="text-[7px] font-bold">Table 12 - Pasta</span>
              <span className="text-[6px] text-zinc-400 font-mono">5 mins</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-[7px] text-zinc-400 border-t border-zinc-800 pt-1">
            <span>Total Tables: 15</span>
            <span className="text-green-400 font-bold">Sales: $1,240</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Doctor Appointment",
    type: "Web Apps",
    description: "An online doctor appointment booking system that simplifies scheduling, consultations, and patient records.",
    tech: ["PHP", "MySQL", "HTML/CSS", "CRUD"],
    link: "#",
    github: "#",
    bg: "bg-[#e0f7fa]",
    visual: (
      <div className="absolute inset-[10%] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden border border-[#e8e6dc]">
        <div className="w-full h-4 bg-[#f4f2ed] flex items-center px-2 gap-1 border-b border-[#e8e6dc]">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <div className="w-12 h-1.5 bg-gray-200 rounded-full" />
        </div>
        <div className="p-3 flex-1 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">
                <FaUserMd size={10} />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-black text-cyan-950">Dr. Sarah</span>
                <span className="text-[6px] text-gray-400">Cardiologist</span>
              </div>
            </div>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-75" />
          </div>
          <div className="flex gap-1.5 my-1">
            <div className="flex-1 bg-cyan-50 border border-cyan-200 rounded p-1 text-center">
              <div className="text-[6px] text-gray-500">Mon</div>
              <div className="text-[7px] font-bold text-cyan-900">09:00 AM</div>
            </div>
            <div className="flex-1 bg-cyan-600 border border-cyan-600 rounded p-1 text-center text-white">
              <div className="text-[6px] text-cyan-200">Tue</div>
              <div className="text-[7px] font-bold">11:30 AM</div>
            </div>
            <div className="flex-1 bg-cyan-50 border border-cyan-200 rounded p-1 text-center">
              <div className="text-[6px] text-gray-500">Wed</div>
              <div className="text-[7px] font-bold text-cyan-900">03:00 PM</div>
            </div>
          </div>
          <div className="w-full py-1 bg-cyan-700 text-white rounded-lg text-center text-[8px] font-bold">
            Confirm Appointment
          </div>
        </div>
      </div>
    )
  }
];


const categories = [
  { name: "All Projects", icon: <FaThLarge /> },
  { name: "Websites", icon: <FaGlobe /> },
  { name: "Web Apps", icon: <FaCode /> },
  { name: "Mobile Apps", icon: <FaMobileAlt /> },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = allProjects.filter((project) => 
    activeCategory === "All Projects" || project.type === activeCategory
  );

  return (
    <section id="projects" className="pt-8 pb-0 bg-[#f8f7f1] relative z-10">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-[#3a6645]" />
            <h3 className="text-[#3a6645] font-bold tracking-[2px] uppercase text-[12px]">
              My Projects <span className="sr-only">- Gaurab Pandey Showcase</span>
            </h3>
          </div>
          <h2 className="text-[40px] md:text-[48px] font-black text-[#152d1b] leading-[1.1] tracking-tight mb-3">
            Featured Projects <span className="sr-only">by Flutter Developer Gaurab Pandey</span>
          </h2>
          <p className="text-[#525252] text-[15px] max-w-[500px] leading-[1.5]">
            Here are some of the projects I&apos;ve worked on.<br className="hidden md:block" />
            Each one is crafted with clean code and great user experience in mind.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-300 ${
                activeCategory === cat.name
                  ? "bg-[#152d1b] text-white shadow-[0_8px_20px_-8px_rgba(21,45,27,0.5)]"
                  : "bg-white text-[#525252] border border-[#e8e6dc] hover:border-[#a4c0a9] hover:text-[#152d1b]"
              }`}
            >
              <span className={activeCategory === cat.name ? "text-[#8cb893]" : "text-[#3a6645]"}>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Slider / Grid */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="snap-start shrink-0 w-[300px] sm:w-[340px] bg-white rounded-[28px] p-3 border border-[#e8e6dc] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 group flex flex-col"
            >
              {/* Image Placeholder */}
              <div className={`w-full h-[180px] rounded-[20px] mb-4 ${project.bg} relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                {project.visual}
              </div>

              {/* Content */}
              <div className="px-2 flex flex-col flex-1">
                <div className="inline-flex items-center px-3 py-1 bg-[#eaf2e5] text-[#3a6645] text-[11px] font-black tracking-wide rounded-full w-fit mb-3 uppercase">
                  {project.type}
                </div>
                
                <h3 className="text-[20px] font-black text-[#152d1b] mb-2 leading-tight tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-[#525252] text-[14px] font-medium leading-[1.5] mb-5 flex-1 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((projectTech) => (
                    <span
                      key={projectTech}
                      className="px-2.5 py-1 bg-[#f4f2ed] text-[#525252] text-[12px] font-bold rounded-md"
                    >
                      {projectTech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 mt-auto">
                  <a
                    href={project.link}
                    className="text-[#3a6645] text-[14px] font-bold flex items-center gap-1.5 hover:text-[#152d1b] transition-colors group/link"
                  >
                    View Project
                    <span className="sr-only"> {project.title}</span>
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                  <a
                    href={project.github}
                    aria-label={`GitHub repository for ${project.title}`}
                    className="w-9 h-9 rounded-[12px] bg-[#f4f2ed] flex items-center justify-center text-[#152d1b] hover:bg-[#152d1b] hover:text-white transition-colors"
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        {activeCategory !== 'All Projects' && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setActiveCategory('All Projects')}
              className="group flex items-center gap-3 px-8 py-3.5 rounded-2xl border-2 border-[#152d1b] text-[#152d1b] font-semibold hover:bg-[#152d1b] hover:text-white transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(21,45,27,0.3)] hover:shadow-[0_15px_30px_-10px_rgba(21,45,27,0.4)] hover:-translate-y-0.5"
            >
              Explore All Projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        )}
        
      </div>

      {/* Hide Scrollbar style globally for this element */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </section>
  );
}