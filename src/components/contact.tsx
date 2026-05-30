"use client";

import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiSend, FiDownload } from "react-icons/fi";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);


    const endpoint = "https://formspree.io/f/mdajzlle";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        // Reset status back to idle after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="pt-8 pb-0 bg-[#f8f7f1] relative z-10">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-start">

          {/* Left Column */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#3a6645]" />
              <h3 className="text-[#3a6645] font-bold tracking-[2px] uppercase text-[12px]">
                Get In Touch <span className="sr-only">- Gaurab Pandey Contact details</span>
              </h3>
            </div>

            <h2 className="text-[48px] md:text-[56px] font-black text-[#152d1b] leading-[1.1] tracking-tight mb-6">
              Let&apos;s Work <br />
              <span className="text-[#3a6645] relative">
                Together
                {/* Hand-drawn underline mock */}
                <svg className="absolute w-full h-[12px] bottom-[-4px] left-0 text-[#3a6645]" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M2,10 Q100,-2 198,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
              <span className="sr-only"> with Gaurab Pandey in Nepal</span>
            </h2>

            <p className="text-[#525252] text-[16px] leading-[1.6] mb-10 max-w-[400px]">
              Have a project in mind or just want to say hi? <br />
              Feel free to reach out. I&apos;d love to hear from you!
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {/* Email Card */}
              <div className="flex items-center gap-5 bg-white p-5 rounded-[24px] shadow-sm border border-[#e8e6dc]">
                <div className="w-[54px] h-[54px] rounded-[18px] bg-[#f4f9f5] text-[#3a6645] flex items-center justify-center shrink-0">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#152d1b] mb-1">Email</h4>
                  <p className="text-[#525252] text-[14px]">info.gaurabpandey@gmail.com</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-5 bg-white p-5 rounded-[24px] shadow-sm border border-[#e8e6dc]">
                <div className="w-[54px] h-[54px] rounded-[18px] bg-[#f4f9f5] text-[#3a6645] flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#152d1b] mb-1">Location</h4>
                  <p className="text-[#525252] text-[14px]">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[#152d1b] font-bold text-[15px] mb-4">Let&apos;s connect</p>
              <div className="flex items-center gap-3">
                <a href="https://github.com/gaurabpandey798" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="w-[48px] h-[48px] bg-white rounded-[16px] border border-[#e8e6dc] shadow-sm flex items-center justify-center text-[#152d1b] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/gaurabpandey-dev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="w-[48px] h-[48px] bg-white rounded-[16px] border border-[#e8e6dc] shadow-sm flex items-center justify-center text-[#152d1b] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <FaLinkedinIn size={18} />
                </a>
                <a href="https://www.instagram.com/gaurabpandey798/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="w-[48px] h-[48px] bg-white rounded-[16px] border border-[#e8e6dc] shadow-sm flex items-center justify-center text-[#152d1b] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <FaInstagram size={18} />
                </a>
                <a href="mailto:info.gaurabpandey@gmail.com" aria-label="Email Me" className="w-[48px] h-[48px] bg-white rounded-[16px] border border-[#e8e6dc] shadow-sm flex items-center justify-center text-[#3a6645] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <FaEnvelope size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-[#e8e6dc]">
            <h3 className="text-[24px] font-black text-[#152d1b] mb-2">Send Me a Message</h3>
            <p className="text-[#525252] text-[15px] mb-8">I&apos;ll get back to you as soon as possible.</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[14px] font-bold text-[#152d1b]">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 rounded-xl border border-[#e8e6dc] bg-transparent focus:outline-none focus:border-[#3a6645] focus:ring-1 focus:ring-[#3a6645] transition-all text-[15px]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[14px] font-bold text-[#152d1b]">Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3.5 rounded-xl border border-[#e8e6dc] bg-transparent focus:outline-none focus:border-[#3a6645] focus:ring-1 focus:ring-[#3a6645] transition-all text-[15px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-[14px] font-bold text-[#152d1b]">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Enter subject"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#e8e6dc] bg-transparent focus:outline-none focus:border-[#3a6645] focus:ring-1 focus:ring-[#3a6645] transition-all text-[15px]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[14px] font-bold text-[#152d1b]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Write your message..."
                  rows={5}
                  className="w-full px-4 py-3.5 rounded-xl border border-[#e8e6dc] bg-transparent focus:outline-none focus:border-[#3a6645] focus:ring-1 focus:ring-[#3a6645] transition-all text-[15px] resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="flex items-center justify-center gap-2 bg-[#152d1b] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#25462e] transition-colors w-max shadow-[0_10px_20px_-10px_rgba(21,45,27,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                {status === "success" ? null : <FiSend size={18} />}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-sm font-medium mt-2">
                  Oops! There was a problem submitting your message. Please try again.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#f4f9f5] rounded-[32px] p-8 md:p-10 border border-[#e8e6dc] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
            <div className="w-[80px] h-[80px] bg-[#eaf2e5] rounded-full flex items-center justify-center shrink-0 border border-white shadow-sm">
              <FiSend size={32} className="text-[#3a6645] -translate-y-1 translate-x-1" />
            </div>
            <div>
              <h3 className="text-[22px] font-black text-[#152d1b] mb-2">Let&apos;s build something amazing together!</h3>
              <p className="text-[#525252] text-[15px] max-w-[500px] leading-[1.6]">
                I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
            </div>
          </div>

          <a
            href="/Gaurab-Pandey-CV.pdf"
            download="Gaurab_Pandey_CV.pdf"
            className="shrink-0 flex items-center gap-2 px-8 py-3.5 bg-transparent border border-[#3a6645] text-[#3a6645] font-bold rounded-2xl hover:bg-[#3a6645] hover:text-white transition-all duration-300"
          >
            Download CV
            <FiDownload size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}