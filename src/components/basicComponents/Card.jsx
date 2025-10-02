const Card = ({ children, className = "" }) => (
    <div className={`rounded-sm border border-gray-200 bg-black shadow-sm text-white ${className}`}>{children}</div>
);

export default Card;