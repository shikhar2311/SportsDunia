'use client'
import { useState } from 'react';
import Link from 'next/link'

const signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log('Form Data:', formData);
    };

    const handleGoogleAuth = () => {
        // Logic for Google authentication
        console.log('Google Auth Clicked');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form 
                onSubmit={handleSubmit} 
                className="bg-white p-8 rounded-lg shadow-md w-96"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-black">Sign Up</h2>
                
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-black py-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Submit
                </button>
                
                <button 
                    type="button" 
                    onClick={handleGoogleAuth} 
                    className="w-full mt-4 bg-red-600 text-black py-2 rounded-md hover:bg-red-700 transition duration-200"
                >
                    Sign in with Google
                </button>
            <h6 className=' text-black text-center my-4'>Already had an Account? <Link href='/auth/login' className=' text-blue-500 font-bold'>Log in</Link></h6>
            </form>
        </div>
    );
};

export default signup;
