"use client"

import React, { useState } from 'react';

const ProfileSettings = () => {
    const [formData, setFormData] = useState({
        username: '',
        alternativeEmail: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className=" mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">Profile</h1>
                <p className="text-gray-600">Update your photo and personal details here.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Username Section */}
                <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                        Username *
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                    />
                </div>

                {/* Photo Section */}
                <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                        Your photo *
                    </label>
                    <p className="text-gray-600 text-sm mb-4">
                        This will be displayed on your profile.
                    </p>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                            <p className="text-xs text-gray-400">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-200" />

                {/* Alternative Email Section */}
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Alternative contact email</h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Enter an alternative email if you&apos;d like to be contacted via a different email.
                    </p>
                    <input
                        type="email"
                        name="alternativeEmail"
                        value={formData.alternativeEmail}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <hr className="border-gray-200" />

                {/* Password Section */}
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Password</h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Please enter your current password to change your password.
                    </p>

                    {/* Current Password */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Current password *
                        </label>
                        <input
                            type="password"
                            name="currentPassword"
                            value={formData.currentPassword}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* New Password */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            New password *
                        </label>
                        <input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                        <p className="text-gray-500 text-xs mt-1">
                            You may have been asked to make sure that the user is not able to know what it means.
                        </p>
                    </div>

                    {/* Confirm New Password */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Confirm new password *
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                        <p className="text-gray-500 text-xs mt-1">
                            You may have been asked to make sure that the user is not able to know what it means.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <button
                            type="button"
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#007BC4] hover:bg-[#01588b] text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProfileSettings;