import { useState } from "react";
import Section from "../basicComponents/Section";
import login from "../../assets/login.jpg";

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        // You can add user creation logic here
        console.log('Attempting to sign up with:', { name, email, password });
    };
    const handleGoogleClick = (e) => {
        // Handle Google sign-up logic here
        e.preventDefault();
        alert('Google sign-up clicked');
    }

    return (
        <Section>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 -tracking-tighter">
                    <div className="hidden md:block w-full md:w-1/2 lg:w-3/5">
                        <img 
                            src={login} 
                            alt="Promotional banner for sign up page" 
                            className="rounded-lg object-cover w-full h-64 md:h-full"
                        />
                    </div>

                    <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center">
                        <div className="w-full max-w-sm">
                            <h2 className="text-3xl md:text-4xl font-semibold mb-2 tracking-wide">Create an account</h2>
                            <p className="text-gray-600 mb-8">Enter your details below</p>
                            
                            <form onSubmit={handleSignUp} className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-red-500 transition-colors"
                                        required
                                    />
                                </div>
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
                                
                                <div className="pt-4 flex flex-col space-y-4">
                                    <button 
                                        type="submit"
                                        className="bg-[#DB4444] hover:bg-red-800 text-white font-medium py-3 px-12 rounded-md transition duration-300 shadow-md hover:shadow-lg w-full"
                                    >
                                        Create Account
                                    </button>
                                    <button 
                                        type="button"
                                        className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-12 rounded-md transition duration-300 shadow-md hover:shadow-lg border border-gray-300 flex items-center justify-center w-full"
                                        onClick={handleGoogleClick}
                                    >
                                        <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C42.022,35.462,44,30.038,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
                                        Sign up with Google
                                    </button>
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-600">
                                        Already have account? 
                                        <a href="#" className="text-gray-800 font-medium hover:underline ml-1">Log in</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default SignUpPage;