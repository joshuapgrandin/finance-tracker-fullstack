import { div } from "framer-motion/client";
import Features from "../components/sections/Features";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import NavBar from "../components/layout/NavBar";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-neutral-50 text-gray-900">
      <NavBar />
      <main>
        <section className="hero">
          <Hero />
        </section>
        <section>
          <Features />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
