import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { Testimonials } from "./components/Testimonials";
import { Instructions } from "./components/Instructions";
import { Gallery } from "./components/Gallery";
import { Products } from "./components/Products";
import { Services } from "./components/Services";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="size-full">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Instructions />
      <Products />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}
