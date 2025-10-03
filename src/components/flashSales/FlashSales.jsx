import { useMemo, useState } from "react"
import { useCountdown } from "../basicComponents/utilities"
import ProductCard from "../basicComponents/ProductCard"
import TimeChip from "./TimeChip"
import flashItems  from "../data/flashItems"
import ArrowButton from "../basicComponents/ArrowButton"
import MainSection from "../basicComponents/MainSection"
import Button from "../basicComponents/Button"

const FlashSales = () => {
    const [startIndex, setStartIndex] = useState(0); 

    const cardsPerPage = 4.5;
    const maxIndex = flashItems.length - Math.floor(cardsPerPage);
    const cardWidthPercentage = (1 / cardsPerPage) * 100; 
    const slideRight = () => {
        setStartIndex(prev => Math.min(prev + 1, maxIndex));
    };

    const slideLeft = () => {
        setStartIndex(prev => Math.max(prev - 1, 0));
    };
    const target = useMemo(() => Date.now() + 1000 * 60 * 60 * (3 + 24 * 3) + 1000 * 60 * 23 + 1000 * 56, []);
    const { days, hours, minutes, seconds } = useCountdown(target);

    const handleViewAll = () => {
        // Implement the logic for viewing all products
        console.log("View All Products in flash sales clicked");
    }

    return (
        <MainSection head="Today's"
            title="Flash Sales"
            right={<div className="md:ml-auto flex gap-2">
                        <ArrowButton direction="left" onClick={slideLeft} disabled={startIndex === 0}/>
                        <ArrowButton direction="right" onClick={slideRight} disabled={startIndex >= maxIndex}/>
                    </div>} middle={<div className="flex items-end gap-4">
                        <TimeChip label="Days" value={days} />
                        <span className="text-3xl font-bold text-[#DB4444]">:</span>
                        <TimeChip label="Hours" value={hours} />
                        <span className="text-3xl font-bold text-[#DB4444]">:</span>
                        <TimeChip label="Minutes" value={minutes} />
                        <span className="text-3xl font-bold text-[#DB4444]">:</span>
                        <TimeChip label="Seconds" value={seconds} />
                    </div>}>
            
            <div className="mt-10">
                <div className="relative overflow-hidden"> 
                    <div 
                        className="flex transition-transform duration-300 ease-in-out" 
                        style={{ transform: `translateX(-${startIndex * cardWidthPercentage}%)` }}
                    >
                        {flashItems.map((item) => (
                            <div key={item.id} style={{ width: `${cardWidthPercentage}%` }} className="px-4 flex-shrink-0">
                                <ProductCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="mt-12 flex justify-center">
                <Button variant="primary" className="px-12 py-4" onClick={handleViewAll}>View All Products</Button>
            </div>
        </MainSection>
    );
};

export default FlashSales;