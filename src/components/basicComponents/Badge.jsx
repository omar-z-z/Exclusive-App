const Badge = ({ children, color = "bg-red-600" }) => (
  <span className={`rounded px-2 py-0.5 text-xs font-medium text-white ${color}`}>{children}</span>
);

export default Badge;