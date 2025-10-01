const Badge = ({ children, color = "bg-[#DB4444]" }) => (
  <span className={`px-3 py-1 text-xs text-white rounded ${color}`}>{children}</span>
);

export default Badge;