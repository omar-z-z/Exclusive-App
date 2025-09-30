const TimeChip = ({ label, value }) => (
  <div className="rounded-md bg-gray-100 px-3 py-2 text-center">
    <div className="text-base font-semibold leading-none">{String(value).padStart(2, "0")}</div>
    <div className="text-[10px] text-gray-500">{label}</div>
  </div>
);

export default TimeChip;