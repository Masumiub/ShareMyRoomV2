import React from 'react'
import FurnitureIcon from '../assets/FurnitureIcon.svg'
import BillIcon from '../assets/BillIcon.svg'
import FastMoveIcon from '../assets/FastMoveIcon.svg'
import MaintainanceIcon  from '../assets/MaintainenceIcon.svg'
import Image from 'next/image'


export default function WhyStayWithUs() {
    return (
        <div>
            <div className='w-full p-3 md:max-w-6xl mx-auto mt-30 mb-30'>
                <div className='text-center'>
                    <h2 className='text-4xl text-center font-semibold'>Why Stay With Us</h2>
                    <p className='text-gray-600 mt-6'>The stress-free way to rent — the way it should be.</p>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10'>

                    <div className='text-center hover:-translate-y-1.5 transition-all duration-300'>
                        <div className='flex justify-center mb-[-22px]'>
                            <Image src={FurnitureIcon} alt='icon'></Image>
                        </div>
                        <div className='bg-base-200 p-7 rounded-2xl'>
                            <h3 className='text-lg font-semibold'>Fully Furnished Homes</h3>
                            <p className='text-gray-500 mt-3 text-sm'>Move in with just your suitcase. No Hustle!</p>
                        </div>
                    </div>

                    <div className='text-center hover:-translate-y-1.5 transition-all duration-300'>
                        <div className='flex justify-center mb-[-27px]'>
                            <Image src={BillIcon} alt='icon'></Image>
                        </div>
                        <div className='bg-base-200 p-7 rounded-2xl'>
                            <h3 className='text-lg font-semibold'>All Bills Included</h3>
                            <p className='text-gray-500 mt-3 text-sm'>Rent covers everything — utilities, Wi-Fi, cleaning.</p>
                        </div>
                    </div>

                    <div className='text-center hover:-translate-y-1.5 transition-all duration-300'>
                        <div className='flex justify-center mb-[-27px]'>
                            <Image src={FastMoveIcon} alt='icon'></Image>
                        </div>
                        <div className='bg-base-200 p-7 rounded-2xl'>
                            <h3 className='text-lg font-semibold'>Fast Move-in</h3>
                            <p className='text-gray-500 mt-3 text-sm'> Book online, sign digitally, get your keys.</p>
                        </div>
                    </div>

                    <div className='text-center hover:-translate-y-1.5 transition-all duration-300'>
                        <div className='flex justify-center mb-[-27px]'>
                            <Image src={MaintainanceIcon} alt='icon'></Image>
                        </div>
                        <div className='bg-base-200 p-7 rounded-2xl'>
                            <h3 className='text-lg font-semibold'>Maintenance Handled</h3>
                            <p className='text-gray-500 mt-3 text-sm'>Report issues easily via your portal.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
