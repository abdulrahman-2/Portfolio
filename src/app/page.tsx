import About from "@/sections/About";
import Contact from "@/sections/Contact";
import ContactPanner from "@/sections/ContactPanner";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Services from "@/sections/Services";
import Tape from "@/sections/Tape";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <Testimonials />
      <About />
      <Services />
      <Contact />
      <ContactPanner />
      <Footer />
    </div>
  );
}
