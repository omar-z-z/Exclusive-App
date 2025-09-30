import { useMemo } from "react";
import Section from "../basicComponents/Section";
import Card from "../basicComponents/Card";
import Button from "../basicComponents/Button";
import CategorySidebar from "./CategorySidebar";

const Hero = () => {
  return (
    <Section className="pt-6">
      <div className="flex gap-6">
        <CategorySidebar />
        <Card className="relative flex-1 overflow-hidden bg-black p-8 text-white grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-4">
            <div className="text-sm text-gray-300">iPhone 14 Series</div>
            <h1 className="text-3xl font-semibold leading-tight">Up to 10% <br />off Voucher</h1>
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