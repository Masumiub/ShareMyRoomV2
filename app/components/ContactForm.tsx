'use client';

import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        agreeToPrivacy: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="lg:col-span-1">
                    <h2 className="text-2xl font-semibold mb-6">Contact for enquiry</h2>

                    <div className='border border-gray-200 rounded-2xl p-6 shadow-lg'>

                        {/* Name Fields */}
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        First name *
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="First name"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>


                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Last name *
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Last name"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                            </div>
                        </div>

                        {/* Email */}
                        <div className='mb-3'>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="you@company.com"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div className='mb-3'>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone number
                            </label>
                            <div className="flex">
                                <select className="px-3 py-2 border border-gray-300 rounded-l-md border-r-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    <option>US</option>
                                    <option>CA</option>
                                    <option>UK</option>
                                    <option>AU</option>
                                </select>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="+1 (555) 000-0000"
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className='mb-3'>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Message *
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Leave us a message..."
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        {/* Privacy Policy Checkbox */}
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                name="agreeToPrivacy"
                                checked={formData.agreeToPrivacy}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                required
                            />
                            <label className="text-sm text-gray-700">
                                You agree to our friendly privacy policy.
                            </label>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 pt-4">

                            <button
                                type="submit"
                                className="px-6 py-3 bg-[#0164A3] text-white rounded-md hover:hover:bg-[#004772] transition-colors flex-1"
                            >
                                Send message
                            </button>
                        </div>

                    </div>

                </div>
            </form>
        </div>
    );
};

export default ContactForm;