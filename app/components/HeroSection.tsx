import Image from 'next/image'
import React from 'react'
import Family from '../assets/FamilyPicHeader.png'
import WomanWithLaptop from '../assets/WomanwithLaptop.png'
import SearchBar from './SearchBar'
import { Fade } from "react-awesome-reveal";


export default function HeroSection() {
    return (
        <div className='w-full md:max-w-6xl mx-auto mt-2'>

            <div className='bg-[#0164A3]  text-center pb-0 mb-0 rounded-4xl relative bg-linear-to-b from-[#0164A3] to-[#1096ea]'>
                <Fade cascade>
                <div className='w-full p-3 md:max-w-4xl mx-auto text-white'>
                    <h1 className='text-5xl md:text-6xl font-bold pt-20'>Belong Anywhere. Live Smarter.</h1>
                    <p className='text-lg mt-10'>Find affordable, fully-furnished rooms for co-living. Over 100,000 of people have shared all inclusive, safe, reliable rooms via ShareMyRoom.</p>
                </div>
                </Fade>


                <div className='absolute left-1/2 -translate-x-1/2 z-20 mt-15 w-full xl:w-5xl'>
                    <SearchBar />
                </div>

                <div className='flex flex-row items-center justify-between pb-0 mb-0 mt-[-20] z-10 overflow-hidden xl:overflow-visible'>
                    <Image src={Family} alt='family' className='mr-0 ml-0 xl:-ml-20 flex mx-auto'></Image>
                    <Image src={WomanWithLaptop} alt='WomanWithLaptop' className=' m-0 xl:mr-[-15px]'></Image>
                </div>

            </div>
        </div>
    )
}
