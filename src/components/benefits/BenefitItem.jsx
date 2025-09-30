const BenefitItem = ({ icon, title, subtitle }) => (
  <div className="flex flex-col items-center gap-3 text-center">
    <div className="grid h-16 w-16 place-items-center rounded-full border border-gray-300">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-gray-900 text-white">{icon}</div>
    </div>
    <div className="text-base font-semibold">{title}</div>
    <div className="text-sm text-gray-600">{subtitle}</div>
  </div>
);

export default BenefitItem;