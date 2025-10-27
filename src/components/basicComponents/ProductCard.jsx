import Badge from "./Badge";
import PriceBlock from "./PriceBlock";
import { HeartIcon, QuickViewIcon, ColorIcon } from "./icons";
import StarRating from "./StarRating";
import IconBtn from "./IconBtn";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ item, showBadge = true }) => {
    const [selectedColor, setSelectedColor] = useState(item.colors ? item.colors[0] : null);
    const handleColorClick = (color) => {
        setSelectedColor(color);
    };
    const { addToCart } = useCart();

    const handleWishButton = () => {
        console.log("Wishlist clicked for", item.title);
        // Implement wishlist functionality here
    }
    const handleQuickVButton = () => {
        console.log("QuickView clicked for", item.title);
        // Implement QuickView functionality here
    }
    const handleAddToCart = () => {
        console.log("Add to Cart clicked for", item.title);
        addToCart(item);
        // Implement Add to Cart functionality here
    }
  return (
    <div className="group">
      <div className="relative bg-gray-100 rounded overflow-hidden">
        {showBadge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge>-{item.discount}%</Badge>
          </div>
        )}
        {item.badge && !showBadge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge color="bg-green-400">{item.badge}</Badge>
          </div>
        )}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
          <IconBtn label="Wishlist" icon={HeartIcon} onClick={handleWishButton} />
          <IconBtn label="QuickView" icon={QuickViewIcon} onClick={handleQuickVButton}/>
        </div>
        <div className="flex items-center justify-center h-30 w-full md:h-60">
          <img
            src={item.img}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>
        <button onClick={handleAddToCart} className="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-center mb-[-1px] translate-y-full group-hover:translate-y-0 transition-transform duration-300 cursor-pointer">
          Add To Cart
        </button>
      </div>
      <div className="mt-4">
        <h3 className="font-medium text-black truncate">{item.title}</h3>
        <PriceBlock price={item.price} strike={item.strike} />
        <div className="mt-2">
          <StarRating rating={item.rating} count={item.reviews} />
        </div>
        {item.colors && (
          <div className="flex items-center gap-2 mt-2">
            {item.colors.map((color, index) => (
              <ColorIcon key={index} color={color} isActive={color === selectedColor} onClick={() => handleColorClick(color)} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
