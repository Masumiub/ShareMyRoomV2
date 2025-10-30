import React from 'react'
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
    return (
        <div>
            <div className='p-12 '>
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
                    <button className="btn bg-[#007BC4] border-0 mt-4 text-white">Login</button>
                </fieldset>

                <button className="btn  mt-4 w-full"><FcGoogle />Continue with Google</button>
            </div>
        </div>
    )
}
