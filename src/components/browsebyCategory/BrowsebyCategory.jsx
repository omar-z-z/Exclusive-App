import Badge from "../basicComponents/Badge";
import Section from "../basicComponents/Section";
import browseCategories from "../data/browseCategories";

const BrowseByCategory = () => (
  <Section title={(<div className="flex items-center gap-3"><Badge>Categories</Badge><span className="text-gray-900">Browse By Category</span></div>)}>
    <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
      {browseCategories.map((c) => (
        <button key={c.label} className="flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white p-6 hover:border-gray-900">
          <div className="text-3xl" aria-hidden>{c.icon}</div>
          <div className="text-sm">{c.label}</div>
        </button>
      ))}
    </div>
  </Section>
);

export default BrowseByCategory;