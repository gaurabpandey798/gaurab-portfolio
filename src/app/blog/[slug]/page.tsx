import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

const mockPosts: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    description: string;
    content: string;
  }
> = {
  "building-scalable-flutter-apps": {
    title: "Building Scalable Cross-Platform Apps with Flutter",
    category: "Flutter",
    date: "July 2026",
    description: "An architectural guide on separating state, business logic, and UI rendering in enterprise Flutter applications.",
    content: "Enterprise apps require structure. We deep dive into custom widgets, state management architectures like Bloc, clean code directories, and unit test strategies for cross-platform apps.",
  },
};

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = mockPosts[slug];

  if (!post) {
    return {
      title: "Article Not Found | Gaurab Pandey Portfolio",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = mockPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8f7f1] pt-32 pb-20 relative overflow-hidden">
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

        <div className="mx-auto max-w-[800px] px-6 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#3a6645] hover:text-[#152d1b] font-bold text-[14px] mb-8 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Articles
          </Link>

          <article className="bg-white border border-[#e8e6dc] p-8 md:p-12 rounded-[32px] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-[#eaf2e5] text-[#3a6645] text-[11px] font-black tracking-wide rounded-full uppercase">
                {post.category}
              </span>
              <span className="text-[12px] text-gray-400 font-bold">{post.date}</span>
            </div>

            <h1 className="text-[32px] md:text-[40px] font-black text-[#152d1b] leading-tight mb-6 tracking-tight">
              {post.title}
            </h1>

            <p className="text-[#525252] text-[16px] md:text-[18px] leading-[1.6] font-medium mb-8 pb-6 border-b border-[#f4f2ed]">
              {post.description}
            </p>

            <div className="prose text-[#525252] text-[16px] leading-[1.7] font-medium space-y-6">
              <p>{post.content}</p>
              <p className="p-4 bg-[#f8f7f1] border border-[#e8e6dc] rounded-xl text-center font-bold text-[#3a6645] mt-8">
                Full dynamic post loading and dynamic static rendering are ready to be integrated with MDX or dynamic API fetching!
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
