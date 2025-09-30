import BenefitItem from "./BenefitItem";
import Section from "../basicComponents/Section";
import { TruckIcon, HeadsetIcon, ShieldIcon } from "../basicComponents/icons";

const Benefits = () => (
  <Section className="pt-4">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <BenefitItem title="FREE AND FAST DELIVERY" subtitle="Free delivery for all orders over $140" icon={<TruckIcon />} />
      <BenefitItem title="24/7 CUSTOMER SERVICE" subtitle="Friendly 24/7 customer support" icon={<HeadsetIcon />} />
      <BenefitItem title="MONEY BACK GUARANTEE" subtitle="We return money within 30 days" icon={<ShieldIcon />} />
    </div>
  </Section>
);

export default Benefits;