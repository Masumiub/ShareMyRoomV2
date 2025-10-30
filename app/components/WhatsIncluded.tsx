import React from 'react'
import {
    Check,
    X,
} from 'lucide-react';

export default function WhatsIncluded() {


    const features = [
        {
            name: 'Reporting and analytics',
            
            shareMyRoom: true,
            others: false
        },
        {
            name: 'All Bills Included',
            
            shareMyRoom: true,
            others: true
        },
        {
            name: 'Book By Bed',
            
            shareMyRoom: true,
            others: false
        },
        {
            name: 'Fully Managed',
            
            shareMyRoom: true,
            others: false
        },
        {
            name: 'Flexible Lease',
            
            shareMyRoom: true,
            others: false
        },
        {
            name: 'Maintenance Support',
            
            shareMyRoom: true,
            others: true
        },
        {
            name: 'Tenant Portal',
            
            shareMyRoom: true,
            others: false
        },
    ];


    return (
        <div className='mb-30 mt-30 w-full md:max-w-6xl mx-auto'>
            <div className='text-center'>
                <h2 className='text-4xl text-center font-semibold'>What&apos;s Included</h2>
                <p className='text-gray-600 mt-6'>We don&apos;t just list rooms. We manage your living experience.</p>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden mt-30">
                {/* Table Header */}
                <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
                    <div className="p-6 font-semibold text-gray-700">Features</div>
                    <div className="p-6 font-semibold text-gray-700 border-l-2 border-r-2 border-t-2 rounded-tl-2xl rounded-tr-2xl border-blue-500 bg-blue-50 text-center">
                        ShareMyRoom
                    </div>
                    <div className="p-6 font-semibold text-gray-700 border-l border-gray-200 text-center">
                        Others in market
                    </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-gray-200">
                    {features.map((feature, index) => (
                        <div
                            key={feature.name}
                            className={`grid grid-cols-3 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                } hover:bg-gray-100`}
                        >
                            {/* Feature Name */}
                            <div className="p-6 flex items-center gap-3 text-gray-800">
                            
                                <span className="font-medium">{feature.name}</span>
                            </div>

                            {/* ShareMyRoom Column */}
                            <div className="p-6 flex items-center justify-center border-l-2 border-r-2  border-blue-500 bg-blue-50/30">
                                {feature.shareMyRoom ? (
                                    <div className="flex items-center gap-2 text-green-600">
                                        <Check size={24} className="bg-green-100 p-1 rounded-full" />
                                        
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2 text-red-600">
                                        <X size={24} className="bg-red-100 p-1 rounded-full" />
                                        
                                    </div>
                                )}
                            </div>

                            {/* Others Column */}
                            <div className="p-6 flex items-center justify-center border-l border-gray-200">
                                {feature.others ? (
                                    <div className="flex items-center gap-2 text-green-600">
                                        <Check size={24} className="bg-green-100 p-1 rounded-full" />
                                        
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2 text-gray-600">
                                        {/* <X size={24} className="bg-red-100 p-1 rounded-full" /> */}
                                        <p>-</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Table Footer - CTA Buttons */}
                <div className="grid grid-cols-3 bg-gray-50 border-t border-gray-200">
                    <div className="p-6"></div>
                    <div className="p-6 border-l-2 border-r-2 border-b-2 border-blue-500 rounded-bl-2xl rounded-br-2xl bg-blue-50">
                        <button className="text-xs md:text-sm w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                            Get started
                            
                        </button>
                    </div>
                    <div className="p-6 border-l border-gray-200">
                        <button className="text-xs md:text-sm w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                            Get started
                           
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
