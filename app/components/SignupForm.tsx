"use client";
import { useState } from "react";
import { authClient } from "../lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from '../assets/Logo.svg'
import { FcGoogle } from "react-icons/fc";
export default function SignUpForm() {

    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    // const handleSignUp = async () => {
    //     const result = await authClient.signUp.email({
    //         email,
    //         password,
    //     });
    //     console.log(result);
    // };


    const handleSignUp = async () => {
        try {
            setIsLoading(true);
            setError("");

            const result = await authClient.signUp.email({
                name,
                email,
                password,
                callbackURL: "/dashboard",
            });

            console.log("Signed up:", result);
            //router.push("/dashboard");
        } catch (err: unknown) {
            if (err instanceof Error) setError(err.message);
            else if (typeof err === "string") setError(err);
            else setError("An unknown error occurred.");
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="p-8 max-w-md mx-auto">
            <div className='flex justify-center mb-4'>
                <Image src={Logo} alt='logo'></Image>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-center">Create your account</h2>

            <fieldset className="fieldset flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="input w-full"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="input w-full"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="input w-full"
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                    className="btn bg-[#007BC4] border-0 text-white mt-1 w-full"
                    onClick={handleSignUp}
                    disabled={isLoading}
                >
                    {isLoading ? "Signing up..." : "Sign Up"}
                </button>

                  
            </fieldset>
            <button className="btn  mt-4 w-full"><FcGoogle />Continue with Google</button>

            <p className="text-center text-sm text-gray-500 mt-4">
                Already have an account? <span className="text-blue-600 cursor-pointer">Log in</span>
            </p>
        </div>
    );
}
