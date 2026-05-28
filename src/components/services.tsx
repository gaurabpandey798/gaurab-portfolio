import {
  Code2,
  PenTool,
  Smartphone,
} from "lucide-react";

const services = [
  {
    title: "Web Designing",
    description:
      "Crafting modern responsive and user-friendly website designs.",
    icon: PenTool,
  },
  {
    title: "Web Development",
    description:
      "Building scalable high-performance web applications.",
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    description:
      "Developing smooth cross-platform mobile applications.",
    icon: Smartphone,
  },
];

export default function Services() {
  return (
    <section className="pt-8 pb-8 bg-[#f8f7f1] relative z-10">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2.5 h-2.5 rounded-full bg-[#3a6645]" />
          <h2 className="text-[#3a6645] font-bold tracking-[2px] uppercase text-[12px]">
            What I Do <span className="sr-only">- Gaurab Pandey's Expert Web &amp; App Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-[#e8e6dc] p-10 rounded-[32px] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(21,45,27,0.1)] transition-all duration-300 hover:-translate-y-2 group flex flex-col"
            >
              <div className="w-16 h-16 rounded-[20px] bg-[#eaf2e5] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-[#3a6645] w-7 h-7" />
              </div>
              <h3 className="text-[24px] font-black text-[#152d1b] mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-[#525252] text-[16px] leading-[1.6] font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}