const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-md px-6 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    primary: "focus:ring-red-600 disabled:opacity-50 bg-[#DB4444] text-white hover:bg-red-800",
    ghost: "bg-transparent text-gray-900 hover:bg-gray-100",
    outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus:ring-gray-300",
    dark: "bg-gray-900 text-white hover:bg-black focus:ring-gray-900",
  };
  return (
    <button className={` ${className} ${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;