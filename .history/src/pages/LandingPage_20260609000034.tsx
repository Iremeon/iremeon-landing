import About from "../components/Homepage/About";
import ContactUs from "../components/Homepage/Contact";
import Footer from "../components/Layout/Footer";
import Hero from "../components/Homepage/Hero";
import Navbar from "../components/Layout/NavBar";
import OurWork from "../components/Homepage/Portfolio";
import Services from "../components/Homepage/Services";
import WhyIremeOn from "../components/Homepage/CTA";

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
};

export default LandingPage;
