"use client"
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ChevronLeft, ChevronRight, X, Share, Heart, Grid3X3 } from 'lucide-react';

interface PhotoGalleryProps {
    images: (string | StaticImageData)[];// Array of image URLs or StaticImageData
    title: string;
    reviews: number;
    reviewCount: number;
    superhost: boolean;
    location: string;
}

const PhotoGallery = ({
    images,
    title,
    reviews,
    reviewCount,
    superhost,
    location
}: PhotoGalleryProps) => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        setSelectedImage(index);
        setCurrentIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Sample images if none provided
    const defaultImages = [
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
    ];

    const displayImages = images.length > 0 ? images : defaultImages;

    return (
        <div className="w-full">
            {/* Main Gallery Grid */}


            {/* Header Info - Similar to Airbnb */}
            <div className="mt-6 mb-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">{title}</h1>
                        <div className="flex items-center gap-1 mt-2 text-gray-600">
                            <span className="flex items-center gap-1">
                                <span className="font-medium">{reviews}</span>
                                <span>·</span>
                                <span>{reviewCount} reviews</span>
                                {superhost && (
                                    <>
                                        <span>·</span>
                                        <span className="font-semibold text-rose-600">Superhost</span>
                                    </>
                                )}
                                <span>·</span>
                                <span>{location}</span>
                            </span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 mt-4 lg:mt-0">
                        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                            <Share size={18} />
                            <span className="hidden sm:inline">Share</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                            <Heart size={18} />
                            <span className="hidden sm:inline">Save</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-2 h-96 rounded-2xl overflow-hidden">
                {/* Main large image */}
                <div
                    className="col-span-2 row-span-2 relative cursor-pointer group"
                    onClick={() => openLightbox(0)}
                >
                    <Image
                        src={displayImages[0]}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Smaller images */}
                {displayImages.slice(1, 5).map((image, index) => (
                    <div
                        key={index + 1}
                        className="relative cursor-pointer group"
                        onClick={() => openLightbox(index + 1)}
                    >
                        <Image
                            src={image}
                            alt={`${title} ${index + 2}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                        {/* Show all photos button on last image */}
                        {index === 3 && displayImages.length > 5 && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors">
                                    <Grid3X3 size={16} />
                                    Show all photos
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
                    {/* Close button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors z-10"
                    >
                        <X size={24} />
                    </button>

                    {/* Navigation buttons */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 p-3 rounded-full transition-colors z-10"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 p-3 rounded-full transition-colors z-10"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Image counter */}
                    <div className="absolute top-4 left-4 text-white text-lg font-medium">
                        {currentIndex + 1} / {displayImages.length}
                    </div>

                    {/* Main image */}
                    <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-auto">
                        <Image
                            src={displayImages[currentIndex]}
                            alt={`${title} ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}


        </div>
    );
};

export default PhotoGallery;