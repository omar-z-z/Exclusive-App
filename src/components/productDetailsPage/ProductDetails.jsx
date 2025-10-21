import { useState, useMemo } from "react";
import bestSellers from "../data/bestSellers";
import ProductCard from "../basicComponents/ProductCard";
import SectionCategory from "../basicComponents/SectionCategory";
import Section from "../basicComponents/Section";
import StarRating from "../basicComponents/StarRating";
import { HeartIcon, TruckIcon, ReturnIcon } from "../basicComponents/icons";


const productData = {
  id: 1,
  name: "Havic HV G-92 Gamepad",
  price: 192.0,
  oldPrice: 300.0, 
  rating: 4.5,
  reviewCount: 150,
  description:
    "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  colors: [
    { id: 1, name: "Red", hex: "#ff0000", available: true, isOutline: false },
    { id: 2, name: "Black", hex: "#ffffff", available: true, isOutline: true }, // White with black border
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  images: [
    { id: 1, url: "https://images.unsplash.com/photo-1617807666231-331677e1c41f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFBsYXlTdGF0aW9uJTIwNSUyMENvbnRyb2xsZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1666296420099-3300fa374196?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGxheVN0YXRpb24lMjA1JTIwQ29udHJvbGxlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1666296417087-a4fcf658ccdf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGxheVN0YXRpb24lMjA1JTIwQ29udHJvbGxlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    },
    { id: 4, url: "https://images.unsplash.com/photo-1676567463903-d9323a6cefb4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFBsYXlTdGF0aW9uJTIwNSUyMENvbnRyb2xsZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" },
  ],
};


const ProductImageGallery = ({ product, mainImage, setMainImage }) => (
  <div className="lg:col-span-1 flex flex-col-reverse lg:flex-row gap-6">
    <div className="flex lg:flex-col justify-start gap-4 overflow-x-auto lg:overflow-x-visible">
      {product.images.map((image) => (
        <div
          key={image.id}
          className={`p-1 bg-gray-100 rounded-md cursor-pointer transition-shadow duration-200 
                        ${
                          mainImage.id === image.id
                            ? "shadow-md border border-red-500"
                            : "hover:shadow-lg"
                        }`}
          onClick={() => setMainImage(image)}
        >
          <img
            src={image.url}
            alt={`Thumbnail ${image.id}`}
            className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain rounded-md"
          />
        </div>
      ))}
    </div>

    <div className="flex-1 bg-gray-100 p-8 flex justify-center items-center rounded-lg shadow-inner min-h-[300px] lg:min-h-[500px]">
      <img
        src={mainImage.url}
        alt={product.name}
        className="max-w-full max-h-[500px] object-contain"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/400x400/ffffff/000000?text=Product+Image";
        }}
      />
    </div>
  </div>
);

const ProductDetailsInfo = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="lg:col-span-1 space-y-4 pt-6 lg:pt-0">
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
        {product.name}
      </h1>

      <div className="flex items-center space-x-4">
        <StarRating rating={product.rating} count={product.reviewCount} />
        <span className="text-green-500 border-l pl-4 border-gray-300 text-sm">
          In Stock
        </span>
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
              className={`w-5 h-5 rounded-full cursor-pointer transition-all duration-150 flex items-center justify-center 
                                ${
                                  color.isOutline
                                    ? "border border-gray-700"
                                    : ""
                                }`}
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
                                    ? "bg-red-600 text-white"
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
            className="w-12 h-12 text-2xl font-medium hover:bg-red-600 hover:text-white transition-colors duration-150"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <span className="w-12 h-12 flex items-center justify-center text-lg font-medium border-x border-gray-300">
            {quantity}
          </span>
          <button
            className="w-12 h-12 text-2xl font-medium hover:bg-red-600 hover:text-white transition-colors duration-150"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>

        <button
          className="flex-1 py-3 px-6 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 font-medium shadow-md"
          onClick={() =>
            alert(
              `Buying ${quantity}x ${product.name} (Size: ${selectedSize}, Color: ${selectedColor.name})`
            )
          }
        >
          Buy Now
        </button>

        <div className="w-12 h-12 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors duration-200">
          <HeartIcon className="w-6 h-6" />
        </div>
      </div>

      <div className="border border-gray-300 rounded-md mt-6">
        <div className="flex items-start p-4 space-x-4 border-b border-gray-300">
          <TruckIcon className="w-6 h-6 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-800 text-lg">
              Free Delivery
            </h4>
            <p className="text-sm text-gray-600">
              Enter your postal code for Delivery Availability
            </p>
          </div>
        </div>
        <div className="flex items-start p-4 space-x-4">
          <ReturnIcon className="w-6 h-6 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-800 text-lg">
              Return Delivery
            </h4>
            <p className="text-sm text-gray-600">
              Free 30 Days Delivery Returns.{" "}
              <a href="#" className="underline font-medium">
                Details
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(productData.images[0]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans px-4 sm:px-6 lg:px-10 py-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-sm md:text-md text-gray-600">
          <a href="#" className="hover:text-red-800">
            Account
          </a>{" "}
          /
          <a href="#" className="hover:text-red-800">
            Gaming
          </a>{" "}
          /
          <span className="font-semibold text-gray-900">
            Havic HV G-92 Gamepad
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <ProductImageGallery
            product={productData}
            mainImage={mainImage}
            setMainImage={setMainImage}
          />
          <ProductDetailsInfo product={productData} />
        </div>

        <Section
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-sans`}
        >
          <div className="border-b border-gray-300 pb-4 sm:pb-6 mb-6">
            <SectionCategory>Related Items</SectionCategory>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {bestSellers.map((it) => (
              <ProductCard key={it.title} item={it} showBadge={true} />
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};

export default ProductDetails;
