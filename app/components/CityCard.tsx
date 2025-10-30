import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface CardProps {
    image: string | StaticImageData;
    title: string;
    propertyCount: number;
}

const Card = ({ image, title, propertyCount }: CardProps) => {
    return (
        <div className="group relative h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
            {/* Image with hover scale */}
            <Image
                src={image}
                alt={title}
                width={650} 
                height={800}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Gradient overlay that darkens on hover */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent transition-all duration-300 group-hover:from-black/60 group-hover:to-transparent"></div>

            <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className='backdrop-blur-lg rounded-2xl border border-gray-500 p-8 transition-transform duration-300 group-hover:scale-105'>
                    <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    <p className="text-lg mb-2 opacity-90">{propertyCount} properties</p>
                    <button className="btn btn-ghost text-white font-semibold p-0 bg-none hover:px-5 hover:bg-black hover:text-white transition duration-200 shadow-none border-0 rounded-full flex items-center gap-1">
                        Check Now <ArrowUpRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;