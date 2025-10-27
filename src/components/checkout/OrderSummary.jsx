import Button from "../basicComponents/Button";
import { BankIcon } from "../basicComponents/icons";
import Section from "../basicComponents/Section";

const OrderSummary = ({ cartItems, subtotal, total, onPlaceOrder, paymentMethod, setPaymentMethod }) => {
    
    const shippingFee = 0;

    const paymentOptions = [
        { id: 'bank', label: 'Bank', icon: <BankIcon className="w-5 h-5" />, details: 'Pay with a Bank Card/VISA.' },
        { id: 'cod', label: 'Cash on delivery', icon: null, details: 'Pay with cash upon delivery.' },
    ];

    return (
        <Section className="lg:col-span-1 p-4 sm:p-6 bg-white border border-gray-200 rounded-lg shadow-lg self-start">
            <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Your Order</h3>
                
                <div className="space-y-3 pb-3 border-b border-gray-100">
                    {
                     cartItems.map(item => (
                        <div key={item.id} className="flex justify-between text-sm text-gray-600">
                            <span className="truncate pr-2">
                                {item.title} <span className='font-normal'>(${item.price} x {item.quantity})</span>
                            </span>
                            <span className="font-medium text-gray-800">${item.price * item.quantity}</span>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium text-gray-800">${subtotal}</span>
                </div>

                <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-medium text-green-600">${shippingFee === 0 ? 'Free' : shippingFee}</span>
                </div>

                <div className="flex justify-between pt-2">
                    <span className="text-lg md:text-xl font-bold text-gray-800">Total:</span>
                    <span className="text-lg md:text-xl font-bold text-red-600">${total}</span>
                </div>
            </div>
            
            <div className="mt-6 space-y-3"> 
                {paymentOptions.map((option) => (
                    <div 
                        key={option.id} 
                        className="flex items-center space-x-3 cursor-pointer"
                        onClick={() => setPaymentMethod(option.id)}
                    >
                        <input
                            type="radio"
                            id={option.id}
                            name="paymentMethod"
                            checked={paymentMethod === option.id}
                            onChange={() => setPaymentMethod(option.id)}
                            className="h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
                        />
                        <label htmlFor={option.id} className="text-sm md:text-base font-medium text-gray-800 flex items-center gap-2">
                            {option.label}
                            {option.id === 'bank' && (
                                <div className="flex items-center space-x-2">
                                    <img src="https://placehold.co/40x16/000000/ffffff?text=VISA" alt="VISA" className="h-4" />
                                </div>
                            )}
                        </label>
                        {paymentMethod === option.id && (
                             <p className="text-xs text-gray-500 italic ml-6 -mt-1">{option.details}</p>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex items-start gap-3 w-full mt-6">
                <input
                    type="text"
                    placeholder="Coupon Code"
                    className="border border-gray-300 px-3 py-2 rounded-md w-3/4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <Button 
                    variant="primary" 
                    onClick={() => console.log("Applying coupon")}
                    className="py-2 text-sm whitespace-nowrap"
                >
                    Apply Coupon
                </Button>
            </div>

            <div className="mt-6">
                <Button 
                    variant="primary" 
                    onClick={onPlaceOrder}
                    className="uppercase tracking-wide"
                >
                    Place Order
                </Button>
            </div>
        </Section>
    );
};

export default OrderSummary;