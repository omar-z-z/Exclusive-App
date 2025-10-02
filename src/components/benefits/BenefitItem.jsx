const BenefitItem = ({ icon, title, subtitle }) => (
  <div className="flex flex-col items-center gap-3 text-center">
    <div className="grid h-28 w-28 place-items-center rounded-full bg-gray-300">
      <div className="grid h-18 w-18 place-items-center rounded-full bg-black text-white">{icon}</div>
    </div>
    <div className="text-xl font-bold text-black">{title}</div>
    <div className="text-base font-semibold text-gray-800">{subtitle}</div>
  </div>
);

export default BenefitItem;