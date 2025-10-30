import React from 'react'
import SearchIcon from '../assets/HomeSearch.png'
import MonitorIcon from '../assets/Monitor.png'
import TruckIcon from '../assets/Truck.png'
import Image from 'next/image'
import { Fade } from "react-awesome-reveal";

export default function HowITWorks() {
    return (
        <div>
            <div className='w-full p-3 md:max-w-6xl mx-auto mt-60 md:mt-30 mb-30'>
                <div>
                    <h2 className='text-4xl text-center font-semibold'>How ShareMyRoom Works</h2>

                    <div className='flex justify-center mx-auto mt-10 '>
                        {/* name of each tab group should be unique */}
                        <div className="tabs tabs-box">
                            <input type="radio" name="my_tabs_1" className="tab" aria-label="For Renters" defaultChecked style={{paddingLeft: 30,  paddingRight: 30, borderRadius: 10}}/>
                            <input type="radio" name="my_tabs_1" className="tab" aria-label="For Owners" style={{paddingLeft: 30,  paddingRight: 30, borderRadius: 10}}/>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-20 mx-auto mt-10'>

                    <Fade cascade>
                        <div className='text-center'>
                            <div className='flex justify-center mx-auto'>
                                <Image src={SearchIcon} alt='SearchIcon'></Image>
                            </div>
                            <div>
                                <h2 className='text-center text-xl font-semibold mt-5'>Find a room or bed that suits your style.</h2>
                            </div>
                        </div>

                        <div className='text-center'>
                            <div className='flex  justify-center mx-auto'>
                                <Image src={MonitorIcon} alt='SearchIcon'></Image>
                            </div>
                            <div>
                                <h2 className='text-center text-xl font-semibold mt-5'>Book online, sign, and pay deposit digitally.</h2>
                            </div>
                        </div>

                        <div className='text-center'>
                            <div className='flex justify-center mx-auto'>
                                <Image src={TruckIcon} alt='SearchIcon'></Image>
                            </div>
                            <div>
                                <h2 className='text-center text-xl font-semibold mt-5'>Move in — we &apos;ll handle everything else.</h2>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
