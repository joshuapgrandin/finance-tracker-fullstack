import Features from "./components/sections/Features";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-gray-900">
      {/*NAV BAR */}
      <NavBar />

      {/*MAIN SECTION*/}
      <main>
        {/*HERO SECTION*/}
        <section className="hero">
          <Hero />
        </section>
        {/*FEATURES SECTION */}
        <section>
          <Features />
        </section>
      </main>

      {/*FOOTER*/}
      <Footer />
    </div>
  );
}

export default App;
