import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Portfolio />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
