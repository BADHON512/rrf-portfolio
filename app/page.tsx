import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Skill from "@/components/Skill";
import Testemonials from "@/components/Testemonials";


export default function Home() {
  return (
<main>
<Hero/>
<About/>
<Services/>
 <Portfolio/>
  <Skill/>
  <Testemonials/>
  <Blog/>
  <Contact/>
  <Footer/>
</main>
  );
}
