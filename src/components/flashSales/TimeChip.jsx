const TimeChip = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <span className="text-xs font-medium">{label}</span>
    <span className="font-bold text-3xl tracking-wider">{value}</span>
  </div>
);

export default TimeChip;