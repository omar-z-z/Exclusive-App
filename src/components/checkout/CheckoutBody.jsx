import { useState, useMemo, useEffect } from 'react';
import BillingForm from './BillingForm';
import OrderSummary from './OrderSummary';
import bestSellers from '../data/bestSellers';
import Section from '../basicComponents/Section';

const CheckoutBody = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const initialItems = bestSellers.map(({ id, title, price }) => ({
        id,
        name: title,
        price,
        quantity: 1,
        }));
        setCartItems(initialItems);
    }, []);

    const [formData, setFormData] = useState({
        firstName: '',
        companyName: '',
        streetAddress: '',
        apartment: '',
        townCity: '',
        phoneNumber: '',
        emailAddress: '',
        saveInfo: false,
    });
    
    const [paymentMethod, setPaymentMethod] = useState('bank'); 

    const subtotal = useMemo(() => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }, [cartItems]);
    
    const total = subtotal; 

    const handlePlaceOrder = () => {
        const requiredFields = ['firstName', 'streetAddress', 'townCity', 'phoneNumber', 'emailAddress'];
        const isFormValid = requiredFields.every(field => formData[field] && formData[field].trim() !== '');

        if (!isFormValid) {
            console.error("Please fill in all required fields.");
            alert("Please fill in all required fields before placing the order.");
            return;
        }

        console.log("Placing order with data:", formData, "Payment:", paymentMethod, "Total:", total);
        alert(`Order placed! Total: $${total}. Payment method: ${paymentMethod}. (Form data logged to console)`);
    };
    
    const handleSaveInfoChange = (isChecked) => {
        setFormData(prev => ({ ...prev, saveInfo: isChecked }));
    };


    return (
        <Section className="min-h-screen bg-gray-50 font-sans p-4 sm:p-6 lg:p-10">
            <div className="max-w-7xl mx-auto mb-8 text-sm md:text-md text-gray-600">
                <a href="#" className="hover:text-red-800">Home</a> / 
                <a href="#" className="hover:text-red-800">Cart</a> / 
                <span className="font-semibold text-gray-900">Checkout</span>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                <BillingForm 
                    formData={formData} 
                    setFormData={setFormData}
                    onSaveInfoChange={handleSaveInfoChange}
                />
                
                <OrderSummary
                    cartItems={cartItems}
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
