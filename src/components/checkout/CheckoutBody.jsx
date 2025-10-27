import { useState, useMemo } from "react";
import BillingForm from "./BillingForm";
import OrderSummary from "./OrderSummary";
import Section from "../basicComponents/Section";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CheckoutBody = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCart();

  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    townCity: "",
    phoneNumber: "",
    emailAddress: "",
    saveInfo: false,
  });

  const [paymentMethod, setPaymentMethod] = useState("bank");

  const subtotal = useMemo(() => {
    return items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [items]);

  const total = subtotal;

  const handlePlaceOrder = () => {
    const requiredFields = [
      "firstName",
      "streetAddress",
      "townCity",
      "phoneNumber",
      "emailAddress",
    ];

    const isFormValid = requiredFields.every(
      (field) => formData[field] && formData[field].trim() !== ""
    );

    if (!isFormValid) {
      alert("Please fill in all required fields before placing the order.");
      return;
    }

    if (items.length === 0) {
      alert("Your cart is empty. Please add items before placing an order.");
      return;
    }

    console.log("Placing order with data:", formData, "Payment:", paymentMethod, "Total:", total);
    alert(`Order placed! Total: $${total}. Payment method: ${paymentMethod}.`);

    clearCart();
    navigate("/");
  };

  const handleSaveInfoChange = (isChecked) => {
    setFormData((prev) => ({ ...prev, saveInfo: isChecked }));
  };

  return (
    <Section className="min-h-screen bg-gray-50 font-sans p-4 sm:p-6 lg:p-10">
      <div className="max-w-7xl mx-auto mb-8 text-sm md:text-md text-gray-600">
        <button onClick={() => navigate("/")} className="hover:text-red-800">
          Home
        </button>{" "}
        /{" "}
        <button onClick={() => navigate("/cart")} className="hover:text-red-800">
          Cart
        </button>{" "}
        / <span className="font-semibold text-gray-900">Checkout</span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        <BillingForm
          formData={formData}
          setFormData={setFormData}
          onSaveInfoChange={handleSaveInfoChange}
        />

        <OrderSummary
          cartItems={items}
          subtotal={subtotal}
          total={total}
          onPlaceOrder={handlePlaceOrder}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
      </div>
    </Section>
  );
};

export default CheckoutBody;
