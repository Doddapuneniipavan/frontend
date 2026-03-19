import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";

// ✅ ADD THESE
import Trust from "../components/Trust";
import Projects from "../components/Projects";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />

      {/* ✅ ADD THESE */}
      <Trust />
      <Projects />
    </>
  );
}

export default Home;