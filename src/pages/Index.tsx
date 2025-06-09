
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Portfolio } from "../components/Portfolio";
import { Services } from "../components/Services";
import { Contact } from "../components/Contact";
import { Navigation } from "../components/Navigation";
import { Copyright } from "../components/Copyright";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Copyright />
    </div>
  );
};

export default Index;
