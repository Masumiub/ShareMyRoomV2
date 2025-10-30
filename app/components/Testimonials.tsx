import React from 'react'
import TestimonialImage from '../assets/Testimonials.png'
import Image from 'next/image'
import { Star } from 'lucide-react';


export default function Testimonials() {
    return (
        <div className='bg-base-200'>
            <div className='w-full p-3 md:max-w-6xl mx-auto mt-40 mb-40'>
                <div className=' pt-20 pb-20'>
                    <div className='flex flex-col md:flex-row items-center justify-between'>
                        <div className='w-full md:w-1/2'>

                            <div className='flex gap-2 mb-5'>
                                <Star size={20} className='text-yellow-500'/>
                                <Star size={20} className='text-yellow-500'/>
                                <Star size={20} className='text-yellow-500'/>
                                <Star size={20} className='text-yellow-500'/>
                                <Star size={20} className='text-yellow-500'/>
                            </div>

                            <h1 className='text-3xl md:text-5xl'>Moved in within two days. Everything was spotless!</h1>

                            <div className='flex flex-row mt-10 gap-3 items-center '>
                                <div>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className='font-semibold'>Lara Hewitt</p>
                                    <p className='text-gray-500 text-xs'>Student, LTS</p>
                                </div>
                            </div>

                        </div>

                        <div className='w-full md:w-1/2'>
                            <Image src={TestimonialImage} alt="TestimonialImage"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
