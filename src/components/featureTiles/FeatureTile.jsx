import Card from "../basicComponents/Card";
import Button from "../basicComponents/Button";

const FeatureTile = ({ title, description, button="Shop Now",className = "", children }) => {
    return (
        <Card className="relative overflow-hidden p-6 text-white">
            {children}
            <div className={`${className}`}>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-gray-300">{description}</p>
                <Button variant="dark" className="mt-4">{button}</Button>
            </div>
      </Card>
    )
};

export default FeatureTile;