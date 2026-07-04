import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Blog & Technical Articles | Gaurab Pandey Portfolio",
  description: "Read technical articles, deep-dives, case studies, and tutorials on Flutter, Spring Boot, QA, and SEO by Gaurab Pandey.",
};

const placeholderPosts = [
  {
    title: "Building Scalable Cross-Platform Apps with Flutter",
    category: "Flutter",
    date: "July 2026",
    description: "An architectural guide on separating state, business logic, and UI rendering in enterprise Flutter applications.",
  },
  {
    title: "Securing Spring Boot REST APIs with JWT Authentication",
    category: "Backend",
    date: "June 2026",
    description: "Best practices for implementing secure, robust authentication and database schemas in modern backends.",
  },
  {
    title: "The Developer's Guide to Technical SEO & Web Performance",
    category: "SEO",
    date: "May 2026",
    description: "How to optimize Next.js rendering, Core Web Vitals, and JSON-LD schema for high search result visibility.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8f7f1] pt-32 pb-20 relative overflow-hidden">
        {/* Background Patterns to match the original layout */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(140, 184, 147, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(140, 184, 147, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 relative z-10">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#3a6645]" />
              <h1 className="text-[#3a6645] font-bold tracking-[2px] uppercase text-[12px]">
                Technical Writing <span className="sr-only">- Gaurab Pandey's Blog</span>
              </h1>
            </div>
            <h2 className="text-[40px] md:text-[48px] font-black text-[#152d1b] leading-[1.1] tracking-tight mb-4">
              Articles &amp; Case Studies
            </h2>
            <p className="text-[#525252] text-[15px] max-w-[500px] leading-[1.5]">
              Deep-dives into Flutter development, Spring Boot API design, Quality Assurance testing, and search engine optimization.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {placeholderPosts.map((post) => (
              <div
                key={post.title}
                className="bg-white border border-[#e8e6dc] p-8 rounded-[32px] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(21,45,27,0.08)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="px-3 py-1 bg-[#eaf2e5] text-[#3a6645] text-[11px] font-black tracking-wide rounded-full uppercase">
                      {post.category}
                    </span>
                    <span className="text-[12px] text-gray-400 font-bold">{post.date}</span>
                  </div>
                  <h3 className="text-[20px] font-black text-[#152d1b] mb-3 leading-tight tracking-tight group-hover:text-[#3a6645] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#525252] text-[14px] leading-[1.5] mb-6 font-medium">
                    {post.description}
                  </p>
                </div>
                <div className="text-[#3a6645] text-[14px] font-bold flex items-center gap-1.5 group-hover:text-[#152d1b] transition-colors pt-4 border-t border-[#f4f2ed]">
                  Read Article
                  <span className="group-hover:translate-x-1.5 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Alert */}
          <div className="bg-[#eaf2e5]/50 border border-[#c2d1b8] p-8 rounded-[24px] text-center max-w-[600px] mx-auto">
            <h3 className="text-[18px] font-black text-[#152d1b] mb-2">More Content Coming Soon!</h3>
            <p className="text-[#525252] text-[14px] leading-[1.6] mb-6">
              I am actively drafting guides on automated regression testing, MySQL optimization, and advanced Flutter animations. Subscribe or stay tuned!
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#152d1b] text-white font-bold rounded-xl hover:bg-[#25462e] transition-colors shadow-md"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
