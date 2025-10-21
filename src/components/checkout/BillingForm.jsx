import Section from "../basicComponents/Section";

const BillingForm = ({ formData, setFormData, onSaveInfoChange }) => {
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        onSaveInfoChange(e.target.checked);
    }
    
    const inputFields = [
        { name: "firstName", placeholder: "First Name *", required: true },
        { name: "companyName", placeholder: "Company Name", required: false },
        { name: "streetAddress", placeholder: "Street Address *", required: true },
        { name: "apartment", placeholder: "Apartment, floor, etc. (optional)", required: false },
        { name: "townCity", placeholder: "Town/City *", required: true },
        { name: "phoneNumber", placeholder: "Phone Number *", required: true },
        { name: "emailAddress", placeholder: "Email Address *", required: true },
    ];

    return (
        <Section className="lg:col-span-2">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">Billing Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
                {inputFields.map((field) => (
                    <div key={field.name} className={field.name === 'streetAddress' ? 'md:col-span-2' : ''}>
                        <input
                            type={field.name.includes('email') ? 'email' : field.name.includes('phone') ? 'tel' : 'text'}
                            name={field.name}
                            placeholder={field.placeholder}
                            required={field.required}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                            className="w-full border-b border-gray-300 focus:border-red-600 focus:outline-none py-2 px-1 text-sm text-gray-700 placeholder-gray-500"
                        />
                    </div>
                ))}
            </div>
            
            <div className="flex items-center mt-6">
                <input
                    id="saveInfo"
                    type="checkbox"
                    checked={formData.saveInfo}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <label htmlFor="saveInfo" className="ml-2 block text-sm font-medium text-gray-700">
                    Save this information for faster check-out next time
                </label>
            </div>
        </Section>
    );
};

export default BillingForm;