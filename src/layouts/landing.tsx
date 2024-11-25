import AdvantageDetails from "@pages/landing/advantage-details";
import Advantages from "@pages/landing/advantages";
import Alfraganus from "@pages/landing/alfraganus";
import Banner from "@pages/landing/banner";
import NewProjectsL from "@pages/landing/new-projects";
import News from "@pages/landing/news";
import Partners from "@pages/landing/partners";
import ResidentalComplex from "@pages/landing/residental-complex";
import Section1 from "@pages/landing/section-1";

function Landing() {
  return (
    <>
      <Banner />
      <News />
      <ResidentalComplex />
      <Advantages />
      <Alfraganus />
      <Section1 />
      <NewProjectsL />
      <AdvantageDetails />
      <Partners />
    </>
  );
}

export default Landing;
