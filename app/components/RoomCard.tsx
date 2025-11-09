import React from 'react';
import { Star, Wifi, Utensils, Car } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';


interface RoomCardProps {
    roomType: string;
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

const RoomCard = ({
    roomType,
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
}: RoomCardProps) => {

    const getFeatureIcon = (feature: string) => {
        switch (feature.toLowerCase()) {
            case 'wifi':
                return <Wifi size={16} />;
            case 'kitchen':
                return <Utensils size={16} />;
            case 'free parking':
                return <Car size={16} />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            {/* Image Section */}
            <div className="relative h-64 bg-gray-200">
                {/* Room Type Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 z-10">
                    {roomType}
                </div>
                {/* You can replace this with an actual Image component */}
                
                    <Image
                        src={image}
                        alt={roomTitle}
                        fill
                        className="object-cover"
                    />
                
            </div>

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
                            {getFeatureIcon(feature)}
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
                    <Link href='/RoomDetails' className="btn btn-sm bg-[#007BC4] hover:bg-[#01588b] border-0 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;