import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/NavBar";
import OurWork from "../components/OurWork";
import Services from "../components/Services";
import WhyIremeOn from "../components/WhyIremeOn";

const LandingPage = () => {
  return (
    <>
    {/* <Header /> */}
    <Navbar />
      <Hero />
      <main>
        <Services />
        <About />
        <WhyIremeOn />
        <OurWork />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}

export default LandingPage;

