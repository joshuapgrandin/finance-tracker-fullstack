import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

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
