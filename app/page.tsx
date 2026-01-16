import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Sidebar from "./components/SideBar";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
