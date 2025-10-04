const TimeChip = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <span className="flex flex-col items-center gap-1">{label}</span>
    <span className="font-bold text-xl sm:text-2xl md:text-3xl tracking-wider">{value}</span>
  </div>
);

export default TimeChip;