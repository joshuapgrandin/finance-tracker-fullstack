import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-gray-900">
      {/*NAV BAR */}
      <NavBar />

      {/*MAIN SECTION*/}
      <main>
        <section className="hero">
          <Hero />
        </section>
      </main>
    </div>
  );
}

export default App;
