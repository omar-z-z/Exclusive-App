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

export default ProductImageGallery;