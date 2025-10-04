import Section from "./Section";
import SectionCategory from "./SectionCategory";

const MainSection = ({ children, title, head, middle, right, className = "" }) => (
  <Section
    className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-sans ${className}`}
  >
    <div className="border-b border-gray-300 pb-4 sm:pb-6 mb-6">
      <SectionCategory>{head}</SectionCategory>

      <div
        className="
          flex flex-col md:flex-row 
          justify-between md:items-end 
          gap-1 md:gap-10 mt-4 sm:mt-6 
          text-center md:text-left
        "
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
          {title}
        </h2>

        <div className="hidden justify-center md:block">{middle}</div>

        <div className="flex justify-end md:justify-end">{right}</div>
      </div>
    </div>
    {children}
  </Section>
);

export default MainSection;
