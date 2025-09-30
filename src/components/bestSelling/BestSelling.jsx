import Badge from "../basicComponents/Badge";
import Section from "../basicComponents/Section";
import Button from "../basicComponents/Button";
import ProductCard from "../basicComponents/ProductCard";
import bestSellers from "../data/bestSellers";

const BestSelling = () => (
  <Section
    title={(<div className="flex items-center gap-3"><Badge>This Month</Badge><span className="text-gray-900">Best Selling Products</span></div>)}
    right={<Button variant="primary">View All</Button>}
  >
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {bestSellers.map((it) => (
        <ProductCard key={it.title} item={it} />
      ))}
    </div>
  </Section>
);

export default BestSelling