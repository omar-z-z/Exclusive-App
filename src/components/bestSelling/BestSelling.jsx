import ProductCard from "../basicComponents/ProductCard";
import bestSellers from "../data/bestSellers";
import MainSection from "../basicComponents/MainSection";

const BestSelling = () => (
  <MainSection
    title="Best Selling Products"
    head="This Month"
    right={
      <button className="bg-[#DB4444] text-white px-8 py-2 rounded hover:bg-red-800 transition-colors font-small object-right cursor-pointer">
        View All
      </button>
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
