import Button from "../basicComponents/Button";
import ProductCard from "../basicComponents/ProductCard";
import exploreProducts from "../data/exploreProducts";
import MainSection from "../basicComponents/MainSection";
import ArrowButton from "../basicComponents/ArrowButton";

const ExploreProducts = () => {
  const handleViewAll = () => {
    // Implement the logic for viewing all products
    console.log("View All Products in explore products clicked");
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
        {exploreProducts.map((it) => (
          <ProductCard key={it.title} item={it} withAdd showBadge={false} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button
          variant="primary"
          className="px-12 py-4"
          onClick={handleViewAll}
        >
          View All Products
        </Button>
      </div>
    </MainSection>
  );
};

export default ExploreProducts;
