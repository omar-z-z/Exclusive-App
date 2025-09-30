import Badge from "../basicComponents/Badge";
import Section from "../basicComponents/Section";
import Button from "../basicComponents/Button";
import ProductCard from "../basicComponents/ProductCard";
import exploreProducts from "../data/exploreProducts";

const ExploreProducts = () => (
  <Section title={(<div className="flex items-center gap-3"><Badge>Our Products</Badge><span className="text-gray-900">Explore Our Products</span></div>)}>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {exploreProducts.map((it) => (
        <ProductCard key={it.title} item={it} withAdd />
      ))}
    </div>
    <div className="mt-8 flex justify-center">
      <Button variant="primary">View All Products</Button>
    </div>
  </Section>
);

export default ExploreProducts;