const BenefitItem = ({ icon, title, subtitle }) => (
  <div className="flex flex-col items-center gap-2 text-center">
    <div className="grid place-items-center rounded-full bg-gray-300 w-16 h-16 sm:w-28 sm:h-28">
      <div className="grid place-items-center rounded-full bg-black text-white w-10 h-10 sm:w-16 sm:h-16">
        {icon}
      </div>
    </div>
    <div className="text-xs sm:text-sm font-bold text-black">{title}</div>
    <div className="text-[10px] sm:text-sm font-semibold text-gray-800">{subtitle}</div>
  </div>
);

export default BenefitItem;