import Menu from "@/components/Menu";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="main-page">
      <Navbar />
      <Hero />
      <main>
        <Menu />
        <About />
        <Contact />
      </main>
    </div>
  );
}
