
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowITWorks from "./components/HowITWorks";
import MostPopularCities from "./components/MostPopularCities";
import WhyStayWithUs from "./components/WhyStayWithUs";
import FAQs from "./components/FAQs";
import AnyQuestions from "./components/AnyQuestions";
import WhatsIncluded from "./components/WhatsIncluded";
import Testimonials from "./components/Testimonials";
import PopularPicks from "./components/PopularPicks";
import MultipleItems from "./components/MultipleItems";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      
      <HeroSection></HeroSection>
      <HowITWorks></HowITWorks>
      <div className="bg-base-200 pt-10 pb-20">
        <MostPopularCities></MostPopularCities>
      </div>
      <WhyStayWithUs></WhyStayWithUs>
      <div className="bg-base-200 pt-10 pb-20">
        <PopularPicks></PopularPicks>
      </div>

      <WhatsIncluded></WhatsIncluded>
      <Testimonials></Testimonials>
      <FAQs></FAQs>
      <AnyQuestions></AnyQuestions>
    
    </>

  );
}
