import { useMemo, useState, useEffect } from "react";
import { useCountdown } from "../basicComponents/utilities";
import { fetchProductCards } from "../data/productCards";
import ProductCard from "../basicComponents/ProductCard";
import TimeChip from "./TimeChip";
import ArrowButton from "../basicComponents/ArrowButton";
import MainSection from "../basicComponents/MainSection";
import Button from "../basicComponents/Button";

const FlashSales = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [startIndex, setStartIndex] = useState(0);

  const [cardsPerPage, setCardsPerPage] = useState(4.5);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) setCardsPerPage(1.5);
      else if (window.innerWidth < 1024) setCardsPerPage(2.5);
      else setCardsPerPage(4.5);
    };
    fetchProductCards(10)
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const cardWidthPercentage = (1 / cardsPerPage) * 100;

  const maxIndex = products.length - Math.floor(cardsPerPage);
  const slideRight = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const slideLeft = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };
  const target = useMemo(
    () =>
      Date.now() + 1000 * 60 * 60 * (3 + 24 * 3) + 1000 * 60 * 23 + 1000 * 56,
    []
  );
  // here we set the target to 3 days, 3 hours, 23 minutes, and 56 seconds from now
  // you can adjust this to any future date/time as needed
  // Example: new Date('2025-10-5T23:59:59').getTime()
  const { days, hours, minutes, seconds } = useCountdown(target);

  const handleViewAll = () => {
    // Implement the logic for viewing all products
    console.log("View All Products in flash sales clicked");
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-[60vh] text-2xl font-semibold text-gray-600 animate-pulse">
        Loading our products for you...
      </div>
    );

  return (
    <MainSection
      head="Today's"
      title="Flash Sales"
      right={
        <div className="md:ml-auto flex gap-2">
          <ArrowButton
            direction="left"
            onClick={slideLeft}
            disabled={startIndex === 0}
          />
          <ArrowButton
            direction="right"
            onClick={slideRight}
            disabled={startIndex >= maxIndex}
          />
        </div>
      }
      middle={
        <div className="flex items-end gap-4">
          <TimeChip label="Days" value={days} />
          <span className="text-3xl font-bold text-[#DB4444]">:</span>
          <TimeChip label="Hours" value={hours} />
          <span className="text-3xl font-bold text-[#DB4444]">:</span>
          <TimeChip label="Minutes" value={minutes} />
          <span className="text-3xl font-bold text-[#DB4444]">:</span>
          <TimeChip label="Seconds" value={seconds} />
        </div>
      }
    >
      <div className="mt-10">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * cardWidthPercentage}%)`,
            }}
          >
            {products.map((item) => (
              <div
                key={item.id}
                style={{ width: `${cardWidthPercentage}%` }}
                className="px-2 sm:px-4 flex-shrink-0"
              >
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        </div>
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

export default FlashSales;
