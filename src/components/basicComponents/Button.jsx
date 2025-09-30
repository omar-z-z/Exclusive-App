const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    primary: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600 disabled:opacity-50",
    ghost: "bg-transparent text-gray-900 hover:bg-gray-100",
    outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus:ring-gray-300",
    dark: "bg-gray-900 text-white hover:bg-black focus:ring-gray-900",
  };
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;