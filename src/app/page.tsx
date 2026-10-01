import About from "./component/Home/About";
import FAQ from "./component/Home/FAQ";
import FinalCTA from "./component/Home/FinalCTA";
import Hero from "./component/Home/hero";
import Problems from "./component/Home/Problems";
import Process from "./component/Home/Process";
import Projects from "./component/Home/Projects";
import Services from "./component/Home/Services";
import Skills from "./component/Home/Skills";
import Testimonials from "./component/Home/Testimonials";

export default function Home() {
  return (
    <div >
      <Hero />
      <Services/>
      <About/>
      <Skills/>
      <Projects/>
      <Problems/>
      <Process/>
      <Testimonials/>
      <FAQ/>
      <FinalCTA/>
    </div>
  );
}
