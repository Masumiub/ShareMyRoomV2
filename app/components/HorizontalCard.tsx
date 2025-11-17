import React from 'react'
import { Star, Wifi, Utensils, Car } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface RoomCardProps {
    roomTitle: string;
    image: string | StaticImageData;
    guestNumber: number;
    homeType: string;
    bedsAmount: number;
    bathsAmount: number;
    features: string[];
    rating: number;
    reviews: number;
    pricePerNight: number;
}

export default function HorizontalCard({
    roomTitle,
    image,
    guestNumber,
    homeType,
    bedsAmount,
    bathsAmount,
    features,
    rating,
    reviews,
    pricePerNight
}: RoomCardProps) {
    return (
        <div className='border-t border-gray-300 py-10'>
            <div className='flex flex-col lg:flex-row gap-4 items-center justify-between'>
                <div className='w-full lg:w-1/2 flex justify-center'>
                    <Image
                        src={image}
                        alt={roomTitle}
                        className="object-cover w-full rounded-2xl"
                    />
                </div>
                <div className='w-full lg:w-1/2'>
                    {/* Content Section */}
                    <div className="p-6">
                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{roomTitle}</h3>

                        {/* Guest and Property Details */}
                        <div className="flex items-center text-gray-600 mb-3">
                            <span className="text-sm">
                                {guestNumber} guests • {homeType} • {bedsAmount} beds • {bathsAmount} bath
                            </span>
                        </div>

                        {/* Features */}
                        <div className="flex items-center gap-4 mb-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-1 text-gray-600">

                                    <span className="text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Rating and Reviews */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center gap-1">
                                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                                <span className="font-semibold text-gray-900">{rating}</span>
                            </div>
                            <span className="text-gray-600">({reviews} reviews)</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-2xl font-bold text-gray-900">${pricePerNight}</span>
                                <span className="text-gray-600 text-sm">/night</span>
                            </div>
                            <Link href='/room' className="btn btn-sm bg-[#007BC4] hover:bg-[#01588b] border-0 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
