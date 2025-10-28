import { useEffect, useState } from "react";
import { fetchProductCards } from "../data/productCards";
import Button from "../basicComponents/Button";
import ProductCard from "../basicComponents/ProductCard";
import MainSection from "../basicComponents/MainSection";
import ArrowButton from "../basicComponents/ArrowButton";

const ExploreProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchProductCards(20)
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
    setShowAll(!showAll);
  };
  return (
    <MainSection
      title="Explore Our Products"
      head="Our Products"
      right={
        <div className="md:ml-auto flex gap-2">
          <ArrowButton direction="left" />
          <ArrowButton direction="right" />
        </div>
      }
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {(showAll ? products : products.slice(0, 8)).map((it) => (
          <ProductCard key={it.title} item={it} withAdd showBadge={false} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button
          variant="primary"
          className="px-12 py-4"
          onClick={handleViewAll}
        >
          {showAll ? "Hide Products" : "View All Products"}
        </Button>
      </div>
    </MainSection>
  );
};

export default ExploreProducts;
