import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../index'

export function Footer() {
    

    return (
        <section className="relative overflow-hidden md:h-[400px] -py-12  md:py-10 bg-blue-900 text-gray-100 border border-t-2 border-t-black w-full h-auto ">
    <div className="relative z-10 mx-auto max-w-7xl  mb-0">
        <div className=" flex flex-wrap">
            <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                <div className="hidden -ml-48  md:flex h-full flex-col justify-between">
                    <div className="mb-4 inline-flex items-center">
                        <Logo classname=' md:h-[60px] ml-32 md:w-[60px] h-12 w-12 border border-solid border-t-2 border-l-2 border-b-2 border-r-2  border-gray-200 ' />
                    </div>
                    <div>
                        <p className="text-sm -ml-48 md:mb-28 text-gray-400 ">
                            &copy; Copyright 2023. All Rights Reserved by DevUI.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                <div className="h-full">
                    <h3 className="tracking-px mb-9 uppercase text-m font-bold">
                        Company
                    </h3>
                    <ul className=''>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium  hover:text-blue-500"
                                to="/"
                            >
                                Features
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium hover:text-blue-500"
                                to="/"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium hover:text-blue-500"
                                to="/"
                            >
                                Affiliate Program
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-base font-medium hover:text-blue-500"
                                to="/"
                            >
                                Press Kit
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                <div className="h-full">
                    <h3 className="tracking-px mb-9  uppercase text-m font-bold">
                        Support
                    </h3>
                    <ul>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium hover:text-blue-500"
                                to="/"
                            >
                                Account
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium hover:text-blue-500"
                                to="/"
                            >
                                Help
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium hover:text-blue-500"
                                to="/"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-base font-medium hover:text-blue-500"
                                to="/"
                            >
                                Customer Support
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                <div className="h-full">
                    <h3 className="tracking-px mb-9  uppercase  text-m font-bold">
                        Legals
                    </h3>
                    <ul>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium hover:text-blue-500"
                                to="/"
                            >
                                Terms &amp; Conditions
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium hover:text-blue-500"
                                to="/"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-base font-medium hover:text-blue-500"
                                to="/"
                            >
                                Licensing
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-full'>
            <p className="text-sm lg:hidden  ml-2 mb-2 p-2 text-gray-400 ">
                            &copy; Copyright 2023. All Rights Reserved by DevUI.
                        </p>    
             </div>

        </div>
    </div>
</section>

    )
}