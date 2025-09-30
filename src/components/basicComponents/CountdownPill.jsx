const CountdownPill = ({ label, value }) => (
  <div className="flex min-w-[64px] flex-col items-center justify-center rounded-md bg-white p-2 text-center shadow">
    <div className="text-xl font-semibold leading-none">{String(value).padStart(2, "0")}</div>
    <div className="text-[10px] text-gray-500">{label}</div>
  </div>
);

export default CountdownPill;