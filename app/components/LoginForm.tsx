import React from 'react'
import { FcGoogle } from "react-icons/fc";
import Logo from "../assets/Logo.svg"
import Image from 'next/image';
import Link from 'next/link';

export default function LoginForm() {
    return (
        <div>
            <div className='p-12 '>
                <div className='flex justify-center mb-4'>
                    <Image src={Logo} alt='logo'></Image>
                </div>
                <div className='text-center'>
                <h2 className='text-2xl font-semibold'>Log in to your account</h2>
                <p className='text-gray-500 mt-2 mb-6'>Welcome back! Please enter your details.</p>
                </div>


                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input w-full" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input w-full" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <Link href='/Dashboard' className="btn bg-[#007BC4] border-0 mt-4 text-white">Login</Link>
                </fieldset>

                <button className="btn  mt-4 w-full"><FcGoogle />Continue with Google</button>

                <div className='mt-4'>
                    <p className='text-center text-sm text-gray-500'>Don&apos;t have an account? <span className='text-blue-600'>Sign up</span></p>
                </div>
            </div>
        </div>
    )
}
