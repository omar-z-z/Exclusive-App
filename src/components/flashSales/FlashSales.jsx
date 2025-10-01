import { useMemo, useState } from "react"
import { useCountdown } from "../basicComponents/utilities"
import ProductCard from "../basicComponents/ProductCard"
import TimeChip from "./TimeChip"
import flashItems  from "../data/flashItems"
import SectionCategory from "../basicComponents/SectionCategory"
import ArrowButton from "../basicComponents/ArrowButton"
import Section from "../basicComponents/Section"

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

    return (
        <Section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans">
            <div className="border-b pb-6">
                <SectionCategory>Today's</SectionCategory>
                <div className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-20 mt-6">
                    <h2 className="text-4xl font-semibold tracking-wide">Flash Sales</h2>
                    <div className="flex items-end gap-4">
                        <TimeChip label="Days" value={days} />
                        <span className="text-3xl font-bold text-[#DB4444]">:</span>
                        <TimeChip label="Hours" value={hours} />
                        <span className="text-3xl font-bold text-[#DB4444]">:</span>
                        <TimeChip label="Minutes" value={minutes} />
                        <span className="text-3xl font-bold text-[#DB4444]">:</span>
                        <TimeChip label="Seconds" value={seconds} />
                    </div>
                     <div className="md:ml-auto flex gap-2">
                        <ArrowButton direction="left" onClick={slideLeft} disabled={startIndex === 0}/>
                        <ArrowButton direction="right" onClick={slideRight} disabled={startIndex >= maxIndex}/>
                    </div>
                </div>
            </div>

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
                <button className="bg-[#DB4444] text-white px-12 py-4 rounded hover:bg-red-600 transition-colors font-medium">
                    View All Products
                </button>
            </div>
        </Section>
    );
};

export default FlashSales;