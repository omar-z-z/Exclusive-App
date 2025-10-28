import ProductCard from "../basicComponents/ProductCard";
import MainSection from "../basicComponents/MainSection";
import Button from "../basicComponents/Button";
import { useEffect, useState } from "react";
import { fetchProductCards } from "../data/productCards";

const BestSelling = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductCards()
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-[60vh] text-2xl font-semibold text-gray-600 animate-pulse">
        Loading our products for you...
      </div>
    );

  const handleViewAll = () => {
    // Implement the logic for viewing all products
    console.log("View All Products in best selling clicked");
  }
  return(
    <MainSection
      title="Best Selling Products"
      head="This Month"
      right={
        <Button variant="primary" className="px-8 py-2 font-small" onClick={handleViewAll}>
          View All
        </Button>
      }
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {products.map((it) => (
          <ProductCard key={it.title} item={it} showBadge={false} />
        ))}
      </div>
    </MainSection>
  );
};

export default BestSelling;
