import Card from "../basicComponents/Card";
import Button from "../basicComponents/Button";

const FeatureTile = ({ title, description, button="Shop Now",className = "", children }) => {
    return (
        <Card className="relative overflow-hidden p-10 text-white h-full flex flex-col justify-end">
            {children} 
            <div className={`z-10 ${className}`}>
                <h2 className="text-3xl font-bold text-bo">{title}</h2> 
                <p className="mt-3 text-base text-gray-50 max-w-xs">{description}</p>
                <Button variant="outline" className="mt-6 border-white text-white hover:bg-gray-100 hover:text-black transition duration-300">{button}</Button>
            </div>
      </Card>
    )
};

export default FeatureTile;