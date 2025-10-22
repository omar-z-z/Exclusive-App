import { useState } from "react";
import StarRating from "../basicComponents/StarRating";
import { HeartIcon, TruckIcon, ReturnIcon } from "../basicComponents/icons";

const ProductDetailsInfo = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const handleQuantityChange = (diff) => {
    setQuantity((prev) => Math.max(1, prev + diff));
  };

  const handleLike = () => {
    setIsLiked(prev => !prev);
  }

  return (
    <div className="lg:col-span-1 space-y-4 pt-6 lg:pt-0">
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
        {product.name}
      </h1>

      <div className="flex items-center space-x-4">
        <StarRating rating={product.rating} count={product.reviewCount} />
        {product.inStock ? (
          <span className="text-green-600 border-l pl-4 border-gray-300 text-sm">
            In Stock
          </span>
        ) : (
          <span className="text-red-600 border-l pl-4 border-gray-300 text-sm">
            Out of Stock
          </span>
        )}
      </div>

      <div className="space-x-4">
        <span className="text-3xl font-semibold text-gray-800">
          ${product.price.toFixed(2)}
        </span>
        {product.oldPrice && (
          <span className="text-xl text-gray-400 line-through">
            ${product.oldPrice.toFixed(2)}
          </span>
        )}
      </div>

      <p className="text-gray-600 border-b border-gray-300 pb-6 text-sm">
        {product.description}
      </p>

      <div className="flex items-center space-x-4 border-b border-gray-300 pb-6">
        <span className="text-lg font-medium text-gray-800">Colours:</span>
        <div className="flex space-x-3">
          {product.colors.map((color) => (
            <div
              key={color.id}
              className={"w-5 h-5 rounded-full cursor-pointer transition-all duration-150 flex items-center justify-center"}
              style={{ backgroundColor: color.hex }}
              onClick={() => setSelectedColor(color)}
            >
              {selectedColor.id === color.id && (
                <svg
                  className="w-3 h-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21.2 6.8l-1.4-1.4L9 16.2z" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <span className="text-lg font-medium text-gray-800">Size:</span>
        <div className="flex space-x-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`w-10 h-10 border border-gray-300 rounded-md font-medium text-sm transition-colors duration-150 
                                ${
                                  selectedSize === size
                                    ? "bg-[#DB4444] text-white"
                                    : "hover:bg-gray-100 text-gray-800"
                                }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-4 pt-6">
        <div className="flex border border-gray-300 rounded-md overflow-hidden">
          <button
            className="w-12 h-12 text-2xl font-medium hover:bg-[#DB4444] hover:text-white transition-colors duration-150"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <span className="w-12 h-12 flex items-center justify-center text-lg font-medium border-x border-gray-300">
            {quantity}
          </span>
          <button
            className="w-12 h-12 text-2xl font-medium hover:bg-[#DB4444] hover:text-white transition-colors duration-150"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>

        <button
          className="flex-1 py-3 px-6 bg-[#DB4444] text-white rounded-md hover:bg-red-800 transition-colors duration-200 font-medium shadow-md"
          onClick={() =>
            alert(
              `Buying ${quantity}x ${product.name} (Size: ${selectedSize}, Color: ${selectedColor.name})`
            )
          }
        >
          Buy Now
        </button>

        <div className="w-12 h-12 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors duration-200" onClick={handleLike}>
          {isLiked ? <HeartIcon className="w-6 h-6" fill="#DB4444"/> : <HeartIcon className="w-6 h-6" />}
        </div>
      </div>

      <div className="border border-gray-300 rounded-md mt-6">
        {product.freeDelivery && (<div className="flex items-start p-4 space-x-4 border-b border-gray-300">
          <TruckIcon className="w-6 h-6 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-800 text-lg">
              Free Delivery
            </h4>
            <p className="text-sm text-gray-600">
              Enter your postal code for Delivery Availability
            </p>
          </div>
        </div>)}
        {product.canReturn && (<div className="flex items-start p-4 space-x-4">
          <ReturnIcon className="w-6 h-6 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-800 text-lg">
              Return Delivery
            </h4>
            <p className="text-sm text-gray-600">
              Free 30 Days Delivery Returns
            </p>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default ProductDetailsInfo;
