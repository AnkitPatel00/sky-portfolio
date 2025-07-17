import Connect from "./Component/Connect";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import Projects from "./Component/Projects";
import TechStack from "./Component/TechStack";

function App() {
  return (
    <div className="bg-dark text-light-new">
      <Header />
      <Hero />
      <Projects />
      <TechStack />
      <Connect />
    </div>
  );
}

export default App;
