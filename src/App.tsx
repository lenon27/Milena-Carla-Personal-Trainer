import { useAnimations } from "./hooks/useAnimations";
import Header from "./components/Header"; import Hero from "./components/Hero"; import Specialties from "./components/Specialties";
import Philosophy from "./components/Philosophy"; import OnlineConsulting from "./components/OnlineConsulting"; import Bonus from "./components/Bonus";
import Method from "./components/Method"; import Transformations from "./components/Transformations"; import Stories from "./components/Stories";
import Testimonials from "./components/Testimonials"; import About from "./components/About"; import Locations from "./components/Locations";
import Plans from "./components/Plans"; import Instagram from "./components/Instagram"; import FinalCTA from "./components/FinalCTA";
import WhatsAppButton from "./components/WhatsAppButton"; import Footer from "./components/Footer";
export default function App() {
  useAnimations();
  return (<><Header /><main>
    <Hero /><Specialties /><Philosophy /><OnlineConsulting /><Bonus /><Method /><Transformations /><Stories />
    <Testimonials /><About /><Locations /><Plans /><Instagram /><FinalCTA /></main><Footer /><WhatsAppButton /></>);
}
