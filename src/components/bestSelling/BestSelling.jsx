import ProductCard from "../basicComponents/ProductCard";
import bestSellers from "../data/bestSellers";
import MainSection from "../basicComponents/MainSection";
import Button from "../basicComponents/Button";

const BestSelling = () => (
  <MainSection
    title="Best Selling Products"
    head="This Month"
    right={
      <Button variant="primary" className="px-8 py-2 font-small">
        View All
      </Button>
    }
  >
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {bestSellers.map((it) => (
        <ProductCard key={it.title} item={it} showBadge={false} />
      ))}
    </div>
  </MainSection>
);

export default BestSelling;
