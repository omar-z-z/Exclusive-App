import { useMemo } from "react";
import Section from "../basicComponents/Section";
import Card from "../basicComponents/Card";
import Button from "../basicComponents/Button";
import CategorySidebar from "./CategorySidebar";
import CountdownPill from "../basicComponents/CountdownPill";
import { useCountdown } from "../basicComponents/utilities";

const Hero = () => {
  const target = useMemo(() => Date.now() + 1000 * 60 * 60 * 24 * 5 + 1000 * 60 * 23 + 1000 * 35, []);
  const { days, hours, minutes, seconds } = useCountdown(target);
  return (
    <Section className="pt-6">
      <div className="flex gap-6">
        <CategorySidebar />
        <Card className="relative grid flex-1 grid-cols-1 overflow-hidden bg-black p-6 text-white md:grid-cols-2">
          <div className="flex flex-col justify-center gap-4">
            <div className="text-sm text-gray-300">iPhone 14 Series</div>
            <h1 className="text-3xl font-semibold leading-tight">Up to 10% <br />off Voucher</h1>
            <div className="flex items-center gap-3">
              <CountdownPill label="Days" value={days} />
              <CountdownPill label="Hours" value={hours} />
              <CountdownPill label="Minutes" value={minutes} />
              <CountdownPill label="Seconds" value={seconds} />
            </div>
            <Button variant="dark" className="w-32">Shop Now</Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_60%)]" />
            <img
              alt="iPhone 14"
              className="ml-auto h-full max-h-[320px] w-auto object-contain"
              src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?q=80&w=1200&auto=format&fit=crop"
            />
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default Hero;