import HeroSection from "../HeroSection/hero";
import About from "../About/about";
import WhyChoose from "../WhyChoose/whyChoose";
import ContactUs from "../ContactUs/contact";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <WhyChoose />
      <ContactUs />
    </div>
  );
};

export default Home;
