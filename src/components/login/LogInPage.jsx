import { useState } from "react"
import loginPage from '../../assets/login.jpg';
import Section from "../basicComponents/Section";

const LogInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // You can add authentication logic here
        console.log('Attempting to log in with:', { email, password });
        alert(`Logging in with ${email}`);
    };

    return (
        <Section>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 -tracking-tighter">
                    <div className="hidden md:block w-full md:w-1/2 lg:w-3/5">
                        <img 
                            src={loginPage}
                            alt="Promotional banner for login page" 
                            className="rounded-lg object-cover h-full w-full"
                        />
                    </div>

                    <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center">
                        <div className="w-full max-w-sm">
                            <h2 className="text-3xl md:text-4xl font-semibold mb-2 tracking-wide">Log in to <strong>Exclusive</strong></h2>
                            <p className="text-gray-600 mb-8">Enter your details below</p>
                            
                            <form onSubmit={handleLogin} className="space-y-8">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Email or Phone Number"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-red-500 transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-red-500 transition-colors"
                                        required
                                    />
                                </div>
                                
                                <div className="flex items-center justify-between pt-4">
                                    <button 
                                        type="submit"
                                        className="bg-[#DB4444] hover:bg-red-800 text-white font-medium py-3 px-12 rounded-md transition duration-300 shadow-md hover:shadow-lg"
                                    >
                                        Log In
                                    </button>
                                    <a href="#" className="text-[#DB4444] hover:underline">
                                        Forget Password?
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default LogInPage;