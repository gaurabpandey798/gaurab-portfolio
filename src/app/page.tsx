import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import Projects from "@/components/projects";
import Journey from "@/components/journey";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}