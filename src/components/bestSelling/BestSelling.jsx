import ProductCard from "../basicComponents/ProductCard";
import { fetchBestSellers } from "../data/bestSellers";
import MainSection from "../basicComponents/MainSection";
import Button from "../basicComponents/Button";
import { useEffect, useState } from "react";

const BestSelling = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBestSellers()
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center">Loading best sellers...</p>;

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
