'use client';
import React from 'react'
import Slider from 'react-slick';
import CityCard from './CityCard'
import SydneyImage from '../assets/SydneyCBC.png';
import MelbourneImage from '../assets/MelbourneCentral.png';
import ParmattaImage from '../assets/Parramatta.png';
import { Fade } from "react-awesome-reveal";
import './SliderStyle.css'

const MostPopularCities = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const cityData = [
        {
            image: SydneyImage,
            title: "Sydney CBD",
            propertyCount: 42
        },
        {
            image: MelbourneImage,
            title: "Melbourne",
            propertyCount: 35
        },
        {
            image: ParmattaImage,
            title: "Brisbane",
            propertyCount: 28
        },
        {
            image: SydneyImage,
            title: "SydneyLands",
            propertyCount: 48
        },
        {
            image: MelbourneImage,
            title: "Melbourne",
            propertyCount: 35
        },
    ];

    return (
        <div className="w-full mb-20">
            <div className='mt-20  w-full p-3 md:max-w-6xl mx-auto'>

                <div className='flex flex-col md:flex-row items-start justify-between p-3 gap-6'>
                    <div>
                        <h2 className='text-4xl font-semibold'>Most Popular Cities</h2>
                        <p className='mt-4 text-gray-600'>Explore the most in-demand suburbs right now</p>
                    </div>
                    <div>
                        <button className='btn btn-sm' >Explore All</button>
                    </div>
                </div>

                <div className="overflow-hidden lg:overflow-visible mt-10">
                    <Slider {...settings}>
                        {cityData.map((city, index) => (
                            <div key={index} className="px-3">
                                <CityCard
                                    image={city.image}
                                    title={city.title}
                                    propertyCount={city.propertyCount}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* <div className='max-w-6xl mx-auto p-3'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
                    <Fade cascade>
                        <CityCard image={SydneyImage}
                            title="Sydney CBD"
                            propertyCount={42}></CityCard>
                        <CityCard image={MelbourneImage}
                            title="Melbourne"
                            propertyCount={35}></CityCard>
                        <CityCard image={ParmattaImage}
                            title="Brisbane"
                            propertyCount={28}></CityCard>
                    </Fade>
                </div>
            </div> */}


            {/* <div className="w-full overflow-hidden p-3 mt-10">
                <div className="relative left-0 lg:left-[calc(50%-min(50%,theme(maxWidth.7xl)/2))] lg:w-[calc(100%+calc(100vw-theme(maxWidth.7xl))/2)] w-full">
                    <Slider {...settings}>
                        {cityData.map((city, index) => (
                            <div key={index} className="p-3 md:pr-10">
                                <CityCard
                                    image={city.image}
                                    title={city.title}
                                    propertyCount={city.propertyCount}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div> */}


        </div>
    )
}


export default MostPopularCities;