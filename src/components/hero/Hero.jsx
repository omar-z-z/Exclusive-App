import Section from "../basicComponents/Section";
import CategorySidebar from "./CategorySidebar";
import ADCard from "./ADCard";
import slides from "../data/adSlides";

const Hero = () => {
  return (
    <Section className="pt-6">
      <div className="flex gap-6">
        <CategorySidebar />
        <ADCard slides={slides} interval={3000} />
      </div>
    </Section>
  );
};

export default Hero;
