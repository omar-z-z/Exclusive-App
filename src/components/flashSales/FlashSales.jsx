import { useMemo } from "react"
import Section from "../basicComponents/Section"
import Badge from "../basicComponents/Badge"
import Button from "../basicComponents/Button"
import { useCountdown } from "../basicComponents/utilities"
import ProductCard from "../basicComponents/ProductCard"
import TimeChip from "./TimeChip"
import flashItems  from "../data/flashItems"

const FlashSales = () => {
  const target = useMemo(() => Date.now() + 1000 * 60 * 60 * 3 + 1000 * 60 * 23 + 1000 * 56, []);
  const { days, hours, minutes, seconds } = useCountdown(target);
  return (
    <Section
      title={(<div className="flex items-center gap-3"><Badge>Today’s</Badge><span className="text-gray-900">Flash Sales</span></div>)}
      right={(<div className="flex items-center gap-2 text-sm"><TimeChip label="Days" value={days} /><TimeChip label="Hours" value={hours} /><TimeChip label="Minutes" value={minutes} /><TimeChip label="Seconds" value={seconds} /></div>)}
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {flashItems.map((it) => (
          <ProductCard key={it.title} item={it} withAdd />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="primary">View All Products</Button>
      </div>
    </Section>
  );
};

export default FlashSales;