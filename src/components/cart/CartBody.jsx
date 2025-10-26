import { useState, useEffect } from "react";
import Button from "../basicComponents/Button";
import bestSellers from "../data/bestSellers";
import Section from "../basicComponents/Section";
import { useNavigate } from "react-router-dom";

const CartBody = () => {
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const initialItems = bestSellers.map(({ id, title, img, price }) => ({
      id,
      name: title,
      image: img,
      price,
      quantity: 1,
    }));
    setCartItems(initialItems);
  }, []);

  const updateQuantity = (id, change) => {
    setCartItems(prevItems => {
      return prevItems
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item
        )
        .filter(item => item.quantity > 0);
    });
  };
  const handleCouponClick = () => {
    alert("Coupon feature is not implemented yet.");
  }

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Section className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-sm md:text-md text-gray-600 mb-8">
        <a href="#" className="hover:text-red-800">Home</a> / <span className="font-semibold text-gray-900">Cart</span>
      </div>

      <div className="overflow-x-auto bg-white shadow-lg mt-4 text-sm md:text-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="py-4 px-6 font-semibold text-gray-800 text-left">
                Product
              </th>
              <th className="py-4 px-6 font-semibold text-gray-800 text-center">
                Price
              </th>
              <th className="py-4 px-6 font-semibold text-gray-800 text-center">
                Quantity
              </th>
              <th className="py-4 px-6 font-semibold text-gray-800 text-right">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {cartItems.map(item => (
              <tr
                key={item.id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="md:py-6 px-1 md:px-6 font-medium text-gray-700">
                  <img src={item.image} alt={item.name} className="w-16 h-16 hidden object-cover md:inline-block mr-4 rounded-md" />
                  {item.name}
                </td>
                <td className="md:py-6 px-1 md:px-6 text-center text-gray-600">
                  ${item.price}
                </td>
                <td className="md:py-6 md:px-6">
                  <div className="flex items-center justify-center">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 py-1 border border-gray-300 rounded-l hover:bg-gray-200"
                    >
                      −
                    </button>
                    <span className="px-1 md:px-4 font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 py-1 border border-gray-300 rounded-r hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="py-6 px-6 text-right text-gray-700">
                  ${item.price * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-row justify-between mt-8">
        <Button
          variant="outline"
          className="md:text-lg md:px-10 md:py-3 border-gray-800"
          onClick={() => navigate("/")}
        >
          Return To Shop
        </Button>
        <Button
          variant="outline"
          className="md:text-lg md:px-10 md:py-3 border-gray-800"
        >
          Update Cart
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-10 gap-6">
        <div className="flex items-start gap-3 w-full lg:w-1/3">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border h-10 md:h-12 md:text-lg border-gray-800 px-2 md:px-5 py-3 rounded-md w-60 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-800"
          />
          <Button
            variant="primary"
            className="whitespace-nowrap h-10 md:h-12 md:text-lg md:px-8 md:py-3"
            onClick={handleCouponClick}
          >
            Apply Coupon
          </Button>
        </div>
        <div className="w-full max-w-lg lg:ml-auto lg:w-2/3 border rounded-xl p-6 shadow-sm bg-white border-gray-800">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Cart Total</h3>
          <div className="flex justify-between py-2 text-gray-700">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between py-2 text-gray-700">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="border-t border-gray-300 my-3"></div>
          <div className="flex justify-between font-semibold text-gray-900 mb-5">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>
          <Button
            variant="primary"
            className="w-full md:text-lg md:px-8 md:py-3"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CartBody;
