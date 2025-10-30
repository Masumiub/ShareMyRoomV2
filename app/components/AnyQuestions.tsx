import React from 'react'
import Avatars from '../assets/Avatar group.png'
import Image from 'next/image'


export default function AnyQuestions() {
  return (
    <div className='mt-20 mb-20 w-full p-3 md:max-w-6xl mx-auto rounded-4xl bg-base-200 pt-20 pb-20'>
        <div className='text-center'>
            <div className='flex justify-center mx-auto mb-4'>
                <Image src={Avatars} alt='avatar'></Image>
            </div>

            <div className='p-3'>
                <h4 className='text-xl font-semibold'>Still have questions?</h4>

                <p className='text-gray-600 mb-6'>Get updates on new rooms, move-in deals, and city highlights.</p>

                <a href="#" className='btn bg-[#007BC4] text-white border-0 rounded-xl'>Get in Touch</a>
            </div>
        </div>
    </div>
  )
}
