import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import ImageSwiper from "./components/Hero";
import Partners from "./components/Partners";
import Services from "./components/Services";
import OurStatistics from "./components/Statistics";

export default function Home() {
  return (
    <div className="">
       <ImageSwiper/>
       <Services/>
       <AboutUs/>
       <OurStatistics/>
       <Gallery/>
       <Partners/>
    </div>
  );
}
