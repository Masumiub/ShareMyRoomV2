
"use client"
import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';

const Reviews = () => {
    const [showAllReviews, setShowAllReviews] = useState(false);
    const [expandedReviews, setExpandedReviews] = useState<number[]>([]);

    const reviewCategories = [
        { name: 'Cleanliness', rating: 5.0 },
        { name: 'Communication', rating: 5.0 },
        { name: 'Check-in', rating: 5.0 },
        { name: 'Accuracy', rating: 5.0 },
        { name: 'Location', rating: 5.0 },
        { name: 'Value', rating: 5.0 },
    ];

    const reviews = [
        {
            id: 1,
            author: 'Jose',
            date: 'December 2021',
            content: 'Host was very attentive.',
            isShort: true
        },
        {
            id: 2,
            author: 'Shayna',
            date: 'December 2021',
            content: 'Wonderful neighborhood, easy access to restaurants and the subway, cozy studio apartment with a super comfortable bed. Great host, super helpful and responsive. Cool mupply bed...',
            isShort: false
        },
        {
            id: 3,
            author: 'Vladko',
            date: 'November 2020',
            content: 'This is amazing place. It has everything one needs for a monthly business stay. Very clean and organized place. Amazing hospitality affordable price.',
            isShort: false
        },
        {
            id: 4,
            author: 'Luke',
            date: 'December 2021',
            content: 'Nice place to stay!',
            isShort: true
        },
        {
            id: 5,
            author: 'Josh',
            date: 'November 2021',
            content: 'Well designed and fun space, neighborhood has lots of energy and amenities.',
            isShort: false
        },
        {
            id: 6,
            author: 'Jennifer',
            date: 'January 2022',
            content: 'A centric place, near of a sub station and a supermarket with everything you need.',
            isShort: false
        },
    ];

    const toggleReviewExpansion = (reviewId: number) => {
        setExpandedReviews(prev =>
            prev.includes(reviewId)
                ? prev.filter(id => id !== reviewId)
                : [...prev, reviewId]
        );
    };

    const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);

    const shouldShowMoreButton = reviews.length > 3;

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-8 border-b border-gray-200">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-2">
                        <Star className="fill-black text-black" size={20} />
                        <h1 className="text-2xl font-semibold">5.0</h1>
                        <span className="text-gray-600">·</span>
                        <span className="text-gray-600">7 reviews</span>
                    </div>
                </div>

                {/* Review Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
                    {reviewCategories.map((category, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <span className="text-gray-700 text-sm">{category.name}</span>
                            <div className="flex items-center gap-1">
                                {/* <Star className="fill-black text-black" size={16} /> */}
                            <progress className="progress w-50" value="100" max="100"></progress>
                                <span className="font-medium">{category.rating}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className=' pt-10'>
                {/* Reviews Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                    {/* Left Column */}
                    <div className="space-y-8">
                        {/* Jose */}
                        <div className="border-b border-gray-200 pb-6">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                    <span className="text-sm font-medium text-gray-600">J</span>
                                </div>
                                <div>
                                    <div className="font-semibold">Jose</div>
                                    <div className="text-gray-500 text-sm">December 2021</div>
                                </div>
                            </div>
                            <p className="text-gray-700">Host was very attentive.</p>
                        </div>

                        {/* Shayna */}
                        <div className="border-b border-gray-200 pb-6">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                    <span className="text-sm font-medium text-gray-600">S</span>
                                </div>
                                <div>
                                    <div className="font-semibold">Shayna</div>
                                    <div className="text-gray-500 text-sm">December 2021</div>
                                </div>
                            </div>
                            <p className="text-gray-700">
                                Wonderful neighborhood, easy access to restaurants and the subway, cozy studio apartment with a super comfortable bed. Great host, super helpful and responsive. Cool mupply bed...
                            </p>
                            <button className="text-gray-900 font-semibold underline mt-2 flex items-center gap-1">
                                Show more
                                <ChevronDown size={16} />
                            </button>
                        </div>

                        {/* Vladko */}
                        <div className="border-b border-gray-200 pb-6">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                    <span className="text-sm font-medium text-gray-600">V</span>
                                </div>
                                <div>
                                    <div className="font-semibold">Vladko</div>
                                    <div className="text-gray-500 text-sm">November 2020</div>
                                </div>
                            </div>
                            <p className="text-gray-700">
                                This is amazing place. It has everything one needs for a monthly business stay. Very clean and organized place. Amazing hospitality affordable price.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* Luke */}
                        <div className="border-b border-gray-200 pb-6">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                    <span className="text-sm font-medium text-gray-600">L</span>
                                </div>
                                <div>
                                    <div className="font-semibold">Luke</div>
                                    <div className="text-gray-500 text-sm">December 2021</div>
                                </div>
                            </div>
                            <p className="text-gray-700">Nice place to stay!</p>
                        </div>

                        {/* Josh */}
                        <div className="border-b border-gray-200 pb-6">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                    <span className="text-sm font-medium text-gray-600">J</span>
                                </div>
                                <div>
                                    <div className="font-semibold">Josh</div>
                                    <div className="text-gray-500 text-sm">November 2021</div>
                                </div>
                            </div>
                            <p className="text-gray-700">
                                Well designed and fun space, neighborhood has lots of energy and amenities.
                            </p>
                        </div>

                        {/* Jennifer */}
                        <div className="border-b border-gray-200 pb-6">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                    <span className="text-sm font-medium text-gray-600">J</span>
                                </div>
                                <div>
                                    <div className="font-semibold">Jennifer</div>
                                    <div className="text-gray-500 text-sm">January 2022</div>
                                </div>
                            </div>
                            <p className="text-gray-700">
                                A centric place, near of a sub station and a supermarket with everything you need.
                            </p>
                        </div>
                    </div>
                </div>
                </div>


                {/* Show More Button */}
                {shouldShowMoreButton && (
                    <div className="flex mt-8">
                        <button
                            onClick={() => setShowAllReviews(!showAllReviews)}
                            className="btn btn-sm"
                        >
                            {showAllReviews ? 'Show less' : 'Show more'}
                            {showAllReviews ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                    </div>
                )}
            </div>




        </>
    );
};

export default Reviews;