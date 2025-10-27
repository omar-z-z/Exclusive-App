import { useState, useMemo } from "react";
import ProductCard from "../basicComponents/ProductCard";
import SectionCategory from "../basicComponents/SectionCategory";
import Section from "../basicComponents/Section";
import StarRating from "../basicComponents/StarRating";
import { HeartIcon, TruckIcon, ReturnIcon } from "../basicComponents/icons";
import ProductImageGallery from "./ProductImageGallery";
import ProductDetailsInfo from "./ProductDetailsInfo";
import flashItems from "../data/flashItems";


const productData = {
  id: 1,
  name: "Havic HV G-92 Gamepad",
  price: 192.0,
  oldPrice: 300.0, 
  rating: 4.5,
  reviewCount: 150,
  inStock: true,
  freeDelivery: true,
  canReturn: true,
  description:
    "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  colors: [
    { id: 1, name: "Red", hex: "#ff0000" },
    { id: 2, name: "Black", hex: "#000000" },
    { id: 3, name: "Blue", hex: "#0000ff" },
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
            {productData.name}
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
            {flashItems.map((it) => (
              <ProductCard key={it.title} item={it} showBadge={true} />
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};

export default ProductDetails;
