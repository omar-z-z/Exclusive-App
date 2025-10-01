import Section from "./Section";
import SectionCategory from "./SectionCategory";

const MainSection = ({ children, title, head, middle, right, className = "" }) => (
  <Section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans ${className}`}>
    <div className="border-b border-gray-300 pb-6 mb-6">
      <SectionCategory>{head}</SectionCategory>
      <div className="flex justify-between items-end w-full flex-col md:flex-row md:items-end gap-8 md:gap-20 mt-6">
        <h2 className="text-4xl font-semibold tracking-wide">
          {title}
        </h2>
        {middle}
        {right}
      </div>
    </div>
    {children}
  </Section>
);

export default MainSection;
