const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-[1200px] px-4 ${className}`}>{children}</div>
);

export default Container;