export async function fetchProductCards(limit = 4) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    if (!response.ok) throw new Error("Failed to fetch product cards!");

    const data = await response.json();
    data.sort(() => Math.random() - 0.5);

    return data.map(item => ({
      id: item.id,
      title: item.title,
      img: item.image,
      price: item.price,
      strike: Math.round(item.price * 1.2),
      discount: 20,
      rating: item.rating?.rate || 4.5,
      reviews: item.rating?.count || 0,
    }));
  } catch (error) {
    console.error("Error fetching product data:", error);
    return [];
  }
}

