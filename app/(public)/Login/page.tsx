"use client"
import { useRouter } from "next/navigation";
import { FC } from "react";

const Login: FC = () => {
    const router = useRouter();

    const Login = () => {
        router.push("/homepage");
    }

    const Register = () => {
        router.push("/Register");
    }

    return (
        <div className="min-h-screen bg-white text-gray-900 flex justify-center">
            <div className="max-w-screen-xl bg-white shadow sm:rounded-lg flex justify-center flex-1 lg:mt-12 md:mt-12 sm:mt-18 mt-24">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Login
                        </h1>
                        <div className="w-full flex-1 mt-8">
                            <div className="flex flex-col items-center">
                                <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                                >
                                    <div className="bg-white p-2 rounded-full">
                                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                                            <path
                                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                fill="#4285f4"
                                            />
                                            <path
                                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                fill="#34a853"
                                            />
                                            <path
                                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                fill="#fbbc04"
                                            />
                                            <path
                                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                fill="#ea4335"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-4">
                                        Login with Google
                                    </span>
                                </button>
                                <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
                                >
                                    <div className="bg-white p-2 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            version="1.1"
                                            className="w-4"
                                            viewBox="0 0 256 256"
                                            xmlSpace="preserve"
                                        >
                                            <defs />
                                            <g
                                                style={{
                                                    stroke: 'none',
                                                    strokeWidth: 0,
                                                    strokeDasharray: 'none',
                                                    strokeLinecap: 'butt',
                                                    strokeLinejoin: 'miter',
                                                    strokeMiterlimit: 10,
                                                    fill: 'none',
                                                    fillRule: 'nonzero',
                                                    opacity: 1,
                                                }}
                                                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                                            >
                                                <circle
                                                    cx="45"
                                                    cy="45"
                                                    r="45"
                                                    style={{
                                                        stroke: 'none',
                                                        strokeWidth: 1,
                                                        strokeDasharray: 'none',
                                                        strokeLinecap: 'butt',
                                                        strokeLinejoin: 'miter',
                                                        strokeMiterlimit: 10,
                                                        fill: 'rgb(60,90,153)',
                                                        fillRule: 'nonzero',
                                                        opacity: 1,
                                                    }}
                                                    transform="matrix(1 0 0 1 0 0)"
                                                />
                                                <path
                                                    d="M 49.645 74.998 V 47.631 h 9.186 l 1.375 -10.665 H 49.645 v -6.809 c 0 -3.088 0.857 -5.192 5.285 -5.192 l 5.648 -0.002 v -9.539 c -0.977 -0.13 -4.329 -0.42 -8.23 -0.42 c -8.143 0 -13.717 4.97 -13.717 14.098 v 7.865 h -9.209 v 10.665 h 9.209 v 27.367 H 49.645 z"
                                                    style={{
                                                        stroke: 'none',
                                                        strokeWidth: 1,
                                                        strokeDasharray: 'none',
                                                        strokeLinecap: 'butt',
                                                        strokeLinejoin: 'miter',
                                                        strokeMiterlimit: 10,
                                                        fill: 'rgb(255,255,255)',
                                                        fillRule: 'nonzero',
                                                        opacity: 1,
                                                    }}
                                                    transform="matrix(1 0 0 1 0 0)"
                                                    strokeLinecap="round"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <span className="ml-4">
                                        Login Facebook
                                    </span>
                                </button>
                            </div>
                            <div className="my-6 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Or Login with e-mail
                                </div>
                            </div>
                            <div className="mx-auto max-w-xs">
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="email"
                                    placeholder="Email"
                                />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password"
                                    placeholder="Password"
                                />
                                <button onClick={() => (Login())} className="mt-5 tracking-wide font-semibold bg-[#664481] text-gray-100 w-full py-4 rounded-lg hover:bg-opacity-80 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <span>
                                        Login
                                    </span>
                                </button>
                                <button onClick={() => (Register())}
                                    className="mt-5 tracking-wide font-semibold bg-[#664481] text-gray-100 w-full py-4 rounded-lg hover:bg-opacity-80 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <p>Not Registed?</p>
                                    <span className="ml-3">
                                        Register Now
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;