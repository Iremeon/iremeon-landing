import About from "../components/Homepage/About";
import ContactUs from "../components/Homepage/ContactUs";
import Footer from "../components/Layout/Footer";
import Hero from "../components/Homepage/Hero";
import Navbar from "../components/Layout/NavBar";
import OurWork from "../components/Homepage/OurWork";
import Services from "../components/Homepage/Services";
import WhyIremeOn from "../components/Homepage/WhyIremeOn";

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
